<template>
    <ZpUploadFile
        ref="uploadFileRef"
        id="box4"
        loadingContainer="#box4"
        action="/test/api/quality/common/file/upload"
        :show-file-list="true"
        :maxSizeList="[
            { types: ['image'], maxSize: 3, errTip: '图片文件大小不超过3M' },
            { types: ['video', 'audio'], maxSize: 4, errTip: '视频音频文件大小不超过4M' },
            { types: ['other'], maxSize: 5, errTip: '文件大小不能超过5M' },
        ]"
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
