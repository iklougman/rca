import React from "react";
import { Avatar, Button, Dropdown, message } from "antd";

import { UserOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="Nachrichten" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="Inserate" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="Konto" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a target="_blank" rel="Abmelden" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
  },
];

const AvatarMenu = () => {
  return (
    <Dropdown
      menu={{ items }}
      placement="topRight"
      arrow={{ pointAtCenter: true }}
    >
      <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
        U
      </Avatar>
    </Dropdown>
  );
};

export default AvatarMenu;
