import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function KontakPages() {
  return (
    <ThemeProvider>
      <KontakPagesContent />
    </ThemeProvider>
  );
}

function KontakPagesContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <NavbarComp />
      <div className="beritaPages">
        <h2>Nomor Darurat Bencana Jakarta</h2>
        <p>
          Berikut ini adalah kontak dan kanal informasi milik Pemprov DKI
          Jakarta saat terjadi bencana
        </p>
        <Container className="py-4">
          <Row className="align-items-center mb-4 text-center">
            <Col>
              <h4>
                📞 Layanan Darurat{" "}
                <span className="text-primary">Jakarta Siaga 112</span>
              </h4>
            </Col>
          </Row>
          <Row className="gy-4">
            <Col md={4}>
              <h5>BPBD Provinsi DKI Jakarta</h5>
              <p>
                Jl. Kyai Haji Zainul Arifin No.71, RT.10/RW.10, Petojo Utara,
                Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota
                Jakarta 10130
                <br />
                (021) 6344766
                <br />
                <a
                  href="https://bpbd.jakarta.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://bpbd.jakarta.go.id/
                </a>
              </p>
            </Col>
            <Col md={4}>
              <h5>Dinas Sosial Pemerintah Provinsi DKI Jakarta</h5>
              <p>
                Jl. Gunung Sahari II No.6, RT.13/RW.7, Gn. Sahari Sel., Kec.
                Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
                10610
                <br />
                (021) 4265116
                <br />
                <a
                  href="https://www.dinsos.jakarta.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dinsos.jakarta.go.id/
                </a>
              </p>
            </Col>
            <Col md={4}>
              <h5>Dinas Sumber Daya Air Provinsi DKI Jakarta</h5>
              <p>
                Gedung Dinas Teknis Jatibarau, Pemerintah, Jl. Taman Jati Baru
                No.1, RT.17/RW.1, Cideng, Kecamatan Gambir, Kota Jakarta Pusat,
                Daerah Khusus Ibukota Jakarta 10150
                <br />
                <a
                  href="https://sumberdayaair.jakarta.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://sumberdayaair.jakarta.go.id/
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default KontakPages;
