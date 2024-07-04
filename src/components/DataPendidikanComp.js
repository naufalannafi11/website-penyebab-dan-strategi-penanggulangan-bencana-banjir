import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DataPendidikanComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <div className="titleDataPendidikan">
        <h4>Data Pendidikan</h4>
        <hr className="titleHrDataPendidikan" />
      </div>
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 bg-white flex justify-center items-center rounded-t-xl">
                <img src={d.img} />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <button className="bg-black text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "RUMAH BELAJAR",
    img: "/dataPendidikan/logo1.png",
  },
  {
    name: "BUKU SEKOLAH ELEKTRONIK",
    img: "/dataPendidikan/logo2.png",
  },
  {
    name: "BEASISWA JAKARTA",
    img: "/dataPendidikan/logo3.png",
  },
  {
    name: "NOMOR INDUK SISWA NASIONAL",
    img: "/dataPendidikan/logo4.png",
  },
  {
    name: "NOMOR POKOK SEKOLAH NASIONAL",
    img: "/dataPendidikan/logo5.png",
  },
  {
    name: "PORTAL BOS",
    img: "/dataPendidikan/logo6.png",
  },
  {
    name: "KARTU JAKARTA PINTAR",
    img: "/dataPendidikan/logo7.jpg",
  },
  {
    name: "PERPUSTAKAAN DIGITAL JAKARTA",
    img: "/dataPendidikan/logo8.png",
  },
];

export default DataPendidikanComp;
