import React from 'react';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';
import FileUpload from './components/file-server/FileUpload';
import logo from "./styling/logo512.png";
import './styling/App.css';

const Read = props => {
  return (
    <Auth capability="read">

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Mi-Pi Cloud</p>
        </header>
      </div>

    </Auth>
  );
};

const Update = props => {
  return (
    <Auth capability="update">
    </Auth>
  );
}

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Read />
        <Login />
        <Update />
        <FileUpload />
      </LoginProvider>
    );
  }
}

export default App;

