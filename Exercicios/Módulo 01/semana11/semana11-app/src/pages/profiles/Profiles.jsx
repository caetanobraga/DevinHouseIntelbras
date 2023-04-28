import { usePerfil } from '../../contexts';
import { Profile } from '../../components';
import { Container } from './Profiles.styled';

export const Profiles = () => {
  const { profiles } = usePerfil();
  return (
    <Container>
      {profiles.map((p) => (
        <Profile key={p.id} profile={p} />
      ))}
    </Container>
  );
};
