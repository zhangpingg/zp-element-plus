<template>
    <ZpUploadFile
        ref="uploadFileRef"
        id="box1"
        loadingContainer="#box1"
        action="/test/api/quality/common/file/upload"
        :fileList="fileList"
        :show-file-list="true"
        @onPreviewFile="previewFile"
    />
    <el-button type="primary" @click="getFileList">获取文件列表</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const uploadFileRef = ref();
const fileList = ref([
    {
        name: 'img01.jpg',
        url: 'https://t12.baidu.com/it/u=2944858655,3260611328&fm=58',
    },
]);

// 单击名称 needDownload 为false才执行
const previewFile = (uploadFile) => {
    console.log('文件', uploadFile);
};
// 获取文件列表
const getFileList = () => {
    const _fileList = uploadFileRef.value.fileList.map((item) => ({
        name: item.name,
        url: item.url,
    }));
    console.log('文件列表', _fileList);
    console.log(22, fileList);
};
</script>
