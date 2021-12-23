import React from 'react';

import styled from 'styled-components';

import * as globalStyles from '../../../index.styles';

const LanguageSkillWrapper = styled(globalStyles.FlexRowCenter)`
  width: 280px;
  min-height: 150px;
  margin: 0.3rem;
  padding: 0.3rem;
  border-radius: 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  img {
    height: 70px;
  }
`;

const LanguageSkillTextPart = styled(globalStyles.FlexCol)`
  padding: 0.5rem;
  padding-left: 1rem;
`;

const LanguageSkillTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1em;
  span {
    margin-left: 0.5em;
    color: grey;
  }
`;

function LanguageSkill({ language, icon, level, info }) {
  return (
    <LanguageSkillWrapper>
      <img src={icon} alt="" />
      <LanguageSkillTextPart>
        <LanguageSkillTitle>
          {language}
          <span>({level})</span>
        </LanguageSkillTitle>

        <p>{info}</p>
      </LanguageSkillTextPart>
    </LanguageSkillWrapper>
  );
}

export default LanguageSkill;
