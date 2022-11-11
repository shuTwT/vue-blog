import { Context } from 'koa';
import path from 'path';
import fs from 'fs';
import { marked } from 'marked';

export default class ViewController {
    public static async indexView(ctx: Context) {
        const template = fs.readFileSync(path.resolve(__dirname, '../', 'templates', 'index.html'), 'utf-8');
        ctx.body = template;
    }
    public static async getmd(ctx: Context) {
        const data = fs.readFileSync(path.resolve(__dirname, '../', 'public', 'guide.md'), 'utf-8');
        const str = marked.parse(data.toString());
        ctx.set("Content-Type", "application/json")
        ctx.body = JSON.stringify(str);
    }
}