import styled from 'styled-components';

import * as globalStyles from '../../index.styles';

export const NavigationDot = styled.a`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.activated ? 'blue' : 'white')};
  margin: 0.5rem;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--secondary-color);
  }

  @media screen and (min-width: 2000px) {
    width: 20px;
    height: 20px;
  }
`;

export const NavigationDotsWrapper = styled(globalStyles.FlexCol)`
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
