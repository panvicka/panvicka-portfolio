import styled from "styled-components";
import * as globalStyles from "../../index.styles";
import { SectionTitle, SectionSubTitle } from "../../index.styles";

export const BioWrapper = styled(globalStyles.FlexCol)`
  border: 3px solid green;
  flex: 1;
  min-height: 100%;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15rem 2rem 0rem 2rem;
`;

export const BlockElement = styled(globalStyles.FlexRow)`
   width: 80%;
   border: 2px solid red;


   .prompt {
   
    width: 50%;
    text-align: right;
    padding-right: 0.4rem;
    color: grey
   }

   .reply {
    width: 50%;
    text-align: left;
    padding-left: 1rem;
    font-weight: bolder;
   }

`;

export const BioContentWrapper = styled(globalStyles.FlexColCenter)`
  width: 100%;
  border: 2px solid blue;
`;
