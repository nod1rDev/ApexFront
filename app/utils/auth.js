export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  