import { createContext, useContext, useEffect, useState } from "react";
import { clearTokens, loadTokens, saveTokens } from "../tokenStorage";
import { request } from "../../../shared/api/client";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    loadTokens()
      .then((tokens) => setIsLoggedIn(!!tokens));
  }, []);

  const authenticate = async (path: string, email: string, password: string) => {
    const tokens = await request(path, {
      method: 'POST',
      body: { email, password }
    });

    await saveTokens(tokens);
    setIsLoggedIn(true);
  };

  const value = {
    isLoggedIn,
    login: (e, p) => authenticate('/auth/login', e, p),
    register: (e, p) => authenticate('/auth/register', e, p),
    logout: async () => {
      await clearTokens();
      setIsLoggedIn(false);
      console.log('logout success');
    },
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
}
