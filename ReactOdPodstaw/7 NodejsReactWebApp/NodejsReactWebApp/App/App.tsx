import * as React from "react";
import * as ReactDOM from "react-dom";

class TicketShop extends React.Component {
	state = {
		ageCheckboxChecked: false,
		requireValidation: true
	}

	handleAgeCheckboxChange = () => {
		this.setState(this.changeStateOnCheckboxChange)
	}

	handleFormSubmit = (e) => {
		e.preventDefault()
		if (this.state.requireValidation == true)
			this.setState({requireValidation: false})
	}

	displayMessage = () => {
		if (this.state.requireValidation == false) {
			if (this.state.ageCheckboxChecked)
				return <PositiveMessage />
			return <NegativeMessage />
		}
		else {
			return null
		}
	}

	changeStateOnCheckboxChange(prevState) {
		return ({
			ageCheckboxChecked: !prevState.ageCheckboxChecked,
			requireValidation: true
		})
	}

	render() {
		return (
			<React.Fragment>
				<h1>Kup bilet na horror roku</h1>
				<form onSubmit={this.handleFormSubmit}>
					<input type="checkbox" id="ageCheckbox" onChange={this.handleAgeCheckboxChange} />
					<label htmlFor="ageCheckbox">Mam co najmniej 16 lat</label>
					<br />
					<button type="submit">Kup bilet</button>
				</form>
				{this.displayMessage()}
			</React.Fragment>
		)
	}
}

const PositiveMessage = () => <p>Mozesz obejrzec film. Zapraszamy!</p>
const NegativeMessage = () => <p>Nie mozesz obejrzec tego filmu jesli masz mniej niz 16 lat!</p>

ReactDOM.render(<TicketShop />, document.getElementById("root"));
