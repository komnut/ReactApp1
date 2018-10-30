import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Content from './components/Content';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLogin: 0, userName: "" }
    this.changeLogin = this.changeLogin.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  changeLogin(userName) {
    this.setState({ isLogin: 1, userName: userName })
  }

  Logout() {
    this.setState({ isLogin: 0, userName: "" })
  }

  render() {
    return (
      <div>
        <Header user={this.state} onLogout={this.Logout} />

        {this.state.isLogin > 0 ? (<Content user={this.state} />) : (<Login onChangeLogin={this.changeLogin} />)}

        <Footer companyName="TestReact" email="test.react@mail.com" />
      </div >
    );
  }
}

export default App;
