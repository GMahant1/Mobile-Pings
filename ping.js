const twilio = require('twilio');

// Your Account Sid and Auth Token from twilio.com/console
// To set up environmental variables, see http://twil.io/secure
const accountSid = 'AC1264830b16b06d744aa7433b6481db0c';
const authToken = 'f97446c4b4b3ce89e39775eb20824710';
const client = new twilio(accountSid, authToken);

client.messages
      .create({
           body: 'Hello from my test application! Tesla is nearing long term support at $101.',
           from: '+19726406112',
           to: '+17809829999'
       })
      .then(message => console.log(message.sid));

