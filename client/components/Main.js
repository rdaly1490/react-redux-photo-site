import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Redux Photo App</Link>
				</h1>
				{/* passes props from this component down to the first child */}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}