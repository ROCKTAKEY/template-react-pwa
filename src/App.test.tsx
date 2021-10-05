import React from 'react';
import { render, screen } from '@testing-library/react';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import App from './App';

import enTranslation from './locales/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslation,
  },
  lng: 'en',
  interpolation: { escapeValue: false },
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
