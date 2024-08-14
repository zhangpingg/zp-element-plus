import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3001,
        cors: true,
        proxy: {
            '/test/api': {
                target: 'http://10.1.13.23',
                changeOrigin: true,
                bypass(req, res, options) {
                    const realUrl = new URL(req.url || '', options.target).href || '';
                    res.setHeader('x-res-proxyUrl', realUrl);
                },
            },
        },
    },
    resolve: {
        // 配置别名
        alias: {
            '@packages': fileURLToPath(new URL('../packages', import.meta.url)),
        },
        // 类型： string[] 导入时想要省略的扩展名列表
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
    },
});
