const db = require('./connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

  // test user
  await User.create({
    username: 'Mitthraw',
    password: 'password12345'
  });

  console.log('Users seeded');

  process.exit();
});