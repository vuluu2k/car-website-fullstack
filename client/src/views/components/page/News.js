import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardLH from "../../../components/News/cardlh";
import CardInfor from "../../../components/News/cardinfor";
import CardLeft from "../../../components/News/cardleft";
import { NewContext } from "../../../contexts/NewContext";
import { useContext, useState } from "react";
import PaginationCus from '../../../components/pagination/PaginationCus';

export default function News() {
  const {
    newState: { news },
  } = useContext(NewContext);

  const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    // Get Current Products
    const indexOfLastProduct = currentPage * productsPerPage ;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = news.slice(indexOfFirstProduct,indexOfLastProduct);
    // ChangePage
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }
  return (
    <Container style={{ padding: "36px 0" }}>
      <Row>
        <Col md={8} style={{ textAlign: "center" }}>
          <h2 className="mb-2"> Tin Tức </h2>
          <hr
            style={{
              borderBottom: "4px solid",
              width: "25%",
              color: "rgb(255, 11, 11)",
            }} />
          {currentProducts.map((item) => (
            <div key={item._id}>
              <CardInfor product={item} />
              <hr
                style={{
                  borderBottom: "2px solid",
                  width: "100%",
                  color: "rgb(0, 0, 0)",
                }} />
            </div>
          ))}
          <div className="d-flex justify-content-center pt-5" >
            <PaginationCus
                productsPerPage={productsPerPage}
                totalProducts={news.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
        </Col>
        <Col md={4}>
          <CardLH
            title="HỖ TRỢ TRỰC TUYẾN"
            content="Hotline Đặt Hàng 0815554111"
          />
          <Card.Header
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              fontWeight: "bold",
            }}
          >
            TIN TỨC CẬP NHẬT
          </Card.Header>
          <Card.Body>
            {news.map((item) => (
              <div key={item._id}>
                <CardLeft product={item} />
              </div>
            ))}
          </Card.Body>
        </Col>
      </Row>
      
    </Container>
  );
}
