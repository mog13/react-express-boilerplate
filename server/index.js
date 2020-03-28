const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/api/',(req,res)=>{
	res.send('this is the api root');
});

app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => console.log(`App listening on ${port}`));
