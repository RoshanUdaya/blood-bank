const express = require('express');
const patients = express.Router();
const patient = require('../models/patient');

//add  data
patients.route('/add').post((req,res,next) =>{
    patient.create(req.body, (err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get data
patients.route('/').get(function(req,res){
    patient.find(function(err, patients){
        if(err){
            console.log(err);
        }    
        else{
            res.json(patients);
        }
    });
});

//data edit
patients.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    patient.findById(id,function(err,patients){
        res.json(patients);
    });
});

//update data
patients.route('/update/:id').post(function(req,res){
    patient.findById(req.params.id, function(err,patients){
        if(!patients)
            res.status(404).send("data is not found");
        else{
            patients.pat_id = req.body.pat_id;
            patients.save().then(patients => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
patients.route('/delete/:id').get(function(req,res){
    patient.findByIdAndRemove({_id:req.params.id}, function(err,patients){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= patients;