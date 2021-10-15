const quoteRouter=require('./quote');
const productRouter=require('./product');
const commentRouter=require('./comment');

function route(app){
    app.use('/api/products',productRouter)
    app.use('/api/quotes',quoteRouter)
    app.use('/api/comment',commentRouter);
}

module.exports = route;