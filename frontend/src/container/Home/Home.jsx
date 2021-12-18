import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { AppWrapper } from "../../wrapper";
import { HeroText, HeroImage } from "./Home.styles";
import { images } from "../../constants";
import { Socials } from "../../components";

import { PageWrapper } from "../../index.styles";

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <HeroText as={motion.div} transition={{ duration: 0.5 }} whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
        <p>{t("Hello-I-am")}</p>
        <h1>Eliška Veisová</h1>
        <p>embedded HW/SW engineer for 5 years</p>
        <p>learning full-stack web development</p>
      </HeroText>

      <HeroImage>
        <img src={images.profile_pic} alt="profile"></img>
      </HeroImage>

      <Socials />
    </PageWrapper>
  );
};

export default AppWrapper(Home, "home");
