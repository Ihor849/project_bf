const { User, userSchemas } = require("./usersModel");
const { Sponsor } = require("./sponsor");
const {News} = require("./news");
const {Pet, petSchemas} = require('./pet')

module.exports = {
    User,
    userSchemas,
    Sponsor,
    News,
    Pet,
    petSchemas,
  };