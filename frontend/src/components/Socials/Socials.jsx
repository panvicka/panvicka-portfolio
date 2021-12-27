import React from 'react';

import { BsTwitter, BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { ImCodepen } from 'react-icons/im';

import SocialIcon from './Socials.styles';

function Socials({ size = 40 }) {
  return (
    <>
      <SocialIcon size={size}>
        <a href="https://www.linkedin.com/">
          <BsLinkedin />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://github.com/panvicka">
          <BsGithub />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://twitter.com/panvicka">
          <BsTwitter />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://codepen.io/panvicka">
          <ImCodepen />
        </a>
      </SocialIcon>
      <SocialIcon size={size}>
        <a href="https://stackoverflow.com/users/13248487/pan-vi">
          <BsStackOverflow />
        </a>
      </SocialIcon>
    </>
  );
}

export default Socials;
