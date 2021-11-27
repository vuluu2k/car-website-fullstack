import React from 'react'
import {Container,Row,Col, Card} from 'react-bootstrap';
import CardLeft from '../../../components/News/cardleft';
import CardLH from '../../../components/News/cardlh';
import {NewContext} from '../../../contexts/NewContext'
import {useContext,useEffect} from 'react';

export default function NewDetail(props) {
    const {getNew, newState:{news}} = useContext(NewContext)

    useEffect(()=>{
        getNew()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[news]);

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
                        <h4>{props.title}</h4>
                        <p>{props.time}</p>
                        <Card.Img variant="top" src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/cam-bien-lui.jpg" />
                        <Card.Body>
                        <Card.Text>
                            Với nguyên tắc chính để lùi được xe là giữ hướng thân xe chính xác theo hướng muốn di chuyển,
                                nhưng không phải cứ nghĩ thế là làm được. Do bánh dẫn hướng nằm ở phía đầu xe, người tài xế lại bị khuất tầm nhìn, tồn tại nhiều điểm mù, nên muốn đưa chiếc […]
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
                            <CardLeft src={item.imageNewUrl} content={item.titleNew} />
                        </div>
                    ))}
                     </Card.Body>
                </Col>
            </Row>
        </Container>
        
    )
}
