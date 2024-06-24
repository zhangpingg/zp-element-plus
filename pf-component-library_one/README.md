## pf-component-library 组件库

### 快速开始

#### 1. 安装组件库

```bash
npm install pf-component-library
```

#### 2. 引用组件库

```js
// 全部引入
import 'pf-component-library/dist/index_style.css'
import PUI from 'pf-component-library'
app.use(PUI)

// 按需引入
import 'pf-component-library/dist/card_style.css'
import 'pf-component-library/dist/demo_style.css'
import { Demo, Card } from 'pf-component-library'
app.use(Card)
app.use(Demo)
```

### 组件文档

[文档](https://ricardopang.github.io/)

components
css：

```js
components
    css：基础样式，所有组件样式
    lib
        Button
            index.ts：定义一个vue插件（通过app.component注册自定义组件）
            style.css：引入该组件需要的样式
            src
                Button.vue：开发的组件
                types.ts：定义的类型接口
docs
    component
        button.md：Button组件的markdown文档
    demo
        Button
            Basic.vue：Button组件演示的demo示例
example：原来的src目录

```
