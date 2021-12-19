import React, { useContext } from "react";
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
    productState: { products, productsLoading },
  } = useContext(ProductContext);
  const {
    quoteState: { quotes, quotesLoading },
  } = useContext(QuoteContext);
  const {
    orderState: { orders, ordersLoading },
  } = useContext(PayContext);
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
  console.log(daysLength());
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
                backgroundColor: "blue",
                borderColor: "blue",
                id: 1,
                label: "Sản phẩm",
                data: Object.keys(productChart).map((key) => {
                  if (daysLength().includes(key)) {
                    return productChart[key].length;
                  } else {
                    return null;
                  }
                }),
              },
              {
                backgroundColor: "green",
                borderColor: "green",
                id: 2,
                label: "Báo giá",
                data: Object.keys(quoteChart).map((key) => {
                  if (daysLength().includes(key)) {
                    return quoteChart[key].length;
                  } else {
                    return null;
                  }
                }),
              },
              {
                backgroundColor: "red",
                borderColor: "red",
                id: 2,
                label: "Đơn hàng",
                data: Object.keys(orderChart).map((key) => {
                  if(daysLength().includes(key)){
                    return orderChart[key].length;
                  }else{
                    return null;
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
