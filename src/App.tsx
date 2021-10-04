import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './i18n';
import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

function App() {
  const [t, i18next] = useTranslation();
  const [language, setLanguage] = useState(i18next.language);
  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language, i18next]);

  const src = 'src/App.tsx';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="EditSrcAndSaveToReload">
            Edit
            {' '}
            <code>{{ src }}</code>
            {' '}
            and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('LearnReact')}
        </a>
        <Button
          variant="contained"
          name="language"
          onClick={() => {
            setLanguage((lang) => (lang === 'ja' ? 'en' : 'ja'));
          }}
        >
          toggle language
        </Button>
      </header>
    </div>
  );
}

export default App;
