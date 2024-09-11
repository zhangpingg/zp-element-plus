<template>
    <ZpUploadFile
        ref="uploadFileRef"
        name="uploadFile"
        id="box5"
        loadingContainer="#box5"
        action="/test/api/quality/common/file/upload"
        :multiple="true"
        :show-file-list="true"
        accept=".jpg,.png"
        needDownload
        @onPreviewFile="previewFile"
    >
        <template #trigger>
            <el-button>+ 上传文件</el-button>
        </template>
        <a class="dib ml-10">下载模板</a>
        <template #tip>
            <div class="el-upload__tip">支持jpg、png格式；图片文件大小不超过5M</div>
        </template>
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

