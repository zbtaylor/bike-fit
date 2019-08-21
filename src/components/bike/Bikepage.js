import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import BikeList from './BikeList';
import SubNav from '../nav/SubNav';

const Bikepage = props => {
  return (
    <div>
      <SubNav {...props} />
      <Button as={Link} to='/bikes/add' floated='right' content='Add Bike' primary />
      <h2>Bikes</h2>
      <BikeList />
    </div>
  )
}

export default Bikepage;