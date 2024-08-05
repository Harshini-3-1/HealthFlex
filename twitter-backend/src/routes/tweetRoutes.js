const express = require('express');
const router = express.Router();
const { createTweet, getUserTimeline } = require('../controllers/tweetController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createTweet);
router.get('/:userId/timeline', getUserTimeline);

module.exports = router;
