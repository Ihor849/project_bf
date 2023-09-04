const asyncHandler = require("express-async-handler");

const register = require("./register");
const login =require("./login");
const getCurrentUser = require("./getCurrentUser");


module.exports = {
    register:asyncHandler(register),
    login: asyncHandler(login),
    getCurrentUser: asyncHandler(getCurrentUser),
  };