import React from 'react';

import { Colors, HexColors } from 'constants/Colors';

interface Props {
  color: Colors;
  className?: string;
}

const MenuIcon: React.FC<Props> = ({ color, className = '' }) => {
  return (
    <svg
      className={className}
      width="32"
      height="19"
      viewBox="0 0 32 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 16.8887H0V18.9998H32V16.8887Z" fill={HexColors[color]} />
      <path d="M32 0H0V2.11114H32V0Z" fill={HexColors[color]} />
      <path d="M32 8.44434H0V10.5555H32V8.44434Z" fill={HexColors[color]} />
    </svg>
  );
};

export default MenuIcon;
