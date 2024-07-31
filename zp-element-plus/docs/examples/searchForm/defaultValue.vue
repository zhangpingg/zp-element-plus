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
import { ref, reactive } from 'vue';

const zpSearchFormRef = ref<any>(null);
const formList = reactive([
    { type: 'input', label: '输入框', prop: 'aa', value: '张三' },
    {
        type: 'select',
        label: '下拉框',
        prop: 'bb',
        value: 'hangzhou',
        options: [
            { label: '上海', value: 'shanghai' },
            { label: '杭州', value: 'hangzhou' },
            { label: '北京', value: 'beijing' },
        ],
    },
    {
        type: 'cascader',
        label: '级联',
        prop: 'cc',
        value: ['anhui', 'hefei'],
        options: [
            {
                label: '安徽',
                value: 'anhui',
                children: [
                    {
                        label: '合肥',
                        value: 'hefei',
                    },
                ],
            },
            {
                label: '福建',
                value: 'fujian',
                children: [
                    {
                        label: '厦门',
                        value: 'xiamen',
                    },
                ],
            },
        ],
    },
    { type: 'year', label: '年份', prop: 'year', value: '2000' },
    { type: 'month', label: '月份', prop: 'month', valueFormat: 'YYYY-MM', value: '2000-01' },
    {
        type: 'monthrange',
        label: '月份区间',
        prop: ['startMonth', 'endMonth'],
        value: ['2000-01', '2002-02'],
    },
    {
        type: 'daterange',
        label: '日期区间',
        prop: ['startDate', 'endDate'],
        value: ['2000-01-02', '2002-02-03'],
    },
    {
        type: 'datetimerange',
        label: '日期时间区间',
        prop: ['startDateTime', 'endDateTime'],
        value: ['2000-01-02 11:22', '2002-02-02 22:33'],
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
