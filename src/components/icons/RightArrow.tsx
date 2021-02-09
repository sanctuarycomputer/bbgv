import React from 'react';
import cx from 'classnames';

import { Colors, HexColors } from 'constants/Colors';

interface Props {
  color: Colors;
  className?: string;
}

const RightArrow: React.FC<Props> = ({ color, className = '' }) => {
  return (
    <div className={cx('RightArrow bg-color-lilac', className)}>
      <svg
        width="31"
        height="19"
        viewBox="0 0 31 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.2336 9.4788L20.1896 0.925199L18.5048 3.0312C18.5048 3.0312 24.7904 8.0532 24.9524 8.0532V8.1828H0.296V10.7748H24.9524V10.9044C24.7904 10.9044 18.602 15.9264 18.602 15.9264L20.2868 18.0324L30.2336 9.4788Z"
          fill={HexColors[color]}
        />
      </svg>
    </div>
  );
};

export default RightArrow;
