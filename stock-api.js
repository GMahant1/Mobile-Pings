const twilio = require('twilio');
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/auto-complete',
  qs: {q: 'tesla', region: 'US'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
    useQueryString: true
  }
};


// Your Account Sid and Auth Token from twilio.com/console
// To set up environmental variables, see http://twil.io/secure
const accountSid = 'AC1264830b16b06d744aa7433b6481db0c';
const authToken = 'f97446c4b4b3ce89e39775eb20824710';
const client = new twilio(accountSid, authToken);

const sendStockAlert = (price) => {
  client.messages
        .create({
             body: `Stock alert: The price is now ${price}.`,
             from: 'your-twilio-number',
             to: 'recipient-phone-number'
         })
        .then(message => console.log(message.sid));
};

// Check the stock price every hour
schedule.scheduleJob('0 * * * *', () => {
  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    const price = parsePrice(body);
    if (price > threshold) {
      sendStockAlert(price);
    }
  });
});

