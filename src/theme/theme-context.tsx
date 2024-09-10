import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme | undefined;
  toggleTheme: () => void;
}

const initThemeContextPropsState = {
  theme: undefined,
  toggleTheme: () => {},
};
const ThemeContext = createContext<ThemeContextType>(initThemeContextPropsState);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) return savedTheme;

    // Fallback to system preference if no saved theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const values = useMemo(() => ({ toggleTheme, theme }), [theme]);

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
const useTheme = () => {
  return useContext(ThemeContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useTheme };
