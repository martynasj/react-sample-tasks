import React, { Component } from 'react';

class Geometrizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 0,
      circumference: '',
      area: ''
    }
  }

  setRadius = (event) => {
    const radius = event.target.value;
    console.log(radius);
    this.setState({radius: radius});
  };

  calcCircumference = (event) => {
    const circumference = (2 * Math.PI * this.state.radius).toFixed(2);
    console.log(event.target.value);
    //this.setState({ circumference: circumference });

  };

  calcArea = () => {
    const radius = this.state.radius;
    const area = Math.PI * radius * radius;

  }

  render() {
    return <div>
      <input type="number" onChange={this.setRadius} placeholder="Enter radius"/>
      <button onClick={this.calcCircumference}>Calculate circumference</button>
    </div>
  };

}

export default Geometrizer;

