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

    let response;

    api
      .post("/eventos", event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => (response = res.statusText))
      .catch((err) => (response = err.response.statusText));

    return response;
  };

  const removeEvent = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    let response;

    api
      .delete(`/eventos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => (response = res.statusText))
      .catch((err) => (response = err.response.statusText));

    return response;
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

  return (
    <AllEventsContext.Provider
      value={{ allEvents, addEvent, removeEvent, addUserToEvent }}
    >
      {children}
    </AllEventsContext.Provider>
  );
};

export const useAllEvents = () => useContext(AllEventsContext);
