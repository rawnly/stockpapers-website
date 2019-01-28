const PORT = process.env.PORT || 3000;

const express = require("express");
const next = require("next");
const isDev = process.env.NODE_ENV !== "production";

const app = next({
	dev: isDev,
});

app
	.prepare()
	.then(() => {
		const server = express();
		const handler = app.getRequestHandler();

		server.get("/itunes|store|download|get", (req, res) => res.redirect("https://itunes.apple.com/us/app/stock-papers/id1443861313?ls=1&mt=8").status(301));
		server.get("/author", (req, res) => res.redirect("https://rawnly.com").status(301));

		server.get("*", (req, res) => handler(req, res));

		server.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
	})
	.catch((error) => {
		console.error(`Error: Can't restart the server\n`, error);
	});
