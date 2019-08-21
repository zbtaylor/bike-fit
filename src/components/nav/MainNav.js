import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Breadcrumb } from 'semantic-ui-react';

const Navigation = () => {

  return (
    <div>
      <Menu>
        <Menu.Item as={NavLink} name='home' to='/' exact />
        <Menu.Item as={NavLink} name='bikes' to='/bikes' />
      </Menu>
    </div>
  )
}

export default Navigation;