const db = require('./connection');
const { User, Part, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

  // test user
  await User.create({
    firstName: 'Jakeb',
    lastName: 'Jackson',
    email: 'jjackson@testmail.com',
    password: 'password12345',
    orders: []
  });

  console.log('Users seeded');

  process.exit();
});