import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../clients";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { AppWrapper } from "../../wrapper";
import { useLanguage } from "../../context/LanguageContext";
import {
  AboutContentItem,
  AboutContentItemWrapper,
  AboutYears,
  AboutContentHeader,
  AboutContentInfo,
} from "./About.styles";
import { PageWrapper, SectionTitle } from "../../index.styles";

const About = () => {
  const { t } = useTranslation();
  const [about, setAbout] = useState([]);

  const currentLanguage = useLanguage();

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      console.log(`sanity fetching about, data`);
      console.log(data);
      setAbout(data);
    });
  }, []);

  return (
    <PageWrapper column>
      <SectionTitle>{t("About")}</SectionTitle>

      <AboutContentItemWrapper>
        {about.map((aboutItem, index) => {
          return (
            <AboutContentItem key={aboutItem._id}>
              <AboutYears
                as={motion.div}
                transition={{ duration: 0.3 }}
                whileInView={{ height: 70, width: 70, opacity: 1 }}
              >
                {aboutItem.experience}
                <span>y</span>
              </AboutYears>
              <AboutContentHeader>{aboutItem.title[currentLanguage]}</AboutContentHeader>
              <AboutContentInfo>
                {aboutItem.aboutImage && <img src={urlFor(aboutItem.aboutImage)} />}
                <p>{aboutItem.text[currentLanguage]}</p>
              </AboutContentInfo>
            </AboutContentItem>
          );
        })}
      </AboutContentItemWrapper>
    </PageWrapper>
  );
};

export default AppWrapper(About, "about");
