import React, { Component } from 'react';

class Geometrizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 0,
      circumference: ''
    }
  }

  setRadius = (event) => {
    const radius = event.target.value;
    this.setState({radius: radius});
  };

  calcCircumference = () => {
    const circumference = (2 * Math.PI * this.state.radius).toFixed(2);
    this.setState({ circumference: circumference });
  };

  render() {
    return <div>
      <input type="number" onBlur={this.setRadius} placeholder="Enter radius"/>
      <button onClick={this.calcCircumference}>Calculate circumference</button>
      <h2>The circumference is: {this.state.circumference}</h2>
    </div>
  };

}

export default Geometrizer;

