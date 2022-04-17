var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true},
    age: { type: Number, default: 0},
    marks: [Number],
    password: { type: String, minlength: 5},
    favourities: [String]

}, { timestamps: true });

var User = mongoose.model('User', userSchema);

module.exports = User;