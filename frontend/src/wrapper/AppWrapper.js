import React from "react";
import styled from "styled-components";

import { NavDots, Socials } from "../components";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  height: 100%;
`;

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <WrapperDiv id={idName}>
        <Socials />
        <div>
          <Component />
        </div>
        <NavDots active={idName} />
      </WrapperDiv>
    );
  };

export default AppWrapper;
