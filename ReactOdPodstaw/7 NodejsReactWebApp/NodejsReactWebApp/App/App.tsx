import * as React from "react";
import * as ReactDOM from "react-dom";

const data = {
	users: [
		{
			id: 1,
			age: 29,
			name: "Arek",
		},
		{
			id: 2,
			age: 49,
			name: "Marta",
		},
		{
			id: 3,
			age: 19,
			name: "Stasia",
		},
		{
			id: 4,
			age: 24,
			name: "Karol",
		}
	]
}

interface IListItemsProps {
	data: any
}

class ListItems extends React.Component<IListItemsProps> {
	render() {

		const listItemTab = this.props.data.users.map((user) => {
			return <ListItem key={user.id} user={user} />
		})

		return (
			<>
				{listItemTab}
			</>
		)
	}
}

const ListItem = ({ user }) => {
	return (
		<div>
			<h2> Uzytkownik o nazwie: {user.name}</h2>
			<h3>Wiek Uzytkownika: {user.age}</h3>
		</div>
	)
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
