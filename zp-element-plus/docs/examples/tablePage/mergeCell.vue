<template>
    <ZpTablePage
        :tableConfig="tablePageData.tableConfig"
        :pageConfig="tablePageData.pageConfig"
        @onChangePageCurrent="changePageCurrent"
        @onChangePageSize="changePageSize"
    />
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { resData } from './utils/const';
import { transToMergeCellList } from '../../../packages/utils/util.tool';

const tablePageData = reactive<{ [key: string]: any }>({
    tableConfig: {
        loading: false,
        columns: [
            { label: '编号', prop: 'hh', minWidth: 100 },
            { label: '姓名', prop: 'aa', minWidth: 100 },
            { label: '手机号', prop: 'bb', minWidth: 100 },
        ],
        data: [],
        spanMethod: ({ row, columnIndex }) => {
            switch (columnIndex) {
                case 0:
                    return [row['hh'] ? row['hhRowSpan'] : 1, 1];
            }
        },
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
            tablePageData.tableConfig.data = transToMergeCellList(resData, ['hh']);
            tablePageData.pageConfig.total = 100;
            tablePageData.tableConfig.loading = false;
        }, 1000);
    } catch (error) {
        tablePageData.tableConfig.loading = false;
        console.log(error);
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
