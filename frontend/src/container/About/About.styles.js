import styled from "styled-components";
import * as globalStyles from "../../index.styles";

export const AboutYears = styled(globalStyles.FlexRowCenter)`
  position: absolute;
  background-color: pink;
  top: -30px;
  left: -30px;
  font-size: 2.4em;
  border-radius: 50%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  opacity: 0;
  transform-origin: center;

  span {
    display: inline;
    font-size: 1.5rem;
    margin-top: 0.5em;
  }
`;

export const AboutContentHeader = styled.h3`
  color: black;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`;

export const AboutContentInfo = styled(globalStyles.FlexRow)`
  justify-content: center;
  align-items: center;

  p {
    line-height: 1.3rem;
  }

  img {
    display: block;
    max-height: 100px;
    width: auto;
    height: auto;
    margin-right: 1rem;
  }
`;

export const AboutContentItem = styled(globalStyles.FlexCol)`
  position: relative;
  width: 400px;
  min-width: 350px;
  min-height: 200px;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
`;
export const AboutContentItemWrapper = styled(globalStyles.FlexRowCenter)`
  width: 100%;
  flex-wrap: wrap;
`;
