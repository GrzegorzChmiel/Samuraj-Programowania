import React from "react";

const GetPersonsButton = props => {
  return <button onClick={() => props.getHandler("Komunikat do konsoli -> Pobieram osoby")}>Pobierz kolejne 5 osób</button>;
};

export default GetPersonsButton;
