import React, { useState } from 'react';
import cx from 'classnames';
import { Block } from 'lib/cms/types';
import PortableText from 'components/PortableText';
import { LineIcon } from 'components/icons';

type Props = {
  className?: string;
  variant: string;
  subheading?: string;
  heading: Block[];
  text?: Block[];
};

const TextModuleWithParagraphs: React.FC<Props> = ({
  variant,
  heading,
  subheading,
  text,
  className,
}) => {
  return (
    <div
      className={cx(
        `TextModuleWithParagraphs TextModuleWithParagraphs--style-${variant}`,
        className
      )}
    >
      <div className="TextModuleWithParagraphs--inner-container mxauto col-12 lg:col-8 xxl:col-7 px_75lg:px1_5">
        {subheading ? (
          <span
            className={cx(
              `TextModuleWithParagraphs__subheading primary-sm pr3_75 vertical-align-middle`
            )}
          >
            {subheading}
          </span>
        ) : (
          <LineIcon
            className="TextModuleWithParagraphs__subheading-line vertical-align-middle mr_75 lg:mr1_5"
            color="charcoal"
          />
        )}

        <span
          className={cx(
            `TextModuleWithParagraphs__heading TextModuleWithParagraphs--style-${variant}__heading primary-xl vertical-align-middle`
          )}
        >
          <PortableText blocks={heading} />
        </span>
        {text && variant === 'oneColumn' && renderOneColumnParagraph(text)}
        {text && variant === 'twoColumns' && renderTwoColumnsParagraph(text)}
      </div>
    </div>
  );
};

export default TextModuleWithParagraphs;

const renderOneColumnParagraph = (text: Block[]) => {
  return (
    <div className="TextModuleWithParagraphs--style-one-column__paragraph secondary-sm color-charcoal md:col-8 pt1_5 md:pt2_25">
      <PortableText blocks={text} />
    </div>
  );
};

const renderTwoColumnsParagraph = (text: Block[]) => {
  return (
    <div className="TextModuleWithParagraphs--style-two-columns__paragraph secondary-sm color-charcoal col-12 pt1_5 md:pt2_25 two-columns">
      <PortableText blocks={text} />
    </div>
  );
};
