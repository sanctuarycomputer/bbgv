import React from 'react';

import { Colors, HexColors } from 'constants/Colors';

interface Props {
  color: Colors;
  className?: string;
}

const CloseIcon: React.FC<Props> = ({ color, className = '' }) => {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        y1="-1"
        x2="26.2673"
        y2="-1"
        transform="matrix(0.728297 0.685261 -0.579714 0.81482 1 2)"
        stroke={HexColors[color]}
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="26.2673"
        y2="-1"
        transform="matrix(0.728297 -0.685261 0.579714 0.81482 1.86963 20)"
        stroke={HexColors[color]}
        strokeWidth="2"
      />
    </svg>
  );
};

export default CloseIcon;
