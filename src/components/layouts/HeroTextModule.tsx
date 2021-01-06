import React from 'react';
import cx from 'classnames';
import { Block } from 'lib/cms/types';
import PortableText from 'components/PortableText';

type Props = {
  variant: 'nutella' | 'lilac' | 'mulberry';
  title: string;
  heading: Block[];
  introLine: string;
  introByline: Block[];
  briefParagraph?: Block[];
};

const HeroTextModule: React.FC<Props> = ({
  variant,
  title,
  heading,
  introLine,
  introByline,
  briefParagraph,
}) => {
  const fontColor = variant === 'nutella' || variant === 'lilac' ? 'color-charcoal' : 'color-chalk';

  return (
    <div
      className={cx(
        `HeroTextModule HeroTextModule--style-${variant} bg-color-${variant} site-max-width site-padding-x mxauto px_75 md:px1_5 xl:px15 pt6 pb_75 md:py7_5 ${fontColor}`
      )}
    >
      <span
        className={cx('HeroTextModule__title nowrap primary-sm pr3_75 vertical-align-middle', {
          'color-lilac': variant === 'mulberry',
        })}
      >
        {title}
      </span>
      <span
        className={cx(
          `HeroTextModule__heading HeroTextModule--style-${variant}__heading primary-xxl vertical-align-middle`
        )}
      >
        <PortableText blocks={heading} />
      </span>
      <span
        className={cx('HeroTextModule__intro-line nowrap primary-sm px2_25 vertical-align-middle', {
          'color-lilac': variant === 'mulberry',
        })}
      >
        {introLine}
      </span>
      <span
        className={cx(
          `HeroTextModule__intro-byline HeroTextModule--style-${variant}__intro-byline primary-xxl vertical-align-middle`
        )}
      >
        <PortableText blocks={introByline} />
      </span>
      {briefParagraph && (
        <div
          className={cx(
            `HeroTextModule__paragraph HeroTextModule--style-${variant}__paragraph secondary-sm col-8 md:col-5 pt3_75`
          )}
        >
          <PortableText blocks={briefParagraph} />
        </div>
      )}
    </div>
  );
};

export default HeroTextModule;
