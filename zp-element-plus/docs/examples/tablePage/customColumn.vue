<template>
    <ZpTablePage
        :tableConfig="tablePageData.tableConfig"
        :pageConfig="tablePageData.pageConfig"
        @onChangePageCurrent="changePageCurrent"
        @onChangePageSize="changePageSize"
    >
        <template #gg="{ scope: { row } }">
            <el-date-picker
                v-model="row.gg"
                type="month"
                placeholder="请选择"
                format="YYYY-MM"
                valueFormat="YYYY-MM"
                class="yp-picker"
                @change="(val) => changeMonth(val, row)"
            />
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
            { label: '姓名', prop: 'aa', minWidth: 100 },
            { label: '手机号', prop: 'bb', minWidth: 100 },
            { label: '月份', prop: 'gg', minWidth: 100, slotName: 'gg' },
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
// change-月份
const changeMonth = (val, row) => {
    console.log('value&当前行数据：', val, row);
};

onMounted(() => {
    getData();
});
</script>

<style lang="less" scoped></style>
