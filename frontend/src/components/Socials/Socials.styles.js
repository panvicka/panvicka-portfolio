import styled from 'styled-components';

import * as globalStyles from '../../index.styles';

const SocialIcon = styled(globalStyles.FlexCol)`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  background-color: var(--white-color);
  margin: 0.25rem 0.25rem;
  border: 1px solid var(--lightGray-color);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: ${(props) => `${props.size / 2}px`};
    height: ${(props) => `${props.size / 2}px`};
    color: var(--gray-color);
  }

  &:hover {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);

    svg {
      color: var(--white-color);
    }
  }

  @media screen and (min-width: 2000px) {
    width: 70px;
    height: 70px;

    margin: 0.5rem 0;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default SocialIcon;
