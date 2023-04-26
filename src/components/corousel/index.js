import { Carousel } from "antd";
import React, { useRef } from "react";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import './carousel.style.css';

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

const images = ['https://img.freepik.com/premium-photo/ancient-villa-sea-village-rapallo-italian-riviera_155769-2398.jpg?w=2000', 'https://www.publicdomainpictures.net/pictures/210000/velka/everglades-sunset.jpg', 'https://as2.ftcdn.net/v2/jpg/00/91/47/77/1000_F_91477756_PwiualJpxuP8xhdsH3jTDndcNmp8UpZk.jpg', 'https://www.publicdomainpictures.net/pictures/230000/velka/woman-holding-a-drink-1498494640mEP.jpg']

/**
 * 
 * .thumbnail img.portrait {
  width: 100%;
  height: auto;
} for portrats 
 */

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
      {images.map((el, index) => (
        <div className="carousel">
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
                className="thumbnail"
              >
                <img
                  alt="example"
                  className="image"
                  src={el}
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
