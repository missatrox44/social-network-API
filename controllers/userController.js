const { User } = require('../models');
const { json } = require('express/lib/response');


module.exports = {
  //getUsers
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //getSingleUser
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      // .select('-__v')
      // .populate('friends')
      // .populate('thoughts')
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(user)
      })
      .catch((err) => res.status(500).json(err));

  },
  //createUser
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //updateUser
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //deleteUser
  deleteUser(req, res) {
    User.findOneAndRemove(
      { _id: req.params.userId },
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //addFriend -- UNSURE IF CORRECT FUNCTION
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendsId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //deleteFriend -- UNSURE IF CORRECT FUNCTION
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendsId } } ,
      { new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No user with this ID' })
          : res.json({ message: 'User successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
};










//alternate way to write and export
// //getUsers
// const getUsers = async () => {
//   const userData = await User.find()
//   return res.json(userData);
// }

// module.exports = { getUsers };



