import styled from 'styled-components';

import { device } from '../../constants/device';
import * as globalStyles from '../../index.styles';

export const AboutYears = styled(globalStyles.FlexRowCenter)`
  position: absolute;
  background-color: var(--accent-color);
  top: -30px;
  left: -30px;
  font-size: 2.4em;
  border-radius: 50%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform-origin: center;

  span {
    display: inline;
    font-size: 1.5rem;
    margin-top: 0.5em;
  }

  position: relative;
  @media ${device.mobileL} {
    position: absolute;
  }
`;

export const AboutContentHeader = styled.h3`
  color: black;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`;

export const AboutContentInfo = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  p {
    line-height: 1.3rem;
    margin-top: 1.3rem;
  }

  svg {
    display: block;
    position: absolute;
    transform: scale(0.5) rotate(90deg);
    right: 0px;
    top: 0px;
    left: 0;
    left: 0;
    opacity: 0.4;
  }

  img {
    display: block;
    max-height: 100px;
    width: auto;
    height: auto;
    margin-right: 1rem;
    z-index: 0;
  }

  @media ${device.mobileL} {
    flex-direction: row;
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
  background-color: var(--color-almost-white);
`;
export const AboutContentItemWrapper = styled(globalStyles.FlexRowCenter)`
  width: 100%;
  flex-wrap: wrap;
`;
