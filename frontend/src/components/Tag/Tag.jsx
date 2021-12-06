import React from "react";
import styled from "styled-components";

import { tagsColors } from "../../constants/tagsColors";

const TagElement = styled.div`
  display: inline-block;
  background-color: ${(props) => props.background};
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-size: 0.8em;
  font-weight: bolder;
  margin: 0.1rem 0.3rem;
`;

const Tag = ({ text }) => {
  const findColor = (text) => {
    let tagColor = "white";
    tagsColors.some((tag) => {
      if (tag.name === text) {
        tagColor = tag.color;
        return;
      }
    });

    return tagColor;
  };

  return <TagElement background={findColor(text)}>{text}</TagElement>;
};

export default Tag;
