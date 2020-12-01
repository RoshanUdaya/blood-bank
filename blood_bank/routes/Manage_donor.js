const express = require('express');
const manage_donors = express.Router();
const manage_donor = require('../models/manage_donor');

//add  data
manage_donors.route('/add').post((req,res,next) =>{
    manage_donor.create(req.body, (err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get data
manage_donors.route('/').get(function(req,res){
    manage_donor.find(function(err, manage_donors){
        if(err){
            console.log(err);
        }    
        else{
            res.json(manage_donors);
        }
    });
});

//data edit
manage_donors.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    manage_donor.findById(id,function(err,manage_donors){
        res.json(manage_donors);
    });
});

//update data
manage_donors.route('/update/:id').post(function(req,res){
    manage_donor.findById(req.params.id, function(err,manage_donors){
        if(!manage_donors)
            res.status(404).send("data is not found");
        else{
            manage_donors.stk_id = req.body.stk_id;
            manage_donors.save().then(manage_donors => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
manage_donors.route('/delete/:id').get(function(req,res){
    manage_donor.findByIdAndRemove({_id:req.params.id}, function(err,manage_donors){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= manage_donors;