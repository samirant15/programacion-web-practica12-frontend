import React, { Component } from 'react'
import { ConnectedRouter } from "connected-react-router";
import { history } from '../utils/history.js';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { getLanguage } from '../actions';
import DashboardComponent from '../components/DashboardComponent';


class AppContainer extends Component {
  componentDidMount() {
    // this.props.getLanguage();
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={'/'} render={(props) => <DashboardComponent {...props} language={this.props.language} />} />

        </Switch>
      </ConnectedRouter>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  var userLang = navigator.language || navigator.userLanguage;
  return {
    getLanguage: () => dispatch(getLanguage(userLang))
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.getAllTexts,
  }
}

export default connect(null, null)(AppContainer);
