// a reducer takes in 2 things:
//   1. the action
//   2. copy of current state

// every single reducer runs every time you dispatch an action

export default function posts(state = [], action) {
	console.log(state, action);
	return state;
}