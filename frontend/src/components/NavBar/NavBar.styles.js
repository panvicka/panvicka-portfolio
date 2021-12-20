import styled from "styled-components";
import { motion } from "framer-motion";
import * as globalStyles from "../../index.styles";
import { device } from "../../constants/device";

export const LogoContainer = styled(globalStyles.FlexCol)`
  align-items: center;
  justify-content: flex-start;
  margin-right: 5em;

  img {
    object-fit: cover;
    border-radius: 50%;
    height: 130px;
    width: 130px;
  }
`;

export const NavContentWrapper = styled(globalStyles.FlexRow)`
  max-width: 1000px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
`;

export const Menu = styled(globalStyles.FlexColCenter)`
  min-width: 80px;
  min-height: 80px;
  border-radius: 50%;
  position: relative;
  background: var(--secondary-color);
  cursor: pointer;

  .lang-icon {
    position: relative;
  }

  svg {
    width: 70%;
    height: 70%;
    color: var(--white-color);
  }

  @media ${device.tablet} {
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
  height: 100vh;
  background-color: var(--white-color);
  box-shadow: 0 0 20px pink;

  svg {
    width: 80px;
    height: 80px;
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
      font-size: 1.8em;
      margin: 1.4rem;
      padding: 0.3em;
      width: 100%;
      text-align:center;
      border: 1px solid green;
    }
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.3rem;
    padding-left: 1.5em;
    margin-top: 2rem;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavLinks = styled(globalStyles.FlexRow).attrs({ as: "ul" })`
  flex: 1;
  list-style: none;

  li {
    margin: 0 1rem;
    cursor: pointer;
    font-size: 1.2em;

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

  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

export const Navbar = styled(globalStyles.FlexRowCenter).attrs({ as: "nav" })`
  width: 100%;
  border: 1px solid blue;
  padding: 1.2rem 0;
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
