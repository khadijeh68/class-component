import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <span className="increment">
          <button
            onClick={this.handleIncrement.bind(this)}
            className="m-5 btn btn-success"
          >
            +
          </button>
        </span>
        <span className="counter m-5 btn btn-primary">{this.state.count}</span>
        <span className="decrement">
          <button onClick={this.handleDecrement} className="m-5 btn btn-danger">
            -
          </button>
        </span>
      </>
    );
  }
}

export default Counter;
