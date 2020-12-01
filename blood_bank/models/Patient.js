const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    pat_id: {
        type: String,
        required: true
    },
    pat_name: {
        type: String,
        required: true
    },
    pat_nic: {
        type: String,
        required: true
    },
    pat_email:{
        type: String,
        required: true
    },
    pat_mobile: {
        type: String,
        required: true
    },
    pat_address: {
        type: String,
        required: true
    },
    pat_bldgroup: {
        type: String,
        required: true
    },pat_qty: {
        type: String,
        required: true
    }
    
},{
    collection: 'patients'
});

module.exports =  mongoose.model('patient', UserSchema);