import { Carousel } from "antd";
import React, { useRef } from "react";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const iconContainerStyle = {
  display: "flex",
  "align-items": "center",
  "justify-content": "space-between",
  height: "100%",
};

export default function ImageCarousel({}) {
  const slider = useRef();
  return (
    <Carousel
      effect="fade"
      ref={(ref) => {
        console.log(ref);
        slider.current = ref;
      }}
    >
      {[1, 2, 3, 4, 5].map((el, index) => (
        <div>
          <h3 style={contentStyle}>
            <div style={iconContainerStyle}>
              <LeftCircleFilled
                style={{
                  fontSize: "20px",
                  position: "relative",
                  zIndex: 2,
                  padding: "0 10px",
                }}
                onClick={() => slider.current.prev()}
              />
              <div
                style={{
                  height: 160,
                  position: "absolute",
                  zIndex: 1,
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              >
                <img
                  alt="example"
                  style={{
                    maxHeight: "100%",
                    margin: "auto",
                  }}
                  src="https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg"
                />
              </div>
              <RightCircleFilled
                style={{ fontSize: "20px", zIndex: 2, padding: "0 10px" }}
                onClick={() => slider.current.next()}
              />
            </div>
          </h3>
        </div>
      ))}
    </Carousel>
  );
}
