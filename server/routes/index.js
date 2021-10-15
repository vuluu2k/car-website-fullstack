const quoteRouter=require('./quote');
const productRouter=require('./product');
function route(app){
    app.use('/api/products',productRouter)
    app.use('/api/quotes',quoteRouter)
}

module.exports = route;