const express = require('express');
const manage_patients = express.Router();
const manage_patient = require('../models/manage_patient');

//add  data
manage_patients.route('/add').post((req,res,next) =>{
    manage_patient.create(req.body, (err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get data
manage_patients.route('/').get(function(req,res){
    manage_patient.find(function(err, manage_patients){
        if(err){
            console.log(err);
        }    
        else{
            res.json(manage_patients);
        }
    });
});

//data edit
manage_patients.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    manage_patient.findById(id,function(err,manage_patients){
        res.json(manage_patients);
    });
});

//update data
manage_patients.route('/update/:id').post(function(req,res){
    manage_patient.findById(req.params.id, function(err,manage_patients){
        if(!manage_patients)
            res.status(404).send("data is not found");
        else{
            manage_patients.stk_id = req.body.stk_id;
            manage_patients.save().then(manage_patients => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
manage_patients.route('/delete/:id').get(function(req,res){
    manage_patient.findByIdAndRemove({_id:req.params.id}, function(err,manage_patients){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= manage_patients;