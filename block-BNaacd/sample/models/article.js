var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    tittle: String,
    description: String
});