import React from "react";
import "./PersonsList.css";

const PersonsList = props => {
  const displayItems = props.data.map(createDisplayItem);
  return displayItems;
};

function createDisplayItem(personData) {
  return (
    <div key={personData.key} className="user">
      <img
        src={personData.image}
        alt={`${personData.name.first} ${personData.name.last}`}
      ></img>
      <h4>{`${personData.name.title} ${personData.name.first} ${personData.name.last}`}</h4>
      <span>{`Email: ${personData.email}`}</span>{" "}
      <span>{`Phone: ${personData.phone}`}</span>
    </div>
  );
}

export default PersonsList;
