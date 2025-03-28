import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

type User = {
  role: 'student' | 'admin';
};

type AuthContextType = {
  user: User | null;
  login: (role: 'student' | 'admin') => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Initialize state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('student');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (role: 'student' | 'admin') => {
    const newUser = { role };
    localStorage.setItem('student', JSON.stringify(newUser)); // Save to localStorage
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('student'); // Clear from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
