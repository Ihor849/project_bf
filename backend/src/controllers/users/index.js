const asyncHandler = require("express-async-handler");

const register = require("./register");
const login =require("./login");
const getCurrentUser = require("./getCurrentUser");
const updateUserInfo = require("./updateUserInfo");
const logout =require("./logout");


module.exports = {
    register:asyncHandler(register),
    login: asyncHandler(login),
    getCurrentUser: asyncHandler(getCurrentUser),
    updateUserInfo: asyncHandler(updateUserInfo),
    logout: asyncHandler(logout),
  };