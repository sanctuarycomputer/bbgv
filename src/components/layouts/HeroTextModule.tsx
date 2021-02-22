import React from 'react';
import cx from 'classnames';
import { HashLink } from 'react-router-hash-link';
import Language from 'constants/Language';

import { Block } from 'lib/cms/types';
import { MenuLink } from 'types';
import PortableText from 'components/PortableText';

type Props = {
  variant: 'nutella' | 'lilac' | 'mulberry';
  title: string;
  heading: Block[];
  introLine: string;
  introBylineLinks: MenuLink[];
  briefParagraph?: Block[];
};

const HeroTextModule: React.FC<Props> = ({
  variant,
  title,
  heading,
  introLine,
  introBylineLinks,
  briefParagraph,
}) => {
  const fontColor = variant === 'nutella' || variant === 'lilac' ? 'color-charcoal' : 'color-chalk';

  return (
    <div
      className={cx(
        `HeroTextModule HeroTextModule--style-${variant} bg-color-${variant} site-max-width site-padding-x mxauto px_75 md:px1_5 xl:px15 pt6 pb_75 md:py7_5 ${fontColor}`
      )}
    >
      <span className="HeroTextModule__inner-container">
        <span
          className={cx(
            'HeroTextModule__title nowrap text-inline-subheader pr3_75 vertical-align-middle',
            {
              'color-lilac': variant === 'mulberry',
            }
          )}
        >
          {title}
        </span>

        <span
          className={cx(
            `HeroTextModule__heading HeroTextModule--style-${variant}__heading primary-xxl vertical-align-middle inline`
          )}
        >
          <PortableText blocks={heading} />
        </span>

        <div className="sm:inline">
          <div
            className={cx(
              'HeroTextModule__intro-line text-inline-subheader pr3_75 sm:px2_25 vertical-align-middle inline-block',
              {
                'color-lilac': variant === 'mulberry',
              }
            )}
          >
            {introLine}
          </div>

          <span className="primary-xxl vertical-align-middle">
            {introBylineLinks.map((link: MenuLink, i: number) => {
              return (
                <span key={`HeroTextModule-link-${link.label}`}>
                  <HashLink
                    key={link.link}
                    className={cx(
                      `HeroTextModule__intro-byline HeroTextModule--style-${variant}__intro-byline primary-xxl vertical-align-middle transition-shorter bg-color-transparent text-decoration-none`,
                      {
                        'color-lilac hover-color-chalk': variant === 'mulberry',
                        'color-white hover-color-charcoal':
                          variant === 'nutella' || variant === 'lilac',
                      }
                    )}
                    smooth
                    to={link.link}
                  >
                    <span
                      className={cx('hyphens', {
                        'pr_5 lg:pr_75': !(
                          i !== introBylineLinks.length - 1 && introBylineLinks.length !== 2
                        ),
                      })}
                    >
                      {link.label}
                    </span>
                  </HashLink>
                  {i !== introBylineLinks.length - 1 && introBylineLinks.length !== 2 && (
                    <span className="vertical-align-middle primary-xxl pr_5 lg:pr_75">
                      {Language.t('Global.comma')}
                    </span>
                  )}
                  {i !== introBylineLinks.length - 1 && i === introBylineLinks.length - 2 && (
                    <span className="vertical-align-middle primary-xxl pr_5 lg:pr_75">
                      {Language.t('Global.and')}
                    </span>
                  )}
                </span>
              );
            })}
          </span>
        </div>

        {briefParagraph && (
          <div
            className={cx(
              `HeroTextModule__paragraph HeroTextModule--style-${variant}__paragraph secondary-sm col-8 md:col-5 pt3_75`
            )}
          >
            <PortableText blocks={briefParagraph} />
          </div>
        )}
      </span>
    </div>
  );
};

export default HeroTextModule;
