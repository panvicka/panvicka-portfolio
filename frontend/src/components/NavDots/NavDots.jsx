import React from "react";

import { NavigationDot, NavigationDotsWrapper } from "./NavDots.styles";
import { menuArray } from "../../constants/menu-items";

const Navigation = ({ active }) => {
  return (
    <NavigationDotsWrapper>
      {menuArray.map((item, index) => {
        return <NavigationDot href={`#${item}`} key={item + index} activated={active === item}></NavigationDot>;
      })}
    </NavigationDotsWrapper>
  );
};

export default Navigation;
