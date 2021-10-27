import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function cardinfor(props) {

    return (
        <Card className="mt-5" style={{border:0}}>
            <h4>{props.title}</h4>
            <p>{props.time}</p>
            <Card.Img variant="top" src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/cam-bien-lui.jpg" />
            <Card.Body>
            <Card.Text>
                Với nguyên tắc chính để lùi được xe là giữ hướng thân xe chính xác theo hướng muốn di chuyển,
                    nhưng không phải cứ nghĩ thế là làm được. Do bánh dẫn hướng nằm ở phía đầu xe, người tài xế lại bị khuất tầm nhìn, tồn tại nhiều điểm mù, nên muốn đưa chiếc […]
            </Card.Text>
            <Button variant="outline-danger" to="news/detail" as={Link}><strong>Xem chi tiết <i class="fas fa-chevron-right"></i></strong></Button>
            </Card.Body>
        </Card>
    )
}
