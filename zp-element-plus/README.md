# zp-element-plus

基于 Element-plus 二次封装（Vue 3+TypeScript+Vite）  
[zp-element-plus 文档地址](https://zhangpingg.github.io/zp-element-plus/)

## 目录结构

```js
├─ docs
│  ├─ .vitepress
│  │  ├─ theme                  #（主题相关配置文件）
│  │  │  └─ index.ts            # 主题配置（注册element-plus插件、注册自己组件库插件、注册示例预览插件）
│  │  └─ config.ts              # vitepress的配置文件（左侧菜单，顶部导航）
│  ├─ components                # 所有组件的markDown文档
│  │  ├─ button.md              # Button组件markDown文档
│  │  ├─ ...
│  │  └─ index.md               # 顶部导航栏-安装指南的.md文档
│  ├─ example                   # 演示的示例源码
│  ├─ public                    # 静态资源文件
│  ├─ index.md                  # 文档home页面
│  └─ vite.config.ts            # vite 全局配置文件
├─ packages
│  ├─ button
│  │  ├─ src
│  │  │  └─ index.vue           # Button组件源码
│  │  └─ index.ts               # 调用方法withInstall，注册为全局组件，并导出
│  ├─ ...
│  ├─ index.ts                  # 导出组件，公共方法，定义插件(用于注册为全局组件)
│  └─ withInstall.ts            # withInstall方法，用于把组件注册为全局组件
└─ public                       # 静态资源文件
```
