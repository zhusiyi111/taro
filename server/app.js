const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const fetch = require('node-fetch');

app.use(cors());

app.use(async(ctx, next) => {
    let result = await fetch(`https://bigger.jd.com/m/content.json?projectId=1048205`);
    result = await result.json();
    console.log(result);
    ctx.body = result;
    return await next();
})


app.listen(3000);