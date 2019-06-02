import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser, getLanguage } from '../../actions';
import LoginComponent from '../components/LoginComponent';
class LoginContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginUser: '',
    }
  }

  componentWillMount() {
    this.props.getLanguage();
  }

  onSubmitLoginUser = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.loginUser);
  }

  onChangeLoginUser = (e) => {
    e.preventDefault();

    this.setState({
      loginUser: {
        ...this.state.loginUser,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <LoginComponent language={this.props.language}
        onChangeLoginUser={this.onChangeLoginUser}
        onSubmitLoginUser={this.onSubmitLoginUser}
        isLoading={this.props.isLoading}
        errors={this.props.errors}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  var userLang = navigator.language || navigator.userLanguage;
  return {
    loginUser: (user) => dispatch(loginUser(user)),
    getLanguage: () => dispatch(getLanguage(userLang))
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.languageReducer.getAllTexts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
