const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    appointment_id: {
        type: String,
        required: true
    },
    doner_healthdetails: {
        type: String,
        required: true
    },
    preffered_time: {
        type: String,
        required: true
    },
    nearest_location:{
        type: String,
        required: true
    },
    doner_id: {
        type: String,
        required: true
    }
    
},{
    collection: 'appointments'
});

module.exports =  mongoose.model('appointments', UserSchema);