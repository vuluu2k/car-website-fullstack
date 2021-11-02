import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function cardinfor(props) {

    return (
        <Card className="mt-5" style={{border:0}}>
            <h4>{props.title}</h4>
            <p>{props.time}</p>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
            <Card.Text>
                {props.content}
            </Card.Text>
            <Button variant="outline-danger" to="news/detail" as={Link}><strong>Xem chi tiết <i class="fas fa-chevron-right"></i></strong></Button>
            </Card.Body>
        </Card>
    )
}
