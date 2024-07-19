import { App, Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  // 在项目中的main.js中，使用 vue.use(ZpButton) 去注册插件
  (main as SFCWithInstall<T>).install = (app: App) => {
    // 注册组件为全局组件
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [compName, comp] of Object.entries(extra)) {
      (main as Record<string, any>)[compName] = comp;
    }
  }
  // 将 T 断言为具体的类型 T & plugin & Record<string, any>
  return main as SFCWithInstall<T> & E;
};
