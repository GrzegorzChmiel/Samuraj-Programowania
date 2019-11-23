import React from "react";
import "./Word.css";

const Word = props => {
  return (
    <li>
      Angielskie słowo: <strong>{props.en}</strong> ma polskie znaczenie:{" "}
      <strong>{props.pl}</strong>
    </li>
  );
};

export default Word;
