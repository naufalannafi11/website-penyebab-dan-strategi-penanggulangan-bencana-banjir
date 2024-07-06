import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          className="logoFooter"
          src={require("../assets/img/navbar/logo_navbar.png")}
          alt="Logo"
        />
        <h4>CEGAH BANJIR</h4>
      </div>
      <div className="footer-right">
        <h4>Ikuti Kami</h4>
        <div className="social-media-icons">
          <img
            className="logoIkutiKamiFooter"
            src="/logo/LogoFacebook.png"
            alt="Facebook"
          />
          <img
            className="logoIkutiKamiFooter"
            src="/logo/LogoInstagram.png"
            alt="Instagram"
          />
          <img
            className="logoIkutiKamiFooter"
            src="/logo/LogoTwitter.png"
            alt="Twitter"
          />
        </div>
      </div>
      <div className="footer-center">
        <p>
          Hak cipta © 2024. Seluruh hak cipta dilindungi
          undang-undang
        </p>
      </div>
    </footer>
  );
}

export default Footer;
