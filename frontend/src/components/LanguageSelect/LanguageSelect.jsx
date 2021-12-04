import React from "react";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import Dropdown from "rc-dropdown";

import { DropDownButton, LanguageSelectWrapper } from "./LanguageSelect.style";
import { useLanguage, useLanguageUpdate } from "../../context/LanguageContext";

const stylesMenuItems = {
  width: "150px",
  padding: "0.4rem",
};

const stylesIcon = {
  marginRight: "0.4rem",
};

const LanguageSelect = () => {
  const currentLanguage = useLanguage();
  const setLanguage = useLanguageUpdate();

  const languages = [
    {
      name: "English",
      countryCode: "gb",
    },
    {
      name: "Deutsch",
      countryCode: "de",
    },
    {
      name: "Čeština",
      countryCode: "cz",
    },
  ];

  function onSelect({ key }) {
    setLanguage(key);
  }

  const menu = (
    <Menu onSelect={onSelect}>
      {languages.map(({ name, countryCode }) => {
        return (
          <MenuItem key={countryCode} style={stylesMenuItems}>
            <span style={stylesIcon} className={`fi fi-${countryCode}`}></span>
            {name}
          </MenuItem>
        );
      })}
    </Menu>
  );

  return (
    <LanguageSelectWrapper>
      <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
        <DropDownButton>
          {languages.map((lan) => {
            if (lan.countryCode == currentLanguage) {
              return <span key={lan.countryCode} className={`fi fi-${lan.countryCode}`}></span>;
            }
          })}
        </DropDownButton>
      </Dropdown>
    </LanguageSelectWrapper>
  );
};

export default LanguageSelect;
