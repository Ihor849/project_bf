
const jwt = require("jsonwebtoken");

const { httpError } = require("../helpers");
const { User } = require("../models");

const { SECRET_KEY } = process.env;


const authenticate = async (req, res, next) => {
  
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) next(httpError(400));
  
  try {
   
    const { id } = jwt.verify(token, SECRET_KEY);
    
    const user = await User.findById(id);
    console.log(user.token);

    if (!user || !user.token || user.token !== token) next(httpError(401));

    req.user = user;
    
    next();
  } catch {
    next(httpError(402));
  }
};

module.exports = authenticate;