import React from 'react'
import {Modal,Button,Form,Row,Col,Tab,Nav} from 'react-bootstrap'
import { useContext,useState,useEffect } from 'react';
import {ProductContext} from '../../contexts/ProductContext';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw,ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
export default function UpdateCarModal() {
    const {productState:{product},showUpdateCar,setShowUpdateCar,updateProduct} = useContext(ProductContext);
    const [updateCar,setUpdateCar]=useState(product)
    useEffect(()=>setUpdateCar(product),[product])
    
    
    const {
        nameCar,imgCarUrl,seatsCar,madeInCar,sizeCar,lengthBaseCar,
        engineCar,workCapacityCar,fuelTypeCar,fuelCapacityCar,maxTorqueCar,gearCar,
        driveSystemCar,suspensionCar,brakeCar,powerSteerCar,plateSizeCar,lightCar,
        consumptionInCar,consumptionOutCar,consumptionCar,costCar,maxPowerCar,TypeCar
    }=updateCar;
    // const contentStateCar= ContentState.createFromBlockArray(htmlToDraft(specicalCar).contentBlocks);
    const [previewSource,setPreviewSource]= useState();
    
    const [stateCar,setStateCar]=useState({
        specicalCar: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(product.specicalCar).contentBlocks)),
    })
    useEffect(()=>setStateCar({
        specicalCar: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(product.specicalCar).contentBlocks)),
    }),[product.specicalCar])


    const [stateDesCar,setStateDesCar]=useState({
        descriptionCar:EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(product.descriptionCar).contentBlocks)),
    })
    useEffect(()=>setStateDesCar({
        descriptionCar: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(product.descriptionCar).contentBlocks)),
    }),[product.descriptionCar])


    const onChangeUpdateCarForm= event => setUpdateCar({
        ...updateCar,
        [event.target.name]:event.target.value,
    })
    const onEditorStateChange = (specicalCar) => {
        setStateCar({
            specicalCar,
        });
        setUpdateCar({
            ...updateCar,
            specicalCar:draftToHtml(convertToRaw(specicalCar.getCurrentContent()))
        });
    };
    const onEditorStateChangeDes = (descriptionCar) => {
        setStateDesCar({
            descriptionCar,
        });
        setUpdateCar({
            ...updateCar,
            descriptionCar:draftToHtml(convertToRaw(descriptionCar.getCurrentContent()))
        });
    };
    const { specicalCar } = stateCar;
    const { descriptionCar } = stateDesCar;
    const handleClose=() => {
        setShowUpdateCar(false);
        setUpdateCar(product)
        setPreviewSource();
        setStateCar({
            specicalCar: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(product.specicalCar).contentBlocks)),
        });
        setStateDesCar({
            descriptionCar: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(product.descriptionCar).contentBlocks)),
        })
    }

    const handleFileInputChange=(e)=>{
        const file = e.target.files[0]
        previewFile(file);
    }
    const previewFile = (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setPreviewSource(reader.result)
            setUpdateCar({
                ...updateCar,
                imgCarUrl: reader.result?reader.result:imgCarUrl
            })
        }
    }
    const handleSubmitForm=async (e)=>{
        e.preventDefault();
        if(!previewSource&&!imgCarUrl) {
            alert('Vui lòng chọn ảnh cho sản phẩm')
            return
        }
        await updateProduct(updateCar);
        handleClose();
    }
    return (
        <>
            <Modal
                show={showUpdateCar}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                <Modal.Header closeButton >
                    <Modal.Title >
                        <i  style={{color:'#0069D9'}} className="fas fa-car-side"></i>
                        <span className="pl-2">Sửa thông tin ô tô</span>
                    </Modal.Title>
                </Modal.Header>
                <Form>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Cơ bản</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Nâng Cao</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Modal.Body>
                                        <Form.Group>
                                            <Row>
                                                <Col>
                                                    <Form.Control type='text' name="nameCar" value={nameCar} onChange={onChangeUpdateCarForm} placeholder="Tên sản phẩm"  required/>
                                                </Col>
                                                <Col>
                                                    <Form.Control type='text' name="costCar" value={costCar} onChange={onChangeUpdateCarForm} placeholder="Giá"  required/>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                        <Form.Group >
                                            {
                                                (previewSource||imgCarUrl) && <img src={previewSource||imgCarUrl} className="img-fluid" alt="imgCar"/>
                                            }
                                            <Form.File onChange={handleFileInputChange}  style={{height:'100%'}} name="imgCarUrl" className=" btn btn-primary form-control form-control-sm" id ="imgFile" accept="image/gif, image/jpeg, image/png" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label htmlFor="desPub">
                                                Nội dung nổi bật
                                            </Form.Label>
                                            <Editor
                                                editorState={specicalCar}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onEditorStateChange={onEditorStateChange}
                                                editorStyle={{height: '300px',border:'1px solid #CED4DA',borderRadius:'0.2em'}}
                                                toolbarStyle={{border:'1px solid #CED4DA',borderRadius:'0.2em'}}
                                            />
                                        </Form.Group>
                                    </Modal.Body>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Modal.Body>
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label htmlFor="desPub">
                                                        Mô tả
                                                    </Form.Label>
                                                    <div style={{border: '1px solid #CED4DA',borderRadius: '0.2em'}}>
                                                        <Editor
                                                            editorState={descriptionCar}
                                                            toolbarClassName="toolbarClassName"
                                                            wrapperClassName="wrapperClassName"
                                                            editorClassName="editorClassName"
                                                            onEditorStateChange={onEditorStateChangeDes}
                                                            editorStyle={{height: '300px',border:'1px solid #CED4DA',borderRadius:'0.2em'}}
                                                            toolbarStyle={{border:'1px solid #CED4DA',borderRadius:'0.2em'}}
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Control type="text" name="seatsCar" value={seatsCar} onChange={onChangeUpdateCarForm} placeholder="Số chỗ ngồi" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="TypeCar" value={TypeCar} onChange={onChangeUpdateCarForm} placeholder="Kiểu xe" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="madeInCar" value={madeInCar} onChange={onChangeUpdateCarForm} placeholder="Xuất xứ" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="sizeCar" value={sizeCar} onChange={onChangeUpdateCarForm} placeholder="Kích thước DxRxC" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="lengthBaseCar" value={lengthBaseCar} onChange={onChangeUpdateCarForm} placeholder="Chiều dài cơ sở" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="engineCar" value={engineCar} onChange={onChangeUpdateCarForm} placeholder="Động cơ" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="consumptionInCar" value={consumptionInCar} onChange={onChangeUpdateCarForm} placeholder="Mức tiêu hao nhiên liệu trong đô thị" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Control type="text" name="workCapacityCar" value={workCapacityCar} onChange={onChangeUpdateCarForm} placeholder="Dung tích công tác" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="fuelTypeCar" value={fuelTypeCar} onChange={onChangeUpdateCarForm} placeholder="Loại nhiên liệu" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="fuelCapacityCar" value={fuelCapacityCar} onChange={onChangeUpdateCarForm} placeholder="Dung tích bình nhiên liệu" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="maxPowerCar" value={maxPowerCar} onChange={onChangeUpdateCarForm} placeholder="Công suất cực đại" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="maxTorqueCar" value={maxTorqueCar} onChange={onChangeUpdateCarForm} placeholder="Mô-men xoắn cực đại" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="gearCar" value={gearCar} onChange={onChangeUpdateCarForm} placeholder="Hộp số" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="consumptionOutCar" value={consumptionOutCar} onChange={onChangeUpdateCarForm} placeholder="Mức tiêu hao nhiên liệu ngoài đô thị" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Control type="text" name="driveSystemCar" value={driveSystemCar} onChange={onChangeUpdateCarForm} placeholder="Hệ dẫn động" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="suspensionCar" value={suspensionCar} onChange={onChangeUpdateCarForm} placeholder="Treo trước/sau" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="brakeCar" value={brakeCar} onChange={onChangeUpdateCarForm} placeholder="Phanh trước/sau" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="powerSteerCar" value={powerSteerCar} onChange={onChangeUpdateCarForm} placeholder="Trợ lực lái" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="plateSizeCar" value={plateSizeCar} onChange={onChangeUpdateCarForm} placeholder="Cỡ mâm" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="lightCar" value={lightCar} onChange={onChangeUpdateCarForm} placeholder="Khoảng sáng gầm xe" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control type="text" name="consumptionCar" value={consumptionCar} onChange={onChangeUpdateCarForm} placeholder="Mức tiêu hao nhiên liệu kết hợp" />
                                                </Form.Group>
                                            </Col>
                                            
                                        </Row>
                                    </Modal.Body>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleSubmitForm}>
                            Cập nhật
                        </Button>
                        <Button variant="danger" onClick={handleClose} >
                            Quay lại
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
