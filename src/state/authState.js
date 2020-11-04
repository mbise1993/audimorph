import React from 'react';
import { Auth, Hub } from 'aws-amplify';
import { createContainer } from 'unstated-next';

function useAuth() {
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    const authListener = (data) => {
      if (data.payload.event === 'signIn') {
        Auth.currentAuthenticatedUser().then((user) => {
          setCurrentUser(user);
        });
      }
    };

    Hub.listen('auth', authListener);

    return () => {
      Hub.remove('auth', authListener);
    };
  }, []);

  return {
    currentUser,
  };
}

export const AuthState = createContainer(useAuth);
