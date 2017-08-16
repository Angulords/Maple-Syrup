const Sequelize = require('sequelize');
// const url = require('./dbUrl');

const db = new Sequelize('postgres://jzjkaqvm:5Ady2UIGVFs0Si7YjTR8RmHH3XEshYmo@stampy.db.elephantsql.com:5432/jzjkaqvm', {
  pool: {
    max: 3,
    min: 0,
    idle: 10000
  },
});


db.authenticate()
  .then(() => 
    console.log('Successfully connected to DB')
  )
  .catch(err => 
    console.log('Could not connect to DB', err)
  )

module.exports = db;