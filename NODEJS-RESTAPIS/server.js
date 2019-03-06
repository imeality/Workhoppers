var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config=require('./config');
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

console.log("hello"); 
    app.post('/admin/login',function(req,res){
         var username=req.body.username;
         var password= req.body.password;
         console.log(username,password);
         if(username&&password)
         {
          config.query('select * from Admin where username=? AND password=?',[username,password],function(err,results){
            if(results.length>0){
              console.log(results);
              res.send('results');
            } 
          else{
            console.log("Worng");
          } });
          
        }else{console.log("Enter Again");}
});

app.post('/admin/user/register',function(req,res){
        console.log(req.body.user_id);      
        console.log(req.body.name);
        console.log(req.body.mobile); 
        console.log(req.body.username);
        console.log(req.body.password); 
        

      var user={"user_id":req.body.user_id, 
        "name":req.body.name,
       "mobile" : req.body.mobile, 
       "username" :req.body.username,
       "password":req.body.password, 
       
      };
    console.log(user);
    //  user_id=req.body.user;
      //  name=req.body.nam;
      //  mobile = req.body.mob; 
      //  username =req.body.user;
      //  password=req.body.pass;
  var data;
  config.query('insert  User set ?',user,function(err,results){
    if(err)
{ console.log("Error");}
 else
 { 
     console.log(results);
     res.send('results'); 
}
  });
});

app.post('/user/update_password/register',function(req,res){
 console.log(req.body.user_id);
 console.log(req.body.password);

                 let  user=req.body.user_id;
                 let pass=req.body.password;           
                // let data=[user,pass];
  var r=config.query('update User set  password=?  WHERE user_id=?',[pass,user],function(err,results){

    if(err)
    {
      console.log("error"+err);
    }  
    else{
    console.log(results);
      res.send('results');
    }
    });
});



 app.listen(5000,function() {
 
  console.log("Server :5000")
})

// https://grokonez.com/node-js/nodejs-express-save-form-data-to-mysql-using-sequelize-orm-ajax-jquery-bootstrap-view