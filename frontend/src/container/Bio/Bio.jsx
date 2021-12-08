import React from "react";
import { AppWrapper } from "../../wrapper";

import { SectionTitle } from "../../index.styles";
import { BioWrapper, BlockElement, BioContentWrapper } from "./Bio.styles";
import { useTranslation } from "react-i18next";

const bioInfo = [
  {
    prompt: "name",
    reply: "Eliska",
  },
  {
    prompt: "date",
    reply: "16.3.1992",
  },
  {
    prompt: "born",
    reply: "Liberec",
  },
];

function Block({ prompt, reply }) {
  return (
    <BlockElement>
      <div class="prompt">{prompt}</div>
      <div class="reply">{reply}</div>
    </BlockElement>
  );
}

function Bio() {
  const { t } = useTranslation();

  return (
    <BioWrapper>
      <SectionTitle>{t("Bio")}</SectionTitle>
      <BioContentWrapper>
        <Block prompt="name" reply="eliska"></Block>
        <Block prompt="name" reply="eliska"></Block>
        <Block prompt="name" reply="eliska"></Block>
      </BioContentWrapper>
    </BioWrapper>
  );
}

export default AppWrapper(Bio, "bio");
