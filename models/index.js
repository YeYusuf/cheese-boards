const Cheese = require("./cheese")
const User = require("./user")
const Board = require("./board")

//one-to-many
User.hasMany(Board)
Board.belongsTo(User)

//Many-to-Many
Board.belongsToMany(Cheese, { through: 'Board_Cheese' })
Cheese.belongsToMany(Board, { through: 'Board_Cheese' })

module.exports = { Cheese, User, Board }