import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
//import vueSetupExtend from 'vite-plugin-vue-setup-extend'; // 设置neme属性
// import AutoImport from 'unplugin-auto-import/vite' // 自动导入
import viteCompression from 'vite-plugin-compression'; // 静态资源压缩

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts(),
        vueJsx(),
        //vueSetupExtend(),
        viteCompression({
            verbose: true,
            disable: false, // 不禁用压缩
            deleteOriginFile: false, // 压缩后是否删除原文件
            threshold: 10240, // 压缩前最小文件大小
            algorithm: 'gzip', // 压缩算法
            ext: '.gz', // 文件类型
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
