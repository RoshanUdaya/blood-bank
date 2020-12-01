const express = require('express');
const hospitals = express.Router();
const hospital = require('../models/hospital');

//get data
hospitals.route('/').get(function(req,res){
    hospital.find(function(err, hospitals){
        if(err){
            console.log(err);
        }    
        else{
            res.json(hospitals);
        }
    });
});

//data edit
hospitals.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    hospital.findById(id,function(err,hospitals){
        res.json(hospitals);
    });
});

//update data
hospitals.route('/update/:id').post(function(req,res){
    hospital.findById(req.params.id, function(err,hospitals){
        if(!hospitals)
            res.status(404).send("data is not found");
        else{
            hospitals.hospital_name = req.body.hospital_name;
            hospitals.save().then(hospitals => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
hospitals.route('/delete/:id').get(function(req,res){
    hospital.findByIdAndRemove({_id:req.params.id}, function(err,hospitals){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= hospitals;