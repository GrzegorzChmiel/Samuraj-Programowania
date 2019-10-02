const Item = props => {
  const className = props.active ? "enabled" : "disabled";
  return (
    <li
      className={className}
      onClick={() => {
        props.activeChange(props.id);
      }}
    >
      {props.name}, cena: {props.price} PLN
    </li>
  );
};
