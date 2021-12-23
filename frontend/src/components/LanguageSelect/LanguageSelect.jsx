import React from 'react';

import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import { useLanguage, useLanguageUpdate } from '../../context/LanguageContext';
import { DropDownButton } from './LanguageSelect.style';

const stylesMenuItems = {
  width: '150px',
  padding: '0.4rem',
};

const stylesIcon = {
  marginRight: '0.4rem',
};

function LanguageSelect({ size }) {
  const currentLanguage = useLanguage();
  const setLanguage = useLanguageUpdate();

  const languages = [
    {
      name: 'English',
      countryCode: 'gb',
    },
    {
      name: 'Deutsch',
      countryCode: 'de',
    },
    {
      name: 'Čeština',
      countryCode: 'cz',
    },
  ];

  function onSelect({ key }) {
    setLanguage(key);
  }

  const menu = (
    <Menu onSelect={onSelect}>
      {languages.map(({ name, countryCode }) => (
        <MenuItem key={countryCode} style={stylesMenuItems}>
          <span style={stylesIcon} className={`fi fi-${countryCode}`} />
          {name}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
      <DropDownButton size={size}>
        {languages.map((lan) => {
          if (lan.countryCode === currentLanguage) {
            return <span key={lan.countryCode} className={`fi fi-${lan.countryCode}`} />;
          }
          return '';
        })}
      </DropDownButton>
    </Dropdown>
  );
}

export default LanguageSelect;
