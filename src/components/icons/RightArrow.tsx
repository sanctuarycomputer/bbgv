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
        className={className}
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M130 0H0V5H130V0Z" fill={HexColors[color]} />
      </svg>
    </div>
  );
};

export default RightArrow;
