import { ThemeProvider } from 'styled-components';
import { useCustomTheme } from '../../contexts';
import { Navbar } from '../../components';
import { PerfilProvider } from '../../contexts/Perfil/PerfilProvider';
import { Profiles } from '../../pages';
import { GlobalStyle } from '../../themes';

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <Profiles />
      </PerfilProvider>
    </ThemeProvider>
  );
};
