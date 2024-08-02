### SearchForm 介绍

该组件是基于 `Element-plus` 框架的 `Form` 表单二次封装，主要用作查询条件使用。

### 基本使用

查询条件包含：输入框，下拉框，级联，年份，月份，月份区间，日期区间，日期时间区间。  
如果是区间形式，`prop` 以数组的形式传入 `key`。  
如果需要在按钮后面追击其他按钮，可通过插槽形式插入，插槽名 `extra`。
<preview path="../examples/searchForm/base.vue"></preview>

### 默认值

默认值可通过 `value` 来设置。
<preview path="../examples/searchForm/defaultValue.vue"></preview>

### 转换值 / 拼接时间后缀

`type：select` 时，点击查询的时候，是否转换值为 `boolean` 类型的值。  
`type`为`daterange、datetimerange` 时，是否拼接时间后缀，如 `2024-01-02 00:00:00`。
<preview path="../examples/searchForm/convertJoin.vue"></preview>

### 自定义表单项

在现有的表单项下，可以添加自定义表单项，可通过设置 `type: custom`，`customComponent: markRaw(<组件>)` 来实现。
<preview path="../examples/searchForm/custom.vue"></preview>

::: details 点击查看代码

::: code-group

<<< @/examples/searchForm/components/customCity.vue

:::

### API

| 属性名     |                            说明                             |   类型 | 默认值 |
| ---------- | :---------------------------------------------------------: | -----: | ------ |
| formConfig | 设置表单 `Form` 的属性，继承至 `element-plus` 的 `Form API` | object | —      |
| formList   |            设置表单项的列表，详见 `formList API`            |  array | []     |

`element-plus` 的[`Form API`](https://element-plus.org/zh-CN/component/form#form-api)

#### formList API

| 属性名             |                                        说明                                         |      类型 | 默认值 |
| ------------------ | :---------------------------------------------------------------------------------: | --------: | ------ |
| type               |                          设置表单项类型，详见 `type 枚举`                           |      enum | —      |
| customComponent    |                          自定义的组件, `type: custom`有效                           | component | —      |
| isConvertToBoolean |                   是否将值转换为`boolean`类型, `type: select`有效                   |   boolean | —      |
| isJoinTimeSuffix   | 是否拼接时间后缀，`type`为`daterange、datetimerange` 有效，如 `2024-01-02 00:00:00` |   boolean | —      |
| 其他属性           |                       继承至 `element-plus` 的 `FormItem API`                       |         — | —      |

`element-plus` 的[`FormItem API`](https://element-plus.org/zh-CN/component/form#formitem-api)

#### type 枚举

| 属性名        |                         说明                          |
| ------------- | :---------------------------------------------------: |
| input         |                        输入框                         |
| select        |                        下拉框                         |
| cascader      |                         级联                          |
| year          |                     年，如 `2024`                     |
| month         |                   月，如 `2024-01`                    |
| monthrange    |             月区间，如 `2024-01、2024-02`             |
| daterange     |         日期区间，如 `2024-01-02、2024-05-06`         |
| datetimerange | 日期时间区间，如 `2024-01-02 11:22、2024-05-06 22:33` |
| custom        |                        自定义                         |

```

```
