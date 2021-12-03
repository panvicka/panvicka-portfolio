import styled from "styled-components";
import { motion } from "framer-motion";
import * as globalStyles from "../../index.styles";

export const LogoContainer = styled(globalStyles.FlexCol)`
  align-items: center;
  justify-content: flex-start;

  img {
    object-fit: cover;
    border-radius: 50%;
    height: 130px;
    width: 130px;

    @media screen and (min-width: 1500px) {
      height: 200px;
      width: 200px;
    }
  }
`;

export const Menu = styled(globalStyles.FlexColCenter)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  background: var(--secondary-color);
  cursor: pointer;

  svg {
    width: 70%;
    height: 70%;
    color: var(--white-color);
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const MenuContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  padding: 1rem;
  width: 300px;
  height: 100vh;
  background-color: var(--white-color);
  box-shadow: 0 0 20px pink;

  svg {
    width: 35px;
    height: 35px;
    color: var(--secondary-color);
    margin: 0.5rem 1rem;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;

    li {
      margin: 1rem;
    }
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavLinks = styled(globalStyles.FlexRowCenter).attrs({ as: "ul" })`
  flex: 1;
  list-style: none;

  li {
    margin: 0 1rem;
    cursor: pointer;

    div {
      width: 10px;
      height: 10px;
      background: transparent;
      border-radius: 50%;
      margin-bottom: 5px;
    }

    a {
      color: var(--grey-color);
      text-decoration: none;
      flex-direction: column;
      text-transform: uppercase;
      font-weight: 400;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--secondary-color);
      }
    }

    &:hover {
      div {
        background: var(--secondary-color);
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Navbar = styled(globalStyles.FlexRow).attrs({ as: "nav" })`
  width: 100%;
  border: 1px solid blue;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: fixed;
  z-index: 2;

  // slightly transparent fallback
  background: rgba(255, 255, 255, 0.8);

  @supports (backdrop-filter: blur(4px)) {
    // with backdrop-filter very transparent and blurred
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
`;
