/**********************************CONSTS & VARS*************************************/
const NEWPORT = process.env.PORT || 10000;

const bodyParser = require("body-parser");
const session = require("express-session");
const express = require("express");
const path = require("path");
const pg = require("pg");

var CLF = path.resolve(__dirname, "pages");
var app = express();
const sv = require("http").createServer(app);

var io = require("socket.io")(sv);
io.on("connection", function(socket){
    socket.on("disconnect", function(){
    });
});

var dbURL = process.env.DATABASE_URL || //"postgres://postgres:"Password"@localhost:5432/"database"";
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/scripts", express.static("build"));

app.use("/pics", express.static("imgs"));

app.use(session({
    secret:"welcome to naboo",
    resave:true,
    saveUninitialized:true
}));

/**********************************ROOT FOLDERS*************************************/
app.get("/", function(req, resp){
    resp.sendFile(CLF+"/login-page.html");
});
app.get("/kitchen-page", function(req, resp){
    resp.sendFile(CLF+"/kitchen-page.html");
});
app.get("/admin-page", function(req, resp){
    resp.sendFile(CLF+"/admin-page.html");
});
app.get("/main-page", function(req, resp){
    resp.sendFile(CLF+"/main.html");
});
app.get("/order-page", function(req, resp){
    resp.sendFile(CLF+"/order-page.html");
});

/**********************************LISTEN*************************************/
sv.listen(NEWPORT, function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log(NEWPORT+" is running");
});