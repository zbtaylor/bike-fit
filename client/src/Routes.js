import React from "react";
import { Route } from "react-router-dom";
import AuthLogin from "./components/auth/AuthLogin";
import AuthRegister from "./components/auth/AuthRegister";
import AuthConfirmation from "./components/auth/AuthConfirmation";
import AuthForgotPassword from "./components/auth/AuthForgotPassword";
import AuthResetPassword from "./components/auth/AuthResetPassword";
import Bikes from "./components/bike/Bikes";
// import BikeCreate from "./components/bike/BikeCreate";
import BikeView from "./components/bike/BikeView";
import PrivateRoute from "./components/PrivateRoute";

const Routes = () => {
  return (
    <>
      <Route path="/login" exact component={AuthLogin} />
      <Route path="/register" exact component={AuthRegister} />
      <Route path="/confirm/:hash" exact component={AuthConfirmation} />
      <Route path="/forgot" exact component={AuthForgotPassword} />
      <Route path="/reset/:hash" exact component={AuthResetPassword} />
      <PrivateRoute path="/bikes" exact component={Bikes} />
      {/* <PrivateRoute path="/bikes/new" exact component={BikeCreate} /> */}
      <PrivateRoute path="/bikes/:id" exact component={BikeView} />
    </>
  );
};

export default Routes;
