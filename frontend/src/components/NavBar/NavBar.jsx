import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { Navbar, LogoContainer, NavLinks, Menu, MenuContent, NavContentWrapper } from "./NavBar.styles";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { images } from "../../constants";
import { menuArray } from "../../constants/menu-items";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { device, size } from "../../constants/device";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { height, width } = useWindowDimensions();

  return (
    <>
      <Navbar>
        <NavContentWrapper>
          <LogoContainer>
            <a href="#home">
              <img src={images.snecek_logo} alt="snail logo" className="rounded" />
            </a>
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
                <div class="head">
                  {width < size.tablet ? <LanguageSelect size={50} class="lan-select" /> : ""}
                  <HiX onClick={() => setToggleMenu(false)} />
                </div>

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
          {width >= size.tablet ? <LanguageSelect size={35} /> : ""}
        </NavContentWrapper>
      </Navbar>
    </>
  );
};

export default NavBar;
