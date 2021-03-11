import React from 'react';
import cx from 'classnames';

import { Colors, HexColors } from 'constants/Colors';

interface Props {
  color: Colors;
  className?: string;
}

const DownArrow: React.FC<Props> = ({ color, className = '' }) => {
  return (
    <div className={cx('DownArrow transition-shortest', className)}>
      <svg
        width="18"
        height="13"
        viewBox="0 0 18 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.86437 12.418L17.418 2.37401L15.312 0.689209L10.29 7.13681L10.1604 7.13681L8.72949 8.68921L7.43877 7.13681C7.43877 6.97481 2.41677 0.786407 2.41677 0.786407L0.310768 2.47121L8.86437 12.418Z"
          fill={HexColors[color]}
        />
      </svg>
    </div>
  );
};

export default DownArrow;
