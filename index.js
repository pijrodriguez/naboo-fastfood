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

var dbURL = process.env.DATABASE_URL || //"postgres://postgres:PASSWORD@localhost:5432/naboo";
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/scripts", express.static("build"));

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

/**********************************LOGIN*************************************/
app.post("/accountLOGIN", function(req, resp){
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            resp.send({status:"fail"});
        }
        
        client.query("SELECT id, emp_id, type, name, password FROM users WHERE emp_id = $1 AND password = $2", [req.body.d_empId, req.body.d_password], function(err, result){
            
            done();
            if(err){
                console.log(err);
                resp.send({status:"fail"});
            }
            
            if(result.rows.length > 0){
                req.session.user = result.rows[0];
                if(result.rows[0].type=="a"){
                    resp.send({status:"success", user:req.session.user});
                }
                if(result.rows[0].type=="c"){
                    resp.send({status:"success2", user:req.session.user});
                }
            } else {
                resp.send({status:"fail"});
            }
        });
    })
});

/**********************************LOGOUT*************************************/
app.post("/logout", function(req, resp){
    req.session.destroy();
    resp.end("success");
});
