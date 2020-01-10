import React from "react";

const InputForm = props => {
  return (
    <form>
      <input type="text" value={props.cityName} placeholder="Wpisz nazwę miasta" onChange={props.cityChangeHandler}></input>
      <button type="submit">Wyszukaj</button>
    </form>
  );
};

export default InputForm;
