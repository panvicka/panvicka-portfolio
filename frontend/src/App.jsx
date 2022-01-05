import React from 'react';

import 'flag-icons/css/flag-icons.css';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { NavBar, Cookie } from './components';
import { About, Footer, Home, Bio, Skills, Work, Contact } from './container';
import LanguageProvider from './context/LanguageContext';

const storedLang = localStorage.getItem('i18nextLng');

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['gb', 'de', 'cz'],
    fallbackLng: 'de',
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'querystring',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    },
    storedLang,
  });

function App() {
  // second language fallback
  // useEffect(() => {
  //   const currentLangCookie = cookie.get('i18next') || 'de';
  //   const currentLanguage = useLanguage();
  //   if (!currentLanguage) {
  //     const setLanguage = useLanguageUpdate();
  //     setLanguage(currentLangCookie);
  //   }
  // });

  return (
    <div className="app">
      <Cookie />
      <LanguageProvider>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Bio />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
