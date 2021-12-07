import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { NewContext } from "../../../contexts/NewContext";
import AddNewModal from "../../../components/modal/AddNewsModal";
import UpdateNewModal from "../../../components/modal/UpdateNewModal";
import ViewNewModal from "../../../components/modal/ViewNewModel";
import ConfirmModal from "../../../components/modal/ConfirmModal";
import { useContext, useEffect } from "react";
export default function AdminNew() {
  const {
    newState: { news, newLoading },
    getNew,
    setShowAddNew,
    showDelNew: { show, newId },
    setShowDelNew,
    deleteNew,
    getNewDetail,
    setShowUpdateNew,
    setShowViewNew,
  } = useContext(NewContext);

  useEffect(() => {
    getNew();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news]);

  const handleDelNew = ()=>{
    deleteNew(newId);
    handleClose();
  }
  const handleClose =() =>setShowDelNew({show:false,newId:''});
  const choseNewUpdate= (newId)=>{
      getNewDetail(newId)
      setShowUpdateNew(true)
  }
  const choseNewView =(newId)=>{
    getNewDetail(newId)
    setShowViewNew(true)
  }
  return (
    <div className="container" size="sm">
      <Row className="row-cols-1 row-cols-md-2 mx-auto">
        {news.map((news) => (
          <Col key={news._id}>
            <Card border="primary" style={{ marginTop: "5px" }}>
              <Row className="d-flex align-items-center">
                    <Col xs={7} style={{padding:'0 0 0 8%'}}>
                      <Card.Img style={{ height: "200px" }} variant="top" src={news.imageNewUrl}/>
                    </Col>
                    <Col xs={5} style={{padding:'0'}} >
                        <Card.Body>
                            <Card.Title  as="h6" style={{ height: "40px", textTransform: "uppercase" }}>
                              {news.titleNew}
                            </Card.Title>
                            <div className="d-flex mt-4" style={{ justifyContent: "center" }}>
                              <Button variant="outline-success" size="sm" onClick={()=>choseNewView(news._id)}>
                                <i className="far fa-eye"></i>
                              </Button>
                              <Button style={{ marginLeft: "5%" }} variant="outline-info"  size="sm" onClick={()=>choseNewUpdate(news._id)}>
                                <i className="fas fa-pencil-alt"></i>
                              </Button>
                              <Button   style={{ marginLeft: "5%" }}  variant="outline-danger"  size="sm" onClick={()=>setShowDelNew({show:true,newId:news._id})}>
                                <i className="fas fa-trash-alt"></i>
                              </Button>
                            </div>
                        </Card.Body>
                    </Col>
                  

                  
                  
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="btn_addCar-admin">
        <Button variant="primary" onClick={() => setShowAddNew(true)}>
          <i className="fas fa-plus-circle"></i>
        </Button>
      </div>
      <AddNewModal />
      {newLoading===false&&<ViewNewModal />}
      {newLoading===false&&<UpdateNewModal />}
      <ConfirmModal title="Xác nhận" content="Bạn chắc chắn muốn xoá" show={show} onClick={()=>handleDelNew()} onClose={handleClose}/>
    </div>
  );
}
