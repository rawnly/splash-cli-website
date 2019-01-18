import Typed from "typed.js";

import { Component } from "react";

class TypedComponent extends Component {
  componentDidMount() {
    let options = {
      strings: this.props.strings,
      typeSpeed: 30,
      backSpeed: 5,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
      loop: true
    };

    this.typed = new Typed(this.el, Object.assign(options, this.props.options));
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export default TypedComponent;
