import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MainNav = () => {

  return (
    <Menu>
      <Menu.Item as={NavLink} name='home' to='/' exact />
      <Menu.Item as={NavLink} name='bikes' to='/bikes' />
    </Menu>
  )
}

export default MainNav;