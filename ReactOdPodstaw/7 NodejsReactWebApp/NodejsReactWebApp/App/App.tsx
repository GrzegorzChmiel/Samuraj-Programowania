import * as React from "react";
import * as ReactDOM from "react-dom";

class CheckboxAgeConfirmation extends React.Component {

	state = {
		ageCheckboxChecked: false
	}

	handleAgeCheckboxChange = () => {
		this.setState(this.changeState)
	}

	displayMessage = () => {
		if (this.state.ageCheckboxChecked)
			return <PositiveMessage />
		return <NegativeMessage />
	}

	changeState(prevState) {
		return ({
			ageCheckboxChecked: !prevState.ageCheckboxChecked
		})
	}

	render() {
		return (
			<React.Fragment>
				<h1>Kup bilet na horror roku</h1>
				<input type="checkbox" id="ageCheckbox" onChange={this.handleAgeCheckboxChange} />
				<label htmlFor="ageCheckbox">Mam co najmniej 16 lat</label>
				{this.displayMessage()}
			</React.Fragment>
		)
	}
}

const PositiveMessage = () => <p>Mozesz obejrzec film. Zapraszamy!</p>
const NegativeMessage = () => <p>Nie mozesz obejrzec tego filmu jesli masz mniej niz 16 lat!</p>

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
