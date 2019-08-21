import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import BikeList from './BikeList';

const Bikepage = () => {
  return (
    <div>
      <Button as={Link} to='/bikes/add' floated='right' content='Add Bike' primary exact />
      <h2>Bikes</h2>
      <BikeList />
    </div>
  )
}

export default Bikepage;