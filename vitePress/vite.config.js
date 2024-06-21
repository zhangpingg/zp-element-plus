import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath, URL } from "node:url";
import glob from "glob";

const COMPONENTS_DIR = "components";

const generateFilesList = (dirPath, pattern, suffix = "") => {
    const files = glob.sync(`${dirPath}/${pattern}`);
    return files.reduce((list, file) => {
        const componentName = file.split(/[/.]/)[2];
        const key = suffix ? `${componentName}_${suffix}` : componentName;
        list[key] = `./${file}`;
        return list;
    }, {});
};

const makeList = (dirPath) => {
    return {
        ...generateFilesList(dirPath, "**/index.ts"),
        //...generateFilesList(dirPath, "**/index.css", "style"),
        //...generateFilesList(dirPath, "**/style.css", "style"),
        //...generateFilesList(dirPath, "**/types.ts", "types"),
    };
};

const list = makeList(COMPONENTS_DIR);

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
            "@": fileURLToPath(new URL("./components", import.meta.url)),
        },
    },
    build: {
        sourcemap: true, // 对应到具体代码
        emptyOutDir: false,
        rollupOptions: {
            input: list,
            // 不打包这些库
            external: [
                "vue",
                "@popperjs/core",
                "@fortawesome/fontawesome-svg-core",
                "@fortawesome/free-solid-svg-icons",
                "@fortawesome/vue-fontawesome",
            ],
            output: [
                {
                    format: "es",
                    dir: "dist/es",
                    entryFileNames: "[name].js",
                    preserveModules: true, // 保留原来目录结构
                    preserveModulesRoot: ".",
                    assetFileNames: "[name][extname]",
                },
                {
                    format: "commonjs",
                    dir: "dist/lib",
                    entryFileNames: "[name].js",
                    preserveModules: true,
                    preserveModulesRoot: ".",
                    assetFileNames: "[name][extname]",
                },
                {
                    format: "es",
                    dir: "dist",
                    entryFileNames: "[name].mjs", // 输出单文件
                    assetFileNames: "[name][extname]",
                },
                {
                    format: "commonjs",
                    dir: "dist",
                    entryFileNames: "[name].js",
                    assetFileNames: "[name][extname]",
                },
            ],
            preserveEntrySignatures: "strict",
        },
    },
});
