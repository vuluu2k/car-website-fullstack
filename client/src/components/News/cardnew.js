import React from 'react'
import {Card} from 'react-bootstrap';

export default function cardnew(props) {

    return (
        <Card
            bg='Danger'
            className="mb-2"
        >
            <Card.Header style={{backgroundColor:'#dc3545',color:'white',fontWeight:'bold'}}>{props.title}</Card.Header>
            <Card.Body>
            <Card.Title>{props.content}</Card.Title>
            <Card.Title>{props.content1}</Card.Title>
            <Card.Title>{props.content2}</Card.Title>
            <Card.Text>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}
