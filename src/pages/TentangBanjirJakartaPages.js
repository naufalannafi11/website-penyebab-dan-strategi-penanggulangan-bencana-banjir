import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";

function TentangBanjirJakartaPages() {
  return (
    <ThemeProvider>
      <TentangBanjirJakartaPagesContent />
    </ThemeProvider>
  );
}

function TentangBanjirJakartaPagesContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <NavbarComp />
      <div className="tentangBanjirJakartaPages">
        <h2>Tentang Banjir Jakarta</h2>
        <p>
          Temukan berbagai informasi mengenai banjir di Jakarta, mulai dari
          penyebab hingga mitigasi banjir di Jakarta.
        </p>
        <br />
        <br />
        <Row>
          <Col md={8}>
            <h2>Kenapa Jakarta, Sering Mengalami Banjir?</h2>
            <p>
              Secara geografis, DKI Jakarta merupakan dataran rendah yang
              <br />
              berada di antara hulu sungai dan pesisir. Berikut adalah 3<br />
              penyebab utama Jakarta sering mengalami banjir:
            </p>
          </Col>
          <Col md={4}>
            <Image
              src={require("../assets/img/infoBanjirJakarta.png")}
              rounded
              fluid
            />
          </Col>
        </Row>
        <div className="accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Banjir Hujan Lokal</Accordion.Header>
              <Accordion.Body>
                Hujan yang terjadi dengan intensitas tinggi dalam durasi yang
                lama di wilayah Jakarta akan mengisi salurah-saluran air dan
                daerah cekung. Jika tidak tertampung lagi, air akan meluap
                hingga menyebabkan banjir.
                <br />
                <br />
                Selain itu, dimensi drainase kota Jakarta dirancang untuk
                menampung debit air dengan curah hujan maksimal 120 mm/hari.
                Namun, pada beberapa hujan besar ekstrem yang terjadi di
                Jakarta, curah hujan melebihi kapasitas tersebut.
                <br />
                <br />
                Contohnya pada 1 Januari 2020 lalu, curah hujan Jakarta mencapai
                377 mm/hari dan merupakan yang tertinggi selama 24 tahun.
                Sehingga banjir pun melanda sebagian besar wilayah Ibu Kota.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Banjir Kiriman</Accordion.Header>
              <Accordion.Body>
                Karena berada di wilayah dataran rendah dan memiliki 13 aliran
                sungai, Jakarta dapat banjir jika hujan terjadi di hulu sungai.
                <br />
                <br />
                Hujan dengan intesitas tinggi di daerah hulu (Jawa Barat dan
                Banten) akan terbawa melalui aliran sungai ke Jakarta sebelum
                lepas ke laut. Hal inilah yang membuat sungai yang bermuara di
                Jakarta meluap dan mengakibatkan banjir. Pada saat kondisi
                tertentu kapasitas aliran sungai di Jakarta tersebut tidak cukup
                menampung air, sehingga terjadi limpasan di beberapa bantaran
                sungai di Jakarta.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Banjir Rob</Accordion.Header>
              <Accordion.Body>
                Selain karena hujan dan kiriman debit air dari hulu, Jakarta
                juga rentan terkena pasang air laut (Rob).
                <br />
                <br />
                Hal ini biasanya terjadi di wilayah pesisir atau tepi laut
                Jakarta. Kini, di samping karena pasangnya air laut, penurunan
                muka tanah di utara Jakarta juga mempengaruhi meningkatnya
                banjir rob.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default TentangBanjirJakartaPages;
