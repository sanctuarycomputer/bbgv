import React from 'react';
import cx from 'classnames';

import Language from 'constants/Language';
import { Colors, HexColors } from 'constants/Colors';
import { Button } from 'components/base';

interface Props {
  color: Colors;
  link: string;
  label: string;
}

const LineIconWithButton: React.FC<Props> = ({ color, link, label }) => {
  return (
    <span className="LineIconWithButton__button ml_25 secondary-sm">
      <Button
        wrap={true}
        className={cx(
          `inline-flex items-center text-decoration-none secondary-bold-sm  vertical-align-middle color-${color}`
        )}
        to={link}
        ariaLabel={Language.t('Global.generalButtonAriaLabel', {
          link: label,
        })}
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
