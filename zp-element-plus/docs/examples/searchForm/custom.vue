<template>
    <div>
        <ZpSearchForm
            ref="zpSearchFormRef"
            :formConfig="{ labelWidth: 120 }"
            :formList="formList"
            @onSubmit="onSubmit"
            @onReset="onReset"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import CustomA from './components/customA.vue';

const zpSearchFormRef = ref<any>(null);
const formList = reactive([
    { type: 'input', label: '输入框', prop: 'aa' },
    {
        type: 'select',
        label: '下拉框',
        prop: 'bb',
        options: [
            { label: '上海', value: 'shanghai' },
            { label: '杭州', value: 'hangzhou' },
            { label: '北京', value: 'beijing' },
        ],
    },
    {
        type: 'custom',
        label: '自定义',
        prop: 'zz',
        customComponent: CustomA,
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
