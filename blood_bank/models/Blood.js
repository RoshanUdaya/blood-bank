const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    bld_id: {
        type: String,
        required: true
    },
    bld_grp: {
        type: String,
        required: true
    },
    bld_bank: {
        type: String,
        required: true
    },
    bld_cells:{
        type: String,
        required: true
    },
    stk_id: {
        type: String,
        required: true
    }
    
},{
    collection: 'bloods'
});

module.exports =  mongoose.model('bloods', UserSchema);