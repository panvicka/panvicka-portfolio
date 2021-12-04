import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { urlFor, client } from "../../clients";
import { AppWrapper } from "../../wrapper";
import { images } from "../../constants";

import { SectionTitle, SectionSubTitle } from "../../index.styles";

import {
  SkillsContentWrapper,
  Skill,
  SkillHeader,
  SkillsSectionWrapper,
  SkillsSection,
  SkillWrapper,
} from "./Skills.styles";
import LanguageSkill from "./LanguageSkill/LanguageSkill";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [languageSkills, setLanguageSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      console.log(`sanity fetching, data`);
      console.log(data);
      setSkills(data);
    });

    const queryLanguages = '*[_type == "languages"]';

    client.fetch(queryLanguages).then((data) => {
      console.log(`sanity languages fetching, data`);
      console.log(data);
      setLanguageSkills(data);
    });
  }, []);

  return (
    <SkillsContentWrapper>
      <SectionTitle>Skills</SectionTitle>
      <SkillsSectionWrapper>
        <SkillsSection as={motion.div} transition={{ duration: 0.5 }} whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
          <SectionSubTitle>web developement</SectionSubTitle>
          <SkillWrapper>
            {skills.map((skill, index) => {
              if (skill.type === "web") {
                return (
                  <Skill key={index}>
                    <img src={urlFor(skill.icon)} />
                    <SkillHeader>{skill.name}</SkillHeader>
                  </Skill>
                );
              }
            })}
          </SkillWrapper>
        </SkillsSection>
        <SkillsSection
          background={images.traces}
          as={motion.div}
          transition={{ duration: 0.5 }}
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
        >
          <SectionSubTitle>embedded</SectionSubTitle>
          <SkillWrapper>
            {skills.map((skill, index) => {
              if (skill.type === "embedded") {
                return (
                  <Skill key={index}>
                    <img src={urlFor(skill.icon)} />
                    <SkillHeader>{skill.name}</SkillHeader>
                  </Skill>
                );
              }
            })}
          </SkillWrapper>
        </SkillsSection>
      </SkillsSectionWrapper>

      <SkillsSectionWrapper
        as={motion.div}
        transition={{ duration: 0.5 }}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
      >
        {languageSkills.map((lang, index) => {
          return (
            <LanguageSkill
              key={index}
              language={lang.language}
              icon={urlFor(lang.icon)}
              level={lang.level}
              info={lang.info}
            />
          );
        })}
      </SkillsSectionWrapper>
    </SkillsContentWrapper>
  );
};

export default AppWrapper(Skills, "skills");
