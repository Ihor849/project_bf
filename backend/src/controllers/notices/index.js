const asyncHandler = require("express-async-handler");

const getNotices = require('./getNotices');
const addNotice = require('./addNotice');
const getNoticeById = require('./getNoticeById');
const addFavoriteNotice = require('./addFavoriteNotice');
const getFavoriteNotices = require('./getFavoriteNotices');
const getOwnerNotices = require("./getOwnerNotices");
const removeFavoriteNotice = require("./removeFavoriteNotice");
const removeOwnerNotice = require("./removeOwnerNotice");

module.exports = {
    getNotices: asyncHandler(getNotices),
    addNotice: asyncHandler(addNotice),
    getNoticeById: asyncHandler(getNoticeById),
    addFavoriteNotice: asyncHandler(addFavoriteNotice),
    getFavoriteNotices: asyncHandler(getFavoriteNotices),
    getOwnerNotices: asyncHandler(getOwnerNotices),
    removeFavoriteNotice: asyncHandler(removeFavoriteNotice),
    removeOwnerNotice: asyncHandler(removeOwnerNotice),
  

}