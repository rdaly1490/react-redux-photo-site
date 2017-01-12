import React from 'react';
import Photo from './Photo';

export default class PhotoGrid extends React.Component {
	render() {
		const { posts } = this.props;
		return (
			<div className="photo-grid">
				{posts.map((post, index) => <Photo key={index} />)}
			</div>
		);
	}
}