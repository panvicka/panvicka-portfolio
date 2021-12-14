import React from "react";
import { DiReact } from "react-icons/di";

import { BsGithub } from "react-icons/bs";

import styled from "styled-components";
import * as globalStyles from "../../index.styles";

export const FooterSectionCredits = styled(globalStyles.FlexCol)`
  text-align: right;
  font-size: 0.7rem;
`;

export const FooterSection = styled(globalStyles.FlexColCenter)`
  justify-content: flex-start;

  small {
    margin-top: 1em;
  }
`;

export const FooterWrapper = styled(globalStyles.FlexRow)`
  width: 100%;
  border: 3px solid black;
  padding: 2rem 15rem;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #b4499d;
  }

  svg {
    margin: 0 0.3rem;
  }
`;

export const FooterGitHubLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  font-size: 2rem;
  text-decoration: none;
  transition: color linear 0.1s;

  &:hover {
    color: #00000053;
  }
  svg {
    margin-left: 0.3rem;
  }
`;

const Footer = () => {
  var year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterSection>
        <FooterGitHubLink href="">
          Check page <BsGithub />
        </FooterGitHubLink>
        <div>
          Created with <DiReact /> and <a href="https://www.sanity.io/">Sanity.io</a>
        </div>
        <small>&copy; Copyright {year}, panvicka</small>
      </FooterSection>

      <FooterSectionCredits>
        Credits:
        <a href="https://www.flaticon.com/free-icons/circuit-board" title="circuit board">
          Circuit board icons created by Eucalyp
        </a>
        <a href="https://www.flaticon.com/free-icons/microchip" title="microchip icons">
          Microchip icons created by Freepik
        </a>
        <a href="https://www.flaticon.com/free-icons/book" title="book icons">
          Book icons created by itim2101
        </a>
        <a href="https://www.flaticon.com/free-icons/layout" title="layout icons">
          Layout icons created by Freepik
        </a>
        <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">
          Ui icons created by surang
        </a>
      </FooterSectionCredits>
    </FooterWrapper>
  );
};

export default Footer;
