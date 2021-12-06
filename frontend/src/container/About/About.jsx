import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../clients";
import { useTranslation } from "react-i18next";

import { AppWrapper } from "../../wrapper";
import { useLanguage } from "../../context/LanguageContext";
import { AboutContentWrapper, AboutContentItem, AboutContentItemWrapper } from "./About.styles";
import { SectionTitle } from "../../index.styles";

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
    <AboutContentWrapper>
      <SectionTitle>{t("About")}</SectionTitle>

      <AboutContentItemWrapper>
        {about.map((aboutItem, index) => {
          return (
            <AboutContentItem key={aboutItem._id}>
              {aboutItem.aboutImage && <img src={urlFor(aboutItem.aboutImage)} />}
              <div>
                <div>{aboutItem.title[currentLanguage]}</div>
                <div>{aboutItem.experience}</div>
                <div>{aboutItem.text[currentLanguage]}</div>
              </div>
            </AboutContentItem>
          );
        })}
      </AboutContentItemWrapper>
    </AboutContentWrapper>
  );
};

export default AppWrapper(About, "about");
