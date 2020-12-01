const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    hospital_name: {
        type: String,
        required: true
    },
    hospital_address: {
        type: String,
        required: true
    }
    
},{
    collection: 'hospital'
});

module.exports =  mongoose.model('hospital', UserSchema);