import { Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { EventsList } from "../Pages/EventsList";
import { Event } from "../Pages/Event";
import { User } from "../Pages/User";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/events">
        <EventsList />
      </Route>
      <Route exact path="/events/:id">
        <Event />
      </Route>
      <Route exact path="/user">
        <User />
      </Route>
    </Switch>
  );
};
