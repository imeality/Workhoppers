var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config=require('./config');
const cors = require('cors')
var jwt = require('jsonwebtoken');
const expressjwt = require("express-jwt");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var bcrypt = require('bcryptjs');
app.use(cors());

console.log("hello");


app .post('/admin/login',function(req,res){
 config.query('select username,password from Admin',function(err,results){

   if(results[0].username==req.body.username &&  results[0].password==req.body.password)
{
  console.log("1");
  var token=jwt.sign({id:results},"mykey",{expiresIn:'24hr'});
  return  res.status(200).send({auth:true,token:token});
 }
  else if(err)
  {
    console.log(err);
  }
   else
   {
     console.log("0");
    return res.status(500).send("There was a problem register the use");
  }

   });
 });
// const protected = express.Router();
//
// protected.get('/me',function(req,res){
//
// var token=req.header['x-access-token'];
//   if(!token)return res.status(401).send({auth:false,message:'No token provided.'});
//
// jwt.verify(token,"mykey",function(err,decoded){
//
//   if(err)return res.status(500).send({auth:false,message:'failed to authenticate token.'});
// });
//
// res.status(200).send(decoded);
// });
//
// app.use(protected)

function Token_checker(req,res,next){

  console.log(req.headers['x-access-token']);
 // if(!token)if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  var token = req.headers['x-access-token'];

 jwt.verify(token,"mykey",function(err,decoded){

    if(err)
    {
    console.log("00",decoded);
      return res.status(500).send({auth:false,message:'Failed to authenticate token.'});
    }
   else{
console.log("sSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs");
  // res.write('Hello \n');
  next();
}
});
}

app.post('/admin/user/register',Token_checker,function(req,res){
  var hashedPassword = bcrypt.hashSync(req.body.password);
  console.log(hashedPassword);
  console.log("11");
  var user={"user_id":req.body.user_id,"name":req.body.name, "mobile" : req.body.mobile,"username" :req.body.username,"password":req.body.password,"Pass_token":hashedPassword};
 console.log(user);
 config.query('insert  User set ?',user,function(err,results){
if(err)
{
  console.log("Error");
}
    else
 {
  //  console.log(results);

    res.send(hashedPassword);
    }
  });
});

app.post('/admin/reset_password',function(req,res){

 console.log(req.body.pass);
 console.log(req.body.password);


                  let  pass=req.body.pass;
                  let password=req.body.password;

                 // let data=[user,pass];
 console.log("1");

                 var db='select Pass_token from User where Pass_token=?';
 console.log("2");
                      config.query(db,pass,function(err,results){
                  if(err)
                 {
                    console.log("error");
                  }
                     else if(results.length!=0)
                     {
 console.log("3");
   var r=config.query('update User set  password=?  WHERE Pass_token=?',[password,pass],function(err,results){

     if(err)
     {
       console.log("error"+err);
     }
     else{
     console.log(results);
       res.send('results');
     }
     });
 }
 else {
       console.log("User not register");
 }
});


/*protected*/});


 app.listen(8000,function() {

  console.log("Server :8000")
})

// https://grokonez.com/node-js/nodejs-express-save-form-data-to-mysql-using-sequelize-orm-ajax-jquery-bootstrap-view
// if(this.email=="A@gmail.com" && this.password=="A@123")
//         {
//              this.$router.replace(this.$route.redirect || '/Admin_dashboard')
//             return console.log("Welcome");
//         }
//         else if(this.email=="" && this.password=="")
//         {
//             return console.log("feel the value");
//         }
//         {
//             return console.log("Worng try again");
//         }


// app.post('/admin/login',function(req,res){
//            username=req.body.username;
//           password=req.body.password;
//
//          if(username&&password)
//          {
//           config.query('select * from Admin where username=? AND password=?',[username,password],function(err,results){
//             if(results.length>0){
//               console.log(results);
//                 if(err)
//                 {
//                   console.log(err);
//                 }
//               else{   res.send('results');}
//             }
//           else{
//             console.log("Worng");
//           }
//
//          });
// }
//         else{console.log("Enter Again");}
// });


// app.post('/admin/user/register',function(req,res){
//
//
//
//         console.log(req.body.user_id);
//         console.log(req.body.name);
//         console.log(req.body.mobile);
//         console.log(req.body.username);
//         console.log(req.body.password);
//
//
//       var user={"user_id":req.body.user_id,
//         "name":req.body.name,
//        "mobile" : req.body.mobile,
//        "username" :req.body.username,
//        "password":req.body.password,
//
//       };
//     console.log(user);
//     //  user_id=req.body.user;
//       //  name=req.body.nam;
//       //  mobile = req.body.mob;
//       //  username =req.body.user;
//       //  password=req.body.pass;
//   var data;
//   config.query('insert  User set ?',user,function(err,results){
//     if(err)
// { console.log("Error");}
//  else
//  {
//      console.log(results);
//      res.send('results');
// }
//   });
// });
// console.log(req.body.password);
// console.log(req.body.user_id);
// console.log(req.body.name);
// console.log(req.body.mobile);
// console.log(req.body.username);
