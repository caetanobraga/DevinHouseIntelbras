import { ThemeProvider } from 'styled-components';
import { useCustomTheme } from '../../contexts';
import { Navbar, Profile } from '../../components';
import { PerfilProvider } from '../../contexts/Perfil/PerfilProvider';
import { GlobalStyle } from '../../themes';

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>
        <Profile />
      </PerfilProvider>
    </ThemeProvider>
  );
};
