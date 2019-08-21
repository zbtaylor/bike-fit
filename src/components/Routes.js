import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Homepage';
import BikeList from './bike/BikeList';

const Routes = () => {
  return (
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/bikes' exact component={BikeList} />
    </div>
  )
}

export default Routes;