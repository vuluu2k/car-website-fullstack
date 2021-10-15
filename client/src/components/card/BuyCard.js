import React from 'react'
import {Card,Button} from 'react-bootstrap';
export default function BuyCard() {
    return (
        <Card border="light" style={{ width: '100%'}}>
            <Card.Img variant="top" src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/kona-450x300.png" />
            <Card.Body>
                <Card.Title style={{textAlign:'center',fontSize:'14px',fontWeight:'bolder'}}>HYUNDAI SOLATI</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{color:'red',fontSize:'16px'}}><strong>Giá:</strong> <span style={{color:'#CE0303',fontWeight:'bold',fontSize:'14px'}}>1,569,000,000₫</span></div>
                    <Button variant="danger" size="sm"><strong>ĐẶT HÀNG</strong></Button>
                </div>
            </Card.Body>
        </Card>
    )
}
