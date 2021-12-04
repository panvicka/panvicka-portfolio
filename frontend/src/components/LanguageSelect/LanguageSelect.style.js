import styled from "styled-components";

export const LanguageSelectWrapper = styled.div`
  position: absolute;
  right: 4%;
  top: 5%;
`;

export const DropDownButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  li {
    width: 200px;
  }

  span {
    left: 50%;
    // centering absolute positioned element with 50% of heigh/width margin
    margin-left: -25px;
    margin-top: -25px;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;
