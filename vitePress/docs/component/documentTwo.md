---
outline: deep
title: 文档2标题
---

### 表格

| 姓名 | 年龄  | 性别 |
| ---- | :---: | ---: |
| 张三 |  10   |   男 |
| 李四 |  20   |   女 |
| 王五 |  30   |   女 |

### 自定义容器
类型、标题、内容。

::: info 提示
灰色容器
:::

::: tip
蓝色容器
:::

::: warning 警告
黄色容器
:::

::: danger 错误
红色容器
:::

::: details 点击查看代码
灰色容器-折叠

```js
console.log("Hello, VitePress!");
```
:::


### GitHub 风格的状态警报

> [!NOTE] 提示
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP] 提示
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT] 重要
> 对用户达成目标至关重要的信息。

> [!WARNING] 警告
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION] 错误
> 行为可能带来的负面影响。

### 语法高亮

> 除了单行之外，还可以指定多个单行、多行，或两者均指定

多行：例如 {5-8}、{3-10}、{10-17}  
多个单行：例如 {4,7,9}  
多行与单行：

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!',
      age: 10,            // [!code highlight]    // 另外一种高亮方式
    }
  }
}
```

### 代码块中的颜色差异

在某一行添加 // [!code --] 或 // [!code ++] 注释将会为该行创建 diff，同时保留代码块的颜色。

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

###　高亮“错误”和“警告”
在某一行添加 // [!code warning] 或 // [!code error] 注释将会为该行相应的着色。

```js
export default {
    data() {
        return {
            msg: "Error", // [!code error]
            msg: "Warning", // [!code warning]
        };
    },
};
```

### 行号

可以在代码块中添加 :line-numbers / :no-line-numbers 标记来覆盖在配置中的设置。
还可以通过在 :line-numbers 之后添加 = 来自定义起始行号，例如 :line-numbers=2 表示代码块中的行号从 2 开始。

```ts {1}
// 默认禁用行号
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

### 代码组

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
    // ...
};

export default config;
```

:::

### 导入其他文件的代码片段

<<< ./example/code.js

<<< @/component/example/code.js

### 整合：容器+代码组+导入代码片段
::: details 点击查看代码

::: code-group

<<< ./example/code.js
<<< @/component/example/code.js

:::
