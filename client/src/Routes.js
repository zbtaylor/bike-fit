import React, { setState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout, Typography } from "antd";

// Navigation
import MainNav from "./components/nav/MainNav";

// Auth
import AuthLogin from "./components/auth/AuthLogin";
import AuthSignup from "./components/auth/AuthSignup";
import AuthConfirmation from "./components/auth/AuthConfirmation";
import AuthForgotPassword from "./components/auth/AuthForgotPassword";
import AuthResetPassword from "./components/auth/AuthResetPassword";

// Bikes
import Bikes from "./components/bike/Bikes";
import BikeCreate from "./components/bike/BikeCreate";
import BikeView from "./components/bike/BikeView";
import PrivateRoute from "./components/PrivateRoute";

// Account
import Account from "./components/account/Account";

// Errors
import ErrorMissing from "./components/error/ErrorMissing";

const Routes = props => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Header>
        <div className="logo">
          <strong>My Bike Fit </strong>
          <sup>Alpha</sup>
        </div>
        <MainNav {...props} />
      </Header>
      <Content>
        <div className="app-layout-content">
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <Redirect to="/bikes" />;
              }}
            />
            <Route path="/login" exact component={AuthLogin} />
            <Route path="/signup" exact component={AuthSignup} />
            <Route path="/confirm/:hash" exact component={AuthConfirmation} />
            <Route path="/forgot" exact component={AuthForgotPassword} />
            <Route path="/reset/:hash" exact component={AuthResetPassword} />
            <PrivateRoute path="/bikes" exact component={Bikes} />
            <PrivateRoute path="/bikes/new" exact component={BikeCreate} />
            <PrivateRoute
              path="/bikes/:id/:section"
              exact
              component={BikeView}
            />
            <PrivateRoute path="/account" exact component={Account} />
            <Route path="*" exact component={ErrorMissing} />
          </Switch>
        </div>
      </Content>
      <Footer>&copy; MyBikeFit {new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default Routes;
