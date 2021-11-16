import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function cardnew(props) {

    return (
        <Card>
            <Link style={{color:'black',textDecoration: 'none'}}>
                <Card.Img variant="top" src={props.src}  height="250px"/>
            </Link>
            <Card.Body>
                <Link style={{color:'black',textDecoration: 'none'}}>
                    <Card.Title>{props.title}</Card.Title>
                </Link>
                <Card.Text>
                    {props.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.time}</small>
            </Card.Footer>
        </Card>
    )
}

