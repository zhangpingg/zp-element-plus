<template>
    <ZpUploadFile
        ref="uploadFileRef"
        id="box6"
        loadingContainer="#box6"
        action="/test/api/quality/common/file/upload"
        :multiple="true"
        :show-file-list="true"
        accept=".jpg,.png"
        drag
        singleDrag
        @onPreviewFile="previewFile"
    >
    </ZpUploadFile>
    <el-button type="primary" @click="getFileList">获取文件列表</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const uploadFileRef = ref();

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
