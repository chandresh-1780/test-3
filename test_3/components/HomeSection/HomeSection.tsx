import React from "react";
import style from "./HomeSection.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlus } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";

const HomeSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className={style.container}>
        <Slider {...settings}>
          <div className={style.subCon}>
            <p className={style.containt}>
              Coding is logical, data is empirical.
            </p>
            <h1>
              Enjoy coding,
              <br />
              Leave data to <span>algoseek.</span>
            </h1>
            <p className={style.lastCon}>
              Financial data, technology and services.
            </p>
          </div>
          <div className={style.subCon}>
            <p className={style.containt}>
              Trading is exciting, data is grinding.
            </p>
            <h1>
              Enjoy trading,
              <br />
              Leave data to <span>algoseek.</span>
            </h1>
            <p className={style.lastCon}>
              Financial data, technology and services.
            </p>
          </div>
          <div className={style.subCon}>
            <p className={style.containt}>Math is neat, data is messy.</p>
            <h1>
              Enjoy math,
              <br />
              Leave data to <span>algoseek.</span>
            </h1>
            <p className={style.lastCon}>
              Financial data, technology and services.
            </p>
          </div>
        </Slider>
      </div>
      <div className={style.imgDiv}>
        <img src="/Talk.png" />
      </div>

      <div className={style.bgImgDiv}>
        <div className={style.conDiv}>
          <p className={style.descriptionMain}>
            Since our inception in 2015, we’ve been fusing advanced technology
            and financial data know how to empower our clients worldwide to
            achieve business success.
          </p>
          <div className={style.flex}>
            <div className={style.desDiv}>
              <p className={style.suby}>Subscribed by</p>
              <div className={style.line}></div>
              <h2>
                550
                <FaPlus size={40} />
              </h2>
              <p className={style.type}>INSTITUTIONS</p>
            </div>
            <div className={style.desDiv}>
              <p className={style.suby}>Including</p>
              <div className={style.line}></div>
              <h2>
                200
                <FaPlus size={40} />
              </h2>
              <p className={style.type}>DATASETS</p>
            </div>
            <div className={style.desDiv}>
              <p className={style.suby}>Data total</p>
              <div className={style.line}></div>
              <h2>
                3000
                <FaPlus size={40} />
              </h2>
              <p className={style.type}>TERABYTES</p>
            </div>
            <div className={style.desDiv}>
              <p className={style.suby}>Total live trading AUM</p>
              <div className={style.line}></div>
              <h2>
                350
                <FaPlus size={40} />
              </h2>
              <p className={style.type}>BILLION</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
