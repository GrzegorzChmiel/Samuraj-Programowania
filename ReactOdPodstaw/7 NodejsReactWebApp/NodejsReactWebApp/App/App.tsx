import * as React from "react";
import * as ReactDOM from "react-dom";

class ListItems extends React.Component {
	state = {
		items: ["jablko", "sliwka", "gruszka"]
	}

	render() {
		return (
			<>
				<ul>
					{this.state.items.map((item, index, items) => {
						return <li key={index}> {`Owoc ${item} o indeksie w tablicy ${index}`}</li>
					})}
				</ul>
			</>
		)
	}
	/*
		render() {
			const newTab = this.state.items.map((item, index, items) => {
				return <li key={index}> {`Owoc ${item} o indeksie w tablicy ${index}`}</li>
			})
			return (
				<>
					<ul>
						{newTab}
					</ul>
				</>
			)
		}
	*/
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
