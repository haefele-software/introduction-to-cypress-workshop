import React from 'react';

export default function useAuthService() {
  const [isLoading, setIsLoading] = React.useState(false);

  const signIn = (email, password) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        if (email === 'admin@admin.com' && password === 'admin') {
          return resolve({
            id: '62fufrCSpAV9brZWZdOVXPupS8n2',
            name: 'Kylo Ren',
            photoUrl: 'https://vignette.wikia.nocookie.net/fortnite/images/b/b3/Kylo_Ren_-_Outfit_-_Fortnite.png/revision/latest?cb=20191222034729'
          })
        } else {
          return reject({
            message: 'Failed to login. Please try again.'
          })
        }
      }, 2000)
    });
  }

  const signOut = () => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        return resolve('Successfully logged out.')
      }, 1500)
    });

  }

  return { isLoading, signIn, signOut };
}
