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
    {
        type: 'select',
        label: '是否开启',
        prop: 'bb',
        options: [
            { label: '开启', value: 1 },
            { label: '关闭', value: 0 },
        ],
        isConvertToBoolean: true,
    },
    {
        type: 'daterange',
        label: '日期区间',
        prop: ['startDate', 'endDate'],
        isJoinTimeSuffix: true,
    },
    {
        type: 'datetimerange',
        label: '日期时间区间',
        prop: ['startDateTime', 'endDateTime'],
        isJoinTimeSuffix: true,
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
