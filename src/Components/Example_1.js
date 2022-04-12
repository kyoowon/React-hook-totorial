import React, { useState, Component } from 'react';


// Functional Component - useState react hooks
export const Example = () => {
	const [item, setItem] = useState(1);
	const incrementItem = () => setItem(item + 1);
	const decrementItem = () => setItem(item - 1);
	return (
		<div>
				<h1>{item}</h1>
				<button onClick={incrementItem}>Increase</button>
				<button onClick={decrementItem}>Decrease</button>
		</div>
	);
};


// Class Component - useState
export class Example_class extends Component {
	state = {
		item: 1
	}
	render() {
		const {item} = this.state;
		return (
			<div>
			<h1>{item}</h1>
				<button onClick={this.incrementItem}>Increase</button>
				<button onClick={this.decrementItem}>Decrease</button>
			</div>
		)
	}
	incrementItem = () => {
		this.setState(state => {
			return {
				item: state.item + 1
			}
		})
	}

	decrementItem = () => {
		this.setState(state => {
			return {
				item: state.item + 1
			}
		})
	}
}
