import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavbarComp = () => {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={require("../assets/img/navbar/logo_navbar.png")}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            {""}
            <span style={{ marginLeft: '10px' }}>CEGAH BANJIR</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">BERANDA</Nav.Link>
              <Nav.Link href="#home">DATA</Nav.Link>
              <Nav.Link href="#home">PANTAU BANJIR</Nav.Link>
              <NavDropdown title="PETA" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  Peta Informasi Banjir
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Peta Banjir Berdasarkan RT
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Peta Skenario Banjir
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="INFO BANJIR" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Tentang Banjir</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Data Banjir Lintas Tahun
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="MEDIA" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Dokumen</NavDropdown.Item>
                <NavDropdown.Item href="#">Infografik</NavDropdown.Item>
                <NavDropdown.Item href="#">Berita</NavDropdown.Item>
                <NavDropdown.Item href="#">Galeri</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">FAQ</Nav.Link>
              <Nav.Link href="#home">KONTAK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
