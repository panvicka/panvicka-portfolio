import React from 'react';

import { BsTwitter, BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { ImCodepen } from 'react-icons/im';

import SocialIcon from './Socials.styles';

function Socials({ size = 40 }) {
  return (
    <>
      <SocialIcon size={size}>
        <a href="https://www.linkedin.com/in/eliska-veisova-143a37233/" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://github.com/panvicka" aria-label="Github">
          <BsGithub />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://twitter.com/panvicka" aria-label="Twitter">
          <BsTwitter />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://codepen.io/panvicka" aria-label="CodePen">
          <ImCodepen />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://stackoverflow.com/users/13248487/pan-vi" aria-label="StackOverflow">
          <BsStackOverflow />
        </a>
      </SocialIcon>
    </>
  );
}

export default Socials;
