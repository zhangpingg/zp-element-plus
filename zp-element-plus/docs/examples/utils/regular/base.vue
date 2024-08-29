<template>
    <div>
        <el-input v-model="val" placeholder="请输入" />
        <el-button type="primary" class="mt-10" @click="checkVal">按钮</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MOBILE_REG } from '../../../../packages/utils';

const val = ref();

// 校验输入
const checkVal = () => {
    console.log(MOBILE_REG.test('18258261039'));
};
</script>
