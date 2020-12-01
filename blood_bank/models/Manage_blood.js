const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    bld_id: {
        type: String,
        required: true
    }
    
},{
    collection: 'manageblood'
});

module.exports =  mongoose.model('manageblood', UserSchema);