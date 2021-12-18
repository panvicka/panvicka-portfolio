import styled from "styled-components";
import * as globalStyles from "../../index.styles";

export const SocialWrapper = styled(globalStyles.FlexRow)`
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

export const SocialIcon = styled(globalStyles.FlexCol)`
  width: 40px;
  height: 40px;
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
    width: 20px;
    height: 20px;
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
