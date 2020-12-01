const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    full_name: {
        type: String
        
    },
    user_id: {
        type: String,
        required: true
    },
    nic_number: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    hospital_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    }
},{
    collection: 'users'
});

module.exports =  mongoose.model('users', UserSchema);