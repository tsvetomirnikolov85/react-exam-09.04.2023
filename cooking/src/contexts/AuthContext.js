import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const navigate = useNavigate();

  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    if (data.username.length < 4) {
      return;
    } else if (data.password.length < 4) {
      return;
    }
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onRegisterSubmit = async (values) => {
    if (values.username.length < 4 || values.email.length < 4 || values.town.length < 4 || values.password.length < 4) {
      return;
    }
    if (values.password !== values.repass) {
      return;
    }

    try {
      const user = await authService.register(values);
      setAuth(user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    user: auth,
    userId: auth._id,
    token: auth.accessToken,
    username: auth.username,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
