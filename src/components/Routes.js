import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Homepage';

const Routes = () => {
  return (
    <Route path='/' exact component={Homepage} />
  )
}

export default Routes;