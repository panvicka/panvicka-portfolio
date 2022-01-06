import React from 'react';

import menuArray from '../../constants/menuItems';
import { NavigationDot, NavigationDotsWrapper } from './NavDots.styles';

function Navigation({ active }) {
  return (
    <NavigationDotsWrapper>
      {menuArray.map((item) => (
        <NavigationDot
          href={`#${item.replace('tra-menu-', '')}`}
          key={`dot-nav-${item}`}
          activated={active === item.replace('tra-menu-', '')}
        />
      ))}
    </NavigationDotsWrapper>
  );
}

export default Navigation;
