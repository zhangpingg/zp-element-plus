### TablePage 介绍

该组件是基于 `Element-plus` 框架的 `Table` 和 `Pagination` 的二次封装，用于更方便的展示表格和分页。

### 基本使用

包含基本的 `tableConfig` `pageConfig` 配置。相关的属性配置可参考 [element-plus](https://element-plus.org/zh-CN/component/table.html) 官网。  
可通过 `emptyCellContent` 设置单元格占位符，默认为 ‘-’。

> [!NOTE]
> 此 `table` 样式仅供参考，因为 `vitepree` 的样式有覆盖 `element-plus` 样式，具体展示样式情况已实际项目为准，或参考 `element-plus` 官网样式。

<preview path="../examples/tablePage/base.vue"></preview>

::: details 点击查看代码

::: code-group

<<< @/examples/tablePage/utils/const.ts

:::

### 列值转换

根据接口返回的值，前端转换成相应的数据。对于圆点状态列，需自己项目安装`view-ui-plus`，自己书写`slotColumns.vue`组件即可。

<preview path="../examples/tablePage/convertValue.vue"></preview>

::: details 点击查看代码

::: code-group

<<< @/examples/tablePage/utils/const.ts
<<< @/examples/tablePage/utils/dicts.ts
<<< @/examples/tablePage/components/slotColumns.vue

:::

### 自定义列模板

自定义列的展示形式，通过插槽的形式，插入到表格中。

<preview path="../examples/tablePage/customColumn.vue"></preview>

::: details 点击查看代码

::: code-group

<<< @/examples/tablePage/utils/const.ts

:::

### 整合：查询表单+表格分页

`SearchForm` 查询表单和 `TablePage` 表格分页，一起整合使用。

<preview path="../examples/tablePage/searchFormAndTablePage.vue"></preview>

::: details 点击查看代码

::: code-group

<<< @/examples/tablePage/utils/const.ts

:::

### 主体内容插槽

在表格和分页之间插入自定义内容。

<preview path="../examples/tablePage/mainSlot.vue"></preview>

### 合并单元格

合并列的单元格。

<preview path="../examples/tablePage/mergeCell.vue"></preview>

### API

#### Attributes

| 属性名           | 说明                                                      | 类型      | 默认值 |
| :--------------- | :-------------------------------------------------------- | :-------- | :----- |
| tableConfig      | 设置表单表格的属性，继承至 `element-plus` 的 `Table API`  | `object`  | {}     |
| pageConfig       | 设置分页的属性，继承至 `element-plus` 的 `Pagination API` | `object`  | {}     |
| isHasPage        | 是否有分页                                                | `boolean` | true   |
| emptyCellContent | 空单元格内容                                              | `string`  | -      |

#### Events

| 方法名              | 说明                       | 类型                                                                          |
| :------------------ | :------------------------- | :---------------------------------------------------------------------------- |
| onSelectionChange   | 勾选表格前面的复选框时触发 | <abbr title="(newSelection: any[]) => void">`Function`</abbr>                 |
| onRowClick          | 点击表格行时触发           | <abbr title="(row: any, column: any, event: Event) => void">`Function`</abbr> |
| onChangePageCurrent | 切换分页页码时触发         | <abbr title="(value: number) => void">`Function`</abbr>                       |
| onChangePageSize    | 切换分页条数时触发         | <abbr title="(value: number) => void">`Function`</abbr>                       |

#### Slot

| 插槽名 | 说明                           |
| :----- | :----------------------------- |
| main   | 在表格和分页之间插入自定义内容 |
