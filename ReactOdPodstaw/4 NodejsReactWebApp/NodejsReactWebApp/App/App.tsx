import * as React from "react";
import * as ReactDOM from "react-dom";

/*
 * Lista jako komponent stanowy
 */
class ShoppingList extends React.Component {
   state = {
      item1: { name: "pozycja1", count: 2 },
      item2: { name: "pozycja2", count: 3 },
      item3: { name: "pozycja3", count: 5 }
   }
   render() {
      return (
         <>
            <h1>Lista zakupow</h1>
            <ul>
               <ShoppingListItem name={this.state.item1.name} count={this.state.item1.count} />
               <ShoppingListItem name={this.state.item2.name} count={this.state.item2.count} />
               <ShoppingListItem name={this.state.item3.name} count={this.state.item3.count} />
            </ul>
         </>
      )
   }
}

/*
 * Elementy listy jako komponenty funkcyjne
 */
/*
const ShoppingListItem = (props) => {
   return <li>Pozycja o nazwie: {props.name} i ilosci: {props.count}.</li>
}
*/

/*
 * Elementy listy jako komponenty klasowe
 */

interface ShoppingListItemProps {
   name: string,
   count: number
}

class ShoppingListItem extends React.Component<ShoppingListItemProps> {
   render() {
      return <li>Pozycja o nazwie: {this.props.name} i ilosci: {this.props.count}.</li>
   }
}

/*
 * Renderowanie glownego komponentu.
 */
ReactDOM.render(<ShoppingList />, document.getElementById("root"));
