import React from "react";
import { Route } from "react-router-dom";

import UserLogin from "./components/user/UserLogin";

import BikesPage from "./components/bike/BikesPage";
import AddBikeForm from "./components/bike/AddBikeForm";

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={UserLogin} />
      <Route path="/bikes" exact component={BikesPage} />
      <Route path="/bikes/add" exact component={AddBikeForm} />
    </div>
  );
};

export default Routes;
