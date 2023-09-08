//пидключение базы через mongoose
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/test'); деструктуризируем connect из mongoose

const { connect } = require('mongoose');

const connectDb = async () => {
  try {
    console.log(process.env.DB_HOST);
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
