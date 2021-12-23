import React from 'react';

import 'flag-icons/css/flag-icons.css';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { NavBar } from './components';
import { About, Footer, Home, Bio, Skills, Work, Contact } from './container';
import LanguageProvider from './context/LanguageContext';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'de', 'cz'],
    fallbackLng: 'en',
    detection: {
      order: [
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
  });

function App() {
  return (
    <div className="app">
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
