import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
	state = {
		availableProducts: 15,
		shoppingCart: 0
	}

	caller = ""

	handleAdd = () => {
		this.caller = "Add"
		this.setState(this.changeShoppingCard);
	}

	handleRem = () => {
		this.caller = "Rem"
		this.setState(this.changeShoppingCard);
	}

	handleBuy = () => {
		this.setState(this.changeOnBuy)
	}

	changeOnBuy(prevState) {
		return ({
			availableProducts: prevState.availableProducts - prevState.shoppingCart,
			shoppingCart: 0
		})
	}

	changeShoppingCard(prevState) {
		const quantity = this.caller == "Add" ? 1 : -1;
		const returnObj = { shoppingCart: prevState.shoppingCart + quantity }
		return returnObj
	}

	render() {
		const { shoppingCart, availableProducts } = this.state

		const addDisabled = shoppingCart == availableProducts
		const remDisabled = shoppingCart == 0
		const showBuyButton = shoppingCart > 0
		const shoppingQuantityStyleObject = shoppingCart == 0 ? { opacity: 0.3} : {}
		return (
			<React.Fragment>
				<button id="Add" onClick={this.handleAdd} disabled={addDisabled}>+</button>
				<span style={shoppingQuantityStyleObject}> {shoppingCart} </span>
				<button id="Rem" onClick={this.handleRem} disabled={remDisabled}>-</button>
				{showBuyButton && <button onClick={this.handleBuy}>Kup</button>}
			</React.Fragment>
		)
	}

}

ReactDOM.render(<App />, document.getElementById("root"));
