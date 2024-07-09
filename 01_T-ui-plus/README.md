# T-ui-Plus

## [Vue2 基于 Element-ui 基础组件传送门](https://github.com/wocwin/t-ui)

> 基于 Element-ui 二次封装基础组件地址

## [T-ui-Plus 使用 Demo 项目](https://github.com/wocwin/wocwin-admin)

> `wocwin-admin`是基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的一套后台管理模板；此项目全面使用了`T-ui-Plus`二次封装基础组件库

``

## 介绍

> 基于 vue3+ ts+ Element-plus 二次封装组件

这是我在学习 Vue3 中基于[Element-plus](https://element-plus.org/zh-CN/) 二次封装基础组件文档，希望对你有用。可查看 [详细组件案例文档](https://wocwin.github.io/t-ui-plus/) 预览

<p align="center">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/wocwin/t-ui-plus/badge/star.svg?theme=dark" alt="t-ui-plus">
  </a>
   <a href="https://github.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/wocwin/t-ui-plus.svg" alt="t-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/@wocwin/t-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/@wocwin/t-ui-plus.svg" />
    </a>
</p>

## 动态效果图

<img src="./README_GIF/TuiPlus__demo.gif">

## npm 方式安装使用

```shell
npm i @wocwin/t-ui-plus
```

## 全局注册使用

> ### 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// 在main.js中按下引入
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import locale from 'element-plus/es/locale/lang/zh-cn';
// element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import TuiPlus from '@wocwin/t-ui-plus';
import '@wocwin/t-ui-plus/lib/style.css';
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
app.use(TuiPlus);
app.mount('#app');
```

## 按需引入

```js
// 在main.js中按下引入
import '@wocwin/t-ui-plus/lib/style.css';
// 单个.vue文件引入
<script setup lang="ts">
  import {(TDetail, TForm)} from "@wocwin/t-ui-plus"
</script>;
```

## t-ui-plus Volar 组件类型提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "@wocwin/t-ui-plus/components.d.ts",
    ],
}

```

```js
├─ docs
│  ├─ .vitepress
│  │  ├─ config                 #（插件配置）
│  │  │  ├─ global.ts           # 自定义全局变量
│  │  │  └─ plugins.ts          # 自定义md插件（演示组件代码/copy）
│  │  ├─ theme                  #（主题相关配置文件）
│  │  │  ├─ index.ts            # 主题配置（注册element-plus插件、注册自己组件库插件、注册VPDemo组件）
│  │  │  └─ useComponents.js    # 注册演示组件（Demo、DemoBlock），这个是一个插件
│  │  ├─ utils
│  │  │  └─ highlight.ts        # 演示组件的时候，代码高亮
│  │  ├─ vitepress
│  │  │  ├─ components
│  │  │  │  └─ vp-demo          # VPDemo组件
│  │  │  ├─ style               # VPDemo组件样式
│  │  │  └─ index.ts            # 导出VPDemo组件
│  │  └─ config.ts              # vitepress的配置文件（左侧菜单，顶部导航）
│  ├─ components
│  │  ├─ TButton                # Button组件.md文档
│  │  ├─ ...
│  │  └─ index.md               # 顶部导航栏-安装指南的.md文档
│  ├─ example                   # 演示的示例源码（VPDemo组件自动解析此文件夹下的所有.vue文件）
│  ├─ public                    # 静态资源文件
│  ├─ index.md                  # 文档home页面
│  ├─ tsconfig                  # typescript 全局配置
│  └─ vite.config.ts            # vite 全局配置文件（支持tsx）
├─ packages
│  ├─ button
│  │  ├─ src
│  │  │  └─ index.vue           # Button组件源码
│  │  └─ index.ts               # 调用方法withInstall，注册为全局组件，并导出
│  ├─ ...
│  ├─ index.ts                  # 导出组件，公共方法，定义插件(用于注册为全局组件)
│  └─ withInstall.ts            # withInstall方法，用于把组件注册为全局组件
└─ public                       # 静态资源文件
```
