import React from 'react'
import {OverlayTrigger,Tooltip} from 'react-bootstrap'
import {useContext} from 'react';
import {QuoteContext} from '../../contexts/QuoteContext';
import {CartContext} from '../../contexts/CartContext';

export default function ButtonModal() {
    const {setShowQuote}= useContext(QuoteContext);
    const {setShowCart}= useContext(CartContext);
    return (
        <>
            <OverlayTrigger
                placement="right"
                delay={{show:250,hide:300}}
                overlay={
                    <Tooltip>
                        <div style={{fontWeight:'bolder'}}>Đăng kí nhận báo giá</div>
                    </Tooltip>
                }
            >
                <button className='btn-floating-quote' variant='dark' onClick={()=>setShowQuote(true)}>
                    <i className="fas fa-money-check text-white"></i>
                </button>
            </OverlayTrigger>
            <OverlayTrigger
                placement="right"
                delay={{show:250,hide:300}}
                overlay={
                    <Tooltip>
                        <div style={{fontWeight:'bolder'}}>Giỏ hàng</div>
                    </Tooltip>
                }
            >
                <button className='btn-floating-cart' variant='dark' onClick={()=>setShowCart(true)}>
                    <i className="fas fa-shopping-cart text-white" style={{marginRight:'2px'}}></i>
                </button>
            </OverlayTrigger>
        </>
    )
}
