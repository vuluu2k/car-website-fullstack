import React ,{useContext} from 'react'
import {Modal,Card,Row,Col,Button} from 'react-bootstrap'
import {NewContext} from '../../contexts/NewContext';
import parse from 'html-react-parser';

export default function ViewNewModal() {
    const {newState:{newTT},showViewNew,setShowViewNew,setShowUpdateNew,setShowDelNew}=useContext(NewContext);
    const handleClose = () =>setShowViewNew(false);
    const handleDeleteNew=()=>{
        setShowDelNew({show:true,newId:newTT._id})
        handleClose()
    }
    const handleUpdateNew=()=>{
        setShowUpdateNew(true)
        handleClose()
    }
    return (
        <>
    
          <Modal
            show={showViewNew}
            onHide={handleClose}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
          >
            <Modal.Header>
              <Modal.Title className="w-100 d-flex justify-content-between align-items-center " id="example-custom-modal-styling-title">
                <div>
                    <i className="fas fa-info-circle" style={{color: '#0091FF'}}></i>
                    Thông tin bài viết <span style={{textTransform: 'lowercase'}}>{newTT.titleNew}</span>
                </div>
                <div >
                    <Button style={{marginRight: '5px'}} variant="outline-success" onClick={handleUpdateNew} >Chỉnh sửa ngay</Button>
                    <Button style={{marginRight: '5px'}} variant="outline-danger" onClick={handleDeleteNew}>Xoá</Button>
                    <Button variant="outline-dark" onClick={handleClose} >Quay lại</Button>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Card border="light" style={{ width: '100%' }}>
                        <Row>
                            <Col xs="12" md="6">
                                <Card.Img variant="top" src={newTT.imageNewUrl} />
                            </Col>
                            <Card.Title xs="12" md="6" style={{ textTransform:'uppercase'}}>{newTT.titleNew}</Card.Title>
                        </Row>
                        <Card.Body classNames="mt-4">
                            <Card.Text >
                                {parse(newTT.contentNew)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Modal.Body>
          </Modal>
        </>
      );
}
