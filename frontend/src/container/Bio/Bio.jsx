import React from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { SectionTitle, PageWrapper } from '../../index.styles';
import { AppWrapper } from '../../wrapper';
import { BlockElement, BioContentWrapper, BioInfoWrapper } from './Bio.styles';

const timeLine = [
  {
    prompt: '2011-2014',
    reply: 'tra-bachelor-degree;tra-tul;tra-eirs',
  },
  {
    prompt: '2014-2016',
    reply: 'tra-master-degree;tra-tul;tra-mechatronics',
  },
  {
    prompt: '2014-2016',
    reply: 'tra-master-degree;tra-hochschule;tra-mechatronics',
  },
  {
    prompt: '2016-2022',
    reply: 'tra-work-position;ULT AG, Löbau;tra-work-description',
  },
];

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
    reply: '16.3.1992, Liberec, CZ',
  },
  {
    prompt: 'tra-lives',
    reply: 'Liberec/Bautzen',
  },
  {
    prompt: 'tra-hobby',
    reply: 'tra-climbing;tra-programming;tra-hiking;tra-reading;tra-fantasy-scifi',
  },
];

function Block({ prompt, reply }) {
  const { t } = useTranslation();

  const words = reply.split(';');

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
        {words.map((rep, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{t(rep)}</p>
        ))}
      </motion.div>
    </BlockElement>
  );
}

function Bio() {
  const { t } = useTranslation();

  return (
    <PageWrapper column>
      <SectionTitle>{t('tra-bio')}</SectionTitle>

      {/* <p>{t("tra-bio-text")}</p> */}

      <BioInfoWrapper>
        <BioContentWrapper width={40}>
          {bioInfo.map((info, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Block key={index} prompt={info.prompt} reply={info.reply} />
          ))}
        </BioContentWrapper>

        <BioContentWrapper>
          {timeLine.map((info, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Block key={index} prompt={info.prompt} reply={info.reply} />
          ))}
        </BioContentWrapper>
      </BioInfoWrapper>
    </PageWrapper>
  );
}

export default AppWrapper(Bio, 'bio');
