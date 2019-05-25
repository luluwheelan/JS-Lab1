const express = require(`express`);

const app = express();

const routes = require(`./routes.js`);
app.use(`/`, routes);


const port = (process.env.PORT || 4000)

app.listen(port,() => console.log(`Listening on ${port}`));