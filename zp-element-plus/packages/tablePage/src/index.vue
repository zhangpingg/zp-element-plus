<!--
 * @Author: zhangping
 * @Date: 2024-05-14 11:34:05
 * @Description: 表格组件（表格+分页）
-->

<template>
    <div class="tp">
        <el-table
            ref="tableRef"
            empty-text="亲，没有找到相关记录哦！~"
            v-loading="props.tableConfig.loading"
            @selection-change="onSelectionChange"
            @row-click="onRowClick"
            v-bind="props.tableConfig"
            class="r-table"
        >
            <el-table-column v-for="item in props.tableConfig.columns" :key="item.prop" v-bind="item">
                <template #default="scope" v-if="item.type != 'selection'">
                    <slot :name="item.prop" v-if="item.prop === item.slotName" :scope="scope" />
                    <span v-else>
                        {{ isValidVal(scope.row[item.prop]) ? scope.row[item.prop] : props.emptyCellContent }}
                    </span>
                </template>
            </el-table-column>
            <slot name="operationColumn"></slot>
        </el-table>
        <slot name="main"></slot>
        <div class="tp-pagination mt-15" v-if="isHasPage">
            <el-pagination
                :page-sizes="[10, 20, 30, 40, 50]"
                layout="total, prev, pager, next, sizes, jumper"
                background
                :current="1"
                :page-size="10"
                :total="0"
                @current-change="onChangePageCurrent"
                @size-change="onChangePageSize"
                v-bind="props.pageConfig"
            />
        </div>
    </div>
</template>

<script setup lang="ts" name="ZpTablePage">
import { ref } from 'vue';
import { isValidVal } from '../../utils/util.tool';

const props = defineProps({
    // 表格配置
    tableConfig: {
        type: Object,
        default: () => ({ columns: [], data: [] }),
    },
    // 分页配置
    pageConfig: {
        type: Object,
        default: () => {},
    },
    // 是否有页码
    isHasPage: {
        type: Boolean,
        default: true,
    },
    // 空单元格内容
    emptyCellContent: {
        type: String,
        default: '-',
    },
});
const emit = defineEmits(['onSelectionChange', 'onRowClick', 'onChangePageCurrent', 'onChangePageSize']);

const tableRef = ref();

// 选择表格复选框
const onSelectionChange = (list: { [key: string]: any }[]) => {
    emit('onSelectionChange', list);
};
// 当某一行被点击时会触发
const onRowClick = (row: { [key: string]: any }, column: { [key: string]: any }, event: Event) => {
    emit('onRowClick', row, column, event);
};
// change-分页页码
const onChangePageCurrent = (val: number) => {
    emit('onChangePageCurrent', val);
};
// change-分页条数
const onChangePageSize = (val: number) => {
    emit('onChangePageSize', val);
};
// 清空选中的项
const clearSelection = () => {
    tableRef.value.clearSelection();
};

defineExpose({ clearSelection });
</script>

<style lang="less" scoped>
.tp {
    .tp-pagination {
        display: flex;
        justify-content: flex-end;
    }
}

.r-table {
    :deep(table) {
        margin: 0;

        tr {
            background: #fff;
        }
    }
}
</style>
