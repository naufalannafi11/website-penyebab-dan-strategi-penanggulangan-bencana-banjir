import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "../context/ThemeContext";

export const NavbarComp = () => {
  const { theme } = useContext(ThemeContext);

  const linkStyle = { color: theme === 'light' ? '#000' : '#fff' };

  return (
    <div className="">
      <Navbar expand="lg" className={`bg-${theme === 'light' ? 'light' : 'dark'}`}>
        <Container>
          <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center', color: theme === 'light' ? '#000' : '#fff' }}>
            <img
              src={require("../assets/img/navbar/logo_navbar.png")}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span style={{ marginLeft: '10px' }}>CEGAH BANJIR</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={linkStyle}>BERANDA</Nav.Link>
              <Nav.Link href="#home" style={linkStyle}>DATA</Nav.Link>
              <Nav.Link href="#home" style={linkStyle}>PANTAU BANJIR</Nav.Link>
              <NavDropdown title={<span style={linkStyle}>PETA</span>} id="basic-nav-dropdown" menuVariant={theme}>
                <NavDropdown.Item href="#" style={linkStyle}>
                  Peta Informasi Banjir
                </NavDropdown.Item>
                <NavDropdown.Item href="#" style={linkStyle}>
                  Peta Banjir Berdasarkan RT
                </NavDropdown.Item>
                <NavDropdown.Item href="#" style={linkStyle}>
                  Peta Skenario Banjir
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span style={linkStyle}>INFO BANJIR</span>} id="basic-nav-dropdown" menuVariant={theme}>
                <NavDropdown.Item href="#" style={linkStyle}>Tentang Banjir</NavDropdown.Item>
                <NavDropdown.Item href="#" style={linkStyle}>
                  Data Banjir Lintas Tahun
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span style={linkStyle}>MEDIA</span>} id="basic-nav-dropdown" menuVariant={theme}>
                <NavDropdown.Item href="#" style={linkStyle}>Dokumen</NavDropdown.Item>
                <NavDropdown.Item href="#" style={linkStyle}>Infografik</NavDropdown.Item>
                <NavDropdown.Item href="#" style={linkStyle}>Berita</NavDropdown.Item>
                <NavDropdown.Item href="#" style={linkStyle}>Galeri</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" style={linkStyle}>FAQ</Nav.Link>
              <Nav.Link href="#home" style={linkStyle}>KONTAK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
