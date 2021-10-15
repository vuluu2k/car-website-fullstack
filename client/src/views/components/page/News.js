import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap';
import TheThongBao from '../../../components/thethongbao/TheThongBao';

export default function News() {
    return (
        <Container style={{padding:'36px 0'}}>
            <Row>
                <Col md={8}>
                    <Card>
                        <Card.Img variant="top" src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/cam-bien-lui.jpg" />
                        <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <TheThongBao title="HỖ TRỢ TRỰC TUYẾN" 
                        content="Hotline Đặt Hàng 0815554111" />
                    <TheThongBao title="TIN TỨC CẬP NHẬT" content="ok"/>
                </Col>
            </Row>
        </Container>
    )
}
