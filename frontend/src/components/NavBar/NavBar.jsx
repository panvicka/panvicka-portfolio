import React from "react";

import { LogoImg } from "./NavBar.styles";
import { images } from "../../constants";

const NavBar = () => {
  return (
    <nav>
      <div>
        <LogoImg src={images.snecek_logo} alt="snail logo" className="rounded"></LogoImg>
      </div>
      <ul>
        {["home", "about", "contact", "work", "skills", "self-education"].map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
