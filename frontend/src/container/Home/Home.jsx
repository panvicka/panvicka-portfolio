import React from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Socials } from '../../components';
import { images } from '../../constants';
import { PageWrapper } from '../../index.styles';
import { AppWrapper } from '../../wrapper';
import { HeroText, HeroImage } from './Home.styles';

function Home() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <HeroText
        as={motion.div}
        transition={{ duration: 0.5 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      >
        <p>{t('Hello-I-am')}</p>
        <h1>Eliška Veisová</h1>
        <p>{t('tra-embedded')}</p>
        <p>{t('tra-webdev')}</p>
      </HeroText>

      <HeroImage>
        <img src={images.profilePic} alt="women with grey shirt, glasses, brown hair, smiling" />
      </HeroImage>

      <Socials />
    </PageWrapper>
  );
}

export default AppWrapper(Home, 'home');
