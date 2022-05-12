import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const loginUser = (objUser) => {
    api.post("/login", objUser).then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
    });
  };

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
