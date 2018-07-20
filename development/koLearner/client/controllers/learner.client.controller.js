var crypto = require('crypto');
var mongoose = require('mongoose');
var User = mongoose.model('user');


angular.module('kolearner').controller('learnerController', ['$scope', '$resource',  '$cookies','kolearnerService', 'LanguageService', function ($scope, $resource, $cookies, kolearnerService, LanguageService)
{
    var UserService = $resource('/api/users');

    $scope.Data = [];

        (function()
        {

            $scope.initialize = function (bizchatId) {

            };

            $scope.languageChange = function () {

                UserService.save({language: $scope.language}, function (result) {
                        if (!user) user = {};

                        $cookies.put('language', $scope.language);

                        $rootScope.$broadcast('changeLanguage');
                    },
                    function (err) {
                        if (err.status == 401) {
                            var user = {};
                            user.language = $scope.language;

                            $cookies.put('language', $scope.language);
                            $rootScope.$broadcast('changeLanguage');
                        }
                        else {
                            alert(err);
                        }
                    });
            };

            $scope.updateUser = function (req, res) {
                User.findOne({_id: req.user._id}).exec(function (err, user) {
                    if (err) {
                        console.error(err);
                        return err;
                    }

                    var query = {language: req.body.language};
                    if (req.body.password) {
                        query.password = crypto.pbkdf2Sync(req.body.password, new Buffer(user.salt, 'base64'), 10000, 64).toString('base64');
                    }

                    User.update({_id: req.user._id}, {$set: query}).exec(function (err, result) {
                        res.end();
                    });
                });
            };

            })();

    $scope.initialize();
    $scope.lan=LanguageService;
}]);

