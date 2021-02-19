import React from 'react';
import cx from 'classnames';
import { ParagraphWithHeading } from 'lib/cms/types';
import PortableText from 'components/PortableText';
import LineIconWithButton from './icons/LineIconWithButton';

type Props = {
  className?: string;
  contents: ParagraphWithHeading;
};

const ParagraphWithHeadingAndButton: React.FC<Props> = ({ contents, className }) => {
  return (
    <div className={cx('ParagraphWithHeadingAndButton secondary-sm', className)}>
      <h3 className="ParagraphWithHeadingAndButton__heading pr5 lg:pr7 primary-md vertical-align-middle left">
        {contents.heading}
      </h3>

      <span className="ParagraphWithHeadingAndButton__paragraph vertical-align-middle secondary-sm">
        <PortableText blocks={contents.paragraph} />
      </span>

      {contents.button?.link && (
        <LineIconWithButton
          color="lilac-very-dark"
          link={contents.button.link}
          label={contents.button.label}
        />
      )}
    </div>
  );
};

export default ParagraphWithHeadingAndButton;
