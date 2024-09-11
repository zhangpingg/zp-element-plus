<template>
    <el-upload
        :headers="{ [headersTokenKey]: Cookies.get(cookiesTokenKey) }"
        :file-list="fileList"
        :disabled="isSingleDragUploadedDisabled || disabled"
        :before-upload="beforeUpload"
        :on-success="uploadSuccess"
        :on-remove="removeFile"
        :on-exceed="exceedLimitQuantity"
        :on-preview="previewFile"
        :on-error="uploadError"
        :drag="drag"
        id="uploadFileContainer"
        :class="{ uf: true, 'uf-hideUploadBtn': fileList.length >= attrs?.limit }"
    >
        <template #trigger>
            <slot name="trigger">
                <!-- 拖拽上传 -->
                <template v-if="drag">
                    <div class="uf-dragUpload" v-if="(singleDrag && fileList.length === 0) || !singleDrag">
                        <el-icon class="el-icon--upload" size="52"><upload-filled /></el-icon>
                        <div class="el-upload__text">点击或将文件拖拽到这里上传</div>
                        <div class="el-upload__tip" v-if="attrs?.accept">支持扩展名：{{ attrs?.accept }}</div>
                    </div>
                    <template v-if="singleDrag && fileList.length > 0">
                        <div class="uf-dragFile" v-for="(item, index) in fileList" :key="index">
                            <p class="uf-dragFile-main" @click="previewFile(item)">
                                <el-icon class="cup"><Document /></el-icon>
                                <i class="uf-dragFile-name cup ml-5"> {{ item.name }}</i>
                            </p>
                            <el-icon class="cup" @click.stop="removeDragFile(index)">
                                <Delete />
                            </el-icon>
                        </div>
                    </template>
                </template>
                <!-- 常规上传 -->
                <el-button v-else :icon="Upload" :disabled="fileList.length >= attrs?.limit || disabled">
                    上传文件
                </el-button>
            </slot>
        </template>
        <slot></slot>
        <template #tip>
            <slot name="tip">
                <div class="el-upload__tip" v-if="needDownload">单击文件名可下载文件</div>
            </slot>
        </template>
        <template #file>
            <slot name="file"></slot>
        </template>
    </el-upload>
</template>

<script setup lang="ts" name="ZpUploadFile">
import { ref, computed, useAttrs } from 'vue';
import { ElMessage, ElNotification, ElLoading } from 'element-plus';
import { Upload } from '@element-plus/icons-vue';
import Cookies from 'js-cookie';
import { downloadFile } from '../../utils/util.tool';
import type { UploadRawFile, UploadFile, UploadFiles } from 'element-plus';
import type { IMaxSizeItem } from './interface';
import { disabledTimeListsProps } from 'element-plus/es/components/time-picker/src/props/shared';

const attrs: { [key: string]: any } = useAttrs();

const props = defineProps({
    // 是否拖拽上传
    drag: {
        type: Boolean,
        default: false,
    },
    // 设置上传的请求头部的 token 的键名（注意：当token为空时，请求头中不会添加该字段）
    headersTokenKey: {
        type: String,
        default: 'Authorization',
    },
    // 设置上传的请求头部的 token 的值，默认是 Cookies 中的 token 字段
    cookiesTokenKey: {
        type: String,
        default: 'token',
    },
    // loading动画的容器
    loadingContainer: {
        type: String,
        default: '#uploadFileContainer',
    },
    // 是否需要下载
    needDownload: {
        type: Boolean,
        default: false,
    },
    // 文件大小限制
    maxSize: {
        type: Number,
        default: null,
    },
    // 根据文件类型分别设置上传文件大小限制
    // types: image=图片 video=视频 audio=音频 application=wps/pdf text=txt other=其他文件类型
    maxSizeList: {
        type: Array,
        default: () => [],
    },
    // 是否单个拖拽
    singleDrag: {
        type: Boolean,
        default: false,
    },
    // 是否禁用
    disabled: {
        type: Boolean,
        default: false,
    },
    // 重新上传覆盖上一次文件，limit必须为1
    isReUpload: {
        type: Boolean,
        default: false,
    },
    // 接口返回格式
    // 1：code=200返回{data:'fileUrl'}，code!=200返回{data:'failExcelFileUrl'}报错并下载
    // 2：code=200返回{data:{fileUrl:'',failExcelFileUrl:'',...}}，failExcelFileUrl有值报错并下载，code!=200仅报错
    resType: {
        type: Number,
        default: 1,
    },
});

const emit = defineEmits(['onUploadSuccess', 'onRemoveSuccess', 'onPreviewFile']);

const fileList = ref<any[]>([]); // 上传的文件列表
const uploadLoad = ref<any>(null); // 上传loading对象

// 是否拖拽上传成功（只能上传一个文件）
const isSingleDragUploadedDisabled = computed(() => {
    return props.drag && props.singleDrag && fileList.value.length > 0;
});

// 校验允许上传文件后缀名
const checkAccept = (rawFile: UploadRawFile) => {
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
const checkSize = (rawFile: UploadRawFile) => {
    const { maxSize, maxSizeList }: any = props;
    const fileSize = rawFile.size / 1024 / 1024; // 文件大小
    const fileType = rawFile.type.split('/')[0]; // 文件类型
    // 通用上传文件大小限制
    if (maxSize && fileSize > maxSize) {
        ElMessage({ plain: true, message: `文件大小不能超过${maxSize}M`, type: 'error' });
        return false;
    }
    // 根据文件类型分别设置上传文件大小限制
    let sizeError = false;
    let typesList = maxSizeList
        .map((item: IMaxSizeItem) => {
            return item.types;
        })
        .flat();
    for (let i = 0; i < maxSizeList.length; i++) {
        if (
            (maxSizeList[i].types.includes(fileType) ||
                (!typesList.includes(fileType) && maxSizeList[i].types.includes('other'))) &&
            fileSize > maxSizeList[i].maxSize
        ) {
            sizeError = true;
            ElMessage({ plain: true, message: maxSizeList[i].errTip, type: 'error' });
            break;
        }
    }
    return !sizeError;
};
// 上传前
const beforeUpload = (rawFile: UploadRawFile) => {
    if (!checkAccept(rawFile)) return false;
    if (!checkSize(rawFile)) return false;
    if (!uploadLoad.value) {
        uploadLoad.value = ElLoading.service({
            target: props.loadingContainer,
            text: '上传中...',
        });
    }
};
// 上传成功
const uploadSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    if (props.isReUpload && attrs?.limit === 1) {
        // 重新上传，需清空文件列表
        fileList.value = [];
    }
    switch (props.resType) {
        case 1:
            if (response.code !== 200) {
                catchUploadError(uploadFile, response.message);
                // 导入失败下载错误链接文件
                response.data && downloadFile(response.data);
            } else {
                uploadFile.url = typeof response.data === 'string' ? response.data : '';
            }
            break;
        case 2:
            if (response.code !== 200) {
                catchUploadError(uploadFile, response.message);
            } else {
                uploadFile.url = response?.data?.fileUrl || '';
                if (response?.data?.failExcelFileUrl) {
                    catchUploadError(uploadFile, '导入失败，请在文件中查看错误原因');
                    // 校验失败下载错误链接文件
                    downloadFile(response.data.failExcelFileUrl);
                }
            }
            break;
        default:
            break;
    }
    fileList.value.push(uploadFile);
    if (fileList.value.length === uploadFiles.length) {
        fileList.value = uploadFiles.filter((k) => k.status === 'success');
        uploadLoad.value.close();
        uploadLoad.value = null;
        emit('onUploadSuccess', fileList.value); // 全部上传成功
    }
};
// 删除文件
const removeFile = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    fileList.value = [...uploadFiles];
    emit('onRemoveSuccess', fileList.value);
};
// 超出数量限制
const exceedLimitQuantity = () => {
    ElMessage({ plain: true, message: '超出上传数量限制', type: 'error' });
};
// 单击名称-预览文件
const previewFile = (uploadFile: UploadFile) => {
    if (props.needDownload) {
        downloadFile(uploadFile.url!, uploadFile.name);
        return;
    }
    emit('onPreviewFile', uploadFile);
};
// 删除已上传的拖拽文件
const removeDragFile = (index: number) => {
    fileList.value.splice(index, 1);
};
// 上传失败
const uploadError = () => {
    uploadLoad.value.close();
    uploadLoad.value = null;
};
// 错误处理
const catchUploadError = (uploadFile, msg) => {
    uploadFile.status = 'fail';
    uploadFile.url = '';
    ElNotification({
        type: 'error',
        title: '提示',
        message: msg,
        duration: 3000,
    });
};

defineExpose({
    fileList,
});
</script>

<style lang="less" scoped>
.uf {
    .uf-dragUpload,
    .uf-dragFile {
        height: 114px;
    }
    .uf-dragFile {
        .uf-dragFile-main {
            padding: 0 20px;
            width: 100%;
            .uf-dragFile-name {
                color: var(--el-color-primary);
            }
        }
    }
}
.uf-hideUploadBtn :deep(.el-upload--picture-card) {
    display: none;
}
.img60 {
    :deep(.el-upload-list__item),
    :deep(.el-upload--picture-card) {
        width: 60px;
        height: 60px;
    }
}
.img90 {
    :deep(.el-upload-list__item),
    :deep(.el-upload--picture-card) {
        width: 90px;
        height: 90px;
    }
}
.img120 {
    :deep(.el-upload-list__item),
    :deep(.el-upload--picture-card) {
        width: 120px;
        height: 120px;
    }
}
</style>
