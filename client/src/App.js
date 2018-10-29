import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Content from './components/Content';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLogin: false }
  }

  render() {
    return (
      <div>
        <Header />

        {this.state.isLogin ? (<Content />) : (<Login />) }

        <Footer companyName="TestReact" email="test.react@mail.com" />
      </div >
    );
  }
}

export default App;
