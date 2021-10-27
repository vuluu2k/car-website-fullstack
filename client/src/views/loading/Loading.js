import React from 'react'
import Home from '../components/page/Home';
import Introduce from '../components/page/Introduce';
import Products from '../components/page/Products';
import News from '../components/page/News';
import NewDetail from '../components/page/NewDetail';
import Installment from '../components/page/Installment';
import PriceList from '../components/page/PriceList';
import Contact from '../components/page/Contact';
import Cart from '../components/page/Cart';
import ProductDetail from '../components/page/ProductDetail';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import QuoteModal from '../../components/modal/QuoteModal';
import CartModal from '../../components/modal/CartModal';
import ToastQuote from '../../components/toast/ToastQuote';
import ButtonModal from './ButtonModal';
import {ProductContext} from '../../contexts/ProductContext';
import {CartContext} from '../../contexts/CartContext';
import {ConfirmContext} from '../../contexts/ConfirmContext';
import {useContext,useEffect} from 'react';
import {Spinner} from 'react-bootstrap';
import ConfirmModal from '../../components/modal/ConfirmModal';

export default function Loading({PageRoute}) {
    const {productState:{products,productsLoading},getProduct} = useContext(ProductContext);
    const {showConfirmDeleteProudctInCart:{show,productId},setShowConfirmDeleteProudctInCart}=useContext(ConfirmContext)
    const {deleteCart}= useContext(CartContext);
    useEffect(()=>{
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[products]);
    const handleClickDelete = ()=>{
        deleteCart(productId)
        handleClose()
    }
    const handleClose= ()=>setShowConfirmDeleteProudctInCart({
        show:false,productId:''
    })
    let body;
    if(productsLoading){
        body=(
            <div className="d-flex justify-content-center mt-2">
                <Spinner animation="border" variant='info' />
            </div>
        )
    }
    body=(
        <>
            {PageRoute==='home' &&<Home products={products} />}
            {PageRoute==='introduce' &&<Introduce />}
            {PageRoute==='products' &&<Products />}
            {PageRoute==='news' &&<News />}
            {PageRoute==='newDetail' &&<NewDetail />}
            {PageRoute==='installment' &&<Installment />}
            {PageRoute==='pricelist' &&<PriceList />}
            {PageRoute==='contact' &&<Contact />}
            {PageRoute==='cart' &&<Cart />}
            {PageRoute==='productDetail' &&<ProductDetail products={products} productsLoading={productsLoading} />}
        </>
    )
    return (
        <>
            <Header products={products} />
                {body}
            <Footer products={products} />
            <ToastQuote />
            <QuoteModal />
            <CartModal />
            <ButtonModal/>
            <ConfirmModal title="Xác nhận" content="Bạn muốn bỏ ô tô này ra khỏi giỏ hàng" show={show} onClick={handleClickDelete} onClose={handleClose} />
        </>
    )
}
