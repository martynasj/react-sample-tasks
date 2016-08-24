import React from 'react';

class CalculatorAge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      age: ''
    }
  }

  onBlur = (event) => {
    const year = event.target.value;
    if (year == '') {
      console.log('no data');
      this.setState({input: ''});
    } else {
      this.setState({input: year});
    }
  };

  calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.state.input;
    if (this.state.input > currentYear || this.state.input.length < 4) {
      this.setState({age: ''})
    } else {
      this.setState({age: age});
    }
  };

  render() {
    return <div>
      <input type="text" onBlur={this.onBlur} placeholder="Type in your birth year"/>
      <button onClick={this.calculateAge}>Calculate</button>
      <h2>Your age: {this.state.age}</h2>
    </div>
  };
}

export default CalculatorAge;