import React from "react";

const SwitchButton = props => {
  return (
    <button onClick={props.handler}>{props.isActive ? "Stop" : "Start"}</button>
  );
};

export default SwitchButton;
