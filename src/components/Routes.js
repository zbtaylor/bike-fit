import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Homepage';
import Bikepage from './bike/Bikepage';
import AddBikeForm from './bike/AddBikeForm';

const Routes = () => {
  return (
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/bikes' exact component={Bikepage} />
      <Route path='/bikes/add' exact component={AddBikeForm} />
    </div>
  )
}

export default Routes;