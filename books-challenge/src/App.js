import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
