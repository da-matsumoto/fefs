const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

console.log('test');
console.log('test2');

app.listen(port, () => console.log(`Exapmle app listening on port ${port}!`));
