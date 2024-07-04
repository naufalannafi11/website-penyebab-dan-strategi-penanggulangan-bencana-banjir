import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HeaderComp() {
  return (
    <div className="header">
      <Carousel>
        <Carousel.Item>
          <img
            className="imgHeader"
            src={require("../assets/img/header/header1.jpg")}
            alt="header 1"
            width={1300}
          />
          <Carousel.Caption>
            <a className="link" href="#">
              Data Pendidikan Tahun Pelajaran 2023/2024 januari
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgHeader"
            src={require("../assets/img/header/header2.jpg")}
            alt="header 2"
            width={1300}
          />
          <Carousel.Caption>
            <a className="link" href="#">
              Indikator Pendidikan dapat di unduh disini
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeaderComp;
