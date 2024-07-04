import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";

function TabComp() {
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
                  <td rowspan="4">
                    <Card style={{ width: "50rem" }}>
                      <Card.Img
                        variant="top"
                        src={require("../assets/img/tabs/imgTabs.jpeg")}
                      />
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Regulasi Dinas</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#">
                            SURAT EDARAN NOMOR E-0017/SE/2024 TENTANG MEKANISME
                            KELULUSAN PESERTA DIDIK JENJANG SD/PAKET A/SDLB,
                            SMP/PAKET B/SMPLB, SMA/PAKET C/SMALB DAN SMK TAHUN
                            PELAJARAN 2023/2024
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          30 April 2024
                        </Card.Subtitle>
                        <Card.Text>
                          SURAT EDARAN NOMOR E-0017/SE/2024 TENTANG MEKANISME
                          KELULUSAN PESERTA DIDIK JENJANG SD/PAKET A/SDLB,
                          SMP/PAKET B/SMPLB, SMA/PAKET C/SMALB DAN SMK TAHUN
                          PELAJARAN 2023/2024 Dapat di unduh disini
                        </Card.Text>
                        <Card.Link href="#">Read More ...</Card.Link>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                  </td>
                  <td>
                    <Card style={{ width: "32rem" }}>
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Regulasi Dinas</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#">
                            SURAT EDARAN NOMOR E-0017/SE/2024 TENTANG MEKANISME
                            KELULUSAN PESERTA DIDIK JENJANG SD/PAKET A/SDLB,
                            SMP/PAKET B/SMPLB, SMA/PAKET C/SMALB DAN SMK TAHUN
                            PELAJARAN 2023/2024
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          30 April 2024
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <td>
                  <Card style={{ width: "32rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <div className="typeTabs">
                          Berita Bidang, Sudin dan UPT
                        </div>
                      </Card.Text>
                      <Card.Title>
                        <a className="linkTabs" href="#">
                          PEMBUKAAN KEGIATAN PELATIHAN PENDIDIK, TENAGA
                          KEPENDIDIKAN DAN PESERTA DIDIK SMK DI PUSAT PELATIHAN
                          DAN PENGEMBANGAN PENDIDIKAN JAKARTA BARAT
                        </a>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        29 April 2024
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </td>
                <tr>
                  <td>
                    <Card style={{ width: "32rem" }}>
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Regulasi Dinas</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#">
                            SURAT EDARAN NOMOR E-0014/SE/2024 TENTANG
                            PENYELENGGARAAN UPACARA PERINGATAN HARI OTONOMI
                            DAERAH XXVIII TAHUN 2024 DI LINGKUNGAN DINAS
                            PENDIDIKAN PROVINSI DKI JAKARTA
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          24 April 2024
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Card style={{ width: "32rem" }}>
                      <Card.Body>
                        <Card.Text>
                          <div className="typeTabs">Regulasi Dinas</div>
                        </Card.Text>
                        <Card.Title>
                          <a className="linkTabs" href="#">
                            SURAT EDARAN NOMOR E-0013/SE/2024 TENTANG PENGGUNAAN
                            PAKAIAN SERAGAM BATIK KORPRI DALAM RANGKA PERINGATAN
                            HARI OTONOMI DAERAH TAHUN 2024
                          </a>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          24 April 2024
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Regulasi">
          <div>
            <table>
              <tr>
                <td rowspan="4">
                  <Card style={{ width: "50rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/tabs/imgTabs.jpeg")}
                    />
                    <Card.Body>
                      <Card.Text>
                        <div className="typeTabs">Regulasi Dinas</div>
                      </Card.Text>
                      <Card.Title>
                        <a className="linkTabs" href="#">
                          SURAT EDARAN NOMOR E-0017/SE/2024 TENTANG MEKANISME
                          KELULUSAN PESERTA DIDIK JENJANG SD/PAKET A/SDLB,
                          SMP/PAKET B/SMPLB, SMA/PAKET C/SMALB DAN SMK TAHUN
                          PELAJARAN 2023/2024
                        </a>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        30 April 2024
                      </Card.Subtitle>
                      <Card.Text>
                        SURAT EDARAN NOMOR E-0017/SE/2024 TENTANG MEKANISME
                        KELULUSAN PESERTA DIDIK JENJANG SD/PAKET A/SDLB,
                        SMP/PAKET B/SMPLB, SMA/PAKET C/SMALB DAN SMK TAHUN
                        PELAJARAN 2023/2024 Dapat di unduh disini
                      </Card.Text>
                      <Card.Link href="#">Read More ...</Card.Link>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </td>
                <td>
                  <Card style={{ width: "32rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <div className="typeTabs">Regulasi Dinas</div>
                      </Card.Text>
                      <Card.Title>
                        <a className="linkTabs" href="#">
                          SURAT EDARAN NOMOR E-0017/SE/2024 TENTANG MEKANISME
                          KELULUSAN PESERTA DIDIK JENJANG SD/PAKET A/SDLB,
                          SMP/PAKET B/SMPLB, SMA/PAKET C/SMALB DAN SMK TAHUN
                          PELAJARAN 2023/2024
                        </a>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        30 April 2024
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </td>
              </tr>
              <td>
                <Card style={{ width: "32rem" }}>
                  <Card.Body>
                    <Card.Text>
                      <div className="typeTabs">
                        Berita Bidang, Sudin dan UPT
                      </div>
                    </Card.Text>
                    <Card.Title>
                      <a className="linkTabs" href="#">
                        SURAT EDARAN NOMOR E-0005/SE/2024 TENTANG KEGIATAN
                        BELAJAR MENGAJAR SELAMA BULAN SUCI RAMADHAN TAHUN 2024
                        M/ 1445 H
                      </a>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      8 Maret 2024
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </td>
              <tr>
                <td>
                  <Card style={{ width: "32rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <div className="typeTabs">Regulasi Dinas</div>
                      </Card.Text>
                      <Card.Title>
                        <a className="linkTabs" href="#">
                          SURAT EDARAN NOMOR E-0014/SE/2024 TENTANG
                          PENYELENGGARAAN UPACARA PERINGATAN HARI OTONOMI DAERAH
                          XXVIII TAHUN 2024 DI LINGKUNGAN DINAS PENDIDIKAN
                          PROVINSI DKI JAKARTA
                        </a>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        24 April 2024
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </td>
              </tr>
              <tr>
                <td>
                  <Card style={{ width: "32rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <div className="typeTabs">Regulasi Dinas</div>
                      </Card.Text>
                      <Card.Title>
                        <a className="linkTabs" href="#">
                          SURAT EDARAN NOMOR E-0013/SE/2024 TENTANG PENGGUNAAN
                          PAKAIAN SERAGAM BATIK KORPRI DALAM RANGKA PERINGATAN
                          HARI OTONOMI DAERAH TAHUN 2024
                        </a>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        24 April 2024
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </td>
              </tr>
            </table>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabComp;
