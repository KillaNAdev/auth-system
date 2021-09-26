const express = require('express');
const app = express();
var path = require('path');
const URLS = {Aspect: "sfihsafouihsdf"};
var mysql = require('mysql'); 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "servers"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const ParseSourceIPOfRequest = function(req) {
    return (typeof req.headers['x-forwarded-for'] === 'string'&& req.headers['x-forwarded-for'].split(',').shift())|| req.connection?.remoteAddress|| req.socket?.remoteAddress|| req.connection?.socket?.remoteAddress;
}


app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/index.html'));
})

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/html/style.css");
});

app.get('/fonts/futur.ttf', function(req, res) {
    res.sendFile(__dirname + "/html/fonts/futur.ttf");
});

app.get('/' + URLS.Aspect, (req, res) => {
    console.log(ParseSourceIPOfRequest(req));
    con.query("SELECT * FROM server_licensing WHERE ip='"+ ParseSourceIPOfRequest(req) +"';", function (err, result) {
        if (err) {
            throw err;
        }
        if (result[0] != null && result[0].piggyback) {
            console.log("IP Passed Check!");
            res.json("ERR_404_DIR_INVALID");
        }
        else {
            res.json("ERR_400_CONN_FAILED");
        }
    });
})


app.get('/', (req, res) => {
})

app.listen(80);