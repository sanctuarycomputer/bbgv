import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'constants/routes';
import 'styles/App.scss';

function App() {
  return (
    <main>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </main>
  );
}

export default App;
