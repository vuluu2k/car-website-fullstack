import React from 'react'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default function LineCard() {
    return (
        <Card to={'/product-category/'} as={Link} style={{ width: '100%',marginTop: '5px'}}>
            <Card.Img variant="top" src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/kona-450x300.png" />
            <Card.Body style={{backgroundColor:'#343A40',padding:'10px'}}>
                <Card.Text style={{textAlign:'center',fontSize:'14px',fontWeight:'bolder',color:'white'}}>HYUNDAI SOLATI</Card.Text>
            </Card.Body>
        </Card>
    )
}
