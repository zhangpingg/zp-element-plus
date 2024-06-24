import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import glob from 'glob'

const COMPONENTS_DIR = 'components'

type FileList = Record<string, string>

// 生成文件列表
const generateFilesList = (
  dirPath: string,
  pattern: string,
  suffix: string = ''
): FileList => {
  // `${dirPath}/${pattern}`: components/lib/**/index.ts
  // files: [
  //  'components/lib/Button/index.ts',
  //  'components/lib/Collapse/index.ts',
  //  ...
  // ]
  const files = glob.sync(`${dirPath}/${pattern}`)
  return files.reduce<FileList>((list, file) => {
    if (file.includes('.test.')) return list // 排除测试文件
    const componentName = file.split(/[/.]/)[2]
    const key = suffix ? `${componentName}_${suffix}` : componentName
    list[key] = `./${file}`
    return list
  }, {})
}
// 资源整合函数
const makeList = (): FileList => {
  const cssDir = `${COMPONENTS_DIR}/css`
  const libDir = `${COMPONENTS_DIR}/lib`

  return {
    // 读取 css 目录下的 index.css（包含所有的样式）
    index_style: `./${cssDir}/index.css`,
    // (递归)读取 lib 目录下每个组件的 index.ts 文件（vue插件）
    // 如：Button: './components/lib/Button/index.ts', ...
    ...generateFilesList(libDir, '**/index.ts'),
    // (递归)读取 lib 目录下每个组件的 style.css 文件
    // 如：Button_style: './components/lib/Button/style.css',
    ...generateFilesList(libDir, '**/style.css', 'style')
  }
}
// 所有的资源
const list = makeList()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    rollupOptions: {
      input: list,
      // 不打包这些库
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@element-plus/icons-vue',
        '@popperjs/core',
        'async-validator',
        'axios',
        'lodash-es',
        'element-plus',
        'normalize.css',
        'vue-router'
      ],
      output: [
        {
          // 【打包出来的是保留目录结构,即将每个组件或模块分别打包成独立的文件。便于阅读维护扩展,有利于按需加载特定的组件或模块，使用者可以只引入实际需要的组件，减小应用的体积】
          // 指定输出文件的格式 es、cjs(commonjs)、umd
          // es： ES 模块格式。适用于现代浏览器和打包工具，如 Webpack、Rollup 和 Parcel。这些文件使用 import 和 export 语句，并且可以被现代浏览器原生解析
          // cjs：CommonJS 模块格式。适用于 Node.js 环境和旧版的打包工具。这些文件使用 require 和 module.exports 语法
          // umd：UMD 格式。可以同时用于浏览器和 Node.js 环境。UMD 模块既可以使用 require 导入，也可以使用 import 导入，并且会根据环境自动选择使用哪种方式。
          format: 'es',
          dir: 'dist/es', // 指定构建后输出的目录
          entryFileNames: '[name].js', // 自定义入口文件的输出文件名
          // 构建输出的文件结构将类似于你的源代码目录结构，每个模块都会有一个对应的输出文件
          preserveModules: true, // 构建生产版本时是否保留原始模块结构
          // 指定在启用 preserveModules 时，模块应该被保留的根目录。即哪个目录下的文件需要保留结构
          preserveModulesRoot: `${COMPONENTS_DIR}/lib`,
          assetFileNames: '[name][ext]' // 静态资源的输出文件名 name-文件名, ext-扩展名。静态资源是放在assets目录下
        },
        {
          // 【打包出来的是保留目录结构】
          format: 'commonjs',
          dir: 'dist/lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: `${COMPONENTS_DIR}/lib`,
          assetFileNames: '[name][ext]'
        },
        {
          // 【打包成单文件, 整个库或其部分打包为一个或几个独立的文件，便于在生产环境中快速加载和减少HTTP请求次数】
          format: 'es',
          dir: 'dist',
          entryFileNames: '[name].mjs', // 输出单文件
          assetFileNames: '[name][ext]'
        },
        {
          // 【打包成单文件】
          format: 'commonjs',
          dir: 'dist',
          entryFileNames: '[name].js',
          assetFileNames: '[name][ext]'
        }
      ],
      preserveEntrySignatures: 'strict'
    },
    sourcemap: true, // 对应到具体代码
    emptyOutDir: false
  }
})
