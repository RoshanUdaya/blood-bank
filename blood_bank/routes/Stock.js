const express = require('express');
const stocks = express.Router();
const stock = require('../models/stock');

//add  data
stocks.route('/add').post((req,res,next) =>{
    stock.create(req.body, (err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get data
stocks.route('/').get(function(req,res){
    stock.find(function(err, stocks){
        if(err){
            console.log(err);
        }    
        else{
            res.json(stocks);
        }
    });
});

//data edit
stocks.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    stock.findById(id,function(err,stocks){
        res.json(stocks);
    });
});

//update data
stocks.route('/update/:id').post(function(req,res){
    stock.findById(req.params.id, function(err,stocks){
        if(!stocks)
            res.status(404).send("data is not found");
        else{
            stocks.stk_id = req.body.stk_id;
            stocks.save().then(stocks => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
stocks.route('/delete/:id').get(function(req,res){
    stock.findByIdAndRemove({_id:req.params.id}, function(err,stocks){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= stocks;