const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create bulb schema & model

const BulbSchema = new Schema({
    bulb_id : {
        type : String,
        required : [true, 'bulb_id field is required']
    },

    room : {
        type : String,
        required : [true, 'room field is required']
    }
});

const Bulb = mongoose.model('bulb', BulbSchema);

module.exports = Bulb;