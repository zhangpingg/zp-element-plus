<template>
    <ZpTablePage
        :tableConfig="tablePageData.tableConfig"
        :pageConfig="tablePageData.pageConfig"
        emptyCellContent="--"
        @onSelectionChange="changeTableSelection"
        @onChangePageCurrent="changePageCurrent"
        @onChangePageSize="changePageSize"
    >
        <template #operationColumn>
            <el-table-column width="120" fixed="right">
                <template #header>操作</template>
                <template #default="{ row }">
                    <el-button type="primary" link @click="goDetail(row)"> 详情 </el-button>
                </template>
            </el-table-column>
        </template>
    </ZpTablePage>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { resData } from './utils/const';

const tablePageData = reactive<{ [key: string]: any }>({
    tableConfig: {
        loading: false,
        columns: [
            { label: '全选', type: 'selection', width: 60, align: 'center', fixed: 'left' },
            { label: 'id', prop: 'id', minWidth: 100 },
            { label: '姓名', prop: 'aa', minWidth: 100 },
            { label: '手机号', prop: 'bb', minWidth: 100 },
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
            tablePageData.tableConfig.data = resData;
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
// change-表格复选框
const changeTableSelection = (data) => {
    console.log('选中的数据', data);
};

// 跳转详情
const goDetail = (row) => {
    console.log('当前行数据：', row);
};

onMounted(() => {
    getData();
});
</script>

<style lang="less" scoped></style>
