import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to={{ pathname: '/calculator'}}><button>Task 1: Calculate your age</button> </Link>
        <Link to={{ pathname: '/supply'}}><button>Task 2: Lifetime supplies</button> </Link>
      </div>
    );
  }
}

export default App;
