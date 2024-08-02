<template>
    <div>
        <div class="main-card">
            <ZpTablePage
                :tableConfig="tablePageData.tableConfig"
                :pageConfig="tablePageData.pageConfig"
                @onSelectionChange="changeTableSelection"
                @onChangePageCurrent="changePageCurrent"
                @onChangePageSize="changePageSize"
            >
                <!-- <template #productLevel="slotProps">
                  {{ getLabelByValue(productLevelDict, slotProps.scope.row.productLevel) }}
              </template> -->
                <!-- <template #dd="slotProps">
                  <SlotColumns
                      slotType="text"
                      :value="slotProps.scope.row.dd"
                      :options="['上架', '下架']"
                  />
              </template>
              <template #ee="slotProps">
                  <SlotColumns
                      slotType="text"
                      :value="slotProps.scope.row.ee"
                      :options="AbcStatusSlotOptions"
                  />
              </template>
              <template #auditStatus="slotProps">
                  <SlotColumns
                      slotType="badge"
                      :value="slotProps.scope.row.auditStatus"
                      :options="auditStatusSlotOptions"
                  />
              </template> -->
                <template #operationColumn>
                    <el-table-column width="120" fixed="right">
                        <template #header>操作</template>
                        <template #default="scope">
                            <el-button type="primary" link @click="goDetail('CHECK', scope.row)"
                                >查看</el-button
                            >
                            <el-button type="primary" link @click="goDetail('EDIT', scope.row)"
                                >编辑</el-button
                            >
                        </template>
                    </el-table-column>
                </template>
            </ZpTablePage>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
import { Plus } from '@element-plus/icons-vue';
// import TablePage from '../../../packages/tablePage/src';

// import { personNameColumn } from '@/components/tablePage/common/columns';
// import SlotColumns from '@/components/tablePage/common/SlotColumns';
// import {
//     AbcStatusSlotOptions,
//     auditStatusSlotOptions,
// } from '@/components/tablePage/common/slotOptions';
// import { getLabelByValue, productLevelDict } from '@/dicts';

const {
    proxy: { globalConst },
} = getCurrentInstance();

const tablePageData = reactive({
    tableConfig: {
        loading: false,
        columns: [
            { label: '全选', type: 'selection', width: 60, align: 'center', fixed: 'left' },
            { label: '姓名', prop: 'aa', minWidth: 150 },
            // personNameColumn('手机号', 'bb'),
            { label: '状态1', prop: 'productLevel', minWidth: 100, slotName: 'productLevel' },
            { label: '状态2', prop: 'dd', minWidth: 100, slotName: 'dd' },
            { label: '状态3', prop: 'ee', minWidth: 100, slotName: 'ee' },
            { label: '审核结论', prop: 'auditStatus', minWidth: 140, slotName: 'auditStatus' },
        ],
        data: [
            {
                id: 1,
                aa: '张三',
                bb: '18258261040',
                productLevel: 1,
                dd: true,
                ee: 1,
                auditStatus: 1,
            },
            {
                id: 2,
                aa: '李四',
                bb: '18258261041',
                productLevel: 2,
                dd: true,
                ee: 2,
                auditStatus: 2,
            },
            {
                id: 3,
                aa: '王五',
                bb: '18258261042',
                productLevel: 3,
                dd: false,
                ee: 3,
                auditStatus: 3,
            },
            {
                id: 4,
                aa: '赵六',
                bb: '18258261043',
                productLevel: 4,
                dd: null,
                ee: 4,
                auditStatus: 4,
            },
        ],
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
        current: currentPage,
        sise: pageSize,
    };
    console.log('调接口', _params);
    try {
        tablePageData.tableConfig.loading = true;
        //const res = await apiGetRoleListByPage(_params);
        //tablePageData.tableConfig.data = res.list || [];
        //tablePageData.pageConfig.total = Number(res.total);
        tablePageData.tableConfig.loading = false;
    } catch (error) {
        tablePageData.tableConfig.loading = false;
    }
};
// 跳转详情-新增/编辑
const goDetail = (mode, row = {}) => {};
// change-表格复选框
const changeTableSelection = (data) => {
    console.log('选中的数据', data);
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
// 查询
const onSubmit = () => {
    tablePageData.pageConfig.currentPage = 1;
    getData();
};
// 重置
const onReset = () => {
    tablePageData.pageConfig.pageSize = 10;
    tablePageData.pageConfig.currentPage = 1;
    getData();
};
// 导出列表
const exportList = () => {
    console.log('导出');
};

onMounted(() => {
    getData();
});
</script>

<style lang="less" scoped></style>
