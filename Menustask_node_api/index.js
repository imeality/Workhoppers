const express=require('express');
const bodyParser = require('body-parser');
var config=require('./config');
var cors = require('cors')
const app=express();
const port=2000;
var x;
var count=1;
var cont=0;
var self=this;
var currentIndexID,previousIndexID,currentIndex,previousIndex;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    app.post('/post/data',function(req,res,next)
{

  //console.log(req.body);
 var user={
           "url_link" :req.body.url_link,
           "link_text" :req.body.link_text
          }
 console.log(user);

     var D='select id from Link;';
     config.query(D,function(err,results){
            if(err)
            {
               console.log(err);
            }
            else {
              console.log(results);
                 for(var i=0;i<results.length;i++)
              {
                          console.log(results[i].id);

                               count=results[i].id;
                         console.log(count);
                                 count-1;

                            //console.log(count);
              }
              //   console.log(count);
                var user={
                          "url_link" :req.body.url_link,
                          "link_text" :req.body.link_text,
                           "indexs":count
                         }

                var Dat='insert into Link set ?';
                config.query(Dat,user,function(err,results)
            {
                if(err)
            {
                console.log("err");
            }
                else
            {
                console.log(results);
                res.send("insert");
             }
            });
              }
      });

});

     app.get('/show',function(req,res)
{
     var Data="select url_link,link_text,indexs from Link ORDER BY indexs ";
     config.query(Data,function(err,results)
 {
     if(err)
{
     console.log(err);
}
     else
{
  //   console.log(results);
     res.send(results);
}
});
});
     app.post('/drag/data',function(req,res)
{

      var ind=req.body.currentIndex;
      var indexs=req.body.previousIndex;
     var da = ind;
    var d=  indexs;
    // console.log(da);
     console.log(d);
  // ----------------------------------Select query previousIndex-----------------------------------------------
       config.query('select id,indexs from Link where indexs=?',d,function(err,results){
             if(err)
             {
                console.log(err);
              }
             else{
               console.log("previousIndexID"+results[0].id);
               console.log("previousIndex"+results[0].indexs);
                   previousIndexID=results[0].id;
                   previousIndex=results[0].indexs;
                   console.log(previousIndexID+"\n"+previousIndex);
// ----------------------------------Select query currentIndex-----------------------------------------------
             config.query('select id,indexs from Link where indexs=?',da,function(err,results)
           {
             if(err){console.log(err);}
             else{
               console.log("currentIndexID"+results[0].id);
                console.log("currentIndex"+results[0].indexs);
                    currentIndexID=results[0].id;
                    currentIndex=results[0].indexs;
                    console.log(currentIndexID+"\n"+currentIndex);
// ----------------------------------Update query currentIndex (currentIndex,previousIndexID)  -----------------------------------------------
                    var Data='UPDATE Link SET indexs=? WHERE id=?';
                       config.query(Data,[currentIndex,previousIndexID],function(err,results){
                             if(err)
                             {
                               console.log(err);
                            }
                             else{
                               console.log(results);
// ----------------------------------Update query currentIndex (previousIndex,currentIndexID)  -----------------------------------------------
                               var Data='UPDATE Link SET indexs=? WHERE id=?';

                                  config.query(Data,[previousIndex,currentIndexID],function(err,results){
                                        if(err)
                                        {
                                          console.log(err);
                                       }
                                        else{
                                           console.log(results);
                                           res.send("Update");

           }
         });
        }
      });
     }
   });
  }
});
});
     app.get('/file',function(req,res){
     var element= {"Name":req.body.Name}
     console.log(element);

     res.send("file")
});
     app.listen(port);
     console.log(port);
