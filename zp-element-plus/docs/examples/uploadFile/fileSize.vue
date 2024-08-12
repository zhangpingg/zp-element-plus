<template>
    <ZpUploadFile
        ref="uploadFileRef"
        name="uploadFile"
        id="box3"
        loadingContainer="#box3"
        action="/test/api/quality/common/file/upload"
        :show-file-list="true"
        :maxSize="3"
    />
    <el-button type="primary" @click="getFileList">获取文件列表</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const uploadFileRef = ref();

// 获取文件列表
const getFileList = () => {
    const fileList = uploadFileRef.value.fileList.map((item) => ({
        name: item.name,
        url: item.url,
    }));
    console.log('文件列表', fileList);
};
</script>
