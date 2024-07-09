import Table from "react-bootstrap/Table";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { ThemeProvider, ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

function DokumenPages() {
  return (
    <ThemeProvider>
      <DokumenPagesContent />
    </ThemeProvider>
  );
}

function DokumenPagesContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <NavbarComp />
      <div className="dokumenPages">
        <h2>Dokumen</h2>
        <p>
          Lihat dan unduh dokumen atau rilis pers seputar informasi bencana di
          Jakarta. Dokumen dan rilis pers yang ditampilkan berdasarkan informasi
          resmi dari Pemprov DKI Jakarta.
        </p>
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Dokumen</th>
              <th>Judul</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Senin, 23 November 2020</td>
              <td>
                SIARAN PERS NOMOR 1633/SP-HMS/09/2020 TENTANG PIMPIN APEL
                KESIAPAN TANGGAP BENCANA BANJIR, GUBERNUR ANIES TEKANKAN
                PENANGANAN BANJIR DENGAN PROTOKOL COVID
              </td>
              <td>SIARAN PERS NOMOR 1633/SP-HMS/09/2020</td>
            </tr>
            <tr>
              <td>Senin, 23 November 2020</td>
              <td>
                SIARAN PERS NOMOR 1424/SP-HMS/07/2020 TENTANG WAGUB ARIZA
                PASTIKAN PENANGANAN BANJIR DI 2 KELURAHAN JAKARTA BARAT
                DIPERCEPAT
              </td>
              <td>SIARAN PERS NOMOR 1424/SP-HMS/07/2020</td>
            </tr>
            <tr>
              <td>Senin, 23 November 2020</td>
              <td>
                SIARAN PERS NOMOR 1399/SP-HMS/06/2020 TENTANG TINJAU ENAM WADUK,
                WAGUB ARIZA PASTIKAN PENANGANAN BANJIR DI JAKARTA DILAKUKAN
                KOMPREHENSIF
              </td>
              <td>SIARAN PERS NOMOR 1399/SP-HMS/06/2020</td>
            </tr>
            <tr>
              <td>Selasa, 20 Oktober 2020</td>
              <td>
                ANALISIS KONDISI ATMOSFER PADA KEJADIAN BANJIR DI WILAYAH
                JAKARTA SELATAN
              </td>
              <td>
                ANALISIS KONDISI ATMOSFER PADA KEJADIAN BANJIR DI WILAYAH
                JAKARTA SELATAN
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default DokumenPages;
