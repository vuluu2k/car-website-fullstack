const quoteRouter=require('./quote');
const productRouter=require('./product');
const commentRouter=require('./comment');
const accountRouter=require('./account');
function route(app){
    app.use('/api/products',productRouter);
    app.use('/api/quotes',quoteRouter);
    app.use('/api/comments',commentRouter);
    app.use('/api/accounts',accountRouter);
}

module.exports = route;