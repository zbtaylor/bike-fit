import React from "react";
import { Route } from "react-router-dom";
import AuthLogin from "./components/auth/AuthLogin";
import AuthRegister from "./components/auth/AuthRegister";
import BikePage from "./components/bike/BikePage";
import BikeCreate from "./components/bike/BikeCreate";
import BikeView from "./components/bike/BikeView";
import BikeEdit from "./components/bike/BikeEdit";
import PrivateRoute from "./components/PrivateRoute";

const Routes = () => {
  return (
    <>
      <Route path="/login" exact component={AuthLogin} />
      <Route path="/register" exact component={AuthRegister} />
      <PrivateRoute path="/bikes" exact component={BikePage} />
      <PrivateRoute path="/bikes/new" exact component={BikeCreate} />
      <PrivateRoute path="/bikes/view/:id" exact component={BikeView} />
      <PrivateRoute path="/bikes/edit/:id" exact component={BikeEdit} />
    </>
  );
};

export default Routes;
