const { Thoughts, User } = require('../models');

module.exports = {
  //getThoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => {
        res.json(thoughts)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      });
  },
  //getSingleThought
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID' })
        }
        res.json(thought)
      })
      .catch((err) => res.status(500).json(err));

  },
  //createThought
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
            message: 'Thought created!',
          })
          : res.json('Created the thought!')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //updateThought
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //deleteThought
  deleteThought(req, res) {
    Thoughts.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
      )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'Thought deleted!' })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  //addReaction
  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //deleteReaction
  deleteReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: {_id : req.params.reactionId}  } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No reaction with this id!' })
          : res.json({ message: 'Reaction successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
};










// //alternate way to write function and export
// //getThoughts
// const getThoughts = async () => {
//   const thoughtData = await Thoughts.find()
//   return res.json(thoughtData);
// }
// // module.exports = { getThoughts };