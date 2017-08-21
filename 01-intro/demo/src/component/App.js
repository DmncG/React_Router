import React, {Component} from 'react';
import SauceContainer from './SauceContainer'

export default class App extends Component {
	constructor() {
		super()
	}

	render() {
		let adjs = ['Silly', 'Saucey', 'Sardonic', 'Spastic']
		let i = Math.floor(Math.random() * adjs.length);
		let adj = adjs[i]
		let sauces = ['Franks', 'Sriracha', 'Tobasco']
		return (
			<div>
				<h1>A Somewhat {adj} Site</h1>
				<SauceContainer saucesToList={sauces} />
			</div>
		)
	}
}