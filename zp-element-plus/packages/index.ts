import type { Component, App } from 'vue';
import ZpSearchForm from './searchForm'
import ZpButton from './button';
import ZpSelect from './select'

// 组件列表
const components: {
  [propName: string]: Component;
} = {
  ZpSearchForm,
  ZpButton,
  ZpSelect,
};

// vue 插件中的 install 方法（app：Vue应用程序实例）
const install = (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

// 【1-全局安装组件库】导出vue插件（如果插件是一个对象，必须提供 install 方法，并且参数是Vue对象，即应用实例）
// 把组件库当做一个插件去安装，即使用 Vue.use() 方法安装
// import TuiPlus from "@wocwin/t-ui-plus"   （TuiPlus就是导出的插件对象）
// app.use(TuiPlus)
export default {
  install,
};

// 【2-按需引用】导出各个组件
export { ZpSearchForm, ZpButton, ZpSelect };
