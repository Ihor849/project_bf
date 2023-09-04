const express = require("express");
const usersController = require("../controllers/UsersController")
const usersRouter = require("express").Router();




// 1. Добавить users
usersRouter.post("/users", (req, res, next)=>{
  console.log('Отработал joi');
  next();
},usersController.add)

// drinksRouter.post('/drinks',(req, res, next) => {
//   console.log('joi');
//   next();

// }, drinksController.add)


// 2. Получить все notice
usersRouter.get("/users", usersController.getAll)
// 4. Получить один users
usersRouter.get("/users/:id", usersController.getOne)
// 5. Обновить один users
usersRouter.put("/users/:id", usersController.update)
// 6. Удалить один users
usersRouter.delete("/users/:id", usersController.remove)

module.exports = usersRouter;
