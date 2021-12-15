const express = require("express");
const https = require('https');
const fs = require('fs');

require("./models");

// TODO : express-session, cors 등 필요한 middleware를 추가하세요.

const mainController = require("./controllers");

const app = express();

const port = 4000;

// TODO : express-session, cors 등 필요한 middleware를 적용하세요.

app.get("/user", mainController.userController);
app.post("/signin", mainController.signInController);
app.post("/signup", mainController.signUpController);
app.post("/signout", mainController.signOutController);

// TODO : http 프로토콜 대신 https 프로토콜을 사용하는 서버를 작성하세요.

const server = app.listen(port, () => {
    console.log(`server listening on ${port}`);
  });


module.exports = server;