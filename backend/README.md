# Your pet API

1. Пднять сервер.
a. Cоздать папку config в ней .env 
б. Если работаем с путями подключаем модуль PATH к файлу .env
const path = require('path');
const configPath = path.join(path.dirname(__dirname, "..", "config", ".env"), 

const express = require('express');
const app = express();

app.listen(process.env.PORT, () => {
  console.log('Server is running on port '.green.bold.italic + process.env.PORT);
});
2. Подключить базу
а. Создать файл подключения в папке config
/пидключение базы через mongoose
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/test'); деструктуризируем connect из mongoose

const { connect } = require('mongoose');

const connectDb = async () => {
  try {
    const db = await connect(process.env.DB_HOST);
    console.log(
      `Database is connected. Name:${db.connection.name}.
         Host:${db.connection.host}.
          Port:${db.connection.port}`.green.bold.italic
    );
  } catch (error) {
  console.log(error.message.red.bold.italic);
  process.exit(1);
  }
};

module.exports = connectDb;
DB_HOST, DB_USER, DB_PASS,PORT прописываем в файле  .env
2. Создать папку routes, расписать и проверить отработку роутов
// 1. Добавить users
usersRouter.post("/users",usersController.add)
// 2. Получить все users
usersRouter.get("/favorite",usersController.getAll)
// 4. Получить один users
usersRouter.get("/users/:id",usersController.getOne)
// 5. Обновить один users
usersRouter.put("/users/:id",usersController.update)
// 6. Удалить один users
usersRouter.delete("/users/:id",usersController.remove)

module.exports = noticeRouter;

3. Создать папку controllers расписать и сделать реэкспорот в index.js
затягиваем схему
const usersSchema=require('../models/usersModel');
сщздаем класс 
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
4. Создаем папку models в ней создаем файлы 
а. UsersController или login,logout,register и ...