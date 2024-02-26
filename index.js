const http = require('http')




const KEY = process.env.KEY
const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${KEY}`


http
	.get(url, res => {
		const { statusCode } = res
		if (statusCode !== 200) {
			console.log(statusCode)
			return
		}

		let data = ''
		res.on('data', chunk => {
			data += chunk
		})

		res.on('end', () => {
			console.log(JSON.parse(data))
		})
	})
	.on('error', err => {
		console.log(err)
	})