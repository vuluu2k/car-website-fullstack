import React from 'react'
import {Card,Button} from 'react-bootstrap';

export default function ItemCart() {
    return (
        <Card border="light" style={{ width: '100%' }}>
            <div className="d-flex justify-content-between align-items-center">
                <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/new-santa-fe-2-2-dau-cao-cap-1806197j28891-e1631945340950.jpg" alt="" width="30%" height="30%" />
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Card.Title>HYUNDAI TUCSON 2021</Card.Title>
                            <Card.Text style={{color:'red'}}>
                                623,900,000 ₫
                            </Card.Text>
                        </div>
                        <Button variant="light"><i class="fas fa-trash-alt"></i></Button>
                    </div>
                </Card.Body>
            </div>
        </Card>
    )
}
