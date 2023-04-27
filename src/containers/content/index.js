import React from "react";
import { Breadcrumb, Card, Col, Layout, Row, theme } from "antd";
import CardItem from "../../components/card";
import FilterTabPane from "../../components/filterTabPane";

const { Content } = Layout;

export default function AppContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", maxWidth: "1980px", margin: "auto" }}
    >
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
      >
        <FilterTabPane />
        <Row gutter={[16, 16]}>
          {[...Array(50).keys()].map((el, key) => (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
              xxl={{ span: 4 }}
            >
              <CardItem />
            </Col>
          ))}
        </Row>
      </div>
    </Content>
  );
}
