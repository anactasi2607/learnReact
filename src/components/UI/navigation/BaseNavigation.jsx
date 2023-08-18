import React from 'react';

import {Link} from 'react-router-dom';

const BaseNavigation = () => {
  return (
    // TODO: не согласна с тегами, поправить
    <div className="navigation">
      <div className="navigation__item">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
}

export default BaseNavigation;
