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
      // as={motion.div}
      // transition={{ duration: 0.5 }}
      // animate={{ x: [-100, 0], opacity: [0, 1] }}
      >
        <span className="greeting">{t('Hello-I-am')}</span>
        <span className="name"> Eliška Veisová</span>

        <p>{t('tra-embedded')}</p>
        <p>{t('tra-webdev')}</p>
      </HeroText>

      <HeroImage>
        <svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1006,591.9999999999999C1007.7295951155209,716.8202345016504,822.1952436065978,916.8151053481787,719.7245306908445,951.7114317029973C617.2538177750912,986.6077580578159,477.775988917126,860.3298634127445,391.17572250548005,801.3779581289117C304.5754560938341,742.4260528450789,205.318885971882,702.8482316386514,200.1229322209686,598C194.92697847005522,493.1517683613485,275.12932870387465,238.1568975148203,359.9999999999998,172.2885682970027C444.8706712961249,106.42023907918514,601.6802933310528,132.8381194092617,709.3469599977195,202.79002469309455C817.0136266643863,272.7419299769274,1004.2704048844791,467.1797654983494,1006,591.9999999999999C1007.7295951155209,716.8202345016504,822.1952436065978,916.8151053481787,719.7245306908445,951.7114317029973"
            fill="#ea5746"
          />
        </svg>
        <img src={images.profilePic} alt="women with grey shirt, glasses, brown hair, smiling" />
      </HeroImage>

      <Socials />
    </PageWrapper>
  );
}

export default AppWrapper(Home, 'home');
