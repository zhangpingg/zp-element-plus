import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'

export default defineConfig({
  title: 'TuiPlus基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/t-ui-plus/',
  lastUpdated: true, // 文档最后，最后修改时间是否显影
  themeConfig: {
    // logo: '/favicon.ico', // 左侧侧边栏顶部-标题前的logo
    // logo: '/img/error.png', // 左侧侧边栏顶部-标题前的logo
    siteTitle: 'TuiPlus基础组件文档', // 左侧侧边栏顶部-标题
    outline: 2, // 控制的目录层级，哪些显示。因为文档中的标题是3级标题，默认是显示的
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/wocwin/t-ui-plus' },
      { icon: 'github', link: 'https://www.baidu.com/' },
    ],
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/TSelect/base.md' },
      {
        text: 'GitHub地址',
        link: 'https://github.com/wocwin/t-ui-plus',
      },
      {
        text: 'Gitee码云地址',
        link: 'https://gitee.com/wocwin/t-ui-plus',
      },
      {
        text: '博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/cwin8951' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/888061128344087/posts',
          },
        ],
      },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: '下拉选择组件', link: '/components/TSelect/base.md' },
            { text: '详情组件', link: '/components/TDetail/base.md' },
            { text: 'Button组件', link: '/components/TButton/base.md' },
            { text: 'Radio组件', link: '/components/TRadio/base.md' },
            { text: '多选框组组件', link: '/components/TCheckbox/base.md' },
            { text: '日期组件', link: '/components/TDatePicker/base.md' },
            { text: 'Tabs组件', link: '/components/TTabs/base.md' },
            { text: '步骤组件', link: '/components/TStepWizard/base.md' },
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: '复杂组件',
          items: [
            { text: 'Chart图表组件', link: '/components/TChart/base.md' },
            {
              text: '下拉选择表格组件',
              link: '/components/TSelectTable/base.md',
            },
            {
              text: 'TAdaptivePage组件',
              link: '/components/TAdaptivePage/base.md',
            },
            {
              text: '条件查询组件',
              link: '/components/TQueryCondition/base.md',
            },
            { text: '表单组件', link: '/components/TForm/base.md' },
            { text: '模块表单组件', link: '/components/TModuleForm/base.md' },
            { text: 'table组件', link: '/components/TTable/base.md' },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
