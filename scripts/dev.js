import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import Koa from 'koa'
import { createServer as createViteServer } from 'vite'
const viteDir = path.resolve(process.cwd(), 'packages/front')
console.log(viteDir);
async function createSever () {
    const app = new Koa();
    // 以中间件模式创建 Vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑
    // 并让上级服务器接管控制
    const vite = await createViteServer({
        root: process.cwd(),
        logLevel: 'error',
        server: { middlewareMode: true },
        appType: 'custom'
    })

    app.use(vite.middlewares)
    app.use(async (ctx) => {
        try {
            // 1. 获取index.html
            let template = fs.readFileSync(path.resolve(viteDir, 'index.html'), 'utf-8');

            // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
            template = await viteServer.transformIndexHtml(ctx.path, template)

            // 3. 加载服务器入口, vite.ssrLoadModule 将自动转换
            const { render } = await viteServer.ssrLoadModule(path.resolve(viteDir, '/src/entry-server.ts'))

            //  4. 渲染应用的 HTML
            const { renderedHtml } = await render(ctx, {})

            const html = template.replace('<!--app-html-->', renderedHtml)
            ctx.body = template;

        } catch (error) {

        }

    });

    app.listen(3000);
    console.log('http://localhost:3000');
}
// 在端口3000监听:

createSever()