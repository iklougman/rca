import React from "react";
import { Badge, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons";
import ImageCarousel from "../corousel";

const { Meta } = Card;

function CardItem() {
  return (
    <Badge.Ribbon style={{ top: 250 }} text={<div>500€</div>} color="pink">
      <Card
        title="Card title"
        cover={
          // <img
          //   alt="example"
          //   src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          // />
          <ImageCarousel />
        }
        bordered={true}
        actions={[
          <StarOutlined key="favorite" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        hoverable
        bordered={false}
        // style={{ width: 280 }}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Badge.Ribbon>
  );
}

export default CardItem;
