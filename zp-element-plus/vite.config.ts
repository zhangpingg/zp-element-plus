import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import vueSetupExtend from 'vite-plugin-vue-setup-extend'; // 设置组件neme属性
// import AutoImport from 'unplugin-auto-import/vite' // 自动导入
import viteCompression from 'vite-plugin-compression'; // 静态资源压缩
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts(),
        vueJsx(),
        vueSetupExtend(),
        viteCompression({
            verbose: true, // 是否开启详细日志输出
            algorithm: 'gzip', // 压缩算法，默认为 'gzip'
            ext: '.gz', // 压缩文件的扩展名，默认为 '.gz'
            deleteOriginFile: false, // 是否删除源文件，默认为 false（不删除）
            threshold: 10240, // 压缩阈值，只对大于 10KB 的文件进行压缩
            disable: false, // 是否禁用压缩功能，默认 false（不禁用，即开启压缩）
        }),
        visualizer({
            filename: 'stats.html', // 输出文件的名称。默认 stats.html
            open: false, // 打包完成后自动打开生成的HTML文件，默认 true
            gzipSize: true, // 否考虑 gzip 压缩后的大小
            brotliSize: true, // 否考虑 Brotli 压缩后的大小
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 3000,
        cors: true,
    },
    resolve: {
        // 配置别名
        alias: {
            '@': fileURLToPath(new URL('./packages', import.meta.url)),
        },
        // 类型： string[] 导入时想要省略的扩展名列表。
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
    },
    build: {
        outDir: 'lib',
        emptyOutDir: true,
        // cssCodeSplit: true, // 强制内联CSS
        rollupOptions: {
            // 指定哪些模块不被打包进最终的 bundle 中，而是作为外部依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
                format: 'es',
            },
        },
        lib: {
            entry: './packages/index.ts',
            name: 'zp-element-plus',
            fileName: 'zp-element-plus',
        },
    },
});
