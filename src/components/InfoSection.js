import React, { useContext } from "react";
import JakiImage from "../assets/img/lapor/lapor.png"; // Ganti dengan path yang benar untuk gambar Jaki
import { ThemeContext } from "../context/ThemeContext";

function InfoSection() {
  const { theme } = useContext(ThemeContext);

  const sectionStyle = {
    backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div className="info-section" style={sectionStyle}>
      <div className="info-text light-text">
        <h1>Menemukan Genangan Banjir Di Sekitarmu?</h1>
        <h2>Laporkan Lewat JAKI Yuk!</h2>
      </div>
      <div className="info-content">
        <div className="info-image">
          <img src={JakiImage} alt="Jaki App" />
        </div>
        <div className="info-steps light-text">
          <ol>
            <li>Unduh dan pasang aplikasi JAKI.</li>
            <li>
              Buka Aplikasi JAKI dan daftarkan emailmu. Jika kamu sudah mendaftar, log in dengan username dan password-mu.
            </li>
            <li>Tekan tombol kamera bertuliskan "Lapor"</li>
            <li>Foto genangan dan banjir yang kamu temukan.</li>
            <li>Pilih kategori "Banjir"</li>
            <li>
              Tulis deskripsi lengkap berupa alamat dan kondisi terkait genangan dan banjir yang kamu temukan
            </li>
            <li>Kirim laporanmu.</li>
          </ol>
          <div className="info-note">
            <p>OPD terkait akan segera mengatasi genangan banjir yang kamu laporkan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
