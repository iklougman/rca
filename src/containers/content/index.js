import React from "react";
import { Layout, theme } from "antd";
import { Routes, Route } from "react-router-dom";
import Landing from "../landing";
import Detail from "../detailPage";

const { Content } = Layout;

export default function AppContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      className="site-layout"
      style={{ padding: "0 50px", maxWidth: "1600px", margin: "auto" }}
    >
      <div
        style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </div>
    </Content>
  );
}
