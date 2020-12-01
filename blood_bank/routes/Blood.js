const express = require('express');
const bloods = express.Router();
const blood = require('../models/blood');

//add  data
bloods.route('/add').post((req,res,next) =>{
    blood.create(req.body, (err,data)=>{
        if(err){
            return next(err);
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get data
bloods.route('/').get(function(req,res){
    blood.find(function(err, bloods){
        if(err){
            console.log(err);
        }    
        else{
            res.json(bloods);
        }
    });
});

//data edit
bloods.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    blood.findById(id,function(err,bloods){
        res.json(bloods);
    });
});

//update data
bloods.route('/update/:id').post(function(req,res){
    blood.findById(req.params.id, function(err,bloods){
        if(!bloods)
            res.status(404).send("data is not found");
        else{
            bloods.bld_id = req.body.bld_id;
            bloods.save().then(bloods => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete
bloods.route('/delete/:id').get(function(req,res){
    blood.findByIdAndRemove({_id:req.params.id}, function(err,bloods){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= bloods;