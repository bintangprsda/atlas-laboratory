// helpers/auth.js

export const isLoggedIn = () => {
    const user = localStorage.getItem('user');
    return user !== null;
  };
  