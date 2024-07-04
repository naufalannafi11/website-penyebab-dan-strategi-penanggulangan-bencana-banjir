import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function DetailDataPendidikanComp() {
  const cardData = [
    {
      id: 1,
      title: "Kartu Jakarta Pintar",
      content:
        "Kartu Jakarta Pintar Plus (KJP Plus) adalah program strategis untuk memberikan akses bagi warga DKI Jakarta dari kalangan masyarakat kurang mampu untuk menyelesaikan pendidikan hingga jenjang SMA/SMK negeri dan swasta dengan biaya penuh dari dana APBD Provinsi DKI Jakarta.",
      imageSrc: "/DetailDataPendidikan/logoDetailDataPendidikan1.png",
    },
    {
      id: 2,
      title: "Kartu Jakarta Mahasiswa Unggul",
      content:
        "Kartu Jakarta Mahasiswa Unggul (KJMU) merupakan program lanjutan dari KJP Plus bagi Peserta Didik yang diterima di Perguruan Tinggi negeri di seluruh Indonesia untuk memberikan akses bagi warga DKI Jakarta dari kalangan masyarakat kurang mampu untuk menyelesaikan pendidikan hingga jenjang sarjana dengan biaya penuh dari dana APBD Provinsi DKI Jakarta.",
      imageSrc: "/DetailDataPendidikan/logoDetailDataPendidikan2.png",
    },
    {
      id: 3,
      title: "One Click Service",
      content:
        "One Click Service merupakan Aplikasi yang dibangun Dinas Pendidikan Provinsi DKI Jakarta untuk memudahkan jenis-jenis layanan dinas pendidikan antara lain tambah PTK baru di Dapodik, Approve Mutasi PTK, Approve pemenuhan jam mengajar di sekolah non induk, Merubah status induk sekolah, serta Approve peserta didik status di Luar Dapodik dengan persyaratan dokumen yang diperlukan.",
      imageSrc: "/DetailDataPendidikan/logoDetailDataPendidikan3.png",
    },
    {
      id: 4,
      title: "Informasi Data Elektronik",
      content:
        "Aplikasi ID.E khusus dan fokus pada Informasi seputar Data Dinas Pendidikan Provinsi DKI Jakarta. Aplikasi Data Pendidikan berbasis android ini merupakan suatu aplikasi yang berisi informasi data sekolah seperti alamat sekolah, data siswa, pendidik, dan tenaga kependidikan yang dapat diakses secara online dengan cepat, akurat, mudah dan terkini (Up To Date).",
      imageSrc: "/DetailDataPendidikan/logoDetailDataPendidikan4.png",
    },
    {
      id: 5,
      title: "Radio Dinas Pendidikan",
      content:
        "Aplikasi Radio Disdik menyiarkan berita-berita serta informasi seputar pendidikan. Dapatkan aplikasi ini untuk perangkat android anda dengan mengunduh aplikasinya di Play Store. Anda juga dapat melihat video-video dari Liputan Radio di website Dinas Pendidikan atau menonton video-video secara live di Youtube Radio Disdik.",
      imageSrc: "/DetailDataPendidikan/logoDetailDataPendidikan5.png",
    },
  ];

  return (
    <div className="DetailDataPendidikanComp">
      <Row xs={1} md={2} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card>
              <Card.Img variant="top" src={card.imageSrc} />
              <Card.Body>
                <Card.Title>
                  <a className="linkDetailDataPendidikanComp" href="#">
                    {card.title}
                  </a>
                </Card.Title>
                <Card.Text>{card.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DetailDataPendidikanComp;
