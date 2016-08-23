import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router'

const MainLayout = ({ children}) => {
    return (
      <div className="App">
        <div className="App-header">
          <Link to={{ pathname: '/'}}> <img src={logo} className="App-logo" alt="logo" /> </Link>
        </div>
        {children}
      </div>
    );
};

export default MainLayout;