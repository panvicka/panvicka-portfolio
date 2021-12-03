import React from "react";

import { BsTwitter, BsGithub } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";

import { SocialWrapper, SocialIcon } from "./Socials.styles";

const Socials = () => {
  return (
    <SocialWrapper>
      <SocialIcon>
        <BsTwitter />
      </SocialIcon>
      <SocialIcon>
        <BsGithub />
      </SocialIcon>
      <SocialIcon>
        <ImCodepen />
      </SocialIcon>
    </SocialWrapper>
  );
};

export default Socials;
