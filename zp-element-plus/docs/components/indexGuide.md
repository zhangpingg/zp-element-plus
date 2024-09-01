### 简介

::: tip

zp-element-plus（vite + vue3 + ts） 是基于 Element-plus 二次封装的组件库

:::

### 安装

```bash:no-line-numbers
npm install zp-element-plus -S
```

### 全局引入

> 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import locale from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; // element-plus图标
// zp-element-plus 组件库
import ZpElementPlus from 'zp-element-plus';
import 'zp-element-plus/lib/style.css';

const app = createApp(App);
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
// 注册ElementPlus
app.use(ElementPlus, {
    locale, // 语言设置
    // size: Cookies.get('size') || 'medium' // 尺寸设置
});
app.use(ZpElementPlus);
app.mount('#app');
```

### 按需引入

```js
// 在main.js中按下引入
import 'zp-element-plus/lib/style.css';

// 单个.vue文件引入
<script setup lang="ts">
    import {Xxx} from "zp-element-plus"
</script>;
```

### 工具使用

```js
import { utils } from 'zp-element-plus';
const { isValidVal } = utils;
console.log(isValidVal(1)); // true

// 类型定义
// global.d.ts
declare module 'zp-element-plus' {
    export const utils: any;
}
```
