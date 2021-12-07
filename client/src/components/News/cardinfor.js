import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function cardinfor({product}) {

    return (
        <Card className="mt-5" style={{border:0}}>
            <h4>{product.titleNew}</h4>
            <p>{product.createdAt}</p>
            <Card.Img variant="top" src={product.imageNewUrl} />
            <Card.Body>
            <Card.Text>
                {product.contentNew.slice(0, 250) + "..."}
            </Card.Text>
            <Button variant="outline-danger" to={`/news/${product._id}`}  as={Link}><strong>Xem chi tiết <i class="fas fa-chevron-right"></i></strong></Button>
            </Card.Body>
        </Card>
    )
}
