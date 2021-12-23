import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { urlFor, client } from '../../clients';
import { useLanguage } from '../../context/LanguageContext';
import { PageWrapper, SectionTitle } from '../../index.styles';
import { AppWrapper } from '../../wrapper';
import {
  AboutContentItem,
  AboutContentItemWrapper,
  AboutYears,
  AboutContentHeader,
  AboutContentInfo,
} from './About.styles';

function About() {
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
      <SectionTitle>{t('About')}</SectionTitle>

      <AboutContentItemWrapper>
        {about.map((aboutItem) => (
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
              {aboutItem.aboutImage && <img alt="" src={urlFor(aboutItem.aboutImage)} />}
              <p>{aboutItem.text[currentLanguage]}</p>
            </AboutContentInfo>
          </AboutContentItem>
        ))}
      </AboutContentItemWrapper>
    </PageWrapper>
  );
}

export default AppWrapper(About, 'about');
