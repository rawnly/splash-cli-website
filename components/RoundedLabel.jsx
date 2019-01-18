import { Component } from "react";

const style = {
  container: {
    padding: "10px 20px",
    fontSize: 12,
    background: "white",
    borderRadius: "100px",
    background: "#F8F6F7",
    boxShadow: "0px 3px 10px -4px rgba(27, 27, 27, .25)"
  },
  paragraph: {
    padding: 0,
    margin: 0,
    textAlign: "center"
  }
};

export default class RoundedLabel extends Component {
  render() {
    return (
      <div className={this.props.className} style={{ ...style.container, background: this.props.background }}>
        <p style={{ ...style.paragraph, color: this.props.color }}> {this.props.children} </p>
      </div>
    );
  }
}
