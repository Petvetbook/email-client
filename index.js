var request = require('request');
var Promise = require('promise');
var realm = require('realm');

var API, TOKEN;

var MOD = {
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

realm.module("morrr.email", function() {
   return MOD;
});

module.exports = MOD;
