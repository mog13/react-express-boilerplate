const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(express.static('../build'));

//THIS IS NOT A GOOD IDEA AND IS HERE TEMPORARILY
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/api/',(req,res)=>{
	res.send('this is the api root');
});

app.listen(port, () => console.log(`App listening on ${port}`));
