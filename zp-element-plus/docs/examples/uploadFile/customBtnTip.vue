<template>
    <ZpUploadFile
        ref="uploadFileRef"
        action="/test/api/quality/common/file/upload"
        :multiple="true"
        :fileList="fileList"
        :show-file-list="true"
        accept=".jpg,.png"
        needDownload
        @onPreviewFile="previewFile"
    >
        <el-button>上传文件</el-button>
        <template #tip>
            <div class="el-upload__tip">支持jpg、png格式；图片文件大小不超过5M</div>
        </template>
    </ZpUploadFile>

    <el-button type="primary" @click="getFileList">获取文件列表</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const uploadFileRef = ref();
const fileList = ref([]);

// 单击名称 needDownload 为false才执行
const previewFile = (uploadFile) => {
    console.log('文件', uploadFile);
};
// 获取文件列表
const getFileList = () => {
    const fileList = uploadFileRef.value.fileList.map((item) => ({
        name: item.name,
        url: item.url,
    }));
    console.log('文件列表', fileList);
};
</script>
