import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
    return defineConfig({
        plugins: [vue()],
        server: {
            // host:'0.0.0.0',
            port: parseInt(loadEnv(mode, process.cwd()).VITE_PORT),
            proxy: {
                "/api": {
                    target: loadEnv(mode, process.cwd()).VITE_PROXY_PORT,
                    changeOrigin: true
                },
            },
        },
        resolve: {
            alias: {
                "@": resolve(__dirname, './src'),
                "*": resolve(''),
            },
        }
    })
}

