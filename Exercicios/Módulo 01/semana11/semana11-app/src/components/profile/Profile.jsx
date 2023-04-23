import { usePerfil } from '../../contexts';

export const Profile = () => {
  const { profiles, handleFollow } = usePerfil();
  return (
    <>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <p>{profile.nome}</p>
          <button onClick={() => handleFollow(profile.id)}>
            {profile.seguindo ? 'Seguindo' : 'Seguir'}
          </button>
        </div>
      ))}
    </>
  );
};
