import Image from "next/image";
import React from "react";
import logo from "../public/assets/health.jpg";

const Header = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Image
        // loader={myLoader}
        src={logo}
        alt="Picture of the author"
        width={100}
        height={30}
      />

      <h2>Oushod Sheba</h2>
    </div>
  );
};

export default Header;
