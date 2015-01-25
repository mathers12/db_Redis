var express = require('express');
var router = express.Router();

var _redis = require("redis");
var redis = _redis.createClient();


var user =
{
    name: "James",
    lastName: "Bond",
    age: 23
}



//redis.hmset("user", user); // Nastavime objekt
/* GET home page. */
router.get('/', function(req, res, next) { // Citame z databazy

    redis.hgetall("user", function (err, obj) {

        res.render('index',obj);


    });


});


module.exports = router;
