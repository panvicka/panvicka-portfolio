import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { Navbar, LogoContainer, NavLinks, Menu, MenuContent } from "./NavBar.styles";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { images } from "../../constants";
import { menuArray } from "../../constants/menu-items";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <Navbar>
      <LogoContainer>
        <img src={images.snecek_logo} alt="snail logo" className="rounded" />
      </LogoContainer>
      <NavLinks>
        {menuArray.map((item, index) => {
          return (
            <li key={`link-${index}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </NavLinks>

      <Menu>
        <HiMenu onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <MenuContent as={motion.div} initial={{ width: 0 }} animate={{ width: "80%" }}>
            <HiX onClick={() => setToggleMenu(false)} />
            <NavLinks>
              {menuArray.map((item, index) => {
                return (
                  <li key={`mobile-menu-${index}`}>
                    <a href={`#${item}`} onClick={() => setToggleMenu(false)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </NavLinks>
          </MenuContent>
        )}
      </Menu>
      <LanguageSelect />
    </Navbar>
    </>
  );
};

export default NavBar;
