import React from "react";

import { BsTwitter, BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";

import { SocialWrapper, SocialIcon } from "./Socials.styles";

const Socials = () => {
  return (
    <SocialWrapper>
      <SocialIcon>
        <a href="">
          <BsLinkedin />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://github.com/panvicka">
          <BsGithub />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://twitter.com/panvicka">
          <BsTwitter />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://codepen.io/panvicka">
          <ImCodepen />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://stackoverflow.com/users/13248487/pan-vi">
          <BsStackOverflow />
        </a>
      </SocialIcon>
    </SocialWrapper>
  );
};

export default Socials;
