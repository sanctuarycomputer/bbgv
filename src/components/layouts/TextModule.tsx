import React from 'react';
import cx from 'classnames';
import { Block, ParagraphWithButton } from 'lib/cms/types';
import PortableText from 'components/PortableText';
import { LineIcon, LineIconWithButton } from 'components/icons';

type Props = {
  className?: string;
  variant: 'mulberry' | 'default' | 'homepage-default-bg' | 'homepage-mulberry-bg';
  subheading?: string;
  heading: Block[];
  briefParagraph?: ParagraphWithButton;
};

const TextModule: React.FC<Props> = ({
  variant,
  heading,
  subheading,
  briefParagraph,
  className,
}) => {
  const bgColor =
    variant === 'mulberry' || variant === 'homepage-mulberry-bg'
      ? 'bg-color-mulberry'
      : 'bg-color-chalk';
  const fontColor =
    variant === 'mulberry' || variant === 'homepage-mulberry-bg' ? 'color-chalk' : 'color-charcoal';
  const iconColor = variant === 'mulberry' ? 'chalk' : 'charcoal';

  return (
    <div
      className={cx(
        `TextModule TextModule--style-${variant} ${className} ${bgColor} ${fontColor} text-module-padding`
      )}
    >
      <div
        className={cx(
          `TextModule--style-${variant}--inner-container TextModule__inner-container mxauto col-12 lg:col-8 xxl:col-7`
        )}
      >
        {subheading ? (
          <span className="TextModule__subheading text-inline-subheader nowrap primary-sm pr3_75 vertical-align-middle">
            {subheading}
          </span>
        ) : (
          <LineIcon
            className="TextModule__subheading-line vertical-align-middle mr_75 lg:mr1_5"
            color={iconColor}
          />
        )}

        <h1
          className={cx(
            `TextModule__heading TextModule--style-${variant}__heading primary-xl vertical-align-middle`
          )}
        >
          <PortableText blocks={heading} />
        </h1>
        {briefParagraph && (
          <div
            className={cx(
              `TextModule__paragraph TextModule--style-${variant}__paragraph secondary-sm col-12 md:col-8 pt1_5 lg:pt2_25`
            )}
          >
            <PortableText blocks={briefParagraph.paragraph} />
            {briefParagraph.button && (
              <LineIconWithButton
                link={briefParagraph.button.link}
                color={
                  variant === 'homepage-default-bg' || variant === 'homepage-mulberry-bg'
                    ? 'lilac-darkest'
                    : iconColor
                }
                label={briefParagraph.button.label}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextModule;
