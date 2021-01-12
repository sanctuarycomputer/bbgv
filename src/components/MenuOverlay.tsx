import React from 'react';
import getYear from 'date-fns/getYear';
import cx from 'classnames';
import withBreakpoints, { InjectedProps as WithBreakpointsProps } from 'lib/withBreakpoints';

import Language from 'constants/Language';
import { GlobalSettings, Button as IButton } from 'lib/cms/types';
import PortableText from 'components/PortableText';

import { Button } from 'components/base';
import EmailSignup from 'components/EmailSignup';

type PassedProps = {
  globalSettings: GlobalSettings;
  isOpen: boolean;
  closeMenu: () => void;
};

type Props = PassedProps & WithBreakpointsProps;

const CURRENT_YEAR = getYear(new Date());

const MenuOverlay: React.FC<Props> = ({ closeMenu, globalSettings, isOpen, mediaQuery }) => {
  const { socialMediaLinks, menu } = globalSettings;
  const breakpointIsLgUp = mediaQuery.isMediumUp;

  return (
    <div
      className={cx(
        'MenuOverlay flex flex-col lg:flex-row transition-medium fixed t0 r0 vw100 h100 z-overlay-menu',
        {
          'events-none opacity-0': !isOpen,
          'events-all opacity-1': isOpen,
        }
      )}
    >
      <div
        className={cx(
          'MenuOverlay__section-one bg-color-lilac-darker lg:col-6 col-12 flex flex-col lg:px3_75 lg:pb3_75 transition-medium',
          {
            'MenuOverlay__section-one--active': isOpen,
          }
        )}
      >
        <div className="MenuOverlay__section-one-inner-container h100 flex flex-col">
          <div
            className={cx(
              'MenuOverlay__heading hyphens opacity-0 col-12 primary-xl flex flex-col justify-center h100',
              {
                none: !breakpointIsLgUp,
                'MenuOverlay__heading--active': isOpen,
              }
            )}
          >
            <span>
              <span className="MenuOverlay__heading-indentation inline"></span>
              <PortableText blocks={menu.heading} />
            </span>
          </div>

          <div className="MenuOverlay__newsletter flex none lg:block secondary-bold-sm items-end">
            <div
              className={cx('MenuOverlay__newsletter-inner-container opacity-0', {
                'MenuOverlay__newsletter-inner-container--active': isOpen,
              })}
            >
              <EmailSignup variant="footer" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={cx(
          'MenuOverlay__section-two bg-color-lilac-lighter py3 md:py0 px_75 md:pr_75 lg:pr3 lg:col-4 flex flex-col transition-medium justify-center',
          {
            'MenuOverlay__section-two--active': isOpen,
          }
        )}
      >
        <div
          className={cx('MenuOverlay__section-two-inner-container opacity-0 flex flex-col', {
            'MenuOverlay__section-two-inner-container--active': isOpen,
          })}
        >
          {menu.links.map((link: IButton) => (
            <Button
              onClick={closeMenu}
              key={`MenuOverlay-${link.link}`}
              wrap={true}
              className="MenuOverlay__menu-link-button--style-medium inline-flex items-center text-decoration-none primary-lg vertical-align-middle color-charcoal mb_5"
              to={link.link}
              ariaLabel={Language.t('Global.generalButtonAriaLabel', {
                link: link.label,
              })}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>

      <div
        className={cx(
          'MenuOverlay__section-three justify-center bg-color-lilac-lightest pt1_5 md:pt0 pb5 px_75 lg:px0 lg:col-2 flex flex-col transition-medium',
          {
            'MenuOverlay__section-three--active': isOpen,
          }
        )}
      >
        <div
          className={cx(
            'MenuOverlay__section-three-inner-container flex flex-col lg:pr3_75 opacity-0',
            {
              'MenuOverlay__section-three-inner-container--active': isOpen,
            }
          )}
        >
          {socialMediaLinks.map((link: IButton) => (
            <Button
              onClick={closeMenu}
              key={`MenuOverlay-${link.link}`}
              wrap={true}
              openInNewTab={true}
              className={cx(
                'transition-shorter hover-lighten-charcoal inline-flex items-center text-decoration-none primary-md vertical-align-middle color-charcoal mb_5'
              )}
              to={link.link}
              ariaLabel={Language.t('Global.generalButtonAriaLabel', {
                link: link.label,
              })}
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div
          className={cx(
            'MenuOverlay__copyright bg-color-chalk none lg:flex flex flex-col secondary-xxs color-charcoal py3_75 px_75 absolute col-12 opacity-0',
            {
              'MenuOverlay__copyright--active': isOpen,
            }
          )}
        >
          <div>
            {Language.t('Global.copyrightLabel', {
              year: CURRENT_YEAR,
            })}
          </div>
          <div>{Language.t('Global.bbgv')}</div>
          <div>{Language.t('Global.allRightsReserved')}</div>
        </div>
      </div>

      <div
        className={cx(
          'MenuOverlay__newsletter bg-color-chalk pt5 pb1_75 px_75 flex lg:none secondary-bold-sm transition-medium',
          {
            'MenuOverlay__newsletter--active': isOpen,
          }
        )}
      >
        <div
          className={cx('MenuOverlay__newsletter-inner-container--style-mobile col-12 opacity-0', {
            'MenuOverlay__newsletter-inner-container--style-mobile--active': isOpen,
          })}
        >
          <EmailSignup variant="footer" />
        </div>
      </div>
    </div>
  );
};

export default withBreakpoints<Props>(MenuOverlay);
