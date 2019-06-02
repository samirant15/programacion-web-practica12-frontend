import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class PrivateRoute extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    }
  }

  componentWillMount() {
    this.isAuth();
    // this.props.getUserLogged();
  }



  isAuth = () => {
    let tokenAuth = JSON.parse(localStorage.getItem("departmentsUser")) || {};
    if (tokenAuth.hasOwnProperty("isAuth")) {
      this.setState({
        isLogged: true
      })
    }
  }

  render() {

    let { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => (
        this.state.isLogged === true ?
          <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )} />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    // userLogged: state.users.getUserLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getUserLogged: () => dispatch(meUser()),
  }
}

export default connect(null, null)(PrivateRoute)
