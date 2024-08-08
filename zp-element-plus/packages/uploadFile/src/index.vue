<template>
    <el-upload
        name="uploadFile"
        :headers="{ [headersToken]: Cookies.get('token') }"
        :file-list="fileList"
        :show-file-list="!isDragType"
        :disabled="isDragUploadedDisabled"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :class="[{ 'drag-uploaded': isDragUploadedDisabled }, 'uploadFileContainer']"
    >
        <slot>
            <!-- 拖拽上传 -->
            <template v-if="isDragType">
                <div class="drag-upload" v-if="fileList.length === 0">
                    <el-icon class="el-icon--upload" size="52"><upload-filled /></el-icon>
                    <div class="el-upload__text">点击或将文件拖拽到这里上传</div>
                    <div class="el-upload__tip" v-if="attrs?.accept">
                        支持扩展名：{{ attrs?.accept }}
                    </div>
                </div>
                <div
                    class="drag-file flex-col-c"
                    v-for="(item, index) in fileList"
                    :key="index"
                    v-else
                >
                    <p class="drag-file-main flex-c" @click="handlePreview(item)">
                        <el-icon class="cup"><Document /></el-icon>
                        <!--<Icon class="cup" type="md-document" size="52" color="red" />-->
                        <i class="drag-file-name e-1 cup">{{ item.name }}</i>
                    </p>
                    <el-icon class="cup" @click.stop="removeDragFileItem(index)">
                        <Delete />
                    </el-icon>
                </div>
            </template>
            <!-- 常规上传 -->
            <el-button v-else :icon="Plus" :disabled="fileList.length >= attrs?.limit">
                上传文件
            </el-button>
        </slot>
        <template #tip>
            <slot name="tip">
                <div class="el-upload__tip" v-if="needDownload">单击文件名可下载文件</div>
            </slot>
        </template>
        <template #file>
            <slot name="file"> </slot>
        </template>
    </el-upload>
</template>

<script setup lang="ts">
import { ref, computed, watch, useAttrs } from 'vue';
import { ElMessage, ElNotification, ElLoading } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import Cookies from 'js-cookie';
import { downloadFile } from '../../utils/util.tool';
import type { UploadFile, UploadFiles } from 'element-plus';

const attrs: { [key: string]: any } = useAttrs();

const props = defineProps({
    // 默认的文件列表
    fileList: {
        type: Array,
        default: [],
    },
    // 设置上传的请求头部的token字段名
    headersToken: {
        type: String,
        default: 'Authorization',
    },
    // loading动画的容器
    loadingContainer: {
        type: String,
        default: '.uploadFileContainer',
    },
    // 是否需要下载
    needDownload: {
        type: Boolean,
        default: false,
    },
    // 通用上传文件大小限制 maxSize 和 maxSizeList 二选一
    maxSize: {
        type: Number,
        default: null,
    },
    // 根据文件类型分别设置上传文件大小限制
    // types: image=图片 video=视频 audio=音频 application=wps/pdf text=txt other=其他文件类型
    maxSizeList: {
        type: Array,
        default: () => [
            // { types: ['image'], maxSize: 5, errTip: '图片文件大小不超过5M' },
            // { types: ['video', 'audio'], maxSize: 200, errTip: '视频音频文件大小不超过200M' },
            // { types: ['other'], maxSize: 10, errTip: '文件大小不能超过10M' },
        ],
    },
});
const emit = defineEmits(['onUploadSuccess', 'onRemoveSuccess', 'onClickFileName']);

const fileList = ref<any[]>([]); // 上传的文件列表
const uploadLoad = ref(null); // 上传loading对象
// 是否拖拽
const isDragType = computed(() => {
    // 解决drag属性简写问题
    return attrs?.drag || attrs.drag === '';
});
// 是否拖拽上传成功
const isDragUploadedDisabled = computed(() => {
    return isDragType.value && fileList.value.length > 0;
});

// 上传前
const beforeUpload = (rawFile) => {
    if (!checkAccept(rawFile)) return false;
    if (!checkSize(rawFile)) return false;
    if (!uploadLoad.value) {
        uploadLoad.value = ElLoading.service({
            target: document.querySelector(props.loadingContainer),
            text: '上传中...',
        });
    }
};
// 校验允许上传文件后缀名
const checkAccept = (rawFile) => {
    const accept = attrs?.accept;
    if (!accept) return true;
    const suffixName = rawFile.name.split('.').pop();
    if (!accept.includes(suffixName)) {
        ElMessage({ plain: true, message: '文件类型不正确', type: 'error' });
        return false;
    }
    return true;
};
// 校验文件大小
const checkSize = (rawFile) => {
    const { maxSize, maxSizeList } = props;
    const fileSize = rawFile.size / 1024 / 1024; // 文件大小
    const fileType = rawFile.type.split('/')[0]; // 文件类型
    // 通用上传文件大小限制
    if (maxSize && fileSize > maxSize) {
        ElMessage({ plain: true, message: `文件大小不能超过${maxSize}M`, type: 'error' });
        return false;
    }
    // 根据文件类型分别设置上传文件大小限制
    let sizeError = false;
    for (let i = 0; i < maxSizeList.length; i++) {
        if (
            (maxSizeList[i].types.includes(fileType) || maxSizeList[i].types.includes('other')) &&
            fileSize > maxSizeList[i].maxSize
        ) {
            sizeError = true;
            ElMessage({ plain: true, message: maxSizeList[i].errTip, type: 'error' });
            break;
        }
    }
    return !sizeError;
};
// 上传成功
const handleSuccess = (response, uploadFile, uploadFiles) => {
    if (response.code !== 200) {
        uploadFile.status = 'fail';
        uploadFile.url = '';
        ElNotification({
            type: 'error',
            title: '提示',
            message: response.message,
            duration: 3000,
        });
        // 导入失败下载错误链接文件
        response.data && downloadFile(response.data);
    }
    if (response.code === 200 && typeof response.data === 'string') {
        uploadFile.url = response.data;
    }
    fileList.value.push(uploadFile);
    if (fileList.value.length === uploadFiles.length) {
        fileList.value = uploadFiles.filter((k) => k.status === 'success');
        uploadLoad.value.close();
        uploadLoad.value = null;
        console.log('接口全部请求完成', fileList.value);
        fileList.value.length && emit('onUploadSuccess', fileList.value);
    }
};

// 移除
const handleRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    fileList.value = [...uploadFiles];
    emit('onRemoveSuccess', fileList.value);
};

// 超出限制
const handleExceed = (files, uploadFiles) => {
    console.log('超出限制', files, uploadFiles);
    ElMessage({ plain: true, message: '超出上传数量限制', type: 'error' });
};

// 单击名称
const handlePreview = (uploadFile: UploadFile) => {
    if (props.needDownload) {
        downloadFile(uploadFile.url, uploadFile.name);
        return;
    }
    emit('onClickFileName', uploadFile);
};

// 删除已上传的拖拽文件
const removeDragFileItem = (index: number) => {
    fileList.value.splice(index, 1);
};

defineExpose({
    fileList,
});
watch(
    () => props.fileList,
    (newVal) => {
        fileList.value = newVal;
    },
    { immediate: true },
);
</script>

<style lang="less" scoped>
.drag-uploaded {
    :deep(.el-upload-dragger:not(:focus)),
    :deep(.el-upload-dragger:focus),
    :deep(.el-upload-dragger:hover) {
        border-color: #dcdfe6;
        cursor: auto;
    }
}
.drag-upload,
.drag-file {
    height: 114px;
}
.drag-file {
    .drag-file-main {
        padding: 0 20px;
        width: 100%;
        .drag-file-name {
            color: var(--el-color-primary);
        }
    }
}
</style>
