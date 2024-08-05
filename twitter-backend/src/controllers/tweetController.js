const Tweet = require('../models/tweet');

exports.createTweet = async (req, res) => {
  const { text } = req.body;
  try {
    const tweet = new Tweet({
      userId: req.user.id,
      text,
    });
    await tweet.save();
    res.json(tweet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUserTimeline = async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(tweets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
