const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought, 
  deleteThought, 
  addReaction, 
  deleteReaction
} = require('../../controllers/ThoughtsController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// get route for specific Thought, using id
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);


// delete route for Thoughts friend list 
router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(deleteReaction);


module.exports = router; 