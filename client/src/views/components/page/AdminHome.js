import React, { useContext, useEffect } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { ProductContext } from "../../../contexts/ProductContext";
import { QuoteContext } from "../../../contexts/QuoteContext";
import { PayContext } from "../../../contexts/PayContext";
import "chart.js/auto";
import dayjs from "dayjs";
import { groupBy } from "lodash";
import { Chart } from "react-chartjs-2";

export default function AdminHome() {
  const {
    productState: { products, productsLoading }, getProduct
  } = useContext(ProductContext);
  const {
    quoteState: { quotes, quotesLoading },getQuote
  } = useContext(QuoteContext);
  const {
    orderState: { orders, ordersLoading },getOrder
  } = useContext(PayContext);
  useEffect(()=>{
    getProduct()
    getQuote()
    getOrder()
  },[])
  const productChart = groupBy(products, (item) => {
    return dayjs(item.createdAt).format("DD-MM-YYYY");
  });
  const quoteChart = groupBy(quotes, (item) => {
    return dayjs(item.createdAt).format("DD-MM-YYYY");
  });
  const orderChart = groupBy(orders, (item) => {
    return dayjs(item.createdAt).format("DD-MM-YYYY");
  });
  const productLengthChart = Object.keys(productChart).map((key) => key);
  const quoteLengthChart = Object.keys(quoteChart).map((key) => key);
  const orderLengthChart = Object.keys(orderChart).map((key) => key);
  const daysLength = function () {
    if (productLengthChart.length > quoteLengthChart.length) {
      if (productLengthChart.length > orderLengthChart.length) {
        return productLengthChart;
      } else {
        return orderLengthChart;
      }
    } else {
      return quoteLengthChart;
    }
  };
  if (productsLoading && quotesLoading && ordersLoading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "30%" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div className="container">
      <Row className="row-cols-1 row-cols-lg-3">
        <Col>
          <Card border="primary" style={{ width: "100%" }} className="mb-2">
            <Card.Header>SẢN PHẨM</Card.Header>
            <Card.Body>
              <Card.Title> {products.length} sản phẩm hiện có </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="success" style={{ width: "100%" }} className="mb-2">
            <Card.Header>KHÁCH HÀNG NHẬN BÁO GIÁ</Card.Header>
            <Card.Body>
              <Card.Title> {quotes.length} đang chờ báo giá </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="danger" style={{ width: "100%" }} className="mb-2">
            <Card.Header>ĐƠN HÀNG HIỆN CÓ</Card.Header>
            <Card.Body>
              <Card.Title> {orders.length} khách hàng đặt hàng </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Chart
          type="line"
          datasetIdKey="id"
          data={{
            labels: daysLength(),
            datasets: [
              {
                backgroundColor: "rgb(0, 0, 255,0.4)",
                borderWidth: 3,
                borderColor: "blue",
                tension:0.4,
                fill:"start",
                id: 1,
                label: "Sản phẩm",
                data: Object.keys(productChart).map((key) => {
                  if (daysLength().includes(key)) {
                    return productChart[key].length;
                  } else {
                    return 0;
                  }
                }),
              },
              {
                backgroundColor: "rgb(0, 128, 0,0.4)",
                borderWidth: 3,
                borderColor: "green",
                tension:0.4,
                fill:"start",
              },
              {
                backgroundColor: "rgb(255, 0, 0,0.4)",
                borderWidth: 3,
                borderColor: "red",
                tension:0.4,
                fill:"start",
                id: 2,
                label: "Đơn hàng",
                data: Object.keys(orderChart).map((key) => {
                  if(daysLength().includes(key)){
                    return orderChart[key].length;
                  }else{
                    return 0;
                  }
                }),
              },
            ],
          }}
        />
      </Row>
    </div>
  );
}
