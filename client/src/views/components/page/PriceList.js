import React from 'react';
import {Card,Table,Container,Col} from 'react-bootstrap';
import {useContext,useEffect} from 'react';
import {ProductContext} from '../../../contexts/ProductContext';


export default function PriceList() {
    const {
        productState:{products},
        getProduct,
        showDelCar:{}
    }=useContext(ProductContext);
    useEffect(()=>{
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  

   
    return (
        <Container style={{padding:'36px 0'}}>
            {products.map(product=>(
                <Col key={product._id}>
                    <Card  border="light" style={{ width: '100%' }}>
                        <Card.Header as="h5">{product.nameCar}</Card.Header>

                    <center>
                    <Card.Img variant="top" src={product.imgCarUrl} width="50%" />
                    </center>
                    <Card.Body>
                    <Table  hover style={{borderBottom: '1px solid #DEE2E6'}}>
                        <thead>
                            <tr>
                                <th colSpan="3">Loại xe</th>
                                <th>Giá xe</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3">{product.nameCar}</td>
                                <td>{product.costCar}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Container>
    )
}
