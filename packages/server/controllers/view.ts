import { Context } from 'koa';
import path from 'path';
import fs from 'fs';

export default class ViewController {
    public static async indexView(ctx: Context) {
        const template = fs.readFileSync(path.resolve(__dirname, '../', 'templates', 'index.html'), 'utf-8');
        ctx.body = template;
    }
    public static async getmd(ctx: Context) {
        fs.readFile('', 'utf-8', (err, data) => {
            if (err) throw err;
            const str = marked(data.toString());
            ctx.json(str);
        })
    }
}