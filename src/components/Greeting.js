import React from "react";

class Greeting extends React.Component {
  render() {
    if (this.props.name) {
      return <h2>Hello, {this.props.name} from Greeting Component</h2>;
  }
  return <h2>Hello, Stranger from Greeting Component</h2>;
  }
}

export default Greeting;

