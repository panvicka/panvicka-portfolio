import React from 'react';

import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

import './Cookie.scss';

const style = {
  background: '#5db090',
  color: '#000000',
  fontSize: '1.2em',
};

const buttonStyle = {
  backgroundColor: 'whitesmoke',
  fontSize: '1em',
  borderRadius: '5px',
};

function Cookie() {
  const { t } = useTranslation();
  return (
    <CookieConsent
      location="bottom"
      buttonText="OK"
      cookieName="ev-portfolio"
      style={style}
      buttonStyle={buttonStyle}
      expires={150}
    >
      {t('tra-cookies')}
    </CookieConsent>
  );
}

export default Cookie;
