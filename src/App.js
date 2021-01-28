import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Recovery from "./pages/Recovery";
import Admin from "./pages/Admin";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/User/user.actions";
import MainLayout from "./loyouts/MainLoyout";
import SecondaryLoyout from "./loyouts/SecondaryLoyout";
import WithAdminAuth from "./hoc/withAdminAuth";
import WithAuth from "./hoc/withAuth";

import "./default.scss";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/admin">
          <WithAdminAuth>
            <SecondaryLoyout>
              <Admin />
            </SecondaryLoyout>
          </WithAdminAuth>
        </Route>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
        <Route path="/register">
          <SecondaryLoyout>
            <Register />
          </SecondaryLoyout>
        </Route>
        <Route path="/login">
          <SecondaryLoyout>
            <Login />
          </SecondaryLoyout>
        </Route>
        <Route path="/recovery">
          <SecondaryLoyout>
            <Recovery />
          </SecondaryLoyout>
        </Route>
        <Route path="/dashboard">
          <WithAuth>
            <SecondaryLoyout>
              <Dashboard />
            </SecondaryLoyout>
          </WithAuth>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
