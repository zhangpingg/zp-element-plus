---
outline: deep
title: 文档1标题
editLink: true
lastUpdated: true
footer: true
---

## 源码 code

```vue
<template>
  <div>{{ name }}</div>
</template>

<script setup>
    import { ref } from "vue";
    const name = ref("张三");
</script>
```

### 引用组件+自定义样式

<div class='box'>
  <ComponentA />
</div>

<script setup>
import ComponentA from './component/ComponentA.vue'
</script>

<style lang='less' scoped>
  .box{
    color: #f00;
  }
</style>

## 链接跳转

[本地文档](./markdown-examples)  
[在线链接](https://vitepress.dev/reference/runtime-api#usedata)

