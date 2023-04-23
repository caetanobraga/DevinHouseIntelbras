import PropTypes from 'prop-types';
import { PerfilContext } from './PerfilContext';

import { perfis } from '../../services';
import { useState } from 'react';

export const PerfilProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(perfis);

  const handleFollow = (id) => {
    const profilesUpdate = profiles.map((profile) =>
      profile.id === id ? { ...profile, seguindo: !profile.seguindo } : profile,
    );
    setProfiles(profilesUpdate);
  };

  return (
    <PerfilContext.Provider value={{ profiles, handleFollow }}>
      {children}
    </PerfilContext.Provider>
  );
};

PerfilProvider.propTypes = {
  children: PropTypes.node,
};
