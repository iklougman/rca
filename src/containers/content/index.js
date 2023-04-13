import React from "react";
import { Breadcrumb, Card, Col, Layout, Row, theme } from "antd";
import CardItem from "../../components/card";

const { Content } = Layout;

export default function AppContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content className="site-layout" style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
      >
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
          <Col span={4}>
            <CardItem />
          </Col>
        </Row>
      </div>
    </Content>
  );
}
