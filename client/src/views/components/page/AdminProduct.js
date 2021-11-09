import React from 'react'
import {Row,Col,Button,Card} from 'react-bootstrap';
import {useContext,useEffect} from 'react';
import {ProductContext} from '../../../contexts/ProductContext';
import AddCarModal from '../../../components/modal/AddCarModal'
import UpdateCarModal from '../../../components/modal/UpdateCarModal'
import ViewCarModal from '../../../components/modal/ViewCarModal';
import ConfirmModal from '../../../components/modal/ConfirmModal'
export default function AdminProduct() {
    const {
        productState:{products,productLoading},
        getProduct,setShowAddCar,
        showDelCar:{show,productId},
        setShowDelCar,deleteProduct,
        getProductDetail,setShowUpdateCar,
        setShowViewCar

    }=useContext(ProductContext);
    useEffect(()=>{
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleDelProduct = ()=>{
        deleteProduct(productId);
        handleClose();
    }
    const handleClose =() =>setShowDelCar({show:false,productId:''});
    const choseProductUpdate= (productId)=>{
        getProductDetail(productId)
        setShowUpdateCar(true)
    }
    const choseProductView =(productId)=>{
        getProductDetail(productId)
        setShowViewCar(true)
    }
    return (
        <div className="container" size="sm">
           <Row className="row-cols-1 `row-cols-md-2 row-cols-lg-3 mx-auto`">
                {products.map(product=>(
                    <Col key={product._id}>
                        <Card border="primary" style={{marginTop:'5px' }}>
                                <Row className="d-flex align-items-center">
                                    <Col xs={5} style={{padding:'0 0 0 8%'}}>
                                        <Card.Img variant="top" src={product.imgCarUrl} width="100%" />
                                    </Col>
                                    <Col xs={7} style={{padding:'0'}} >
                                        <Card.Body>
                                            <Card.Title as="h6" style={{height:'40px',textTransform:'uppercase'}}>{product.nameCar}</Card.Title>
                                            <div className="d-flex">
                                                <Button onClick={()=>choseProductView(product._id)} variant="outline-success" size="sm"><i className="far fa-eye"></i></Button>
                                                <Button onClick={()=>choseProductUpdate(product._id)} style={{marginLeft:'5%'}} variant="outline-info" size="sm"><i className="fas fa-pencil-alt"></i></Button>
                                                <Button onClick={()=>setShowDelCar({show:true,productId:product._id})} style={{marginLeft:'5%'}} variant="outline-danger"size="sm" ><i className="fas fa-trash-alt"></i></Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                        </Card>
                    </Col>
                ))}
           </Row>
           <div className="btn_addCar-admin">
               <Button variant="primary" onClick={()=>setShowAddCar(true)} >
                    <i className="fas fa-plus-circle"></i>
               </Button>
           </div>
           <AddCarModal />
           <ConfirmModal title="Xác nhận" content="Bạn chắc chắn muốn xoá" show={show} onClick={()=>handleDelProduct()} onClose={handleClose} />
           {productLoading===false&&<UpdateCarModal/>}
           {productLoading===false&&<ViewCarModal />}
        </div>
    )
}
