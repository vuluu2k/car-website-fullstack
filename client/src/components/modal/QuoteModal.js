import React from 'react'
import {Button,Form,Modal} from 'react-bootstrap'
import {useContext,useState} from 'react';
import {QuoteContext} from '../../contexts/QuoteContext';
import {ProductContext} from '../../contexts/ProductContext';

export default function QuoteModal() {
    const {showQuote, setShowQuote,createQuote,setShowToastQuote} = useContext(QuoteContext);
    const {productState:{products}}=useContext(ProductContext);
    const [newQuote,setNewQuote]=useState({
      nameQuote:'',
      phoneQuote:'',
      product:'',
    })
    const {nameQuote, phoneQuote,product} =newQuote;
    const onChangeCreateQuoteForm= event => setNewQuote({
      ...newQuote,
      [event.target.name]:event.target.value
    })
    const onSubmit = async event=>{
      event.preventDefault();
      const {success,message}=await createQuote(newQuote);
      setShowToastQuote({show:success,message});
      handleClose();
    }

    const handleClose = () => setShowQuote(false);
    return (
      <>
        <Modal show={showQuote} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Đăng ký nhận báo giá</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form.Group>
                    <Form.Control type='text' placeholder='Họ và tên' value={nameQuote} name='nameQuote' onChange={onChangeCreateQuoteForm} required aria-describedby='name-help' />
                    <Form.Text id='name-help'>Required</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Control type='text' placeholder='Số điện thoại' value={phoneQuote} name='phoneQuote' onChange={onChangeCreateQuoteForm} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Control as='select' value={product} name='product' onChange={onChangeCreateQuoteForm} required>
                        <option value="">--Chọn sản phẩm muốn nhận báo giá--</option>
                        {products.map(product=>(
                          <option value={product._id} key={product._id}>{product.nameCar}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={onSubmit}>
              Nhận báo giá
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Quay lại
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
