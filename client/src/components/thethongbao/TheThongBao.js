import React from 'react'
import {Card} from 'react-bootstrap';

export default function TheThongBao(props) {
    const array=props.content;

    return (
        <Card
            bg='Danger'
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header style={{backgroundColor:'red',color:'white',fontWeight:'bold'}}>{props.title}</Card.Header>
            <Card.Body>
            <Card.Title>{props.content}</Card.Title>
            <Card.Title>{props.content1}</Card.Title>
            <Card.Title>{props.content2}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}
