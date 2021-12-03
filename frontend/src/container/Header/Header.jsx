import React from "react";
import { motion } from "framer-motion";

import { AppWrapper } from "../../wrapper";
import { HeroWrapper, HeroText, HeroImage } from "./Header.styles";
import { images } from "../../constants";

const Header = () => {
  return (
    <HeroWrapper>
      <HeroText as={motion.div} transition={{ duration: 0.5 }} whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
        <p>Hello, I am</p>
        <h1>Eliška Veisová</h1>
        <p>embedded HW/SW engineer for 5 years</p>
        <p>learning full-stack web development</p>
      </HeroText>

      <HeroImage>
        <img src={images.profile_pic} alt="profile"></img>
      </HeroImage>
    </HeroWrapper>
  );
};

export default AppWrapper(Header, 'home');
