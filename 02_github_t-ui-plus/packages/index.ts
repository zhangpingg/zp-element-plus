import { debounce, throttle, formatNumber } from './utils';
import type { Component, App } from 'vue';
import TLayoutPage from './layout-page';
import TLayoutPageItem from './layout-page-item';
import TQueryCondition from './query-condition';
import TTable from './table';
import TForm from './form';
import TSelect from './select';
import TSelectTable from './select-table';
import TDetail from './detail';
import TButton from './button';
import TStepWizard from './step-wizard';
import TTimerBtn from './timer-btn';
import TModuleForm from './module-form';
import TAdaptivePage from './adaptive-page';
import TDatePicker from './date-picker';
import TRadio from './radio';
import TCheckbox from './checkbox';
import TChart from './chart';
import TTabs from './tabs';

// 组件列表（经过 withInstall 处理过的，可以按需引用）
const components: {
  [propName: string]: Component;
} = {
  TLayoutPage,
  TLayoutPageItem,
  TQueryCondition,
  TTable,
  TForm,
  TSelect,
  TSelectTable,
  TDetail,
  TButton,
  TStepWizard,
  TTimerBtn,
  TModuleForm,
  TAdaptivePage,
  TDatePicker,
  TRadio,
  TCheckbox,
  TChart,
  TTabs
};

// vue 插件中的 install 方法（app：Vue应用程序实例）
const install: any = (app: any) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

// 【1-全局安装组件库】导出vue插件（如果插件是一个对象，必须提供 install 方法，并且参数是Vue对象，即应用实例）
// 把组件库当做一个插件去安装，即使用 Vue.use() 方法安装
// import TuiPlus from "@wocwin/t-ui-plus"   （TuiPlus就是导出的插件对象）
// app.use(TuiPlus)
export default {
  install
};

// 【2-按需引用】导出各个组件（经过 withInstall 处理过的）
export {
  TLayoutPage,
  TLayoutPageItem,
  TQueryCondition,
  TTable,
  TForm,
  TSelect,
  TSelectTable,
  TDetail,
  TButton,
  TStepWizard,
  TTimerBtn,
  TModuleForm,
  TAdaptivePage,
  TDatePicker,
  TRadio,
  TCheckbox,
  TChart,
  TTabs
};

// 【3-项目中直接引入vue.js】
// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue);
}

// 公共方法
export { throttle, debounce, formatNumber };
