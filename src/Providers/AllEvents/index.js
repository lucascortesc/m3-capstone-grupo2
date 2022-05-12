import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

export const AllEventsContext = createContext();

export const AllEventsProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    api.get("/eventos").then((res) => setAllEvents(res.data));
  }, []);

  const addEvent = (event) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    event.voluntarys = [];
    event.userId = user.id;
    event.state = "progess";

    api
      .post("/eventos", event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAllEvents([...allEvents, event]));
  };

  const removeEvent = (eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));

    api
      .delete(`/eventos/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>
        setAllEvents(allEvents.filter(({ id }) => id !== eventId))
      );
  };

  const addUserToEvent = async (user, eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const event = await api.get(`/eventos/${eventId}`);
    const newVoluntarys = [...event.data.voluntarys, user];

    api.patch(
      `/eventos/${eventId}`,
      { voluntarys: newVoluntarys },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const removeUserFromEvent = async (user, eventId) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const event = await api.get(`/eventos/${eventId}`);
    const voluntarys = event.data.voluntarys;

    const newVoluntarys = voluntarys.filter(({ id }) => id !== user.id);

    api.patch(
      `/eventos/${eventId}`,
      { voluntarys: newVoluntarys },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
