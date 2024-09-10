import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useTheme } from 'theme/theme-context';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const [isDarkMode, setDarkMode] = useState(theme === 'dark');

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    toggleTheme();
  };

  return (
    <div className='flex justify-around'>
      <p>Header</p>
      <div>
        <DarkModeSwitch style={{ marginBottom: '2rem' }} checked={isDarkMode} onChange={toggleDarkMode} size={30} />
      </div>
    </div>
  );
}
