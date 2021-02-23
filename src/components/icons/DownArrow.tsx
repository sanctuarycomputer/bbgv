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
        width="13"
        height="18"
        viewBox="0 0 13 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.4183 8.8661L2.37425 0.3125L0.689453 2.4185L7.13705 7.4405V7.5701L8.68945 9.00098L7.13705 10.2917C6.97505 10.2917 0.786652 15.3137 0.786652 15.3137L2.47145 17.4197L12.4183 8.8661Z"
          fill={HexColors[color]}
        />
      </svg>
    </div>
  );
};

export default DownArrow;
