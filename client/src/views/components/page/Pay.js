import React,{useContext} from 'react'
import {
    Row,Col,Container,
    Form,Table,Button
} from 'react-bootstrap';
import {CartContext} from '../../../contexts/CartContext';
import formatToCurrency from '../../../middleware/NumberToVND'
import './css/Pay.css'
export default function Pay() {
    const{getCart} = useContext(CartContext);
    const carts=getCart();
    const sumMoney=()=>{
        let sum =0 ;
        carts.forEach(cart=>{
            sum+=cart.product.costCar*cart.quantity;
        })
        return sum;
    }
    return (
        <Container style={{padding:'36px 0'}}>
            <Form>
                <Row>
                    <Col xs={12} lg={7}>
                        <div className="title_pay ">THÔNG TIN THANH TOÁN</div>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">Tên*</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập tên" required={true} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">Họ*</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập họ" required={true} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">TÊN CÔNG TY(TÙY CHỌN)</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập công ty của bạn"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">QUỐC GIA*</Form.Label>
                                    <Form.Control as="select" required={true}>
                                        <option value="Vietnamese">Việt Nam</option>
                                        <option value="Laos">Lào</option>
                                        <option value="Campuchia">Campuchia</option>
                                        <option value="China">Trung Quốc</option>
                                    </Form.Control>
                                </Form.Group>
                             </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">ĐỊA CHỈ*</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập đia chỉ" required={true} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">MÃ BƯU ĐIỆN(TÙY CHỌN)</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập mã bưu điện nơi ở hiện tại" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">TỈNH/THÀNH PHỐ*</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập tỉnh/thành phố" required={true} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">SỐ ĐIỆN THOẠI*</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập số điện thoại" required={true} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className="font_pay">ĐỊA CHỈ EMAIL*</Form.Label>
                                    <Form.Control type="text" placeholder="Vui lòng nhập địa chỉ email" required={true} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={5}>
                        <div className="d-flex" style={{border:'1px solid red'}}>
                            <Table borderless style={{width:'95%',margin:'auto'}}>
                                <thead>
                                    <tr>
                                        <th>ĐƠN HÀNG CỦA BẠN</th>
                                    </tr>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Tổng số lượng</th>
                                    </tr>
                                </thead>
                                <tbody className=" font-weight-bolder">
                                    {
                                        (carts&&carts.length!==0)?carts.map(cart=>(
                                            <tr>
                                                <td>{cart.product.nameCar} x {cart.quantity}</td>
                                                <td className=" text-red">{formatToCurrency(cart.quantity*cart.product.costCar)}<sup>₫</sup></td>
                                            </tr>
                                        )): 
                                        <tr>
                                            <td>Bạn chưa có xe nào trong giỏ hàng</td>
                                        </tr>
                                    }
                                    <tr style={{borderBottom:'2px solid #E3E3E3'}}>
                                        <td>Tổng phụ</td>
                                        <td className="text-red">{formatToCurrency(sumMoney())}<sup>₫</sup></td>
                                    </tr>
                                    <tr style={{borderBottom:'2px solid #E3E3E3'}}>
                                        <td>Tổng</td>
                                        <td className="text-red">{formatToCurrency(sumMoney())}<sup>₫</sup></td>
                                    </tr>
                                    <tr >
                                        <th colSpan="2" style={{padding:"12px 0"}}>
                                            <Button variant="dark" style={{width:'100%',fontWeight:'600'}}>THANH TOÁN</Button>
                                        </th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
