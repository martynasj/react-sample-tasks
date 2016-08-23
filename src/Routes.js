import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import React from 'react';
import App from './App'
import MainLayout from './components/MainLayout'
import CalculatorAge from './components/CalculatorAge'
import CalculatorSupply from './components/CalculatorSupply'

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={App}/>
      <Route path="calculator" component={CalculatorAge}/>
      <Route path="supply" component={CalculatorSupply}/>
    </Route>
  </Router>
);

export default Routes;