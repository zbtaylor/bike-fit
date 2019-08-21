import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <Menu>
      <Menu.Item as={NavLink} name='home' to='/' exact />
      <Menu.Item as={NavLink} name='bikes' to='/bikes' exact />
    </Menu>
  )
}

export default Navigation;