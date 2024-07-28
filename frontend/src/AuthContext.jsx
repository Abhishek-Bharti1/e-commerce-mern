import  { createContext, useState, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch('https://e-commerce-mern-topaz.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to login');
      }
  
      const data = await response.json();
      setUser({ username, token: data.token });
      console.log('User logged in:', username);
    } catch (error) {
      console.error('Login error:', error.message);
    }
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
