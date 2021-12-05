import React from 'react'
import {Row,Col,Button,Card} from 'react-bootstrap';
import {NewContext} from '../../../contexts/NewContext';
import AddCarModal from '../../../components/modal/AddCarModal'
import UpdateCarModal from '../../../components/modal/UpdateCarModal'
import ViewCarModal from '../../../components/modal/ViewCarModal';
import ConfirmModal from '../../../components/modal/ConfirmModal'
import {useContext,useEffect} from 'react';
export default function AdminNew() {
    const {
        newState:{news},
        getNew,
        setShowViewCar
    }=useContext(NewContext);
    useEffect(()=>{
        getNew()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="container" size="sm">
           <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                {news.map(news=>(
                    <Col key={news._id}>
                        <Card border="primary" style={{marginTop:'5px' }}>
                                <Row className="d-flex align-items-center">
                                        
                                        <Card.Body>
                                          
                                            <Card.Title as="h6" style={{height:'40px',textTransform:'uppercase'}}>{news.titleNew}</Card.Title>
                                           
                                            <Card.Img style={{height:'200px'}} variant="top" src={news.imageNewUrl} />
                                            <Card.Text as="h6" style={{height:'40px'}}>  {news.contentNew.slice(0,80) + "..."} </Card.Text>
                                            <div className="d-flex">
                                                <Button  variant="outline-success" size="sm"><i className="far fa-eye"></i></Button>
                                                <Button  style={{marginLeft:'5%'}} variant="outline-info" size="sm"><i className="fas fa-pencil-alt"></i></Button>
                                                <Button  style={{marginLeft:'5%'}} variant="outline-danger"size="sm" ><i className="fas fa-trash-alt"></i></Button>
                                            </div>
                                            <div className="">
                                            
                                            </div>
                                        </Card.Body>
                                    
                                </Row>
                        </Card>
                    </Col>
                    
                ))}
                
           </Row>
           <div className="btn_addCar-admin">
               <Button variant="primary"  >
                    <i className="fas fa-plus-circle"></i>
               </Button>
           </div>
           <AddCarModal />
           <ConfirmModal title="Xác nhận" content="Bạn chắc chắn muốn xoá"   />
          
        </div>
    )
}
