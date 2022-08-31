const http = require(`http`);
const path = require(`path`);
const ejs = require(`ejs`);
const env = require(`dotenv`).config();
const express = require(`express`);
const app = express();

// HTML view
app.engine(`html`, ejs.renderFile);
app.set(`view engine`, `html`);
app.use(express.static(path.join(__dirname, `public`)));

// ----------------------------------------------------------------------------------------------------------

app.get(`/`, (req, res) => {
	res.render(`${__dirname}/pages/index.html`);
})

// ------------------------------------------- LOCAL SERVER -------------------------------------------------

app.set(`port`, process.env.PORT || 3000);

var server = http.createServer(app);

server.listen(app.get(`port`), `0.0.0.0`, function () {
	console.log(`Express server listening on port ` + app.get(`port`));
});