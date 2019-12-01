import React from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
import BikePage from "./components/bike/BikePage";
import BikeCreate from "./components/bike/BikeCreate";
import BikeView from "./components/bike/BikeView";
import BikeEdit from "./components/bike/BikeEdit";
import PrivateRoute from "./components/PrivateRoute";

const Routes = () => {
  return (
    <>
      <Route path="/login" exact component={UserLogin} />
      <Route path="/register" exact component={UserRegister} />
      <PrivateRoute path="/bikes" exact component={BikePage} />
      <PrivateRoute path="/bikes/new" exact component={BikeCreate} />
      <PrivateRoute path="/bikes/view/:id" exact component={BikeView} />
      <PrivateRoute path="/bikes/edit/:id" exact component={BikeEdit} />
    </>
  );
};

export default Routes;
