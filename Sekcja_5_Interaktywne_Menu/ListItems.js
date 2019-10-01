const ListItems = props => {
  const listItemsTab = createListItems(props.items);
  return (
    <div className="list">
      <h3>Twoje zamówienie:</h3>
      <ul>{listItemsTab}</ul>
    </div>
  );
};

const createListItems = itemsTab => {
  const listItemsTab = itemsTab.map(element => {
    return <Item key={element.id} name={element.name} price={element.price} />;
  });
  return listItemsTab;
};
