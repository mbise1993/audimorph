import React from 'react';
import { createContainer } from 'unstated-next';

function useAuth() {
  const [currentUser, setCurrentUser] = React.useState();

  return {
    currentUser,
  };
}

export const AuthState = createContainer(useAuth);
