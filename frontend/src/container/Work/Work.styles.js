import styled from 'styled-components';

import * as globalStyles from '../../index.styles';

export const WorkItem = styled(globalStyles.FlexCol)`
  min-height: 250px;
  min-width: 300px;
  width: 360px;
  margin: 0.9rem;
  position: relative;
  overflow: hidden;

  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  border-radius: 10px;

  button {
    padding: 0.7rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
      font-size: 1.5em;
    }
  }

  p {
    line-height: 1.3rem;
    margin: 1rem;
    text-align: center;
  }
`;

export const WorkImage = styled.div`
  position: absolute;
  top: 50px;
  img {
    width: 100%;
    background-color: white;
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
