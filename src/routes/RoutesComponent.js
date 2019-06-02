import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "../utils/history";
import LoginContainer from "../authentication/containers/LoginContainer";
import PrivateRoute from "../authentication/components/PrivateRoute";
import App from "../App";
import AppContainer from "../container/AppContainer";


const logOut = (props) => {
  console.log(props);
  localStorage.removeItem('departmentsUser');
  props.history.push('/');

  return null;
}

const RouteComponents = () =>
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={'/login'} component={LoginContainer} />
      {/* <Route exact path={'/register'} component={RegisterContainer} /> */}
      <Route exact path={'/logout'} render={(props) => logOut(props)} />
      <PrivateRoute path={'/'} component={App} />
    </Switch>
  </ConnectedRouter>


export default RouteComponents;
