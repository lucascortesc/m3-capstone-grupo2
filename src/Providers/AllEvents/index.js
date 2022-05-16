import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import { verificarToken } from "../validation";

export const AllEventsContext = createContext();

export const AllEventsProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    api.get("/eventos").then((res) => setAllEvents(res.data));
  }, []);

  const addEvent = async (event) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!(await verificarToken(token, user))) {
      localStorage.clear();
      return "missing or expired token";
    }

    event.voluntarys = [];
    event.userId = user.id;
    event.state = "progess";

    let response;

    await api
      .post("/eventos", event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        api.get("/eventos").then((res) => setAllEvents(res.data));
        response = res.data.id;
      })
      .catch((err) => (response = err.response.statusText));

    return response;
  };

  const removeEvent = async (eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!(await verificarToken(token, user))) {
      localStorage.clear();
      return "missing or expired token";
    }

    let response;

    await api
      .delete(`/eventos/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllEvents(allEvents.filter(({ id }) => id !== eventId));
        response = res.statusText;
      })
      .catch((err) => (response = err.response.statusText));

    return response;
  };

  const addUserToEvent = async (eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!(await verificarToken(token, user))) {
      localStorage.clear();
      return "missing or expired token";
    }

    const event = await api.get(`/eventos/${eventId}`);
    const newVoluntarys = [...event.data.voluntarys, user];

    let response;

    await api
      .patch(
        `/eventos/${eventId}`,
        { voluntarys: newVoluntarys },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        response = res.statusText;
        api.get("/eventos").then((res) => setAllEvents(res.data));
      })
      .catch((err) => (response = err.response.statusText));

    return response;
  };

  const removeUserFromEvent = async (eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (!(await verificarToken(token, user))) {
      localStorage.clear();
      return "missing or expired token";
    }

    const event = await api.get(`/eventos/${eventId}`);
    const voluntarys = event.data.voluntarys;

    const newVoluntarys = voluntarys.filter(({ id }) => id !== user.id);

    let response;

    await api
      .patch(
        `/eventos/${eventId}`,
        { voluntarys: newVoluntarys },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        response = res.statusText;
        api.get("/eventos").then((res) => setAllEvents(res.data));
      })
      .catch((err) => (response = err.response.statusText));

    return response;
  };

  return (
    <AllEventsContext.Provider
      value={{
        allEvents,
        addEvent,
        removeEvent,
        addUserToEvent,
        removeUserFromEvent,
      }}
    >
      {children}
    </AllEventsContext.Provider>
  );
};

export const useAllEvents = () => useContext(AllEventsContext);
