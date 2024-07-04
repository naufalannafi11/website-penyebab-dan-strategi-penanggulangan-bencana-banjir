import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <img className="logoFooter" src="/logo/logoFooter.png" />
        </div>
        <div>
          <h4>Dinas  Pendidikan</h4>
          <h5>Pemerintah Provinsi DKI Jakarta</h5>
          <p>
            Jln. Jendral Gatot Subroto, Kav. 40-41, Jakarta Selatan Telp. (021)
            5255385
          </p>
        </div>
        <div className="ikutiKami">
          <h4>Ikuti Kami</h4>
          <img className="logoIkutiKamiFooter" src="/logo/LogoFacebook.png" />
          <img className="logoIkutiKamiFooter" src="/logo/LogoInstagram.png" />
          <img className="logoIkutiKamiFooter" src="/logo/LogoTwitter.png" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
