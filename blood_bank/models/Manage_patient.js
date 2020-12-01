const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    pat_id: {
        type: String,
        required: true
    }
    
},{
    collection: 'managepatient'
});

module.exports =  mongoose.model('managepatient', UserSchema);