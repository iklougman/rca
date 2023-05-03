import { Col, Row } from "antd";
import React from "react";

export default function DetailGallery() {
  return (
    <>
      <Row>
        <Col span={12}>bla</Col>
        <Col span={12}>
          <Row>
            <Col span={12}>1</Col>
            <Col span={12}>2</Col>
            <Col span={12}>3</Col>
            <Col span={12}>4</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
