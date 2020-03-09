import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();
  
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <LanguageSelector />
    </>
  );
}

export default App;
