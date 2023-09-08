const { User, userSchemas } = require("./usersModel");
const { Sponsor } = require("./sponsor");
const {News} = require("./news");
const {Pet, petSchemas} = require('./pet');
const { Notice, noticeSchemas } = require("./notice");

module.exports = {
    User,
    userSchemas,
    Sponsor,
    News,
    Pet,
    petSchemas,
    Notice,
    noticeSchemas,
  };