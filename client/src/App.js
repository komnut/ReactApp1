import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Content from './components/Content';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLogin: false, username: "", password: "" }

    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange(event) {
    console.log(this.state)
    event.target.id === "txtUsername" && this.setState({ username: event.target.value });
    event.target.id === "txtPassword" && this.setState({ password: event.target.value });
  }

  resetInput() {
    this.setState({ username: "", password: "" });
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header />

        {this.state.isLogin && <Content />}

        {!this.state.isLogin && <Login onHandleChange={this.handleChange} onResetInput={this.resetInput} />}

        <Footer companyName="TestReact" email="test.react@mail.com" />
      </div >
    );
  }
}

export default App;
