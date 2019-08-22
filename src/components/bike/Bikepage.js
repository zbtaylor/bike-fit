import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';

const Bikepage = props => {
  return (
    <Container>
      <h2>Bikes</h2>
      <Button as={Link} to='/bikes/add' floated='right' content='Add Bike' primary />
    </Container>
  )
}

export default Bikepage;