import styled from 'styled-components';

import { device, size } from '../../constants/device';
import * as globalStyles from '../../index.styles';

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  flex-direction: row;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const HeroWrapper = styled(globalStyles.FlexRow)`
  flex: 1;
  min-width: ${size.mobileS}px;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15rem 2rem 0 2rem;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const HeroPhoneContentWrapper = styled(globalStyles.FlexColCenter)`
  padding: 1rem;
  width: 90%;
  min-width: ${size.mobileS}px;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: row;
    min-width: none;
  }
`;

export const HeroText = styled(globalStyles.FlexCol)`
  width: 100%;
  max-width: 650px;
  min-width: ${size.mobileS}px;
  background-color: var(--color-almost-white);
  border-radius: 20px;

  padding: 2rem;
  box-shadow: var(--box-shadow);

  @media ${device.mobileL} {
    width: 450px;
    margin-left: 0 2rem;
  }

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
