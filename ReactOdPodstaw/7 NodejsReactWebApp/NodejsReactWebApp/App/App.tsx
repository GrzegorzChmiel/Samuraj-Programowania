import * as React from "react";
import * as ReactDOM from "react-dom";

class ListItems extends React.Component {
	state = {
		items: ["jablko", "sliwka", "gruszka"]
	}

	render() {
		const listItemTab = this.state.items.map((item, index) => {
			return <ListItem key={item} content={item} contentIndex={index} />
		})
		return (
			<>
				<ul>
					{listItemTab}
				</ul>
			</>
		)
	}
}

const ListItem = (props) => {
	return <li> {`Owoc ${props.content} o indeksie w tablicy ${props.contentIndex}`}</li>
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
