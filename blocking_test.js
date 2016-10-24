request('http://www.google.com', function(error, response, body) {
  console.log(body);
});
console.log('Done!');