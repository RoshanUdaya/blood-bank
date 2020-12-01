const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    donor_id: {
        type: String,
        required: true
    }
    
},{
    collection: 'managedonor'
});

module.exports =  mongoose.model('managedonor', UserSchema);