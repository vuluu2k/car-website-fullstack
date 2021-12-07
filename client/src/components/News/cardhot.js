import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function cardnew({product}) {

    return (
        <Card>
            <Link style={{color:'black',textDecoration: 'none'}} to={`/news/${product._id}`}  as={Link}>
                <Card.Img variant="top" src={product.imageNewUrl}  height="250px"/>
            </Link>
            <Card.Body>
                <Link style={{color:'black',textDecoration: 'none'}} to={`/news/${product._id}`}  as={Link}>
                    <Card.Title>{product.titleNew}</Card.Title>
                </Link>
                <Card.Text>
                     {product.contentNew.slice(0, 250) + "..."}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{product.createdAt}</small>
            </Card.Footer>
        </Card>
    )
}

