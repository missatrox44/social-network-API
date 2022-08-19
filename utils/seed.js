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

  //add user and thoughts seeds
  await User.collection.insertMany(user);
  await Thoughts.collection.insertMany(thoughts);

  console.table(user);
  console.info('Planted dem seeds!');
  process.exit(0);

});