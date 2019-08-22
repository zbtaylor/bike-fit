import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const SubNav = props => {
  let crumbs = props.match.path.split('/').slice(1);
  let sections = crumbs.map(crumb => {
    const content = crumb.substring(0, 1).toUpperCase() + crumb.substring(1);
    return {
      key: content,
      content: content,
      link: true,
      href: `/${crumbs.slice(0, crumbs.indexOf(crumb) + 1).join('/')}`
    }
  });

  sections[sections.length - 1] = {
    content: sections[sections.length - 1].content,
    active: true
  }

  return (
    <Breadcrumb divider='/' sections={sections} />
  )
}

export default SubNav;