const express = require('express');
const app = express();
app.use(express.static('public'));

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

app.use(urlLogger, timeLogger);

app.get('/', (request, response) => {
  response.send('hello world');
});


app.get('/json', (request, response) => {
  response.status(200).json({"name": "Quin"});
});

app.get('/sunsets', (request, response) => {
  response.send('a page full of sunsets')
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use(function (request, response, next) {
  response.status(404).send("Sorry can't find that!")
})