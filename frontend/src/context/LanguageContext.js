import React, { useContext, useState, useEffect } from 'react';

import i18n from 'i18next';

const LanguageContext = React.createContext();
const LanguageContextUpdate = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageUpdate() {
  return useContext(LanguageContextUpdate);
}

export default function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    setTimeout(() => {
      setCurrentLanguage(i18n.language || window.localStorage.i18nextLng);
    }, 200);
  }, []);

  function setNewLanguage(language) {
    console.log(`setting new language ${language}`);
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  }

  return (
    <LanguageContext.Provider value={currentLanguage}>
      <LanguageContextUpdate.Provider value={setNewLanguage}>
        {children}
      </LanguageContextUpdate.Provider>
    </LanguageContext.Provider>
  );
}
