import styled from 'styled-components';

import { device } from '../../constants/device';
import * as globalStyles from '../../index.styles';

export const BioInfoWrapper = styled(globalStyles.FlexCol)`
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    /* flex-wrap: wrap; */
  }
`;

export const BlockElement = styled(globalStyles.FlexRow)`
  width: 80%;
  margin: 0.5rem 0 0 0;
  padding: 0.1rem;
  min-width: 280px;
  font-size: 1.1em;

  .prompt {
    width: 50%;
    text-align: right;
    padding-right: 0.6rem;
    color: var(--secondary-color);
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
  width: ${(props) => `${props.width}%`};
  margin-top: 1rem;
`;
