var mailer = require('./index.js');

mailer.setup('localhost:4999', 'a8c14f2581f6f5d9f558371a3526d0535915920122fc67f28fd49555bc7427a9');

mailer.send({
   template: 'test',
   lang: 'en',
   data: {
      user: {
         name: 'Pukka-Pekka'
      }
   },
   emails: ['nchanged@gmail.com']
});
