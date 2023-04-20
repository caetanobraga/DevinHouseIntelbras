import PropTypes from 'prop-types';
import { CustomThemeContext } from './CustomThemeContext';
import { useEffect, useState } from 'react';
import {
  setTheme as setThemeLocalStorage,
  getTheme as getThemeLocalStorage,
} from '../../utils';
import { themeDark, themeLight } from '../../themes';

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const themeDefault = getThemeLocalStorage();
    if (themeDefault) {
      setTheme(themeDefault);
    }
  }, []);

  const handleTheme = () => {
    setTheme((prev) => {
      const newValue = prev === 'dark' ? 'light' : 'dark';
      setThemeLocalStorage(newValue);
      return newValue;
    });
  };

  const customTheme = theme === 'dark' ? themeDark : themeLight;

  return (
    <CustomThemeContext.Provider value={{ theme: customTheme, handleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
