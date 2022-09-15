import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.png";
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.header} style={{ display: "flex", justifyContent: "space-between", height: '50px', alignItems: 'center'}}>
      <div width={50} height={50}>
        <Image
          src={logo}
          alt="Picture of the author"
          width={50}
        height={50}
        />
      </div>

      <h4>Oushod Sheba</h4>
      <input type="text" placeholder="search anything" />
      <li>help</li>
      <li>Hujaifa Hossain</li>
    </div>
  );
};

export default Header;
