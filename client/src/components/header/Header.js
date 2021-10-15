import React from 'react'
import NavBar from '../navbar/NavBar';
import {Container} from 'react-bootstrap'
import './Style.css';

export default function Header() {
    return (
        <>
            <div className="topBar">
                <Container className="d-flex justify-content-between align-items-center w-100">
                    <div className="SubTitle">Hyundai đại học công nghiệp-dịch vụ tốt nhất</div>
                    <div className="IconClass">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>Nhận báo giá</div>
                            <div>Giỏ hàng</div>
                        </div>
                    </div>

                </Container>
            </div>
            <div>
                <Container className="d-flex justify-content-between align-items-center centerBar w-100">
                    <div>
                        <img src="http://hyundaimotorvn.com/wp-content/uploads/2021/09/Artboard-1-Copy.png" alt="Logo Huyndai|TcMotor"/>
                    </div>
                    <div className="gps-bar">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/05/x-1.png" alt="gps" width='36' height='34'/>
                            <div className="gps-font">Đại học Công Nghiệp Hà Nội, Bắc Từ Liêm, Hà Nội</div>
                        </div>
                    </div>
                    <div>
                        <div className="font-logo">HyundaiHAUI</div>
                    </div>
                </Container>
            </div>
            <NavBar />
        </>            
    )
}
