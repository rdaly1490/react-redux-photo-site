import React from 'react';
import Photo from './Photo';
// import Comments

export default class Single extends React.Component {
	render() {
		// params made available by react router
		const { posts, params } = this.props;

		// get photo/post by index
		const i = posts.findIndex(post => post.code === params.postId);
		const post = posts[i];

		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
			</div>
		);
	}
}