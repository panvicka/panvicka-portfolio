import React from 'react';

import { motion } from 'framer-motion';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

import './Cookie.scss';

const style = {
  background: '#5db090',
  color: '#3d5056',
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
      This website uses cookies to enhance the user experience.{' '}
    </CookieConsent>
  );
}

export default Cookie;
