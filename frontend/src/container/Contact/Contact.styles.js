import styled from 'styled-components';

import { device } from '../../constants/device';
import * as globalStyles from '../../index.styles';

export const ControlWrapper = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    padding: 0.5rem;
    color: var(--color-primary);
    background-color: var(--accent-color);
    width: 100%;
    min-width: 150px;
    font-size: 1.5em;
    margin: 0.9rem;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: background-color linear 0.2s;

    &:hover {
      background-color: var(--secondary-color);
    }

    &:disabled {
      background-color: grey;
      color: white;
      cursor: not-allowed;
    }
  }
`;

export const InputWrapper = styled(globalStyles.FlexCol)`
  margin-bottom: 0.5rem;
  position: relative;
  width: 100%;

  .hidden {
    display: none;
  }

  input,
  textarea {
    padding: 0.6rem;
    border-radius: 5px;
    width: 100%;
    resize: vertical;
    max-height: 400px;
    display: inline;
    border: 3px solid var(--color-almost-white);

    &:focus {
      border: 3px solid var(--accent-color);
      outline: 0 none;
    }
  }

  .error-field {
    color: red;
    font-size: 0.8em;
    height: 20px;
  }

  label {
    color: var(--primary-color);
    margin-bottom: 0.3rem;
    font-weight: bolder;
  }
`;
