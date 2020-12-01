const express = require('express');
const oppointments = express.Router();
const oppointment = require('../models/oppointment');

//add  data
oppointments.route('/add').post((req,res,next) =>{
    oppointment.create(req.body, (err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get data
oppointments.route('/').get(function(req,res){
    oppointment.find(function(err, oppointments){
        if(err){
            console.log(err);
        }    
        else{
            res.json(oppointments);
        }
    });
});

//data edit
oppointments.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    oppointment.findById(id,function(err,oppointments){
        res.json(oppointments);
    });
});

//update data
oppointments.route('/update/:id').post(function(req,res){
    oppointment.findById(req.params.id, function(err,oppointments){
        if(!oppointments)
            res.status(404).send("data is not found");
        else{
            oppointments.appointment_id = req.body.appointment_id;
            oppointments.save().then(oppointments => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
oppointments.route('/delete/:id').get(function(req,res){
    oppointment.findByIdAndRemove({_id:req.params.id}, function(err,oppointments){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= oppointments;