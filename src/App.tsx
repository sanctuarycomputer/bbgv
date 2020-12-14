import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'constants/routes';
import 'styles/App.scss';

import { intializeApplication } from 'state/actions/applicationActions';
import { setMenuOpen, setMenuClosed } from 'state/actions/uiActions';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
import MenuOverlay from 'components/MenuOverlay';

export default function App() {
  const dispatch = useDispatch();
  const initApp = useCallback(() => dispatch(intializeApplication()), [dispatch]);
  const globalSettings = useSelector((state) => state.global.settings);
  const theme = useSelector((state) => state.global.theme);
  const menuIsOpen = useSelector((state) => state.ui.menuIsOpen);
  const openMenu = useCallback(() => dispatch(setMenuOpen()), [dispatch]);
  const closeMenu = useCallback(() => dispatch(setMenuClosed()), [dispatch]);
  //TO-DO: show 404 page if application status is rejected.

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <main className="App">
      <Router>
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
