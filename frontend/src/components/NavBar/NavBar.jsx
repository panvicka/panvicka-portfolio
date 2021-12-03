import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { Navbar, LogoContainer, NavLinks, Menu, MenuContent } from "./NavBar.styles";
import { images } from "../../constants";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuArray = ["home", "about", "contact", "work", "skills", "self-education"];

  return (
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
          <MenuContent as={motion.div} whileInView={{ x: [300, 0] }} transition={{ duration: 1 }}>
            <HiX onClick={() => setToggleMenu(false)} />
            <NavLinks>
              {menuArray.map((item, index) => {
                return (
                  <li key={`mobile-menu-${index}`}>
                    <a href={`#${item}`} onClick={() => setToggleMenu(true)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </NavLinks>
          </MenuContent>
        )}
      </Menu>
    </Navbar>
  );
};

export default NavBar;
