'use strict';

var UserController = require('../koLearner/learner.client.controller.js');

module.exports = function(app)
{
    app.post('/api/users', UserController.updateUser);
};