import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Language from 'constants/Language';
import Routes from 'constants/routes';

import 'styles/App.scss';

import { Status } from 'types';
import { intializeApplication } from 'state/actions/applicationActions';
import { setMenuOpen, setMenuClosed } from 'state/actions/uiActions';

import { Button } from 'components/base';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import MenuOverlay from 'components/MenuOverlay';
import CookieConsent from 'components/CookieConsent';
import Loader from 'components/Loader';

export default function App() {
  const dispatch = useDispatch();
  const initApp = useCallback(() => dispatch(intializeApplication()), [dispatch]);
  const appStatus = useSelector((state) => state.status.initializeApplication);
  const globalSettings = useSelector((state) => state.global.settings);
  const theme = useSelector((state) => state.global.theme);
  const menuIsOpen = useSelector((state) => state.ui.menuIsOpen);
  const openMenu = useCallback(() => dispatch(setMenuOpen()), [dispatch]);
  const closeMenu = useCallback(() => dispatch(setMenuClosed()), [dispatch]);

  //TO-DO: show 404 page if application status is rejected.

  useEffect(() => {
    initApp();
  }, [initApp]);

  if (appStatus === Status.IDLE || appStatus === Status.PENDING) {
    return <Loader />;
  }

  return (
    <main className="App">
      <Router>
        {globalSettings && 'cookieConsentText' in globalSettings && (
          <CookieConsent
            content={globalSettings.cookieConsentText}
            containerClassName="bg-color-lilac text-left"
            dismissButtonAriaLabel={Language.t('CookieConsent.acceptButton.ariaLabel')}
            dismissButtonClassName="bg-color-transparent text-left color-charcoal transition-shorter"
            dismissButtonLabel={Language.t('CookieConsent.acceptButton.label')}
          />
        )}
        <Nav theme={theme} menuIsOpen={menuIsOpen} onOpenMenu={openMenu} onCloseMenu={closeMenu} />
        {'menu' in globalSettings && (
          <MenuOverlay globalSettings={globalSettings} closeMenu={closeMenu} isOpen={menuIsOpen} />
        )}
        <Routes />
        {'footerMenu' in globalSettings && <Footer globalSettings={globalSettings} />}
      </Router>
    </main>
  );
}
