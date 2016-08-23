import React, {Component} from 'react';

class CalculatorSupply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxAge: 100,
      yearsLeft: '',
      amountPerDay: '',
      supply: ''
    }
  }

  setYears = (event) => {
    const age = event.target.value;
    const yearsLeft = this.state.maxAge - age;
    this.setState({ yearsLeft: yearsLeft})
  };

  setAmount = (event) => {
    const amount = event.target.value;
    this.setState({ amountPerDay: amount})
  };

  calculateSupply = () => {
    const days = this.state.yearsLeft * 365;
    const supply = days * this.state.amountPerDay;
    if(this.state.yearsLeft == 100 || this.state.amountPerDay == '') {
      console.log('invalid data');
    } else {
      this.setState({supply: supply})
    }
  };

  render() {
    return<div>
        <input type="text" onBlur={this.setYears} placeholder="Enter your age" />
        <input type="text" onBlur={this.setAmount} placeholder="Enter amount per day" />
      <button onClick={this.calculateSupply}>Calculate</button>
      <h2>Lifetime supply: {this.state.supply}</h2>
      </div>
  }
}

export default CalculatorSupply;