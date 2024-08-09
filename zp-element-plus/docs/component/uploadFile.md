### UploadFile 介绍

该组件是基于 `Element-plus` 框架的 `Upload` 二次封装。

### 基本使用

<preview path="../examples/uploadFile/base.vue"></preview>

### 回显文件列表-`ref`

使用 `ref` 回显文件列表，适用于表格中。当文件改变的时候，不会从新渲染整个表格，用户界面不会闪屏。

<preview path="../examples/uploadFile/echoFileList.vue"></preview>

### 文件大小限制

通过 `maxSize` 控制所有文件的大小限制。

<preview path="../examples/uploadFile/fileSize.vue"></preview>

### 复杂的文件大小限制

通过 `maxSizeList` 分别控制不同文件类型的大小限制。

<preview path="../examples/uploadFile/complexFileSize.vue"></preview>

### 上传按钮/Tip插槽

自定义按钮，提示文案。

<preview path="../examples/uploadFile/customBtnTip.vue"></preview>

### 单个拖拽上传

只能上传一个文件。如果要上传多个，则去掉 `singleDrag` 属性即可。

<preview path="../examples/uploadFile/singleDrag.vue"></preview>

### API

#### Attributes

| 属性名           | 说明                                 | 类型         | 默认值               |
| :--------------- | :----------------------------------- | :----------- | :------------------- |
| headersToken     | 上传时请求头部 `token` 的 `key` 键值 | `string`     | Authorization        |
| loadingContainer | 加载动画的容器                       | `class`/`id` | #uploadFileContainer |
| needDownload     | 一行展示表单项的个数                 | `string`     | 3                    |
