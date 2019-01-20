const PORT = process.env.PORT || 3000

const express = require('express')
const next = require('next')
const isDev = process.env.NODE_ENV !== "production"

const app = next({
	dev: isDev
})

app
	.prepare()
	.then(() => {
		const server = express();
		const handler = app.getRequestHandler()

		server.get('/itunes|store|download', (req, res) => {
			res.redirect('http://get.stockpapers.app').status(301)
		})

		server.get('*', (req, res) => handler(req, res))

		server.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`))
	})
	.catch(error => {
		console.error(`Error: Can't restart the server\n`, error)
	})