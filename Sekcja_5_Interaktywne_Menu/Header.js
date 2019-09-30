const Header = props => {
  const activeItems = getActiveItems(props.items);
  const number = activeItems.length;
  const value = calculateValue(activeItems);

  return (
    <header>
      <h2>Ilość zamówionych pozycji: {number}</h2>
      <h2>Wartość zamówionych pozycji: {value}</h2>
    </header>
  );
};

const getActiveItems = allItems => {
  const retTab = allItems.filter(item => {
    return item.active;
  });

  return retTab;
};

const calculateValue = activeItems => {
  let retValue = 0;

  activeItems.forEach(element => {
    retValue += element.price;
  });

  return retValue;
};
