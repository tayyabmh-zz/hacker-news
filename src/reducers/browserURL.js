const browserURL = (state = 'http://news.ycombinator.com', action) => {
	switch (action.type) {
		case 'CHANGE_URL':
			return action.text
		default:
			return state
	}
}



export default browserURL;