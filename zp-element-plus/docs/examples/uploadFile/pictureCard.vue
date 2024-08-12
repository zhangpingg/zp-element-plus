<template>
    <ZpUploadFile
        ref="uploadFileRef"
        name="uploadFile"
        id="box8"
        loadingContainer="#box8"
        action="/test/api/quality/common/file/upload"
        :show-file-list="true"
        list-type="picture-card"
        class="img90"
        :limit="3"
    >
        <el-icon><Plus /></el-icon>
    </ZpUploadFile>
    <el-button type="primary" @click="getFileList">获取文件列表</el-button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const uploadFileRef = ref();

// 获取接口详情的文件列表
const getDetail = () => {
    setTimeout(() => {
        const files = [
            {
                name: 'img01.jpg',
                url: 'https://t12.baidu.com/it/u=2944858655,3260611328&fm=58',
            },
            {
                name: 'img02.jpg',
                url: 'https://t12.baidu.com/it/u=3165178178,1926556480&fm=58',
            },
        ];
        uploadFileRef.value.fileList = [...files];
    }, 1000);
};
// 获取文件列表
const getFileList = () => {
    const fileList = uploadFileRef.value.fileList.map((item) => ({
        name: item.name,
        url: item.url,
    }));
    console.log('文件列表', fileList);
};

onMounted(() => {
    getDetail();
});
</script>
