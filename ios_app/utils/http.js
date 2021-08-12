
export default class HTTP {
	getFetch(url, options = null) {
		return new Promise((resolve, reject) =>  {
			fetch(url, options)
			.then((response) => response.json())
			.then((response) => resolve(response))
			.catch((error) => {
				reject(error);
			})
		})
	}
}