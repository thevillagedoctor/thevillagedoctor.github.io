import React from 'react';
import 'styles/insurance.css';
import 'styles/insurance-mobile.css';

type insuranceState = {
	acceptedIns: string[],
	notAcceptedIns: string[],
}


export class Insurance extends React.Component <{}, insuranceState> {
	constructor(props) {
		super(props);
		this.state = {
			acceptedIns: [],
			notAcceptedIns: [],
		}
	}

	componentDidMount () {

		fetch('./editInfo/Accepted-Insurance.txt') 
			.then(response => response.text())
			.then(data => {
				this.setState({acceptedIns: data.split('\n')});
		});

		fetch('./editInfo/Not-Accepted-Insurance.txt') 
			.then(response => response.text())
			.then(data => {
				this.setState({notAcceptedIns: data.split('\n')});
		})

	}

	render() {
		return (
			<div>
				<div className="typical-content insurance-page">
				<h1>Insurance Information</h1>
					<div className="infoBody">
						<p>
							Below are lists common insurance plans that we either accept or do not.  If you have questions about other
							insurance plans, please give our office a call and we would be happy to work with you.
						</p>
						<h2>Insurance Plans We Accept</h2>
						<ul>
							{this.state.acceptedIns.map(company => {
								return <li key={company}>{company}</li>
							})}
						</ul>
						<h2>Common Insurance Plans We DO NOT Accept</h2>
						<ul>
							{this.state.notAcceptedIns.map(company => {
									return <li key={company}>{company}</li>
							})}
						</ul>
					</div>	
				</div>
			</div>
		);
	}
}