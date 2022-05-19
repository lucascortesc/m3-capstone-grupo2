import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { verificarToken } from "../validation";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );

  const loginUser = async (objUser) => {
    let response;

    await api
      .post("/login", objUser)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        response = res.statusText;
      })
      .catch((err) => (response = err.response.data));

    return response;
  };

  const logoutUser = () => {
    setUser("");
    localStorage.clear();

    return true;
  };

  const updateUser = async (data) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!(await verificarToken(token, user))) {
      setUser("");
      localStorage.clear();
      return "missing or expired token";
    }

    let response;

    await api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        delete res.data.password;
        setUser(res.data);
        response = res.statusText;
      })
      .catch((err) => (response = err.response.statusText));

    return response;
  };

  const addEventToUser = async (eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!(await verificarToken(token, user))) {
      setUser("");
      localStorage.clear();
      return "missing or expired token";
    }

    const newEvents = [...user.events, eventId];
    console.log(newEvents);

    let response;

    await api
      .patch(
        `/users/${user.id}`,
        { events: newEvents },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        user.events = newEvents;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        response = res.statusText;
      })
      .catch((err) => (response = err.response.statusText));

    return response;
  };

  const removeEventFromUser = async (eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!(await verificarToken(token, user))) {
      setUser("");
      localStorage.clear();
      return "missing or expired token";
    }

    const newEvents = user.events.filter((id) => Number(id) !== eventId);

    let response;

    await api
      .patch(
        `users/${user.id}`,
        { events: newEvents },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        user.events = newEvents;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        response = res.statusText;
      })
      .catch((err) => (response = err.data.statusText));

    return response;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logoutUser,
        updateUser,
        addEventToUser,
        removeEventFromUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
