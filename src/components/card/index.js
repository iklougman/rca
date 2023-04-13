import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function CardItem() {
  return (
    <Card
      title="Card title"
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      hoverable
      bordered={false}
      style={{ width: 280 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}

export default CardItem;
