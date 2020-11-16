import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'constants/routes';
import 'styles/App.scss';
import Footer from 'components/Footer';

import { intializeApplication } from 'state/actions/applicationActions';

export default function App() {
  const dispatch = useDispatch();
  const initApp = useCallback(() => dispatch(intializeApplication()), [dispatch]);

  const globalSettings = useSelector((state) => state.global.settings);

  //TO-DO: show 404 page if application status is rejected.

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <main>
      <div className="App">
        <Router>
          <Routes />
          {'footerMenu' in globalSettings && <Footer globalSettings={globalSettings} />}
        </Router>
      </div>
    </main>
  );
}
