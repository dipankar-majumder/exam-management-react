import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

export default () => {
  return <div></div>;
};

export const fakeAuth = {
  isAuthenticated: true,
  authenticate: cb => {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 500); // fake async
  },
  signout: cb => {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 500);
  },
};

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log(props);
        return fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/admin/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export function LogIn() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

// Not used

function Logout() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
