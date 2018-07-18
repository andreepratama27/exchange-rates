const api = require("express").Router();
const request = require("request");

api.get("/latest", (req, res) => {
  request("https://exchangeratesapi.io/api/latest?base=USD", function(
    err,
    response
  ) {
    res.json(JSON.parse(response.body));
  });
});

module.exports = api;
