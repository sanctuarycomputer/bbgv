import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import cx from 'classnames';
import withBreakpoints, { InjectedProps as WithBreakpointsProps } from 'lib/withBreakpoints';
import Language from 'constants/Language';
import get from 'lodash/get';
import throttle from 'lodash/throttle';
import { RouteMap } from 'constants/RouteMap';
import { Theme } from 'types';
import hasPassedElement from 'utils/hasPassedElement';
import Classes from 'constants/Classes';

import { Button } from 'components/base';
import { BBGVLogo, MenuIcon, CloseIcon, BBGLogo, VenturesLogo } from 'components/icons';
import { setTheme } from 'state/actions/applicationActions';

type PassedProps = {
  theme: Theme;
  menuIsOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  setTheme: (theme: Theme) => void;
};

type Props = PassedProps & WithBreakpointsProps;

const Nav: React.FC<Props> = (props) => {
  const { onOpenMenu, onCloseMenu, theme, menuIsOpen, mediaQuery } = props;

  /* Determines if the current scroll position is before of after the hero module. On pages where a hero module has a mulberry background, the nav logo should change to charcoal after passing the hero module. **/
  const statisticsModule = document.getElementById(Classes.whyWeInvestStatisticsModule);
  const companyDetailLandingModule = document.querySelector(`.${Classes.companyDetailLanding}`);
  const hasPassedStatisticsModule = statisticsModule && hasPassedElement(statisticsModule);
  const hasPassedCompanyDetailLanding =
    companyDetailLandingModule && hasPassedElement(companyDetailLandingModule);
  const iconColor =
    theme === 'default' || menuIsOpen || hasPassedStatisticsModule || hasPassedCompanyDetailLanding
      ? 'charcoal'
      : 'chalk';

  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoverLogo, setHoverLogo] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === RouteMap.HOME.path;

  const handleNavLogoClick = () => {
    if (menuIsOpen) {
      onCloseMenu();
    }

    /* Ensures that if the user has clicked on the nav logo to navigate to the Home Page, the hover styling will be removed. **/
    if (hoverLogo) {
      setHoverLogo(false);
    }

    return null;
  };

  const handleNavLogo = useCallback(() => {
    /* Determines if the current scroll position is before of after the logo in the Home Hero Module **/
    const logo = document.querySelector(`.${Classes.homeHeroLogo}`);

    const scrollTop =
      get(window, 'pageYOffset', 0) || get(document, 'documentElement.scrollTop', 0);

    /* When the menu overlay is open, the nav logo should always show. **/
    if (menuIsOpen && !showNavLogo) {
      setShowNavLogo(true);
    }

    /* When the menu overlay is closed, the nav logo always shows on every page except for the Home Page. **/
    if (!menuIsOpen) {
      /* On the Home Page, the nav logo should show only after passing the logo in the Home Hero Module. */
      if (isHome) {
        if (scrollTop === 0 && showNavLogo) {
          setShowNavLogo(false);
        }

        if (logo) {
          if (!hasPassedElement(logo) && showNavLogo) {
            setShowNavLogo(false);
          }

          if (hasPassedElement(logo) && !showNavLogo) {
            setShowNavLogo(true);
          }
        }
      }

      if (!isHome && !showNavLogo) {
        setShowNavLogo(true);
      }
    }
  }, [isHome, showNavLogo, menuIsOpen]);

  /* Disables body scroll when menu overlay is open. **/
  const handleBodyScroll = useCallback(() => {
    menuIsOpen
      ? document.body.classList.add('disable-body-scroll')
      : document.body.classList.remove('disable-body-scroll');
  }, [menuIsOpen]);

  const getScrollPosition = () => {
    const scrollTop =
      get(window, 'pageYOffset', 0) || get(document, 'documentElement.scrollTop', 0);

    setScrollPosition(scrollTop);
    handleNavLogo();
  };

  const throttleGetScrollPosition = throttle(getScrollPosition, 150);

  useEffect(() => {
    window.addEventListener('scroll', throttleGetScrollPosition);

    return () => {
      window.removeEventListener('scroll', throttleGetScrollPosition);
    };
  }, [throttleGetScrollPosition]);

  useEffect(() => {
    handleBodyScroll();
  }, [menuIsOpen, handleBodyScroll]);

  useEffect(() => {
    handleNavLogo();
  }, [location, handleNavLogo]);

  return (
    <nav className="Nav mxauto site-padding-x z-nav flex items-center justify-between fixed w100 t0 l0">
      <Button
        containerClassName={cx(
          'Nav__logo-outer-container opacity-0 events-none transition-shortest',
          {
            'events-none opacity-0': !showNavLogo,
            'events-all opacity-1 Nav__logo-container--style-scrolled overflow-x-hidden': showNavLogo,
          }
        )}
        className={cx('Nav__logo-container', {
          'events-none opacity-0': !showNavLogo,
          'events-all opacity-1 Nav__logo-container--style-scrolled overflow-x-hidden': showNavLogo,
        })}
        ariaLabel={Language.t('Global.navigateToHome')}
        to={RouteMap.HOME.path}
        wrap={false}
        onMouseEnter={() => setHoverLogo(true)}
        onMouseLeave={() => setHoverLogo(false)}
        onClick={handleNavLogoClick}
      >
        {showNavLogo ? (
          <span className="vertical-align-middle transition-shorter">
            <BBGLogo className="Nav__logo-bbg transition-shorter" color={iconColor} />
            <VenturesLogo
              className={cx('Nav__logo-ventures transition-shorter', {
                'move-right': hoverLogo,
              })}
              color={iconColor}
            />
          </span>
        ) : (
          <BBGVLogo className="Nav__logo-bbgv transition-shorter" color={iconColor} />
        )}
      </Button>
      {menuIsOpen ? (
        <Button
          containerClassName="w100 h100"
          className="Nav__menu-icon bg-color-transparent"
          ariaLabel={Language.t('Nav.menuButtonAriaLabel')}
          onClick={onCloseMenu}
        >
          <CloseIcon className="w100 h100" color="charcoal" />
        </Button>
      ) : (
        <Button
          containerClassName="w100 h100"
          className="Nav__menu-icon bg-color-transparent"
          ariaLabel={Language.t('Nav.menuButtonAriaLabel')}
          onClick={onOpenMenu}
        >
          <MenuIcon className="transition-shorter w100 h100" color={iconColor} />
        </Button>
      )}
    </nav>
  );
};

export default withBreakpoints<Props>(Nav);
