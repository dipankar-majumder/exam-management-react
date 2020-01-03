import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// import './App.css';

// import logo from './logo.svg';

import store from './store';

import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Admin from './components/Admin';

const App = props => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/admin'>
              <Admin />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
