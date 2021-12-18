import React from "react";
import styled from "styled-components";

import { NavDots } from "../components";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 100%;
  width: 100%;
  border: 5px dotted pink;
`;

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <WrapperDiv id={idName}>
        {/* <Socials /> */}

        <Component />

        <NavDots active={idName} />
      </WrapperDiv>
    );
  };

export default AppWrapper;
