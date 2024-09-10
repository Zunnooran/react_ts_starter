import React from 'react';
import ReactDOM from 'react-dom/client';

import { LanguageProvider } from 'i18n';
import { ThemeProvider } from 'theme/theme-context';

import 'assets/fonts/circular-std/fonts.css';

import App from './App';
import * as translations from './locales';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider options={{ translations }}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
