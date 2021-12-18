import styled from "styled-components";
import * as globalStyles from "../../index.styles";


export const BlockElement = styled(globalStyles.FlexRow)`
  width: 80%;
  margin: 0.5rem 0 0 0;
  padding: 0.1rem;
  min-width: 280px;

  .prompt {
    width: 50%;
    text-align: right;
    padding-right: 0.6rem;
    color: blue;
  }

  .reply {
    width: 50%;
    text-align: left;
    padding-left: 0.6rem;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.9rem 0 0 0;
    font-size: 1.2em;

    .prompt,
    .reply {
      text-align: center;
      width: 100%;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
`;

export const BioContentWrapper = styled(globalStyles.FlexColCenter)`
  width: 100%;
  margin-top: 1rem;
`;
