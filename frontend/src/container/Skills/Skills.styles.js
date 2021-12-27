import styled from 'styled-components';

import { device } from '../../constants/device';
import * as globalStyles from '../../index.styles';

export const SkillsContentWrapper = styled(globalStyles.FlexCol)`
  border: 3px solid green;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15rem 2rem 0rem 2rem;
`;

export const SkillsSectionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;

  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    margin: 1em 2em 2em 2em;
  }
`;

export const SkillsSection = styled(globalStyles.FlexCol)`
  background-size: cover;
  background-repeat: none;

  h3 {
    text-align: center;
  }

  @media ${device.tablet} {
    max-width: 50%;
  }
`;

export const Skill = styled(globalStyles.FlexColCenter)`
  min-width: 100px;
  min-height: 100px;
  margin: 0.3rem;
  padding: 0.3rem;
  border-radius: 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  background-color: var(--color-almost-white);
  img {
    height: 70px;
  }
`;

export const SkillWrapper = styled(globalStyles.FlexRowCenter)`
  min-width: 200px;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 2em;

  @media ${device.tablet} {
  }
`;

export const SkillHeader = styled.h3`
  text-transform: uppercase;
  font-size: 0.8em;
  margin-top: 0.4rem;
`;
