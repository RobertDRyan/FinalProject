const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://admin:admin@cluster3-ic6g7.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const carSchema = new Schema({
    Make:String,
    Model:String,
    Engine:String,
    Year:String
});

const CarModel = mongoose.model('car',carSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

app.get('/api/cars', (req,res,next) => {
 
    console.log("get request")
    CarModel.find((err,data)=>{
      res.json({cars:data});
    })
  })

  app.delete('/api/cars/:id', (req,res) => {
    console.log(req.params.id);
   CarModel.deleteOne({_id:req.params.id},(error,data) => {
     if(error)
     res.json(error);
  
      res.json(data);
    })
  })

  app.get('/api/cars/search/:Make/:criteria', (req,res)=>{
    console.log(req.params.title);
    console.log(req.params.criteria);
  if(req.params.criteria == 'Make')
    {
    CarModel.find({ 'Make': req.params.Make},
  (error,data) =>{
    res.json(data);
  })
    }
  })

  app.post('/api/cars', (req,res) =>{
    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.Make);
    console.log(req.body.Model);
    console.log(req.body.Engine);
    console.log(req.body.Year);


    CarModel.create({
        Make: req.body.Make,
        Model: req.body.Model,
        Engine: req.body.Engine,
        Year: req.body.Year
      });
      res.json('data uploaded')
      
      })

      app.listen(PORT, function () {
        console.log('Server is running on Port: ', PORT);
      });

      app.get('/api/cars/:id', (req, res, next) => {
        console.log(req.params.id);
        CarModel.findById(req.params.id,
        function (err, data) {
        res.json(data);
        });
        })

        app.put('/api/cars/:id', function (req, res) {
            console.log("Update Cars " + req.params.id);
            console.log(req.body);
          console.log(req.body.Make);
          console.log(req.body.Model);
          console.log(req.body.Engine);
          console.log(req.body.Year);

          CarModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
          function(err, data){
          res.send(data);
          })
          })