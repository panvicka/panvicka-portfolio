import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';

import { images } from '../../constants';
import { size } from '../../constants/device';
import menuArray from '../../constants/menuItems';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import {
  Navbar,
  LogoContainer,
  NavLinks,
  Menu,
  MenuContent,
  NavContentWrapper,
} from './NavBar.styles';

function NavBar() {
  const { t } = useTranslation();

  const [toggleMenu, setToggleMenu] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <Navbar>
      <NavContentWrapper>
        <LogoContainer>
          <a href="#home">
            <img
              src={images.snecekLogo}
              alt="snail logo"
              className="rounded"
              width="408"
              height="317"
            />
          </a>
        </LogoContainer>

        <NavLinks>
          {menuArray.map((item) => (
            <li key={`link-${item}`}>
              <a
                href={`#${item.replace('tra-menu-', '')}`}
                aria-label={`go to section ${item.replace('tra-menu-', '')}`}
              >
                {t(item)}
              </a>
            </li>
          ))}
        </NavLinks>

        <Menu>
          <HiMenu onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <MenuContent as={motion.div} initial={{ width: 0 }} animate={{ width: '80%' }}>
              <div className="head">
                {width < size.tablet ? <LanguageSelect size={50} class="lan-select" /> : ''}
                <HiX onClick={() => setToggleMenu(false)} />
              </div>

              <NavLinks>
                {menuArray.map((item) => (
                  <li key={`mobile-menu-${item}`}>
                    <a
                      href={`#${item.replace('tra-menu-', '')}`}
                      onClick={() => setToggleMenu(false)}
                      aria-label={`go to section ${item.replace('tra-menu-', '')}`}
                    >
                      {t(item)}
                    </a>
                  </li>
                ))}
              </NavLinks>
            </MenuContent>
          )}
        </Menu>
        {width >= size.tablet ? <LanguageSelect size={35} /> : ''}
      </NavContentWrapper>
    </Navbar>
  );
}

export default NavBar;
