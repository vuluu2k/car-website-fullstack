import React from 'react'
import {Container,Row,Col, Card} from 'react-bootstrap';
import CardLeft from '../../../components/News/cardleft';
import CardLH from '../../../components/News/cardlh';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

export default function NewDetail({news}) {
   const {id} = useParams()
   const NewId=news.find(n=>n._id===id)

    return (
        <Container style={{padding:'36px 0'}}>
            <Row>
                <Col md={8} style={{ textAlign: "center" }}>
                    <h2 
                    className="mb-2"
                    >
                        Tin Tức</h2>
                    <hr style={{borderBottom:'4px solid',width:'25%',color:'rgb(255, 11, 11)'}}/>

                    <Card className="mt-5 container" style={{border:0}}>
                        <h4>{NewId.titleNew}</h4>
                        <p>{NewId.createdAt}</p>
                        <Card.Img variant="top" src={NewId.imageNewUrl} />
                        <Card.Body>
                        <Card.Text>
                        {parse(NewId.contentNew)}
                        </Card.Text>
                        
                        </Card.Body>
                    </Card>

                </Col>
                <Col md={4}>
                    <CardLH title="HỖ TRỢ TRỰC TUYẾN" 
                        content="Hotline Đặt Hàng 0815554111" />
                    <Card.Header style={{backgroundColor:'#dc3545',color:'white',fontWeight:'bold'}}>TIN TỨC CẬP NHẬT</Card.Header>
                    <Card.Body>
                    {news.map(item => (
                        <div key={item._id}>
                            <CardLeft product={item} />
                        </div>
                    ))}
                     </Card.Body>
                </Col>
            </Row>
        </Container>
        
    )
}
