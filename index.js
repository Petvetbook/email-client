var request = require('request');
var Promise = require('promise');
var API, TOKEN;

module.exports = {
   setup: function(api, token) {
      API = api;
      TOKEN = TOKEN;
   },
   send: function(data) {
      return new Promise(function(resolve, reject) {
         request.post('http://' + API + "/api/send?token=" + TOKEN, {
            form: data
         }, function(e, response, body) {
            if (e) {
               return reject(e);
            }
            return resolve({
               sent: true
            });
         });
      });
   }
}
