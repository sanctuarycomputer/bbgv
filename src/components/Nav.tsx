import React, { useEffect, useState, useCallback } from 'react';

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
import { MenuIcon, CloseIcon, BBGLogo, VenturesLogo } from 'components/icons';

type PassedProps = {
  theme: Theme;
  menuIsOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
};

type Props = PassedProps & WithBreakpointsProps;

const Nav: React.FC<Props> = (props) => {
  const { onOpenMenu, onCloseMenu, theme, menuIsOpen, currentBreakpoint } = props;
  const iconColor = theme === 'default' ? 'black' : 'chalk';
  const breakpointIsSmDown = ['EXTRA_SMALL', 'SMALL'].includes(currentBreakpoint);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoverLogo, setHoverLogo] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);

  const handleNavLogo = () => {
    /* Determines if the current scroll position is before of after the logo in the Home Hero Module **/
    const logo = document.querySelector(`.${Classes.homeHeroLogo}`);

    if (logo) {
      if (!hasPassedElement(logo) && showNavLogo) {
        setShowNavLogo(false);
      }

      if (hasPassedElement(logo) && !showNavLogo) {
        setShowNavLogo(true);
      }
    }
  };

  const handleMarginTop = () => {
    if (breakpointIsSmDown) {
      return scrollPosition > 0 ? '0' : '40px';
    } else {
      return '0';
    }
  };

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

  return (
    <nav
      style={{
        marginTop: handleMarginTop(),
      }}
      className="Nav site-inner-content-max-width site-padding-x mxauto z-nav flex items-center justify-between fixed w100 t0 l0"
    >
      <Button
        ariaLabel={Language.t('Global.navigateToHome')}
        to={RouteMap.HOME.path}
        wrap={false}
        onMouseEnter={() => setHoverLogo(true)}
        onMouseLeave={() => setHoverLogo(false)}
        className={cx('Nav__logo-container opacity-0 transition-shortest', {
          'events-none opacity-0': !showNavLogo,
          'events-all opacity-1 Nav__logo-container--style-scrolled overflow-x-hidden': showNavLogo,
        })}
      >
        <BBGLogo className="Nav__logo-bbg" color={iconColor} />
        <VenturesLogo
          className={cx('Nav__logo-ventures', {
            'move-right': hoverLogo,
          })}
          color={iconColor}
        />
      </Button>

      {menuIsOpen ? (
        <Button
          containerClassName="Nav__menu-icon w100 h100"
          className="bg-color-transparent"
          ariaLabel={Language.t('Nav.menuButtonAriaLabel')}
          onClick={onCloseMenu}
        >
          <CloseIcon className="w100 h100" color="charcoal" />
        </Button>
      ) : (
        <Button
          containerClassName="Nav__menu-icon w100 h100"
          className="bg-color-transparent"
          ariaLabel={Language.t('Nav.menuButtonAriaLabel')}
          onClick={onOpenMenu}
        >
          <MenuIcon className="w100 h100" color={iconColor} />
        </Button>
      )}

      {menuIsOpen && (
        <div className="Nav__menu-overlay fixed t0 r0 vw100 vh100 bg-color-lilac-darker"></div>
      )}
    </nav>
  );
};

export default withBreakpoints<Props>(Nav);
