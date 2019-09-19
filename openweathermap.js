const request = require('request');
var https = require('https');

var URL = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
request(URL, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  //console.log(body.url);
  //console.log(body);
  //console.log(body.explanation);
  console.log(res);
  console.log(res.body);
});
