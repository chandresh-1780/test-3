"use client";
import React, { useEffect, useState } from "react";
import style from "./header.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* {!show ? ( */}
      <header className={` ${style.headerMain}`}>
        <div className={style.headerContainer}>
          <div className={style.logo}>
            <img src="/logo.png" alt="Logo" loading="lazy" />
          </div>
          <div className={style.header1}>
            <img
              src="/gridMenu.svg"
              loading="lazy"
              alt="wibes"
              onClick={() => setShow(true)}
              style={{ width: "21px" }}
            />
          </div>
          <div className={style.headerSub1}>
            <ul>
              <li className={style.borderRight}>Data</li>
              <li className={style.borderRight}>Services</li>
              <li className={style.borderRight}>Docs</li>
              <li className={style.borderRight}>Company</li>
              <li className={style.borderRight}>Contact</li>
            </ul>
          </div>
          <div className={style.loginDiv}>
            <img src="/headicon.svg" alt="demo" loading="lazy" />
            Console
            <img src="/errow.svg" alt="demo" loading="lazy" />
          </div>
        </div>
      </header>
      {show && (
        <div className={style.container1}>
          <div className={style.head1}>
            <div className={style.logo1}>
              <div className={style.logosub}>
                <AiOutlineClose
                  size={40}
                  color={"white"}
                  className={style.icon}
                  onClick={() => setShow(false)}
                />
              </div>
            </div>
            <ul className={style.menu}>
              <li>Data</li>
              <li>Services</li>
              <li>Docs</li>
              <li>Company</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
