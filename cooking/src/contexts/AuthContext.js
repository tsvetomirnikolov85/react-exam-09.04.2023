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
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onRegisterSubmit = async (values) => {
    if (values.username == "" || values.email == "" || values.town == "" || values.password == "" || values.repass == "") {
      return;
    }
    if (values.password !== values.repass) {
      return;
    }

    try {
      const user = await authService.register(values);
      console.log(user);
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
