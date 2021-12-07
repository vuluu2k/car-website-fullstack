import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import FooterCarousel from '../carousel/FooterCarousel';
import {Link} from 'react-router-dom';
import './Style.css'
import Map from '../map/Map';

export default function Footer({products,image}) {
    return (
        <>
            <Container >
                <FooterCarousel image={image} />
            </Container>
            <Container fluid style={{backgroundColor: '#191919'}} className="text-white"> 
                <Container>
                    <Row style={{padding:'36px 0'}}>
                        <Col md={3}>
                            <div style={{width:'100%'}}>
                                <div style={{fontSize:'19.2px'}}>Thông tin liên hệ</div>
                                <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                                <p className='mt-12'>
                                    <strong>HYUNDAI PHẠM VĂN ĐỒNG</strong>
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/11.png" alt="" width="15" height="22"/> 138 Phạm Văn Đồng- Xuân Đỉnh- Bắc Từ Liêm- Hà Nội
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/12.png" alt="" width="15" height="18"/>
                                    <a href="tel:0898709170" className="font-link"> 0898709170</a>
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/14.png" alt="" width="17" height="12"/>
                                    <span>
                                        <a href="mailto:laptrinhvn2s@gmail.com" className="font-link"> laptrinhvn2s@gmail.com</a>    
                                    </span>
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/15.png" alt="" width="17" height="21"/> hyundaihanoii.vn
                                </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div style={{fontSize:'19.2px'}}>Sản phẩm</div>
                            <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                            {products.map(product=>(
                                <div className="mt-12" key={product._id}>
                                    <Link to={`/products/${product.slug}`} className="font-link">{product.nameCar}</Link>   
                                </div>
                            ))}
                        </Col >
                        <Col md={2}>
                            <div style={{fontSize:'19.2px'}}>Dịch vụ hậu mãi</div>
                            <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                            <div className="mt-12">
                                <Link to='/support' className="font-link">Giới thiệu dịch vụ</Link>   
                            </div>
                            <div className="mt-12">
                                <Link to='/support' className="font-link" >Bảo dưỡng định kỳ</Link>
                            </div>
                            <div className="mt-12">
                                <Link to='/support' className="font-link" >Sửa chữa</Link>
                            </div>
                            <div className="mt-12">
                                <Link to='/support' className="font-link" >Cứu hộ giao thông</Link>
                            </div>
                            <div className="mt-12">
                                <Link to= '/support' className="font-link" >Chính sách bảo hành</Link>
                            </div>
                            <div className="mt-12">
                                <Link to='/support' className="font-link" >Phụ tùng chính hiệu</Link>
                            </div>
                            <div className="mt-12">
                                <Link to='/support' className="font-link" >Đặt lịch bảo dưỡng</Link>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div style={{fontSize:'19.2px'}}>Thông tin truy cập</div>
                            <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                        </Col>
                        <Col md={3}>
                            <div>
                                <div style={{fontSize:'19.2px'}}>Bản đồ</div>
                                <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                                <div className=".map-responsive">
                                    <Map height="30vh"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div style={{height:'40px',backgroundColor:'red'}} className="d-flex justify-content-center align-items-center">
                <div className="font-weight-boler text-white">
                    Copyright &copy; Lưu Công Quang Vũ - Imformation Technology Of HaUi
                </div>
            </div>
        </>
    )
}
