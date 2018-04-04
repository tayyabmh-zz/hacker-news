import axios from 'axios';

export const changeURL = (text) => {
	return {
		type: 'CHANGE_URL',
		text
	}
}

export const requestPosts = () => {
	return {
		type: 'REQUEST_POSTS',
		loading: true
	}
}

export const receivePosts = (json) => {
	return {
		type: 'RECEIVED_POSTS',
		loading: false,
		posts: json
	}
}

export const fetchPosts = () => {
	return dispatch => {
		dispatch(requestPosts());


		axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
			.then(response => {
				let topFive = response.data.slice(0,5)

				let topFivePromises = topFive.map(item => {
					return axios.get('https://hacker-news.firebaseio.com/v0/item/' + item + '.json?print=pretty')
				})

				axios.all(topFivePromises)
					.then(results => {
						let data = results.map(r => r.data);
						dispatch(receivePosts(data));
					})
			})
			.catch(err => {
				console.log(err);
			})
		}
}
