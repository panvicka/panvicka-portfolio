import styled from "styled-components";
import * as globalStyles from "../../index.styles";

export const AboutContentWrapper = styled(globalStyles.FlexCol)`
  border: 3px solid green;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15rem 2rem 0rem 2rem;
`;

export const AboutContentItem = styled(globalStyles.FlexRow)`
  border: 1px solid red;
  width: 100%;
  height: 250px;

  img {
    display: block;
    max-width: 230px;
    max-height: 95px;
    width: auto;
    height: auto;
  }
`;
export const AboutContentItemWrapper = styled(globalStyles.FlexCol)`
  border: 1px solid blue;
  width: 100%;
`;
