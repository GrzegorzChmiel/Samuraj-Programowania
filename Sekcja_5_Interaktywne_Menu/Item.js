const Item = props => {
  const className = props.active ? "enabled" : "disabled";
  return (
    <li key={props.id} className={className}>
      {props.name}, cena: {props.price} PLN
    </li>
  );
};
