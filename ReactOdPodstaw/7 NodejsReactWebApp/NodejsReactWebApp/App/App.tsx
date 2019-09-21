import * as React from "react";
import * as ReactDOM from "react-dom";

const MessageContainer = (props) => {
	const { txt } = props
	return (
		<p>{txt}</p>
	)
}

const OrderForm = (props) => {
	const { submit, ageCheckboxChange } = props
	return (
		<form onSubmit={submit}>
			<input type="checkbox" id="ageCheckbox" onChange={ageCheckboxChange} />
			<label htmlFor="ageCheckbox">Mam co najmniej 16 lat</label>
			<br />
			<button type="submit">Kup bilet</button>
		</form>
	)
}

const displayMessage = (requireValidation, ageCheckboxChecked) => {
	if (requireValidation == false) {
		if (ageCheckboxChecked)
			return <MessageContainer txt={"Mozesz obejrzec film. Zapraszamy!"} />
		return <MessageContainer txt={"Nie mozesz obejrzec tego filmu jesli masz mniej niz 16 lat!"} />
	}
	else {
		return null
	}
}

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
			this.setState({ requireValidation: false })
	}

	changeStateOnCheckboxChange(prevState) {
		return ({
			ageCheckboxChecked: !prevState.ageCheckboxChecked,
			requireValidation: true
		})
	}

	render() {
		const { requireValidation, ageCheckboxChecked } = this.state
		return (
			<React.Fragment>
				<h1>Kup bilet na horror roku</h1>
				<OrderForm submit={this.handleFormSubmit} ageCheckboxChange={this.handleAgeCheckboxChange}/>
				{displayMessage(requireValidation, ageCheckboxChecked)}
			</React.Fragment>
		)
	}
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
