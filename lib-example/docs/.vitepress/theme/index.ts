import DefaultTheme from 'vitepress/theme';
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import locale from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// echarts
import * as echarts from 'echarts';
// 该组件用于预览demo示例
import { VPDemo } from '../vitepress';
// 自己的组件库
import TuiPlus from '../../../packages';
import '../../public/css/index.css';

export default {
  ...DefaultTheme, // vitepress 默认主题
  // ctx：上下文对象
  // ctx.app：Vue 应用程序实例
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.config.globalProperties.$echarts = echarts; // 注册全局变量数据
    // 注册element-plus插件
    ctx.app.use(ElementPlus, {
      locale, // 语言设置
    });
    // 注册所有图标为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component);
    }
    // 注册自己组件库插件
    ctx.app.use(TuiPlus);
    // 注册VPDemo组件
    ctx.app.component('Demo', VPDemo);
  },
};
