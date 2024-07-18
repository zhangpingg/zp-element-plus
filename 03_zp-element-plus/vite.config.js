import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8090,
    },
    plugins: [vue()],
    //resolve: {
    //    //alias: {
    //    //  "@": path.resolve(__dirname, "src"),
    //    //  extensions: [".js", ".vue", ".json"],
    //    //},
    //},
    resolve: {
        // 配置别名
        alias: {
            // '@': resolve(__dirname, 'examples'),
            "@": resolve(__dirname, "packages"),
        },
        // 类型： string[] 导入时想要省略的扩展名列表。
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"],
    },
    build: {
        sourcemap: true, // 对应到具体代码
        emptyOutDir: false,
    },
});
