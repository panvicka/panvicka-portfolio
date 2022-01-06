import styled from 'styled-components';

import { device } from '../../constants/device';
import * as globalStyles from '../../index.styles';

export const WorkItem = styled(globalStyles.FlexCol)`
  min-height: 250px;
  max-height: 250px;
  min-width: 300px;
  width: 360px;
  margin: 0.9rem;
  position: relative;
  overflow: hidden;
  background-color: var(--color-almost-white);

  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  border-radius: 10px;

  h3 {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.3rem;
    color: var(--color-primary);
    background-color: var(--accent-color);
    width: 50%;
    min-width: 150px;
    font-size: 1.5em;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: background-color linear 0.2s;

    a {
      color: var(--color-almost-white);
      text-decoration: none;
    }

    &:hover {
      background-color: var(--secondary-color);
    }

    &:disabled {
      background-color: grey;
      color: white;
      cursor: not-allowed;
    }
  }

  p {
    line-height: 1.1rem;
    margin: 1rem;
    text-align: center;
  }
`;

export const WorkImage = styled.div`
  position: absolute;
  top: 50px;
  display: none;
  img {
    width: 100%;
    background-color: white;
  }

  @media (hover: none) {
    display: none;
  }

  @media (-moz-touch-enabled: 1), (pointer: coarse) {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
  }
`;

export const WorkTags = styled(globalStyles.FlexRow)`
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

export const WorkItemWrapper = styled(globalStyles.FlexRowCenter)`
  flex-wrap: wrap;
`;

export const WorkHeader = styled.h3`
  color: black;
  text-align: center;
  text-transform: uppercase;
  margin: 0.7rem;
`;
