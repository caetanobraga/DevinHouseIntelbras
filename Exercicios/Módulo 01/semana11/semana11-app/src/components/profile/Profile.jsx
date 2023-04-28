import { usePerfil } from '../../contexts';
import PropTypes from 'prop-types';
import { Container } from './Profile.styled';

export const Profile = ({ profile }) => {
  const { handleFollow } = usePerfil();
  return (
    <>
      <Container>
        <p>{profile.nome}</p>
        <button onClick={() => handleFollow(profile.id)}>
          {profile.seguindo ? 'Seguindo' : 'Seguir'}
        </button>
      </Container>
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
