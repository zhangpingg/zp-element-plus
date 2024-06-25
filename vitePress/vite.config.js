import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

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
        alias: {
            //"@": path.resolve(__dirname, "components"),
            //"@": fileURLToPath(new URL("./components", import.meta.url)),
        },
    },
    build: {
        sourcemap: true, // 对应到具体代码
        emptyOutDir: false,
    },
});
