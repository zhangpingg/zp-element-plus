### UploadFile 介绍

该组件是基于 `Element-plus` 框架的 `Upload` 二次封装。

### 基本使用

<preview path="../examples/uploadFile/base.vue"></preview>

### 回显文件列表-`ref`

去掉了 `element-plus` 中的 `file-list` 属性，而使用 `ref` 回显文件列表，适用于表格中。普通上传也可以使用。当文件改变的时候，不会从新渲染整个表格，用户界面不会闪屏，因为此时改变的是子组件里面的数据源，而非父组件的数据源。

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

拖拽上传时，只能上传一个文件，上传成功后，展示在上传框中。如果不需要该功能，则去掉 `singleDrag` 属性即可。

<preview path="../examples/uploadFile/singleDrag.vue"></preview>

### 上传头像？？？

。。。

### API

#### Attributes

| 属性名           | 说明                                  | 类型            | 默认值               |
| :--------------- | :------------------------------------ | :-------------- | :------------------- |
| headersToken     | 上传时请求头部 `token` 的 `key` 键值  | `string`        | Authorization        |
| loadingContainer | 加载动画的容器                        | `class`/`id`    | #uploadFileContainer |
| needDownload     | 点击文件列表中的文件，是否下载文件    | `boolean`       | false                |
| maxSize          | 上传文件大小限制                      | `number`        | -                    |
| maxSizeList      | 根据文件类型分别设置上传文件大小限制  | `maxSizeItem[]` | []                   |
| singleDrag       | 拖拽上传时，只能上传一个文件          | `maxSizeItem[]` | []                   |
| 其他属性         | 继承至 `element-plus` 的 `Upload API` | -               | -                    |

#### maxSizeItem

| 属性名  | 说明               | 类型         | 默认值 |
| :------ | :----------------- | :----------- | :----- |
| types   | 文件类型           | `enum[]`     | []     |
| maxSize | 上传文件大小限制   | `class`/`id` | -      |
| errTip  | 报错的提示信息内容 | `string`     | -      |

#### types 枚举

| 属性名      | 说明         |
| :---------- | :----------- |
| image       | 图片         |
| video       | 视频         |
| audio       | 音频         |
| application | wps/pdf 文件 |
| text        | txt 文本     |
| other       | 其他文件类型 |

#### Events

| 方法名          | 说明                                       | 类型                                           |
| :-------------- | :----------------------------------------- | :--------------------------------------------- |
| onUploadSuccess | 文件上传成功                               | <abbr title="() => fileList">`Function`</abbr> |
| onRemoveSuccess | 文件移除成功                               | <abbr title="() => fileList">`Function`</abbr> |
| onPreviewFile   | 预览文件，`needDownload` 为 `false` 时有效 | <abbr title="() => fileList">`Function`</abbr> |
