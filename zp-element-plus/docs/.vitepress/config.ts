import { defineConfig } from 'vitepress';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'zp-element-plus 组件库', // 网站的标题、顶部左侧-标题
    description: '组件库文档',
    lang: 'cn-ZH',
    base: '/zp-element-plus/', // url添加base，http://localhost:3001/xxx
    lastUpdated: true, // 文档最后，最后修改时间是否显影
    head: [['link', { rel: 'icon', href: '/zp-element-plus/favicon.ico' }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/imgs/hero.jpg', // 顶部左侧-标题前的logo
        siteTitle: 'ZpElementPlus 组件文档', // 顶部左侧-标题（会覆盖上面的title）
        outline: [3, 4], // 控制的目录层级，哪些显示。因为文档中的标题是3级标题。默认是显示的
        // 导航
        nav: [
            { text: '安装指南', link: '/component/indexGuide' },
            { text: '组件预览', link: '/component/searchForm', activeMatch: '^/component/' },
            {
                text: '地址',
                items: [
                    { text: 'VitePress', link: 'https://vitepress.dev/zh/' },
                    { text: 'GitHub', link: 'https://github.com/zhangpingg/zp-element-plus' },
                    { text: 'zp-element-plus', link: 'https://zhangpingg.github.io/zp-element-plus/' },
                ],
            },
        ],
        // github 跳转
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhangpingg/zp-element-plus' },
            {
                icon: 'npm',
                link: 'https://www.npmjs.com/package/zp-element-plus',
            },
        ],
        // 左侧侧边栏
        sidebar: [
            {
                text: '组件',
                items: [
                    { text: 'SearchForm 查询表单', link: '/component/searchForm' },
                    { text: 'TablePage 表格分页', link: '/component/tablePage' },
                    { text: 'UploadFile 上传文件', link: '/component/uploadFile' },
                ],
            },
            {
                text: '工具',
                items: [{ text: 'tool 工具', link: '/component/util.tool' }],
            },
        ],
    },
    markdown: {
        config(md) {
            // 示例预览功能（查看，copy）
            md.use(containerPreview);
            md.use(componentPreview);
        },
    },
});
