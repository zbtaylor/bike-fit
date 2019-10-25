import React from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import BikePage from "./components/bike/BikePage";
import BikeCreate from "./components/bike/BikeCreate";
import BikeView from "./components/bike/BikeView";
import BikeEdit from "./components/bike/BikeEdit";

const Routes = () => {
  return (
    <div>
      <Route path="/login" exact component={UserLogin} />
      <Route path="/bikes" exact component={BikePage} />
      <Route path="/bikes/new" exact component={BikeCreate} />
      <Route path="/bikes/view/:id" exact component={BikeView} />
      <Route path="/bikes/edit/:id" exact component={BikeEdit} />
    </div>
  );
};

export default Routes;
