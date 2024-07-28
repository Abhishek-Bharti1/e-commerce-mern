import  { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Implement your login logic here (e.g., API call)
    // For now, we'll just simulate a successful login
    setUser({ username });
    console.log('User logged in:', username);
  };

  const logout = () => {
    setUser(null);
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
