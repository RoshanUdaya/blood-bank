const express = require('express');
const doners = express.Router();
const doner = require('../models/doner');

//get data
doners.route('/').get(function(req,res){
    doner.find(function(err, doners){
        if(err){
            console.log(err);
        }    
        else{
            res.json(doners);
        }
    });
});

//data edit
doners.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    doner.findById(id,function(err,doners){
        res.json(doners);
    });
});

//update data
doners.route('/update/:id').post(function(req,res){
    doner.findById(req.params.id, function(err,doners){
        if(!doners)
            res.status(404).send("data is not found");
        else{
            doners.full_name = req.body.full_name;
            doners.save().then(doners => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
doners.route('/delete/:id').get(function(req,res){
    doner.findByIdAndRemove({_id:req.params.id}, function(err,doners){
        if(err) res.json(err);
        else res.json('sSuccessfully removed');
    });
});

module.exports= doners;