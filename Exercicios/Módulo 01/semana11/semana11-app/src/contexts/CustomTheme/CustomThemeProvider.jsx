import PropTypes from 'prop-types';
import { CustomThemeContext } from './CustomThemeContext';
import { useEffect, useState } from 'react';
import { setTheme, getTheme } from '../../utils';
import { themeDark, themeLight } from '../../themes';

export const CustomThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    setDark(getTheme());
  }, []);

  const handleTheme = () => {
    setDark((prev) => {
      setTheme(!prev);
      return !prev;
    });
  };

  return (
    <CustomThemeContext.Provider
      value={{ theme: isDark ? themeDark : themeLight, handleTheme }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};
