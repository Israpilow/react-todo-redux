import React from 'react';
import classNames from 'classnames';

import '../Badge/Badge.scss';
const Badge = ({ color, onClick, className }) => {
  return (
    <i
      onClick={onClick}
      className={classNames(
        'badge',
        {
          [`badge--${color.name}`]: color.name,
        },
        className,
      )}></i>
  );
};

export default Badge;
