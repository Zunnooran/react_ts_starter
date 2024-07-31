import { createContext, useContext } from 'react';

import { Language } from 'interfaces';

/** React Context to manage the Language Configuration */
export const LanguageProviderContext = createContext<{
  /** Hook to access the translation keys to display a string localized */
  useTranslation: () => unknown;
  currentLanguage: Language | undefined;
  setCurrentLanguage: (locale: string) => void;
  supportedLanguages: Language[];
  languageIsSelected: (props: Language) => boolean;
  getNameFromLocale: (locale: string) => string;
  languagesAsOptions: Array<{ label: string; value: unknown }>;
  defaultLangCount: number;
  getAvailableLocales: () => Array<{ label: string; value: unknown }>;
}>({
  useTranslation: function (): unknown {
    throw new Error('Function not implemented.');
  },
  currentLanguage: undefined,
  setCurrentLanguage: function (): void {
    throw new Error('Function not implemented.');
  },
  supportedLanguages: [],
  languageIsSelected: function (): boolean {
    throw new Error('Function not implemented.');
  },
  getNameFromLocale: function (): string {
    throw new Error('Function not implemented.');
  },
  languagesAsOptions: [],
  defaultLangCount: 0,
  getAvailableLocales: function (): Array<{ label: string; value: unknown }> {
    throw new Error('Function not implemented.');
  },
});

/** Custom Hook to access the Language Configuration Provider */
export const useLanguageProviderContext = () => useContext(LanguageProviderContext);
