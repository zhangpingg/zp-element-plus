### 工具简介

项目中工具的引用方式，请参考`安装指南`中的`工具使用`。

### isValidVal

判断-是否是有效的数据。
值为 `null, undefined, 'null', 'undefined', ''`，任意一种时为无效的数据。

```js
isValidVal(null); // false
isValidVal(1); // true
```

### isValidArr

判断-是否是有效的非空数组。

```js
isValidArr(null); // false
isValidArr([1]); // true
```

### clearInvalidKey

清空无效的`key`。删除对象中`value`为 `null, undefined, 'null', 'undefined',''`, 和空数组的 `key`。

```js
clearInvalidKey(data); // 默认会清除空数组的 key
clearInvalidKey(data, false); // 如果需要保留空数组的 `key`，则第二个参数可传 false 即可
```

### downloadFile

浏览器下载文件。

```js
downloadFile(url);
downloadFile(url, '图片.png');
downloadFile(fileStream, '图片.png', true); // 文件流下载
```

### transToMergeCellList

为合并单元格使用，调用该方法转换为合并单元格数据列表。
具体细节可参考 `TablePage` 表格分页组件中的合并单元格示例。

```js
transToNergeCellList(list, ['a', 'b']);
```

### getUrlQuery

获取当前页面的`query`参数。

```js
// 如当前页面的路由地址如下
let url = 'http://www.baidu.com?id=1&type=2';
getUrlQuery(); // {id:1, type:2}
```
