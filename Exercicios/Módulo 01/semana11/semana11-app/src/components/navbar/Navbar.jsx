import { useCustomTheme } from '../../contexts';
import { Container, Title, Button } from './Navbar.styled';
import logo from '../../assets/vite.svg';

export const Navbar = () => {
  const { handleTheme } = useCustomTheme();
  return (
    <Container>
      <img src={logo} alt="Logo da empresa" />
      <Title>Perfis</Title>
      <Button onClick={handleTheme}>Alterar tema</Button>
    </Container>
  );
};
