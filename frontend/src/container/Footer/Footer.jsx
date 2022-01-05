import React from 'react';

import { BsGithub } from 'react-icons/bs';

import { Socials } from '../../components';
import {
  FooterSection,
  FooterSocialWrapper,
  FooterWrapper,
  FooterGitHubLink,
  FooterSectionCredits,
} from './Footer.styles';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <Socials size={50} />
      </FooterSocialWrapper>

      <FooterSection>
        <div>
          <FooterGitHubLink href="">
            Check page <BsGithub />
          </FooterGitHubLink>
          <div>Created with React.JS and Sanity.io</div>
          <small>&copy; Copyright {year}, panvicka</small>
        </div>
        <FooterSectionCredits>
          Credits:
          <a href="https://www.flaticon.com/free-icons/circuit-board" title="circuit board">
            {/* cspell:disable-next-line */}
            Circuit board icons created by Eucalyp
          </a>
          <a href="https://www.flaticon.com/free-icons/microchip" title="microchip icons">
            {/* cspell:disable-next-line */}
            Microchip icons created by Freepik
          </a>
          <a href="https://www.flaticon.com/free-icons/book" title="book icons">
            {/* cspell:disable-next-line */}
            Book icons created by itim2101
          </a>
          <a href="https://www.flaticon.com/free-icons/layout" title="layout icons">
            {/* cspell:disable-next-line */}
            Layout icons created by Freepik
          </a>
          <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">
            {/* cspell:disable-next-line */}
            Ui icons created by surang
          </a>
        </FooterSectionCredits>
      </FooterSection>
    </FooterWrapper>
  );
}

export default Footer;
