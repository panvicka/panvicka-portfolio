/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DropDownButton = styled.button`
  min-width: ${(props) => `${props.size}px`};
  min-height: ${(props) => `${props.size}px`};
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;

  li {
    width: 200px;
  }

  span {
    left: 50%;
    // centering absolute positioned element with 50% of heigh/width margin
    margin-left: ${(props) => `${-(props.size + 20) / 2}px`};
    margin-top: ${(props) => `${-(props.size + 20) / 2}px`};
    position: absolute;
    width: ${(props) => `${props.size + 20}px`};
    height: ${(props) => `${props.size + 20}px`};
  }
`;
