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
          <Navbar.Brand href="#home">
            <img
              src={require("../assets/img/navbar/logo_navbar.png")}
              width="200"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">BERANDA</Nav.Link>
              <NavDropdown title="PROFIL" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Visi Misi</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Struktur Organisasi
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PPDB" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Berita PPDB</NavDropdown.Item>
                <NavDropdown.Item href="#">Infografis PPDB</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BERITA" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Berita Pendidikan</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Berita Dinas Pendidikan
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Berita Pendidik dan Tenaga Kependidikan
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Berita Bidang, Sudin, UPT
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Informasi</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Semua Informasi</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">REGULASI</Nav.Link>
              <Nav.Link href="#home">GALERI</Nav.Link>
              <Nav.Link href="#home">INFORMASI</Nav.Link>
              <NavDropdown title="APLIKASI" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Sekolah Kolaborasi</NavDropdown.Item>
                <NavDropdown.Item href="#">Siap Belajar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Daftar Aplikasi</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Dashboard</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
