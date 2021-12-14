import styled from "styled-components";
import * as globalStyles from "../../index.styles";

export const ContactWrapper = styled(globalStyles.FlexCol)`
  border: 3px solid green;
  flex: 1;
  min-height: 100%;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15rem 2rem 0rem 2rem;

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 0.5rem;
    color: black;
    background-color: green;
    width: 100%;
    font-size: 1.5em;
    margin: 0.9rem;
    border-radius: 20px;

    &:hover {
      background-color: blue;
    }

    &:disabled {
      background-color: grey;
      color: white;
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
  }

  .error-field {
    color: red;
    font-size: 0.8em;
    height: 20px;
  }

  label {
    color: black;
    margin-bottom: 0.3rem;
    font-weight: bolder;
  }
`;
