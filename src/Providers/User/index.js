import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || undefined
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

  const logoutUser = async () => {
    setUser(undefined);
    localStorage.clear();
  };

  const addEventToUser = async (event) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    const newEvents = [...user.events, event];

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
      .catch((err) => (response = err.response.data));

    return response;
  };

  const removeEventFromUser = async (eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    const newEvents = [user.events.filter(({ id }) => id !== eventId)];

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
        response = res.statusText;
      })
      .catch((err) => (response = err.data.statusText));

    return response;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        addEventToUser,
        removeEventFromUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
