const fetchPosts = () => {
	axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
		.then(response => {
			let topFive = response.data.slice(0,5)

			let topFivePromises = topFive.map(item => {
				return axios.get('https://hacker-news.firebaseio.com/v0/item/' + item + '.json?print=pretty')
			})

			axios.all(topFivePromises)
				.then(results => {
					let data = results.map(r => r.data);
					console.log(data);
				})
		})
		.catch(err => {
			console.log(err);
		})
	}

fetchPosts();


// const outerFetchPosts = () => {

// 	const innerFetchPosts = () => {
// 		let postData = [];
// 		return new Promise(function (resolve, reject) {
// 			// body...
// 			axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
// 				.then(res => {
// 					let topFiveStories = res.data.slice(0,5);
// 					let promisesTopFiveStories = topFiveStories.map(item => {
// 						return axios.get('https://hacker-news.firebaseio.com/v0/item/' + item + '.json?print=pretty')
// 					})
// 					Promise.all(promisesTopFiveStories).then(res => {
// 						resolve(res.map(item => {
// 							return item.data
// 						}))
// 					})
// 				})
// 		})
// 	}
// 	innerFetchPosts().then(function (res) {
// 		// body...
// 		console.log(res)
// 	})

// }