import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";

export const NavbarComp = () => {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center', color: '#000' }}>
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
              <Nav.Link as={Link} to="/" style={{ color: '#000' }}>BERANDA</Nav.Link>
              <Nav.Link as={Link} to="/datapages" style={{ color: '#000' }}>DATA</Nav.Link>
              <NavDropdown title={<span style={{ color: '#000' }}>INFO BANJIR</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/tentangbanjirjakartapages" style={{ color: '#000' }}>Tentang Banjir Jakarta</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span style={{ color: '#000' }}>MEDIA</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/dokumenpages" style={{ color: '#000' }}>Dokumen</NavDropdown.Item>
                <NavDropdown.Item href="/infografikpages" style={{ color: '#000' }}>Infografik</NavDropdown.Item>
                <NavDropdown.Item href="/beritapages" style={{ color: '#000' }}>Berita</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/kontakpages" style={{ color: '#000' }}>KONTAK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
