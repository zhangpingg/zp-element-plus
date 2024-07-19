// vite.config.ts
import { defineConfig } from "file:///E:/zhangxiaoshuai/private/zc-elementPlus/02_github_t-ui-plus/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/zhangxiaoshuai/private/zc-elementPlus/02_github_t-ui-plus/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/zhangxiaoshuai/private/zc-elementPlus/02_github_t-ui-plus/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import vueSetupExtend from "file:///E:/zhangxiaoshuai/private/zc-elementPlus/02_github_t-ui-plus/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import viteCompression from "file:///E:/zhangxiaoshuai/private/zc-elementPlus/02_github_t-ui-plus/node_modules/vite-plugin-compression/dist/index.mjs";
import dts from "file:///E:/zhangxiaoshuai/private/zc-elementPlus/02_github_t-ui-plus/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\zhangxiaoshuai\\private\\zc-elementPlus\\02_github_t-ui-plus";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts(),
    vueJsx(),
    vueSetupExtend(),
    viteCompression({
      verbose: true,
      disable: false,
      // 不禁用压缩
      deleteOriginFile: false,
      // 压缩后是否删除原文件
      threshold: 10240,
      // 压缩前最小文件大小
      algorithm: "gzip",
      // 压缩算法
      ext: ".gz"
      // 文件类型
    })
    // visualizer({
    //   open:true,  //注意这里要设置为true，否则无效
    //   gzipSize:true,
    //   brotliSize:true
    // })
  ],
  server: {
    host: "0.0.0.0",
    port: 3300,
    open: true,
    https: false,
    proxy: {
      "^/mes": {
        target: `http://10.0.10.243:5000/mesv2/`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/mes/, "")
      },
      "^/portal-user": {
        target: `http://10.0.10.240:8172`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-user/, "/portal-user")
      },
      "^/portal-sso": {
        target: `http://10.0.10.240:8171`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-sso/, "/portal-sso")
      }
    }
  },
  resolve: {
    // 配置别名
    alias: {
      // '@': resolve(__dirname, 'examples'),
      "@": resolve(__vite_injected_original_dirname, "packages")
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"]
  },
  build: {
    outDir: "lib",
    // cssCodeSplit: true, // 强制内联CSS
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      }
    },
    lib: {
      // entry: resolve(__dirname, 'packages/index.ts'),
      entry: "./packages/index.ts",
      name: "t-ui-plus",
      // formats: ['es', 'cjs'],
      // formats: ['es', 'umd', 'cjs'],
      fileName: "t-ui-plus"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx6aGFuZ3hpYW9zaHVhaVxcXFxwcml2YXRlXFxcXHpjLWVsZW1lbnRQbHVzXFxcXDAyX2dpdGh1Yl90LXVpLXBsdXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHpoYW5neGlhb3NodWFpXFxcXHByaXZhdGVcXFxcemMtZWxlbWVudFBsdXNcXFxcMDJfZ2l0aHViX3QtdWktcGx1c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovemhhbmd4aWFvc2h1YWkvcHJpdmF0ZS96Yy1lbGVtZW50UGx1cy8wMl9naXRodWJfdC11aS1wbHVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJyAvLyBcdThCQkVcdTdGNkVuZW1lXHU1QzVFXHU2MDI3XHJcbi8vIGltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVxyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJyAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUzOEJcdTdGMjlcclxuLy8gaW1wb3J0IHt2aXN1YWxpemVyfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInIC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NFx1ODlDNlx1NTZGRVx1NjU4N1x1NEVGNlxyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBkdHMoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgdnVlU2V0dXBFeHRlbmQoKSxcclxuICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgIHZlcmJvc2U6IHRydWUsXHJcbiAgICAgIGRpc2FibGU6IGZhbHNlLCAvLyBcdTRFMERcdTc5ODFcdTc1MjhcdTUzOEJcdTdGMjlcclxuICAgICAgZGVsZXRlT3JpZ2luRmlsZTogZmFsc2UsIC8vIFx1NTM4Qlx1N0YyOVx1NTQwRVx1NjYyRlx1NTQyNlx1NTIyMFx1OTY2NFx1NTM5Rlx1NjU4N1x1NEVGNlxyXG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBcdTUzOEJcdTdGMjlcdTUyNERcdTY3MDBcdTVDMEZcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcclxuICAgICAgYWxnb3JpdGhtOiAnZ3ppcCcsIC8vIFx1NTM4Qlx1N0YyOVx1N0I5N1x1NkNENVxyXG4gICAgICBleHQ6ICcuZ3onLCAvLyBcdTY1ODdcdTRFRjZcdTdDN0JcdTU3OEJcclxuICAgIH0pLFxyXG4gICAgLy8gdmlzdWFsaXplcih7XHJcbiAgICAvLyAgIG9wZW46dHJ1ZSwgIC8vXHU2Q0U4XHU2MTBGXHU4RkQ5XHU5MUNDXHU4OTgxXHU4QkJFXHU3RjZFXHU0RTNBdHJ1ZVx1RkYwQ1x1NTQyNlx1NTIxOVx1NjVFMFx1NjU0OFxyXG4gICAgLy8gICBnemlwU2l6ZTp0cnVlLFxyXG4gICAgLy8gICBicm90bGlTaXplOnRydWVcclxuICAgIC8vIH0pXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgIHBvcnQ6IDMzMDAsXHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgaHR0cHM6IGZhbHNlLFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgJ14vbWVzJzoge1xyXG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly8xMC4wLjEwLjI0Mzo1MDAwL21lc3YyL2AsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwKSA9PiBwLnJlcGxhY2UoL15cXC9tZXMvLCAnJyksXHJcbiAgICAgIH0sXHJcbiAgICAgICdeL3BvcnRhbC11c2VyJzoge1xyXG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly8xMC4wLjEwLjI0MDo4MTcyYCxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHApID0+IHAucmVwbGFjZSgvXlxcL3BvcnRhbC11c2VyLywgJy9wb3J0YWwtdXNlcicpLFxyXG4gICAgICB9LFxyXG4gICAgICAnXi9wb3J0YWwtc3NvJzoge1xyXG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly8xMC4wLjEwLjI0MDo4MTcxYCxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHApID0+IHAucmVwbGFjZSgvXlxcL3BvcnRhbC1zc28vLCAnL3BvcnRhbC1zc28nKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICAvLyBcdTkxNERcdTdGNkVcdTUyMkJcdTU0MERcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIC8vICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdleGFtcGxlcycpLFxyXG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAncGFja2FnZXMnKSxcclxuICAgIH0sXHJcbiAgICAvLyBcdTdDN0JcdTU3OEJcdUZGMUEgc3RyaW5nW10gXHU1QkZDXHU1MTY1XHU2NUY2XHU2MEYzXHU4OTgxXHU3NzAxXHU3NTY1XHU3Njg0XHU2MjY5XHU1QzU1XHU1NDBEXHU1MjE3XHU4ODY4XHUzMDAyXHJcbiAgICBleHRlbnNpb25zOiBbJy5qcycsICcudHMnLCAnLmpzeCcsICcudHN4JywgJy5qc29uJywgJy52dWUnLCAnLm1qcyddLFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJ2xpYicsXHJcbiAgICAvLyBjc3NDb2RlU3BsaXQ6IHRydWUsIC8vIFx1NUYzQVx1NTIzNlx1NTE4NVx1ODA1NENTU1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBcdThCRjdcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTkwQTNcdTRFOUJcdTRGNjBcdTc2ODRcdTVFOTNcdTRFMkRcdTRFMERcdTk3MDBcdTg5ODFcdTc2ODRcdTRGOURcdThENTZcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxpYjoge1xyXG4gICAgICAvLyBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdwYWNrYWdlcy9pbmRleC50cycpLFxyXG4gICAgICBlbnRyeTogJy4vcGFja2FnZXMvaW5kZXgudHMnLFxyXG4gICAgICBuYW1lOiAndC11aS1wbHVzJyxcclxuICAgICAgLy8gZm9ybWF0czogWydlcycsICdjanMnXSxcclxuICAgICAgLy8gZm9ybWF0czogWydlcycsICd1bWQnLCAnY2pzJ10sXHJcbiAgICAgIGZpbGVOYW1lOiAndC11aS1wbHVzJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnWCxTQUFTLG9CQUFvQjtBQUM3WSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsZUFBZTtBQUN4QixPQUFPLG9CQUFvQjtBQUUzQixPQUFPLHFCQUFxQjtBQUU1QixPQUFPLFNBQVM7QUFSaEIsSUFBTSxtQ0FBbUM7QUFXekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQSxNQUNULGtCQUFrQjtBQUFBO0FBQUEsTUFDbEIsV0FBVztBQUFBO0FBQUEsTUFDWCxXQUFXO0FBQUE7QUFBQSxNQUNYLEtBQUs7QUFBQTtBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1IO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDeEM7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLGtCQUFrQixjQUFjO0FBQUEsTUFDNUQ7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLGlCQUFpQixhQUFhO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBO0FBQUEsSUFFUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUssUUFBUSxrQ0FBVyxVQUFVO0FBQUEsSUFDcEM7QUFBQTtBQUFBLElBRUEsWUFBWSxDQUFDLE9BQU8sT0FBTyxRQUFRLFFBQVEsU0FBUyxRQUFRLE1BQU07QUFBQSxFQUNwRTtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFFUixlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUEsUUFFTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQTtBQUFBO0FBQUEsTUFHTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
