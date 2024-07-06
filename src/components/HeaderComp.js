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
              Pembuatan Saluran Air di Gang Saalih Rampung
            </a>
            <p>
              Pembuatan saluran air baru di Gang Saalih, Jalan Pasir II, RT
              03/06, Kelurahan Ciganjur, Kecamatan Jagakarsa, Jakarta Selatan
              sudah terselesaikan.
            </p>
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
              Pj Gubernur Heru Pastikan Peralatan di Rumah Pompa Ancol Berjalan
              Optimal
            </a>
            <p>
              Penjabat (Pj) Gubernur DKI Jakarta, Heru Budi Hartono meninjau
              Rumah Pompa Air Ancol, Tanjung Priok, Jakarta Utara, pada Kamis
              (29/2) sore.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgHeader"
            src={require("../assets/img/header/header3.jpg")}
            alt="header 3"
            width={1300}
          />
          <Carousel.Caption>
            <a className="link" href="#">
              Pasukan Oranye Tangani Genangan di Jalan Yos Sudarso
            </a>
            <p>
              Sebanyak 10 petugas Penanganan Prasarana dan Sarana Umum (PPSU)
              Kelurahan Kebon Bawang, Kecamatan Tanjung Priok dikerahkan untuk
              mengatasi genangan yang terjadi di Jalan Yos Sudarso, tepat di
              depan Kantor Wali Kota Jakarta Utara.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeaderComp;
