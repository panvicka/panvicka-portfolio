import styled from 'styled-components';

import * as globalStyles from '../../index.styles';

export const NavigationDot = styled.a`
  width: ${(props) => (props.activated ? '15px' : '10px')};
  height: ${(props) => (props.activated ? '15px' : '10px')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.activated ? 'var(--secondary-color)' : 'var(--primary-color)'};
  margin: 0.5rem;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--secondary-color);
  }

  @media screen and (min-width: 2000px) {
    width: ${(props) => (props.activated ? '25px' : '20px')};
    height: ${(props) => (props.activated ? '25px' : '20px')};
  }
`;

export const NavigationDotsWrapper = styled(globalStyles.FlexCol)`
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
