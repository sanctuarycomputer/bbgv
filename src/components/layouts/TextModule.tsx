import React, { useState } from 'react';
import cx from 'classnames';
import { Block, ParagraphWithButton } from 'lib/cms/types';
import PortableText from 'components/PortableText';
import { LineIcon } from 'components/icons';
import { Button } from 'components/base';

type Props = {
  className?: string;
  variant: 'mulberry' | 'default';
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
  const fontColor = variant === 'mulberry' ? 'color-chalk' : 'color-charcoal';
  const iconColor = variant === 'mulberry' ? 'chalk' : 'charcoal';

  //TO-DO: Remove state for button and use css to change width of button instead.
  const [hoverParagraphButton, setHoverParagraphButton] = useState(false);

  return (
    <div
      className={cx(
        `TextModule TextModule--style-${variant} ${className} bg-color-${variant} ${fontColor}`
      )}
    >
      <div
        className={cx(
          `TextModule--style-${variant}--inner-container TextModule__inner-container mxauto col-12 lg:col-8 xxl:col-7 px_75 lg:px1_5`
        )}
      >
        {subheading ? (
          <span className="TextModule__subheading primary-sm pr3_75 vertical-align-middle">
            {subheading}
          </span>
        ) : (
          <LineIcon
            className="TextModule__subheading-line vertical-align-middle mr_75 lg:mr1_5"
            color={iconColor}
          />
        )}

        <span
          className={cx(
            `TextModule__heading TextModule--style-${variant}__heading primary-xl vertical-align-middle`
          )}
        >
          <PortableText blocks={heading} />
        </span>
        {briefParagraph && (
          <div
            className={cx(
              `TextModule__paragraph TextModule--style-${variant}__paragraph secondary-sm col-12 md:col-8 pt3_75 lg:pt5`
            )}
          >
            <PortableText blocks={briefParagraph.paragraph} />
            {briefParagraph.button && (
              <Button
                wrap={true}
                className={cx(
                  `TextModule__button TextModule--style-${variant}__button inline-flex items-center text-decoration-none secondary-sm-bold vertical-align-middle`
                )}
                to={briefParagraph.button.link}
                onMouseEnter={() => setHoverParagraphButton(true)}
                onMouseLeave={() => setHoverParagraphButton(false)}
                ariaLabel={briefParagraph.button.label}
              >
                <LineIcon
                  className={cx('TextModule__button-line-icon mr_25', {
                    'TextModule__button-line-icon--style-hover': hoverParagraphButton,
                  })}
                  color={iconColor}
                />
                {briefParagraph.button.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextModule;
