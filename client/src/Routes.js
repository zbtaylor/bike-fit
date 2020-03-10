import React, { setState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Typography } from "antd";

// Navigation
import MainNav from "./components/nav/MainNav";

// Marketing
import MarketingIndex from "./components/marketing/MarketingIndex";

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

// Errors
import ErrorMissing from "./components/error/ErrorMissing";

const Routes = props => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Header>
        <MainNav />
      </Header>
      <Content>
        <div className="app-layout-content">
          <Switch>
            <Route path="/" exact component={MarketingIndex} />
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
            <Route path="*" exact component={ErrorMissing} />
          </Switch>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Routes;
