var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database

mongoose.connect('mongodb://nemesis4400:test@ds135946.mlab.com:35946/courseworkdatabase');

//create a schema -this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var todo = mongoose.model('todo', todoSchema);


// var data=[{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];
var urlencodedParser=bodyParser.urlencoded({exteneded:false});



//database managment for the todo page
module.exports =function(app){

  app.get('/list', function(req, res){
    //get data from mongo db and pass it to the view
    todo.find({}, function(err, data){
      if(err) throw err;
      res.render('list', {lists: data});
    });
  });

  app.post('/list',urlencodedParser, function(req, res){
    //get data from the view and add it tomongodb
    var newtodo =todo(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });

  });
  app.delete('/list/:item', function(req, res){
    //delete the requested item from mongo db
    todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err;
      res.json(data);
    });
  });
};
