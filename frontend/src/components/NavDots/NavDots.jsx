import React from 'react';

import menuArray from '../../constants/menuItems';
import { NavigationDot, NavigationDotsWrapper } from './NavDots.styles';

function Navigation({ active }) {
  return (
    <NavigationDotsWrapper>
      {menuArray.map((item) => (
        <NavigationDot href={`#${item}`} key={`dot-nav-${item}`} activated={active === item} />
      ))}
    </NavigationDotsWrapper>
  );
}

export default Navigation;
