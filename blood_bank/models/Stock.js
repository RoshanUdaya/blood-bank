const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    stk_id: {
        type: String,  
        required: true  
    },
    stk_num: {
        type: String,
        required: true
    },
    stk_desc:{
        type: String,
        required: true
    },
    hospital_name: {
        type: String,
        required: true
    }
    
},{
    collection: 'stocks'
});

module.exports =  mongoose.model('stocks', UserSchema);