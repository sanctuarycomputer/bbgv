import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Language from 'constants/Language';
import Routes from 'constants/routes';

import 'styles/App.scss';

import { Status } from 'types';

import { intializeApplication } from 'state/actions/applicationActions';
import { setTheme } from 'state/actions/applicationActions';
import { setMenuOpen, setMenuClosed } from 'state/actions/uiActions';

import PageNotFound from 'components/PageNotFound';
import ScrollToTop from 'components/ScrollToTop';
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

  const [appLoadSoftenerActive, setAppLoadSoftenerActive] = useState(true);

  useEffect(() => {
    initApp();
  }, [initApp]);

  useEffect(() => {
    setTimeout(() => setAppLoadSoftenerActive(false), 1000);
  }, []);

  if (appStatus === Status.IDLE || appStatus === Status.PENDING || appLoadSoftenerActive) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }

  if (appStatus === Status.REJECTED) return <PageNotFound />;

  return (
    <>
      <Router>
        <main className="App">
          <ScrollToTop />
          {globalSettings && 'cookieConsentText' in globalSettings && (
            <CookieConsent
              content={globalSettings.cookieConsentText}
              containerClassName="bg-color-lilac text-left"
              dismissButtonAriaLabel={Language.t('CookieConsent.acceptButton.ariaLabel')}
              dismissButtonClassName="bg-color-transparent text-left color-charcoal transition-shorter"
              dismissButtonLabel={Language.t('CookieConsent.acceptButton.label')}
            />
          )}
          <Nav
            setTheme={setTheme}
            theme={theme}
            menuIsOpen={menuIsOpen}
            onOpenMenu={openMenu}
            onCloseMenu={closeMenu}
          />
          {'menu' in globalSettings && (
            <MenuOverlay
              globalSettings={globalSettings}
              closeMenu={closeMenu}
              isOpen={menuIsOpen}
            />
          )}
          <Routes />
        </main>
        <footer>
          {'footerMenu' in globalSettings && <Footer globalSettings={globalSettings} />}
        </footer>
      </Router>
    </>
  );
}
