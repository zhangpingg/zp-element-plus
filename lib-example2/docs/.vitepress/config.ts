import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'PF组件库',
  description: '基于vue3+ts的组件库',
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../', import.meta.url)),
        //'@': path.resolve(),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '指南',
        link: '/',
      },
      {
        text: '组件',
        link: '/components/button',
      },
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          {
            text: 'Button 按钮',
            link: '/components/button',
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/RicardoPang/pf-component-library',
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/pf-component-library',
      },
    ],
  },
})
