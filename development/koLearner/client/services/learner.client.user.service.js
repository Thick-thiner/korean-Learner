
(function ()
{
    'use strict';

    angular.module('kolearner').factory('UserService', function($window, $resource, $cookies, $rootScope, FileUploader)
    {


        var users = {
            name: { type: String, default: ''},
            created: { type: Date, default: Date.now}
        };


        users.getList = function(){

        };


        return users;
    });
})();
