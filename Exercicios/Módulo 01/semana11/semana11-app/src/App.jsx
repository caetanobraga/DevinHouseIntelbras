import { CustomThemeProvider } from './contexts';
import { AppLayout } from './layouts';
import { GlobalStyle } from './themes';

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <AppLayout>
        <h1>Olá</h1>
      </AppLayout>
    </CustomThemeProvider>
  );
}

export default App;
