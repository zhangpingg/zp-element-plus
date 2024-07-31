import DefaultTheme from "vitepress/theme";
// element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import locale from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 图标并进行全局注册
// 自己的组件库
import ZpElementPlus from "../../../packages";
// 示例预览
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
// import '@/components/css/index.css'
// import './custom.css'

export default {
    ...DefaultTheme, // vitepress 默认主题
    // ctx：上下文对象
    // ctx.app：Vue 应用程序实例
    enhanceApp(ctx) {
        const { app } = ctx;
        DefaultTheme.enhanceApp(ctx);

        // 注册element-plus插件
        ctx.app.use(ElementPlus, {
            locale, // 语言设置
        });
        // 注册所有图标为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            ctx.app.component(key, component);
        }
        // 注册自己组件库插件
        ctx.app.use(ZpElementPlus);
        // 示例预览
        app.component("demo-preview", ElementPlusContainer);
    },
};
