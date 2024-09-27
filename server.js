const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController");
// const yachtController = require("./controllers/yachtController");
const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");
const connectDb = require("./config/connectDb")
require("dotenv").config();
require("./config/connectDb");


// connect database
connectDb();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './build')));
app.use("/images", express.static("static/media"));

app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/upload", uploadController);
app.use("/user", userController);
app.use("/comment", commentController);

// Without middleware
//app.get('/', function (req, res) {
//    res.send({ title: 'GeeksforGeeks' });
//});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});



// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has been started ${port}!`));
