import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

const SubNav = props => {
  let crumbs = props.match.path.split('/').slice(1);
  const sections = crumbs.map(crumb => {
    return crumb.substring(0, 1).toUpperCase() + crumb.substring(1)
  })

  return (
    <Breadcrumb divider='/' sections={sections} />
  )
}

export default SubNav;