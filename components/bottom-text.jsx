import { Component } from "react";
import Link from "next/link";
import cx from "classnames";

import "../css/bottom-text.scss";

export class Version extends Component {
  static defaultProps = {
    dark: false,
    isLeft: true,
    isRight: false
  };

  state = {
    version: "3.2.0"
  };

  constructor(props) {
    super(props);

    if (props.version) {
      this.setState({
        version: props.version
      });
    }
  }

  render() {
    return (
      <a
        href='https://github.com/splash-cli/splash-cli/releases/latest'
        className={cx("bottom-text", {
          dark: this.props.dark,
          left: this.props.isLeft,
          right: this.props.isRight
        })}
      >
        {" "}
        v{this.state.version}{" "}
      </a>
    );
  }
}

export class License extends Component {
  static defaultProps = {
    dark: false,
    isLeft: false,
    isRight: true
  };

  state = {
    license: "MIT"
  };

  render() {
    return (
      <Link href='/license'>
        <a
          className={cx("bottom-text", {
            dark: this.props.dark,
            left: this.props.isLeft && !this.props.isRight,
            right: !this.props.isLeft && this.props.isRight
          })}
        >
          {" "}
          {this.state.license}{" "}
        </a>
      </Link>
    );
  }
}
