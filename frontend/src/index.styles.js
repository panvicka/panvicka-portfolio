import styled from 'styled-components';

import { size } from './constants/device';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex: 1;
  min-height: 100%;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  min-width: ${size.mobileS}px;
  margin: 0 auto;
  padding: 15rem 2rem 0rem 2rem;
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: black;
  font-size: 2em;
  margin-bottom: 1.5rem;
`;

export const SectionSubTitle = styled.h3`
  text-transform: uppercase;
  color: black;
  font-size: 1em;
  margin-bottom: 1.5rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexRowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
