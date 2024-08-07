<template>
    <ZpUploadFile
        ref="uploadFileRef"
        :multiple="true"
        :limit="3"
        :showFileList="true"
        :maxSizeArr="[
            { types: ['image'], maxSize: 5, errTip: '图片文件大小不超过5M' },
            { types: ['video', 'audio'], maxSize: 200, errTip: '视频音频文件大小不超过200M' },
            { types: ['other'], maxSize: 10, errTip: '文件大小不能超过10M' },
        ]"
        @onClickFileName="clickFileName"
    />
    <el-button type="primary" @click="submitData">获取文件列表</el-button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const uploadFileRef = ref();

// 获取详情回显
const getDetail = () => {
    // 请求接口
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

// 提交数据
const submitData = () => {
    const params = {
        files: uploadFileRef.value.fileList.map((k) => k.url),
    };
    console.log('params', params);
};

// 单击名称 needDownload 为false才执行
const clickFileName = (uploadFile) => {
    console.log('文件', uploadFile);
};

onMounted(() => {
    getDetail();
});
</script>
