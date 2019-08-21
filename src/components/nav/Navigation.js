import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <Menu>
      <Menu.Item as={NavLink} name='home' to='/' />
      <Menu.Item as={NavLink} name='bikes' to='/bikes' />
    </Menu>
  )
}

export default Navigation;