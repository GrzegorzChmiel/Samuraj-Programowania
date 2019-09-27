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
	render() {

		let items = this.props.data.users.filter((user) => { return user.sex == "kobieta" })
		const listItemTabFemale = items.map((user) => {
			return <ListItem key={user.id} user={user} />
		})

		items = this.props.data.users.filter((user) => { return user.sex == "mezczyzna" })
		const listItemTabMale = items.map((user) => {
			return <ListItem key={user.id} user={user} />
		})

		return (
			<>
				{listItemTabFemale}
				{listItemTabMale}
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
