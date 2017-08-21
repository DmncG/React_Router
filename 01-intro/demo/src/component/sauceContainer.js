import React, {Component} from 'react';
import SaucePic from './SaucePic';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedSauce : ''
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState(
			{selectedSauce : e.target.value}
		)
	}

	render() {
		return (
			<div>
				{
					this.state.selectedSauce ? <SaucePic sauce={this.state.selectedSauce} /> : 	<h2>N/A</h2>
				}
				<div>
					<label>	
						Select a Sauce:
						<select onChange={this.handleChange}>
							<option value="">None</option>
							{
								this.props.saucesToList.map((sauce, idx) => {
									return <option value={sauce} key={idx}>{sauce}</option>
								})
							}
						</select>
					</label>
				</div>
			</div>
		)
	}
}