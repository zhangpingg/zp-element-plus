import { debounce, throttle, formatNumber } from './utils';
import type { Component, App } from 'vue';

import TButton from './button';

// 存储组件列表
const components: {
  [propName: string]: Component;
} = {
  TButton,
};
// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
// const installComponents: any = (app: App) => {
//   // components.forEach((comp: any) => {
//   //   app.component(comp.name as string, comp)
//   // })
//   //   app.use(ElementPlus, {
//   //     locale // 语言设置
//   //   // size: Cookies.get('size') || 'medium' // 设置默认尺寸
//   // })
//   for (const key in components) {
//     app.component(key, components[key])
//   }
// }
// - install：每个插件都有一个 install 方法
const install: any = (app: any): void => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};
/**
 * @description 公共方法
 */
export { throttle, debounce, formatNumber };
/**
 * @description 导出组件
 */
export { TButton };

const TuiPlus = {
  install,
};
export default TuiPlus;
