var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        name: { type: String, default: ''},
        created: { type: Date, default: Date.now},
        salt:{type: String},
        password: {
            type: String,
            default: ''
        }
    });

mongoose.model('user', UserSchema);