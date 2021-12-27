import styled from 'styled-components';

import { size } from '../../constants/device';
import * as globalStyles from '../../index.styles';

export const SocialWrapper = styled(globalStyles.FlexCol)`
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

export const HeroWrapper = styled(globalStyles.FlexRow)`
  flex: 1;
  min-width: ${size.mobileS}px;
  min-height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15rem 2rem 0 0;
`;

export const HeroText = styled(globalStyles.FlexCol)`
  width: 450px;
  max-width: 650px;
  min-width: 350px;
  background-color: var(--color-almost-white);
  border-radius: 20px;
  margin-left: 2rem;
  padding: 2rem;
  box-shadow: var(--box-shadow);

  span.greeting {
    text-transform: uppercase;
    font-size: 1.4em;
    color: var(--accent-color);
  }

  span.name {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: bold;
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const HeroImage = styled(globalStyles.FlexCol)`
  position: relative;
  margin-left: -4rem;

  svg {
    position: absolute;
    z-index: -5;
    left: -330px;
    top: -257px;
    transform: rotate(55deg);
  }
`;
