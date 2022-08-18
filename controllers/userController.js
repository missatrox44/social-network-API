const { User } = require('../models');

// get all users

const getUsers = async () => {
  const userData = await User.find()
  return res.json(userData);
} 


module.exports = { getUsers };
    


