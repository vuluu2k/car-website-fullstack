import React from 'react'
import {Container,Row,Col, Card} from 'react-bootstrap';
import CardLH from '../../../components/News/cardlh';
import CardInfor from '../../../components/News/cardinfor';
import CardLeft from '../../../components/News/cardleft';
import {NewContext} from '../../../contexts/NewContext'
import {useContext,useEffect} from 'react';


export default function News() {
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
                    {news.map(item => (
                        <div key={item._id}>
                            <CardInfor title={item.titleNew} image={item.imageNewUrl} content={item.contentNew} time={item.createdAt}/>
                            <hr style={{borderBottom:'2px solid',width:'100%',color:'rgb(0, 0, 0)'}}/>
                        </div>
                    
                    ))}

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
