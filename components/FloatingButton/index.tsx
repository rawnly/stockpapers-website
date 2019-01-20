import { Component } from "react";
import classes from "./style.scss";

export default class extends Component<any, any> {
  render() {
    const { props } = this;

    return (
      <button className={classes.floatingButton} {...props}>
        {props.children}
      </button>
    );
  }
}
