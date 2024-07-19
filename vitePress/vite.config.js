import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8090,
    },
    plugins: [vue()],
    resolve: {
        // 配置别名
        alias: {
            "@": resolve(__dirname, "packages"),
        },
        // 类型： string[] 导入时想要省略的扩展名列表。
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"],
    },
    build: {
        outDir: "lib",
        emptyOutDir: true,
        // cssCodeSplit: true, // 强制内联CSS
        rollupOptions: {
            // 请确保外部化那些你的库中不需要的依赖
            external: ["vue"],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: "Vue",
                },
            },
        },
        lib: {
            entry: "./packages/index.js",
            name: "zp-element-plus",
            fileName: "zp-element-plus",
        },
    },
});
