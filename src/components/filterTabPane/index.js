import React from "react";
import { Tabs } from "antd";
import { HomeOutlined, AppleOutlined } from "@ant-design/icons";

export default function FilterTabPane() {
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={[AppleOutlined, HomeOutlined].map((Icon, i) => {
        const id = String(i + 1);

        return {
          label: (
            <span>
              <Icon style={{ fontSize: "40px" }} />
              Tab {id}
            </span>
          ),
          key: id,
          children: `Tab ${id}`,
        };
      })}
    />
  );
}
