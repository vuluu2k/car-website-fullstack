import React from 'react'
import {Row, Col} from 'react-bootstrap';
import LineCard from '../../../../components/card/LineCard';

export default function LineCarView() {
    return (
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-10 mx-auto mt-3">
            <Col>
                <LineCard />
            </Col>
            <Col>
                <LineCard />
            </Col>
            <Col>
                <LineCard />
            </Col>
            <Col>
                <LineCard />
            </Col>
            <Col>
                <LineCard />
            </Col>
            <Col>
                <LineCard />
            </Col>
            <Col>
                <LineCard />
            </Col>
            <Col>
                <LineCard />
            </Col>
        </Row>
    )
}
