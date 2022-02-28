require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('Groupomania','root','wafa.mango2000',{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
  
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./post.js")(sequelize, Sequelize);
db.users = require("./user.js")(sequelize, Sequelize)
db.comments = require("./comment.js")(sequelize, Sequelize)

db.users.hasMany(db.posts)
db.posts.belongsTo(db.users)

db.posts.hasMany(db.comments)
db.comments.belongsTo(db.posts)

db.users.hasMany(db.comments)
db.comments.belongsTo(db.users)

db.sequelize.sync({ alter:true });

module.exports = db;