import React, { useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { ThemeContext } from "../context/ThemeContext";

function TabComp() {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#444",
    color: theme === "light" ? "#000" : "#fff",
  };

  const linkStyle = {
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div className="tabs">
      <Tabs
        fill
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Berita">
          <div>
            <div>
              <table>
                <tr>
                  <td rowspan="5">
                    <Card style={{ width: "50rem", ...cardStyle }}>
                      <Card.Img
                        variant="top"
                        src={require("../assets/img/header/header1.jpg")}
                      />
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Berita</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#" style={linkStyle}>
                            Pembuatan Saluran Air di Gang Saalih Rampung
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          23 Apr 2024 | 10:52 WIB
                        </Card.Subtitle>
                        <Card.Text>
                          Pembuatan saluran air baru di Gang Saalih, Jalan Pasir
                          II, RT 03/06, Kelurahan Ciganjur, Kecamatan Jagakarsa,
                          Jakarta
                        </Card.Text>
                        <Card.Link href="#" style={linkStyle}>
                          Read More ...
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </td>
                  <td>
                    <Card style={{ width: "32rem", ...cardStyle }}>
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Berita</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#" style={linkStyle}>
                            Pj Gubernur Heru Pastikan Peralatan di Rumah Pompa
                            Ancol Berjalan Optimal
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          01 Mar 2024 | 10:20 WIB
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <td>
                  <Card style={{ width: "32rem", ...cardStyle }}>
                    <Card.Body>
                      <Card.Text>
                        <div className="typeTabs">Berita</div>
                      </Card.Text>
                      <Card.Title>
                        <a className="linkTabs" href="#" style={linkStyle}>
                          Oranye Tangani Genangan di Jalan Yos Sudarso
                        </a>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        29 Feb 2024 | 10:23 WIB
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </td>
                <tr>
                  <td>
                    <Card style={{ width: "32rem", ...cardStyle }}>
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Berita</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#" style={linkStyle}>
                            Hujan Berintensitas Ringan Hingga Sedang Guyur
                            Jakarta Hari Ini
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          29 Feb 2024 | 08:08 WIB
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card style={{ width: "32rem", ...cardStyle }}>
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Berita</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#" style={linkStyle}>
                            Genangan pada Tiga Lokasi di Jaktim Berhasil
                            Ditangani
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          15 Feb 2024 | 10:11 WIB
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card style={{ width: "32rem", ...cardStyle }}>
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Berita</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#" style={linkStyle}>
                            BMKG Prediksi Hujan Basahi Jakarta Hari Ini
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          15 Feb 2024 | 10:00 WIB
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabComp;
