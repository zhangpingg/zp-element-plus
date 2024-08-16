<!--
 * @Author: zhangping
 * @Date: 2024-06-06 17:41:05
 * @Description: 自定义下拉组件-选择城市
-->

<template>
    <el-select v-model="city" placeholder="请选择" clearable @change="changeCity" v-bind="restItem">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: () => null,
    },
    restItem: {
        type: Object,
        default: () => {},
    },
});
const emit = defineEmits(['onChange']);

const options = [
    { label: '上海', value: 'shanghai' },
    { label: '杭州', value: 'hangzhou' },
    { label: '北京', value: 'beijing' },
];

const city = ref();

// change-城市
const changeCity = (val) => {
    emit('onChange', val);
};

watch(
    () => props.value,
    (newVal) => {
        city.value = newVal;
    },
    {
        immediate: true,
        deep: true,
    },
);
</script>

<style lang="less" scoped></style>
