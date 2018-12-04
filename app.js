const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('welcome');
});

app.listen(3000, () => {
	console.log(`server started in the port 3000`);
});