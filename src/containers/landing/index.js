import React from "react";

import { Col, Row } from "antd";
import CardItem from "../../components/card";
import FilterTabPane from "../../components/filterTabPane";

export default function Landing() {
  return (
    <>
      <FilterTabPane />
      <Row gutter={[16, 16]}>
        {[...Array(50).keys()].map((el, key) => (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
            xxl={{ span: 6 }}
          >
            <CardItem />
          </Col>
        ))}
      </Row>
    </>
  );
}
