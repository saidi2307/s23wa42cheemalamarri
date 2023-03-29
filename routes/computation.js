var express = require('express');
var router = express.Router();

var ran=Math.random()*100;
var x=0;
var y=0;
var z=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  x=Math.hypot(ran);
  y=Math.ceil(ran);
  z=Math.clz32(ran);
  res.send(`hypot function  applied to ${ran} is: ${x}, <br> ceil function applied to ${ran} is: ${y}, <br> clz32 function applied to ${ran} is: ${z}`);
//   res.send(`ceil applied to ran is: ${y}`);
//   res.send(`clz32 applied to ran is: ${z}`);

});

module.exports = router;
