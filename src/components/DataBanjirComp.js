import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeContext } from "../context/ThemeContext";

function DataBanjirComp() {
  const { theme } = useContext(ThemeContext);

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

  const sliderStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div className="infromasiLengkap">
      <div className="mt-20">
        <div className="titleDataPendidikan">
          <h4>Dapatkan informasi lengkap mengenai banjir jakarta di sini</h4>
          <hr className="titleHrDataPendidikan" />
        </div>
        <Slider {...settings} style={sliderStyle}>
          {data.map((d) => (
            <div
              key={d.name}
              className={`bg-${theme === 'light' ? 'white' : 'black'} h-[450px] text-${theme === 'light' ? 'black' : 'white'} rounded-xl`}
            >
              <div className="h-56 bg-white flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt={d.name} />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <button className={`bg-${theme === 'light' ? 'black' : 'white'} text-${theme === 'light' ? 'white' : 'black'} text-lg px-6 py-1 rounded-xl`}>
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
    name: "PANGGILAN DARURAT",
    img: require("../assets/img/informasiLengkap/logo1.png"),
  },
  {
    name: "INFO BANJIR",
    img: require("../assets/img/informasiLengkap/logo2.png"),
  },
  {
    name: "PETA BANJIR",
    img: require("../assets/img/informasiLengkap/logo3.png"),
  },
  {
    name: "DATA",
    img: require("../assets/img/informasiLengkap/logo4.png"),
  },
  {
    name: "TANYA JAWAB",
    img: require("../assets/img/informasiLengkap/logo5.png"),
  },
];

export default DataBanjirComp;
