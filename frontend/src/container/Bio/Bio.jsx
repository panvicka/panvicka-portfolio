import React from "react";
import { AppWrapper } from "../../wrapper";
import { motion } from "framer-motion";

import { SectionTitle } from "../../index.styles";
import { BioWrapper, BlockElement, BioContentWrapper } from "./Bio.styles";
import { useTranslation } from "react-i18next";

const bioInfo = [
  {
    prompt: "tra-name",
    reply: "Eliška Veisová",
  },
  {
    prompt: "tra-nickname",
    reply: "panvicka",
  },
  {
    prompt: "tra-languages",
    reply: "tra-language-english;tra-language-german;tra-language-czech",
  },
  {
    prompt: "tra-date",
    reply: "16.3.1992",
  },
  {
    prompt: "tra-born-place",
    reply: "Liberec",
  },
  {
    prompt: "tra-lives",
    reply: "Liberec/Bautzen",
  },
  {
    prompt: "tra-high-school",
    reply: "tra-high-school-study",
  },
  {
    prompt: "tra-bachelor",
    reply: "tra-bachelor-study",
  },
  {
    prompt: "tra-master",
    reply: "tra-master-study-1;tra-master-study-2",
  },
  {
    prompt: "tra-hobby",
    reply: "tra-climbing;tra-programming;tra-hiking;tra-reading;tra-fantasy-scifi",
  },
];

function Block({ prompt, reply, first }) {
  return (
    <BlockElement first={first}>
      <motion.div
        transition={{ duration: 0.4, ease: "easeIn" }}
        whileInView={{ x: [-200, 0], opacity: [0.8, 1] }}
        className="prompt"
      >
        {prompt}
      </motion.div>
      <motion.div
        transition={{ duration: 0.4, ease: "easeIn" }}
        whileInView={{ x: [+200, 0], opacity: [0.8, 1] }}
        className="reply"
      >
        {reply}
      </motion.div>
    </BlockElement>
  );
}

function Bio() {
  const { t } = useTranslation();

  return (
    <BioWrapper>
      <SectionTitle>{t("tra-bio")}</SectionTitle>

      <p>{t("tra-bio-text")}</p>

      <BioContentWrapper>
        {bioInfo.map((info) => {
          const words = info.reply.split(";");

          if (words.length > 0) {
            return words.map((item, index) => {
              return (
                <Block
                  key={index}
                  first={index == 0 ? true : false}
                  prompt={index == 0 ? t(info.prompt) : ""}
                  reply={t(item)}
                ></Block>
              );
            });
          }
        })}
      </BioContentWrapper>
    </BioWrapper>
  );
}

export default AppWrapper(Bio, "bio");
