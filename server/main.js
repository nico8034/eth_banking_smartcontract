const express = require('express');
const app = express();

const pro_path = "C:/Users/nicol/Documents/gitProjects/eth_banking_smartcontract"

app.use(express.static('client'));
app.use(express.static('build/contracts'));

app.get('/index', (req, res) => {
  res.sendFile(pro_path + '/client/index.html');
});

app.get('*', (req, res) => {
  res.status(404);
  res.send('Oops... this URL does not exist');
});

app.listen(3001);