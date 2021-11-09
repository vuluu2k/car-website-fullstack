import React from 'react'
import {Navbar,Nav,NavDropdown,Form, FormControl,Button,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Style.css';

export default function NavBar({products}) {
    return (
        <Navbar style={{zIndex:'1'}} bg="dark" expand="lg" variant="dark" className="shadow" sticky="top" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/home" as={Link} className="font-custom" active >Trang chủ</Nav.Link>
                        <Nav.Link to="/introduce" as={Link} className="font-custom">Giới thiệu</Nav.Link>
                        <NavDropdown title="Sản phẩm" id="basic-nav-dropdown" className="font-custom">
                            {products.map(product=>(
                                <div key={product._id}>
                                    <NavDropdown.Item  to={`/products/${product.slug}`} as={Link} >{product.nameCar}</NavDropdown.Item>
                                </div>
                            ))}
                        </NavDropdown>
                        <Nav.Link to="/news" as={Link} className="font-custom">Tin tức</Nav.Link>
                        <Nav.Link to="/installment" as={Link} className="font-custom">Mua xe trả góp</Nav.Link>
                        <Nav.Link to="/pricelist" as={Link} className="font-custom">Bảng giá xe hyundai</Nav.Link>
                        <Nav.Link to="/contact" as={Link} className="font-custom">Liên hệ</Nav.Link>
                    </Nav>
                    <Form inline>
                        <div className="w-100 d-flex justify-content-center">
                            <FormControl type="text" placeholder="Tìm kiếm..." className="mr-sm-2" size="sm"/>    
                            <Button variant="outline-success" className="font-custom" size="sm"><i className="fas fa-search"></i></Button>  
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
