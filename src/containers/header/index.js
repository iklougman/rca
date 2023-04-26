import React from "react";
import { Button, Col, Input, Menu, Row } from "antd";

import { Layout } from "antd";
import AvatarMenu from "../../components/avatarMenu";
const { Header } = Layout;

const { Search } = Input;

const onSearch = (value) => console.log(value);

export default function AppHeader() {
  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              margin: "16px 30px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
        </Col>
        <Col span={10}>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ margin: "16px 30px 16px 0" }}
          />
        </Col>
        <Col span={2}>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          /> */}
          <Button type="primary" size="small" loading>
            Inserat erstellen
          </Button>
        </Col>
        <Col span={2}>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `nav ${index + 1}`,
            }))}
          /> */}
          <AvatarMenu />
        </Col>
      </Row>
    </Header>
  );
}
