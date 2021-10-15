import React from 'react'
import {Button,Form,Modal,} from 'react-bootstrap'
import {useContext} from 'react';
import {QuoteContext} from '../../contexts/QuoteContext';

export default function QuoteModal() {
    const {showQuote, setShowQuote} = useContext(QuoteContext);

    const handleClose = () => setShowQuote(false);
    const props={name:'Lưu Công Quang Vũ',phone:'0898709170',products:''}
    return (
      <>
        <Modal show={showQuote} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Đăng ký nhận báo giá</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Form.Group>
                    <Form.Control type='text' placeholder='Họ và tên' value={props.name} name='name' required aria-describedby='name-help' />
                    <Form.Text id='name-help'>Required</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Control type='text' placeholder='Số điện thoại' value={props.phone} name='name' required/>
                </Form.Group>
                <Form.Group>
                    <Form.Control as='select' value={props.products} name='name'>
                        <option value='Huyndai tucson'>HUYNDAI TUCSON</option>
                        <option value='Huyndai tucson'>HUYNDAI TUCSON</option>
                        <option value='Huyndai tucson'>HUYNDAI TUCSON</option>
                        <option value='Huyndai tucson'>HUYNDAI TUCSON</option>
                    </Form.Control>
                </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
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
