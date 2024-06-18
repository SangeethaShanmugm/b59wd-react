import { Component } from "react";

export default class LifeCycleA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Jack",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    console.log(state.name)
    return state.name;
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <h1>LifeCycleA Component</h1>
        <p>{this.state.name}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
    fetch("https://659e6ba547ae28b0bd35caec.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
}
