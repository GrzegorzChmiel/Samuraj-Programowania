const ListItems = props => {
  const listItemsTab = createListItems(props.items, props.activeChange);
  return (
    <div className="list">
      <h3>Twoje zamówienie:</h3>
      <ul>{listItemsTab}</ul>
    </div>
  );
};

const createListItems = (itemsTab, activeChange) => {
  const listItemsTab = itemsTab.map(element => {
    return (
      <Item
        key={element.id}
        id={element.id}
        name={element.name}
        price={element.price}
        active={element.active}
        activeChange={activeChange}
      />
    );
  });
  return listItemsTab;
};
