<template>
    <ZpTablePage
        :tableConfig="tablePageData.tableConfig"
        :pageConfig="tablePageData.pageConfig"
        @onChangePageCurrent="changePageCurrent"
        @onChangePageSize="changePageSize"
    >
        <template #dd="{ scope: { row } }">
            <SlotColumns slotType="text" :value="row.dd" :options="['成功', '失败']" />
        </template>
        <template #ee="{ scope: { row } }">
            <SlotColumns
                slotType="text"
                :value="row.ee"
                :options="[
                    { text: '状态1', type: 'primary', value: 1 },
                    { text: '状态2', type: 'success', value: 2 },
                    { text: '状态3', type: 'warning', value: 3 },
                    { text: '状态4', type: 'danger', value: 4 },
                ]"
            />
        </template>
        <template #ff="{ scope: { row } }">
            <SlotColumns
                slotType="badge"
                :value="row.ff"
                :options="[
                    { text: '通过', color: 'green', value: 1 },
                    { text: '不通过', color: 'red', value: 2 },
                    { text: '进行中', color: 'orange', value: 3 },
                    { text: '审核中', color: 'purple', value: 4 },
                ]"
            />
        </template>
    </ZpTablePage>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { resData } from './utils/const';
import { getLabelByValue, progressStatusDict } from './utils/dicts';
import SlotColumns from './components/slotColumns.vue';

const tablePageData = reactive<{ [key: string]: any }>({
    tableConfig: {
        loading: false,
        columns: [
            { label: '姓名', prop: 'aa', minWidth: 100 },
            { label: '手机号', prop: 'bb', minWidth: 100 },
            { label: '进度状态', prop: '_cc', minWidth: 100 },
            { label: '简单状态', prop: 'dd', minWidth: 100, slotName: 'dd' },
            { label: '复杂状态', prop: 'ee', minWidth: 100, slotName: 'ee' },
            { label: '圆点状态', prop: 'ff', minWidth: 100, slotName: 'ff' },
        ],
        data: [],
    },
    pageConfig: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
    },
});

// 获取数据
const getData = async () => {
    const { currentPage, pageSize } = tablePageData.pageConfig;
    const _params = {
        index: currentPage,
        sise: pageSize,
    };
    console.log('参数', _params);
    try {
        tablePageData.tableConfig.loading = true;
        setTimeout(() => {
            tablePageData.tableConfig.data = resData.map((item: { [key: string]: any }) => {
                item._cc = getLabelByValue(progressStatusDict, item.cc);
                return item;
            });
            tablePageData.pageConfig.total = 100;
            tablePageData.tableConfig.loading = false;
        }, 1000);
    } catch (error) {
        tablePageData.tableConfig.loading = false;
    }
};
// change-分页页码
const changePageCurrent = (val) => {
    tablePageData.pageConfig.currentPage = val;
    getData();
};
// change-分页条数
const changePageSize = (val) => {
    tablePageData.pageConfig.pageSize = val;
    tablePageData.pageConfig.currentPage = 1;
    getData();
};

onMounted(() => {
    getData();
});
</script>

<style lang="less" scoped></style>
