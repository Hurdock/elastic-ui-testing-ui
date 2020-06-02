import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AppState } from './state';

import Homepage from '../apps/Default/pages/Homepage';

// const ProtectedRoute = ({ app, account, ...props }) => {
//   // Check here if user has the required roles.
//   if (account !== null) {
//     return <Route {...props} />;
//   } else {
//     localStorage.redirect_after_login = window.location.pathname;
//     return <Redirect to="/authenticate" />
//   }
// }

// const PublicRoute = ({ account, ...props }) => {
//   return account === null ? <Route {...props} /> : <Redirect to="/" />
// }

export default (props) => {
  const { account } = AppState();

  return <React.Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* HUB */}
        
        {/* <ProtectedRoute account={account} exact path="/" component={HUB_HOMEPAGE} />
        <PublicRoute account={account} exact path="/authenticate" component={HUB_AUTHENTICATE} />
        <ProtectedRoute account={account} exact path="/disconnect" component={HUB_DISCONNECT} />
        <ProtectedRoute account={account} exact path="/having-difficulties/:error_code?" component={HUB_DIFFICULTIES} /> */}

        {/* CONTRACTS */}
{/* 
        <ProtectedRoute app="contracts" account={account} exact path="/contracts/" component={CONTRACTS_HOMEPAGE} />
        <ProtectedRoute app="contracts" account={account} exact path="/contracts/company/:contractId?" component={CONTRACTS_PAGE} /> */}

      </Switch>
    </Router>
  </React.Fragment>
}