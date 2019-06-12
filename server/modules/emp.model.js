var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: Number,
    name: String,
    created_at : Date,
    updated_at: Date
})

var User = mongoose.model('User', userSchema)

module.exports = User;