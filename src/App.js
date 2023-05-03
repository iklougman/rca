import React from "react";
import "./App.css";
import AppHeader from "./containers/header";
import AppContent from "./containers/content";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <AppHeader />
      </Header>

      <Content>
        <AppContent />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
