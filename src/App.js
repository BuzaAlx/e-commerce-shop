import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Recovery from "./pages/Recovery";
import Admin from "./pages/Admin";
import Search from "./pages/Search";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/User/user.actions";
import MainLayout from "./loyouts/MainLoyout";
import SecondaryLoyout from "./loyouts/SecondaryLoyout";
import AdminLoyout from "./loyouts/AdminLoyout";
import WithAdminAuth from "./hoc/withAdminAuth";
import WithAuth from "./hoc/withAuth";
import AdminToolbar from "./components/AdminToolbar";

import "./default.scss";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route path="/admin">
          <WithAdminAuth>
            <AdminLoyout>
              <Admin />
            </AdminLoyout>
          </WithAdminAuth>
        </Route>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route exact path="/search">
          <MainLayout>
            <Search />
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
