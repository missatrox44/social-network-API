const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { user, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  //drop existing users
  await User.deleteMany({});

  //drop existing thoughts
  await Thoughts.deleteMany({});

  // const users = [];
  // const thoughts = [];

  //add user and thoughts seeds
  await User.collection.insertMany(User);
  await Thoughts.collection.insertMany(Thoughts);

  console.table(User);
  console.info('Planted dem seeds!');
  process.exit(0);

});