import React from "react";

import "./NavBar.scss";
import { images } from "../../constants";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={images.snecek_logo} alt="snail logo" className="rounded"></img>
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
