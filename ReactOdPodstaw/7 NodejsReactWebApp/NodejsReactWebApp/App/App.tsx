import * as React from "react";
import * as ReactDOM from "react-dom";

const data = {
	users: [
		{
			id: 1,
			age: 29,
			name: "Arek",
			sex: "mezczyzna"
		},
		{
			id: 2,
			age: 49,
			name: "Marta",
			sex: "kobieta"
		},
		{
			id: 3,
			age: 19,
			name: "Stasia",
			sex: "kobieta"
		},
		{
			id: 4,
			age: 24,
			name: "Karol",
			sex: "mezczyzna"
		}
	]
}

interface IListItemsProps {
	data: any
}

class ListItems extends React.Component<IListItemsProps> {
	state = {
		selection: "All"
	}

	/*
	handleSelectionClick(selectionMode) {

	}
	*/
	handleSelectionClick = (selectionMode) => {
		let modObject = { selection: "All" }
		switch (selectionMode) {
			case "Female":
				modObject.selection = "Female"
				break
			case "Male":
				modObject.selection = "Male"
				break
		}
		this.setState(modObject)
	}

	getItemsForList() {
		const filter = (this.state.selection == "Female" ? "kobieta" :
			(this.state.selection == "Male" ? "mezczyzna" : "wszyscy"))
		if (filter == "wszyscy")
			return this.props.data.users;
		return this.props.data.users.filter((item) => { return item.sex == filter })
	}

	renderItemsList(items) {
		const returnList = items.map((item) => {
			return <ListItem key={item.id} user={item}></ListItem>
		});
		return returnList
	}

	render() {
		const items = this.getItemsForList()
		return (
			<>
				{/*
				<button onClick={() => { this.handleSelectionClick("All") }}>Wszyscy</button>
				<button onClick={() => { this.handleSelectionClick("Female") }}>Kobiety</button>
				<button onClick={() => { this.handleSelectionClick("Male") }}>Mezczyzni</button>
				*/}

				<button onClick={() => { this.handleSelectionClick("All") }}>Wszyscy</button>
				<button onClick={() => { this.handleSelectionClick("Female") }}>Kobiety</button>
				<button onClick={() => { this.handleSelectionClick("Male") }}>Mezczyzni</button>


				{this.renderItemsList(items)}
			</>
		)
	}
}

const ListItem = ({ user }) => {
	return (
		<div>
			<h3>{user.name}</h3>
			<p>Informacje o uzytkowniku:</p>
			<p>Wiek: {user.age}</p>
			<p>Plec: {user.sex}</p>
		</div>
	)
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
