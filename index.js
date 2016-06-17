var request = require('request');

var API, TOKEN;

module.exports = {
   setup: function(api, token) {
      API = api;
      TOKEN = TOKEN;
   },
   send: function(data) {
      request.post('http://' + API + "/api/send", {
         form: data
      }, function(e, response, body) {
         if (e) {
            console.log(e);
         }
      });
   }
}
