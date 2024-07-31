<template>
    <ZpSearchForm
        ref="zpSearchFormRef"
        :formConfig="{ labelWidth: 120 }"
        :formList="formList"
        @onSubmit="onSubmit"
        @onReset="onReset"
    />
</template>

<script setup lang="ts">
import { ref, reactive, markRaw } from 'vue';
import CustomCity from './components/customCity.vue';

const zpSearchFormRef = ref<any>(null);
const formList = reactive([
    { type: 'input', label: '输入框', prop: 'aa' },
    {
        type: 'custom',
        label: '自定义-城市',
        prop: 'zz',
        customComponent: markRaw(CustomCity),
        placeholder: '占位符',
    },
]);

// 查询
const onSubmit = () => {
    const params = zpSearchFormRef.value.getFormData();
    console.log('查询：', params);
};
// 重置
const onReset = () => {
    const params = zpSearchFormRef.value.getFormData();
    console.log('重置：', params);
};
</script>
