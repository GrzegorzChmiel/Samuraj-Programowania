import React from "react";

const GetPersonsButton = props => {
  return (
    <button
      style={{
        padding: "10px 20px",
        border: "2px solid black",
        backgroundColor: "white",
        margin: 20
      }}
      onClick={() => props.getHandler("Komunikat do konsoli -> Pobieram osoby")}
    >
      Dodaj kolejną osobę
    </button>
  );
};

export default GetPersonsButton;
