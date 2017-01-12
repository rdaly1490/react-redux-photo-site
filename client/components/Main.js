import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Redux Photo App</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}