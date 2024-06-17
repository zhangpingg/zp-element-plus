import { defineConfig } from "vitepress";
// @vitepress-demo-preview/plugin: 支持区块内的方式展示 demo 和示例代码
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "组件库",
    description: "组件库文档",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // 导航
        nav: [
            { text: "首页", link: "/" },
            { text: "文档1", link: "/documentOne" },
        ],
        // 左侧侧边栏
        sidebar: [
            {
                text: "组件",
                items: [
                    { text: "文档1", link: "/documentOne" },
                    { text: "文档2", link: "/documentTwo" },
                    { text: "文档100", link: "/documentHundred/index.md" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
    markdown: {
        // @vitepress-demo-preview的配置
        config(md) {
            // 支持区块内的方式展示 demo 和示例代码
            md.use(containerPreview)
            md.use(componentPreview)
        }
    },
});
