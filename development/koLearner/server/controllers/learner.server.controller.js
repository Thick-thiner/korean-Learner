var mongoose = require('mongoose');
var Learner = mongoose.model('learner');

exports.getLearners = function(req, res){
    var query = {};
    Learner.find(query).exec(function (err,learners) {
        if (err)
        {
            return err;
        }
        else
        {
            res.jsonp(learners);
        }
    })

};