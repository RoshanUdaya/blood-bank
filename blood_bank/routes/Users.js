const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');

users.use(cors());

process.env.SECRET_KEY ='secret';

users.post('/register',(req,res) => {
    const today = new Date();
    const userData ={
        full_name: req.body.full_name,
        user_id: req.body.user_id,
        nic_number: req.body.nic_number,
        email: req.body.email,
        hospital_name: req.body.hospital_name,
        role: req.body.role,
        password: req.body.password,
        created: today
    }

    user.findOne({
        nic_number: req.body.nic_number
    })
        .then(usr => {
            if(!usr){  
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password= hash;
                    user.create(userData)
                        .then(user =>{
                            res.json({status: user.email+ "registered"})
                        })
                        .catch(err =>{
                            res.send("error" + err);
                        })
                })
            }else{
                res.json({ree: "user already registered"})
            }
        })
        .catch(err=>{
            res.send("error" + err);
        })
})


users.post('/login', (req,res)=>{
    user.findOne({
       user_id:req.body.user_id
    })
        .then(usr=>{
            if(usr){
                
                if(bcrypt.compareSync(req.body.password,usr.password)){
                    const payload ={
                        _id: usr._id,
                        full_name: usr.full_name,
                        user_id: usr.user_id,
                        nic_number: usr.nic_number,
                        email: usr.email,
                        hospital_name: usr.hospital_name,
                        role: usr.role

                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY,{
                        expiresIn:1440
                    })
                    res.send(token)
                }else{
                    res.json({error: "User does not exists in the system"})
                }
            }else{
                res.json({error: "User does not exists in the system"})
            }
        })
        .catch(err=>{
            res.send("error" + err);
        })
})

users.get('/profile', (req,res)=>{
    var decoded = jwt.varify(req.headers['authorization'],process.env.SECRET_KEY)

    user.findOne({
        _id: decoded._id
    })
        .then(usr=>{
            if(usr){
                res.json(user)
            }else{
                res.send("User does not exits");
            }
        })
        .catch(err=>{
            res.send("error" + err);
        })
})


module.exports= users;