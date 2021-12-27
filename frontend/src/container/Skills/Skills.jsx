import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { urlFor, client } from '../../clients';
import { images } from '../../constants';
import { SectionTitle, SectionSubTitle, PageWrapper } from '../../index.styles';
import { AppWrapper } from '../../wrapper';
import {
  Skill,
  SkillHeader,
  SkillsSectionWrapper,
  SkillsSection,
  SkillWrapper,
} from './Skills.styles';

function Skills() {
  const { t } = useTranslation();

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      console.log(`sanity fetching, data`);
      console.log(data);
      setSkills(data);
    });
  }, []);

  return (
    <PageWrapper column>
      <SectionTitle>{t('tra-skills')}</SectionTitle>
      <SkillsSectionWrapper>
        <SkillsSection
          as={motion.div}
          transition={{ duration: 0.5 }}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        >
          <SectionSubTitle>{t('tra-skills-web')}</SectionSubTitle>
          <SkillWrapper>
            {skills.map((skill) => {
              if (skill.type === 'web') {
                return (
                  <Skill key={skill._id}>
                    <img src={urlFor(skill.icon)} alt={`logo of ${skill.name}`} />
                    <SkillHeader>{skill.name}</SkillHeader>
                  </Skill>
                );
              }
              return '';
            })}
          </SkillWrapper>
        </SkillsSection>
        <SkillsSection
          background={images.traces}
          as={motion.div}
          transition={{ duration: 0.5 }}
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
        >
          <SectionSubTitle>{t('tra-skills-embedded')}</SectionSubTitle>
          <SkillWrapper>
            {skills.map((skill) => {
              if (skill.type === 'embedded') {
                return (
                  <Skill key={skill._id}>
                    <img src={urlFor(skill.icon)} alt={`logo of ${skill.name}`} />
                    <SkillHeader>{skill.name}</SkillHeader>
                  </Skill>
                );
              }
              return '';
            })}
          </SkillWrapper>
        </SkillsSection>
      </SkillsSectionWrapper>
    </PageWrapper>
  );
}

export default AppWrapper(Skills, 'skills');
