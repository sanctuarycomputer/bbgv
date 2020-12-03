import React from 'react';
import cx from 'classnames';

type Props = {
  className?: string;
};

const LineBreak: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx('LineBreak col-12 my5 md:my7_5', className)}>
      <div className="border-top-lilac site-margin-x"></div>
    </div>
  );
};

export default LineBreak;
