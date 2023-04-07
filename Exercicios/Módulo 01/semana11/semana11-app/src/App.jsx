import { CustomThemeProvider } from './contexts';
import { AppLayout } from './layouts';
import { GlobalStyle } from './themes';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <AppLayout>
        <p>Olá</p>
      </AppLayout>
    </CustomThemeProvider>
  );
}

export default App;
