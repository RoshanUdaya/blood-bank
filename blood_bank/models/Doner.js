const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    donor_id:{
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    donor_name:{
        type: String,
        required: true
    },
    donor_add:{
        type: String,
        required: true
    },
    donor_coordinates: {
        type: Array,
        required: true
    },
    donor_mobile: {
        type: String,
        required: true
    },
    donor_bldgroup: {
        type: String,
        required: true
    },
    donor_age:{
        type: String,
        required: true
    },
    donor_sex: {
        type: Array,
        required: true
    },
    tested_diseases: {
        type: String,
        required: true
    },
    donated_date: {
        type: String,
        required: true
    },
    donated_place: {
        type: String,
        required: true
    }
    
},{
    collection: 'doners'
});

module.exports =  mongoose.model('doners', UserSchema);