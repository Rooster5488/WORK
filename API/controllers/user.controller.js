const db = require('../database/models');
const userModel = require('../database/models/user.model');

const User = db.users;
const Op = db.Sequelize.Op;
db.sequelize.sync()
// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
        res.json(data)
    console.log(data)})



};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {


};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};