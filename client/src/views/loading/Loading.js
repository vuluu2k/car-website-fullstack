import React from 'react'
import Home from '../components/page/Home';
import Introduce from '../components/page/Introduce';
import Products from '../components/page/Products';
import News from '../components/page/News';
import Installment from '../components/page/Installment';
import PriceList from '../components/page/PriceList';
import Contact from '../components/page/Contact';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import QuoteModal from '../../components/modal/QuoteModal';
import CartModal from '../../components/modal/CartModal';
import QuoteContextProvider from '../../contexts/QuoteContext';
import CartContextProvider from '../../contexts/CartContext';
import ButtonModal from './ButtonModal';

export default function Loading({PageRoute}) {
    
    let body;
    body=(
        <>
            {PageRoute==='home' &&<Home />}
            {PageRoute==='introduce' &&<Introduce />}
            {PageRoute==='products' &&<Products />}
            {PageRoute==='news' &&<News />}
            {PageRoute==='installment' &&<Installment />}
            {PageRoute==='pricelist' &&<PriceList />}
            {PageRoute==='contact' &&<Contact />}
        </>
    )
    return (
        <QuoteContextProvider>
            <CartContextProvider>
                <Header />
                    {body}
                <Footer />
                <QuoteModal />
                <CartModal />
                <ButtonModal/>
            </CartContextProvider>
        </QuoteContextProvider>
    )
}
