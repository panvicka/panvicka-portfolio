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

  p {
    margin: 0 2rem;
    line-height: 1.5em;
    font-size: 1.1em;
  }
`;

export const BlockElement = styled(globalStyles.FlexRow)`
  width: 80%;
  /* border: 2px solid red; */
  /* margin: 0.1rem 0; */

  margin-top: ${(props) => (props.first ? "0.5rem" : 0)};

  .prompt {
    width: 20%;
    text-align: right;
    padding-right: 0.4rem;
    color: grey;
  }

  .reply {
    width: 80%;
    text-align: left;
    padding-left: 1rem;
    font-weight: bolder;
  }
`;

export const BioContentWrapper = styled(globalStyles.FlexColCenter)`
  width: 100%;
  margin-top: 2rem;
`;
