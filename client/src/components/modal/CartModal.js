import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import {useContext} from 'react';
import ItemCart from './ItemCart';
import {CartContext} from '../../contexts/CartContext'

export default function CartModal() {
    const {showCart, setShowCart} = useContext(CartContext);

    const handleClose = () => setShowCart(false);
    return (
      <>
        <Modal show={showCart} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Giỏ hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ItemCart />
              <ItemCart />
              <ItemCart />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Xem giỏ hàng
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Thanh toán
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
