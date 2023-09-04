const {User, userSchemas}=require('../models/usersModel');
// const usersSchema=require('../models/usersModel');

class UsersController {
  add = async (req, res) => {
    // const users = await usersSchema.create({...req.body});
    const users = await User.create({...req.body});
    console.log(users);
  //  return users 

  };
  getAll = async (req, res) => {
    // const user = await NoticesModel.create(req.body);
    res.send("getAll");
  };
  getOne = async (req, res) => {
    // const user = await NoticesModel.create(req.body);
    res.send("getOne");
  };
  update = async (req, res) => {
    // const user = await NoticesModel.create(req.body);
    res.send("update");
  };
  remove = async (req, res) => {
    // const user = await NoticesModel.create(req.body);
    res.send("remove");
  };
}
module.exports = new UsersController();
