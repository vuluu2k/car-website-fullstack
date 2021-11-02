const quoteRouter=require('./quote');
const productRouter=require('./product');
const commentRouter=require('./comment');
const accountRouter=require('./account');
const newRouter= require('./new');
function route(app){
    app.use('/api/products',productRouter);
    app.use('/api/quotes',quoteRouter);
    app.use('/api/comments',commentRouter);
    app.use('/api/accounts',accountRouter);
    app.use('/api/news', newRouter);
}

module.exports = route;