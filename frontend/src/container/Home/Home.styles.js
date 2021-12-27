import styled from 'styled-components';

import * as globalStyles from '../../index.styles';

export const HeroWrapper = styled(globalStyles.FlexRow)`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 2rem 0;
  border: 2px solid red;
`;

export const HeroText = styled(globalStyles.FlexCol)`
  width: 30%;
  max-width: 600px;
  min-width: 350px;
  background-color: var(--color-almost-white);
  border-radius: 20px;
  margin-left: 2rem;
  padding: 2rem;

  span.greeting {
    text-transform: uppercase;
    font-size: 1.4em;
    color: var(--color-grey);
  }

  span.name {
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: bold;
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const HeroImage = styled(globalStyles.FlexCol)`
  position: relative;

  svg {
    position: absolute;
    z-index: -5;
    left: -300px;
    top: -257px;
    transform: rotate(55deg) ;
  }
`;
