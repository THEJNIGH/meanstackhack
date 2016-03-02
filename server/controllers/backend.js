module.exports = function(express) {
  var router = express.Router();
  var dotenv = require('dotenv').load();
  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  var params = {
    screen_name: 'StephenCurry30',
    count: 100
  };

  router.route('/')

  .get(function(req, res) {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if(error) console.log(error);
      res.json(tweets);
    });
  }
  return router;
}
