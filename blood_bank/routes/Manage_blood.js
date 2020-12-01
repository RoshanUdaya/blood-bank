const express = require('express');
const manage_bloods = express.Router();
const manage_blood = require('../models/manage_blood');

//add  data
manage_bloods.route('/add').post((req,res,next) =>{
    manage_blood.create(req.body, (err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get data
manage_bloods.route('/').get(function(req,res){
    manage_blood.find(function(err, manage_bloods){
        if(err){
            console.log(err);
        }    
        else{
            res.json(manage_bloods);
        }
    });
});

//data edit
manage_bloods.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    manage_blood.findById(id,function(err,manage_bloods){
        res.json(manage_bloods);
    });
});

//update data
manage_bloods.route('/update/:id').post(function(req,res){
    manage_blood.findById(req.params.id, function(err,manage_bloods){
        if(!manage_bloods)
            res.status(404).send("data is not found");
        else{
            manage_bloods.stk_id = req.body.stk_id;
            manage_bloods.save().then(manage_bloods => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
manage_bloods.route('/delete/:id').get(function(req,res){
    manage_blood.findByIdAndRemove({_id:req.params.id}, function(err,manage_bloods){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= manage_bloods;