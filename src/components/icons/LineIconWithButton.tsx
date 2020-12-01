import React from 'react';

import { Colors, HexColors } from 'constants/Colors';
import { Button } from 'components/base';

interface Props {
  color: Colors;
  ariaLabel: string;
  link: string;
  label: string;
}

const LineIconWithButton: React.FC<Props> = ({ color, ariaLabel, link, label }) => {
  return (
    <span className="LineIconWithButton__button ml_25 secondary-sm">
      <Button
        wrap={true}
        className="inline-flex items-center text-decoration-none secondary-sm-bold vertical-align-middle color-charcoal"
        to={link}
        ariaLabel={ariaLabel}
      >
        <svg
          className="LineIconWithButton__button-line-icon mr_25"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M130 0H0V5H130V0Z" fill={HexColors[color]} />
        </svg>
        {label}
        <span className="LineIconWithButton__button-placeholder-div"></span>
      </Button>
    </span>
  );
};

export default LineIconWithButton;
