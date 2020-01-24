import React from "react";

const InputForm = props => {
  return (
    <form>
      <input type="text" value={props.cityName} placeholder="Wpisz nazwę miasta" onChange={props.cityChangeHandler}></input>
    </form>
  );
};

export default InputForm;
