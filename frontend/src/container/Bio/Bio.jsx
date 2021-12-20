import React from 'react';
import { AppWrapper } from '../../wrapper';
import { motion } from 'framer-motion';

import { SectionTitle, PageWrapper } from '../../index.styles';
import { BlockElement, BioContentWrapper } from './Bio.styles';
import { useTranslation } from 'react-i18next';

const bioInfo = [
  {
    prompt: 'tra-name',
    reply: 'Eliška Veisová',
  },
  {
    prompt: 'tra-nickname',
    reply: 'panvicka',
  },
  {
    prompt: 'tra-languages',
    reply: 'tra-language-english;tra-language-german;tra-language-czech',
  },
  {
    prompt: 'tra-date',
    reply: '16.3.1992',
  },
  {
    prompt: 'tra-born-place',
    reply: 'Liberec',
  },
  {
    prompt: 'tra-lives',
    reply: 'Liberec/Bautzen',
  },
  {
    prompt: '20XX-20XX',
    reply: 'tra-bachelor-degree;tra-tul;tra-eirs',
  },
  {
    prompt: '20XX-20XX',
    reply: 'tra-master-degree;tra-tul;tra-mechatronics',
  },
  {
    prompt: '20XX-20XX',
    reply: 'tra-master-degree;tra-hochschule;tra-mechatronics',
  },
  {
    prompt: '20XX-20XX',
    reply: 'tra-work-position;ULT AG, Löbau;tra-work-description',
  },

  {
    prompt: 'tra-hobby',
    reply: 'tra-climbing;tra-programming;tra-hiking;tra-reading;tra-fantasy-scifi',
  },
];

function Block({ prompt, reply }) {
  const { t } = useTranslation();

  let words = reply.split(';');

  return (
    <BlockElement>
      <motion.div
        transition={{ duration: 0.4, ease: 'easeIn' }}
        whileInView={{ x: [-200, 0], opacity: [0.8, 1] }}
        className="prompt"
      >
        {t(prompt)}
      </motion.div>

      <motion.div
        transition={{ duration: 0.4, ease: 'easeIn' }}
        whileInView={{ x: [+200, 0], opacity: [0.8, 1] }}
        className="reply"
      >
        {words.map((rep) => {
          return <p>{t(rep)}</p>;
        })}
      </motion.div>
    </BlockElement>
  );
}

function Bio() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <SectionTitle>{t('tra-bio')}</SectionTitle>

      {/* <p>{t("tra-bio-text")}</p> */}

      <BioContentWrapper>
        {bioInfo.map((info, index) => {
          return <Block key={index} prompt={info.prompt} reply={info.reply}></Block>;
        })}
      </BioContentWrapper>
    </PageWrapper>
  );
}

export default AppWrapper(Bio, 'bio');
