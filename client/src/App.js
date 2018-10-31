import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Content from './components/Content';
import * as firebase from 'firebase';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: 0,
      userName: "",
      speed: 10
    }
    this.changeLogin = this.changeLogin.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', x => {
      this.setState({
        speed: x.val(),
        userName: x.val()
      })
    })
  }

  changeLogin(userName) {
    this.setState({ isLogin: 1, userName: userName })
  }

  Logout() {
    this.setState({
      isLogin: 0,
      userName: ""
    })
  }

  render() {
    let onlogin;
    if (this.state.isLogin > 0) {
      onlogin = <Content user={this.state} />
    }
    else {
      onlogin = <Login onChangeLogin={this.changeLogin} speed={this.state.speed} />
    }

    return (
      <div>
        <Header user={this.state} onLogout={this.Logout} />

        {onlogin}

        <Footer companyName="TestReact" email="test.react@mail.com" />
      </div >
    );
  }
}

export default App;
