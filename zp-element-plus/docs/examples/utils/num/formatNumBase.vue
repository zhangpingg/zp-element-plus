<template>
    <div>
        <el-input v-model="num" placeholder="请输入" />
        <p>千分位格式化(自动补位)：{{ formatNum(num, 4, true) }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { utils } from '../../../../packages';

const { formatNum } = utils;

const num = ref();
</script>
