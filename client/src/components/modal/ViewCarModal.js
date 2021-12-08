import React ,{useContext} from 'react'
import {Modal,Card,Row,Col,Nav,Tab,Table,Button} from 'react-bootstrap'
import {ProductContext} from '../../contexts/ProductContext';
import parse from 'html-react-parser';

export default function ViewCarModal() {
    const {productState:{product},showViewCar,setShowViewCar,setShowUpdateCar,setShowDelCar}=useContext(ProductContext);
    const handleClose = () =>setShowViewCar(false);
    const formatToCurrency=amount=>{
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const handleDeleteProduct=()=>{
        setShowDelCar({show:true,productId:product._id})
        handleClose()
    }
    const handleUpdateProduct=()=>{
        setShowUpdateCar(true)
        handleClose()
    }
    return (
        <>
    
          <Modal
            show={showViewCar}
            onHide={handleClose}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
          >
            <Modal.Header>
              <Modal.Title className="w-100 d-flex justify-content-between align-items-center " id="example-custom-modal-styling-title">
                <div>
                    <i className="fas fa-info-circle" style={{color: '#0091FF'}}></i>
                    Thông tin ô tô <span style={{textTransform: 'lowercase'}}>{product.nameCar}</span>
                </div>
                <div >
                    <Button style={{marginRight: '5px'}} variant="outline-success" onClick={handleUpdateProduct} >Chỉnh sửa ngay</Button>
                    <Button style={{marginRight: '5px'}} variant="outline-danger" onClick={handleDeleteProduct}>Xoá</Button>
                    <Button variant="outline-dark" onClick={handleClose} >Quay lại</Button>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Card border="light" style={{ width: '100%' }}>
                        <Row>
                            <Col xs="12" md="7">
                                <Card.Img variant="top" src={product.imgCarUrl} />
                            </Col>
                            <Col xs="12" md="5">
                                <Card.Body>
                                    <Card.Title style={{ textTransform:'uppercase'}}>{product.nameCar}</Card.Title>
                                    <Card.Text >
                                        {parse(product.specicalCar)}
                                    </Card.Text>
                                    <div style={{color:'red',fontSize:'20px',fontweight:'bold'}} className="d-flex justify-content-between">
                                        {formatToCurrency(product.costCar)}₫
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Nav variant="tabs" style={{backgroundColor:'#F2F2F2'}} >
                                <Nav.Item style={{padding:'0 4px'}}>
                                    <Nav.Link eventKey="first">Mô tả</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{padding:'0 4px'}}>
                                    <Nav.Link eventKey="second">Thông số</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    {parse(product.descriptionCar)}
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th width="50%">Thuộc tính</th>
                                                <th>Chỉ số</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Tên xe</th>
                                                <td>{product.nameCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Số chỗ ngồi</th>
                                                <td>{product.seatsCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Kiểu xe</th>
                                                <td>{product.TypeCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Xuất xứ</th>
                                                <td>{product.madeInCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Kích thước DxRxC</th>
                                                <td>{product.sizeCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Chiều dài cơ sở</th>
                                                <td>{product.lengthBaseCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Động cơ</th>
                                                <td>{product.engineCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Dung tích công tác</th>
                                                <td>{product.workCapacityCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Loại nhiên liệu</th>
                                                <td>{product.fuelTypeCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Dung tích bình nhiên liệu</th>
                                                <td>{product.fuelCapacityCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Công suất cực đại</th>
                                                <td>{product.maxPowerCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Mô-men xoắn cực đại</th>
                                                <td>{product.maxTorqueCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Hộp số</th>
                                                <td>{product.gearCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Hệ dẫn động</th>
                                                <td>{product.driveSystemCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Treo trước/sau</th>
                                                <td>{product.suspensionCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Phanh trước/sau</th>
                                                <td>{product.brakeCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Trợ lực lái</th>
                                                <td>{product.powerSteerCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Cỡ mâm</th>
                                                <td>{product.plateSizeCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Khoảng sáng gầm xe</th>
                                                <td>{product.lightCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Mức tiêu hao nhiên liệu trong đô thị</th>
                                                <td>{product.consumptionInCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Mức tiêu hao nhiên liệu ngoài đô thị</th>
                                                <td>{product.consumptionOutCar}</td>
                                            </tr>
                                            <tr>
                                                <th>Mức tiêu hao nhiên liệu kết hợp</th>
                                                <td>{product.consumptionCar}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab.Pane>
                            </Tab.Content>
                    </Tab.Container>
                </div>
            </Modal.Body>
          </Modal>
        </>
      );
}
