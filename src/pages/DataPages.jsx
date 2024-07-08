import React from "react";
import CardData from "../components/CardData";
import dataBanjir from "../lib/constant/dataBanjir";
const DataPages = () => {
  const [kota, setKota] = React.useState("All");
  const [tahun, setTahun] = React.useState("All");

  console.log(kota, "kota ni bos");
  console.log(tahun, "tahun ni bos");

  const handleChangeKota = (e) => {
    setKota(e.target.value);
  };
  const handleChangeTahun = (event) => {
    setTahun(event.target.value);
  };
  const filteredData = dataBanjir.filter((item) => {
    if (tahun !== "All" && kota !== "All") {
      return (
        item.tahun === parseInt(tahun) && item.kota.some((k) => k.nama === kota)
      );
    } else if (tahun !== "All") {
      return item.tahun === parseInt(tahun);
    } else if (kota !== "All") {
      return item.kota.some((k) => k.nama === kota);
    } else {
      return true;
    }
  });

  const calculateSummary2024 = (dataBanjir) => {
    const tahun2024 = dataBanjir.find((item) => item.tahun === 2024);

    if (!tahun2024) return null;

    const totalKasus = tahun2024.kota.reduce(
      (sum, kota) => sum + kota.jumlah_kasus,
      0
    );
    const totalKerugian = tahun2024.kota.reduce(
      (sum, kota) => sum + parseInt(kota.kerugian.replace(/[^0-9]/g, "")),
      0
    );
    const totalKorbanJiwa = tahun2024.kota.reduce(
      (sum, kota) => sum + kota.korban_jiwa,
      0
    );
    const totalRumahRusak = tahun2024.kota.reduce(
      (sum, kota) => sum + kota.rumah_rusak,
      0
    );

    const totalFrekuensiBanjir = tahun2024.kota.reduce(
      (sum, kota) => sum + kota.frekuensi_banjir,
      0
    );

    return {
      totalKasus,
      totalKerugian: `Rp ${totalKerugian / 1_000_000} M`,
      totalKorbanJiwa,
      totalRumahRusak,
      totalFrekuensiBanjir,
    };
  };

  return (
    <div className="w-full h-full bg-white">
      <section id="Header" className="w-full text-center font-mono">
        <h1 className="px-2 py-6">DATA BENCANA BANJIR DI INDONESIA</h1>
      </section>
      <section
        id="Summery"
        className=" py-6 w-full flex flex-col justify-center items-center bg-sky-500 text-white"
      >
        <h2>Data Banjir 2024</h2>
        <div className="w-full flex flex-row justify-around items-center mt-3">
          <div className="flex flex-col">
            <span className="leading-none font-bold ">Total Kasus </span>
            <span className="leading-none mt-2">
              {calculateSummary2024(dataBanjir)?.totalKasus}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="leading-none font-bold ">Total Kerugian</span>
            <span className="leading-none mt-2">
              {calculateSummary2024(dataBanjir)?.totalKerugian}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="leading-none font-bold ">Total Korban Jiwa</span>
            <span className="leading-none mt-2">
              {calculateSummary2024(dataBanjir)?.totalKorbanJiwa}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="leading-none font-bold ">Total Rumah Rusak</span>
            <span className="leading-none mt-2">
              {calculateSummary2024(dataBanjir)?.totalRumahRusak}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="leading-none font-bold ">Frekuensi Banjir</span>
            <span className="leading-none mt-2">
              {calculateSummary2024(dataBanjir)?.totalFrekuensiBanjir}
            </span>
          </div>
        </div>
      </section>
      <section id="dataDetail" className="w-full border  py-6">
        <div className="w-full flex flex-row justify-center items-center">
          <label htmlFor="kota">Filter Kota :</label>
          <select
            id="kota"
            value={kota}
            onChange={handleChangeKota}
            className="p-2"
          >
            <option value="All">All</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Surabaya">Surabaya</option>
            <option value="Medan">Medan</option>
            <option value="Makassar">Makassar</option>
          </select>
          <label htmlFor="tahun" className="pl-5">
            Filter Tahun :
          </label>
          <select
            id="tahun"
            value={tahun}
            onChange={handleChangeTahun}
            className="p-2"
          >
            <option value="All">All</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>

        {filteredData.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-center py-6"
          >
            <h2>{item.tahun}</h2>
            <CardData data={item.kota} kota={kota} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default DataPages;
