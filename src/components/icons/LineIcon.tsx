import React from 'react';

import { Colors, HexColors } from 'constants/Colors';

interface Props {
  color: Colors;
  className?: string;
}

const LineIcon: React.FC<Props> = ({ color, className = '' }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M130 0H0V5H130V0Z" fill={HexColors[color]} />
    </svg>
  );
};

export default LineIcon;
