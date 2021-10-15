import React from 'react'
import {Row,Col} from 'react-bootstrap';
import BuyCard from '../../../../components/card/BuyCard';
export default function PleaseBuyACar() {
    return (
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-auto mt-3">
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
            <Col style={{padding:'0 5px'}}>
                <BuyCard />
            </Col>
        </Row>
    )
}
