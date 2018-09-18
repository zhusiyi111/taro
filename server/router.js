var Router = require('koa-router');
var router = new Router();
const fetch = require('node-fetch');

router.get('/getSkus', async(ctx, next) => {
    let result = await fetch(`https://bigger.jd.com/m/content.json?projectId=1037444`);
    result = await result.json();
    result = result.data.pageModuleList.reduce((acc, v) => {
        const result = v.containerData.children[0].dataMap.skuList.value.data;
        acc = [...acc, ...result];
        return acc;
    }, []);
    ctx.body = result;
    return await next();
});

router.get('/getModules', async(ctx, next) => {
    let skus = await fetch('http://localhost:3001/getSkus');
    skus = await skus.json();
    ctx.body = {
        list: [{
            id: 1,
            tplId: 1,
            data: skus
        }, {
            id: 2,
            tplId: 2,
            data: skus
        }]
    }
    return await next();
})


module.exports = router;