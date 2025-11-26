import React, { createContext, useContext } from "react";
import {
  useAuthUser,
  useLogin,
  useLogout,
  useIsAuthenticated,
  useCurrentUser,
} from "../hooks/useAuth";

interface AuthContextType {
  user: ReturnType<typeof useCurrentUser>;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: ReturnType<typeof useLogin>;
  logout: ReturnType<typeof useLogout>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading } = useAuthUser();
  const user = useCurrentUser();
  const isAuthenticated = useIsAuthenticated();
  const loginMutation = useLogin();
  const logoutMutation = useLogout();

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login: loginMutation,
        logout: logoutMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
