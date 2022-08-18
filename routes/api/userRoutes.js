const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser, 
  deleteUser, 
  addFriend, 
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;


// get route for users
router.route('/').get(getUsers).post(createUser);

// get route for specific user, using id
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);



// delete route for users friend list 
router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);


module.exports = router; 