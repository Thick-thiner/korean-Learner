
// var mongoose = require('mongoose');
// var User = mongoose.model('user');


angular.module('kolearner').controller('learnerController', ['$scope',function ($scope)
{
    // var UserService = $resource('/api/users');

    $scope.Data = [];

        (function()
        {

            $scope.initialize = function (bizchatId) {

            };

            // $scope.languageChange = function () {
            //
            //     UserService.save({language: $scope.language}, function (result) {
            //             if (!user) user = {};
            //
            //             $cookies.put('language', $scope.language);
            //
            //             $rootScope.$broadcast('changeLanguage');
            //         },
            //         function (err) {
            //             if (err.status == 401) {
            //                 var user = {};
            //                 user.language = $scope.language;
            //
            //                 $cookies.put('language', $scope.language);
            //                 $rootScope.$broadcast('changeLanguage');
            //             }
            //             else {
            //                 alert(err);
            //             }
            //         });
            // };

            // $scope.updateUser = function (req, res) {
            //     User.findOne({_id: req.user._id}).exec(function (err, user) {
            //         if (err) {
            //             console.error(err);
            //             return err;
            //         }
            //
            //         var query = {language: req.body.language};
            //         if (req.body.password) {
            //             query.password = crypto.pbkdf2Sync(req.body.password, new Buffer(user.salt, 'base64'), 10000, 64).toString('base64');
            //         }
            //
            //         User.update({_id: req.user._id}, {$set: query}).exec(function (err, result) {
            //             res.end();
            //         });
            //     });
            // };

//click----------------------------------------------------------------------------------------------------------
            $scope.changeToListen = function () {
                document.getElementById("listenPage").style.display = "block";
                document.getElementById("speakPage").style.display = "none";
                document.getElementById("readPage").style.display = "none";
                document.getElementById("writePage").style.display = "none";
            };

            $scope.changeToSpeak = function () {
                document.getElementById("listenPage").style.display = "none";
                document.getElementById("speakPage").style.display = "block";
                document.getElementById("readPage").style.display = "none";
                document.getElementById("writePage").style.display = "none";

            };

            $scope.changeToRead = function () {
                document.getElementById("listenPage").style.display = "none";
                document.getElementById("speakPage").style.display = "none";
                document.getElementById("readPage").style.display = "block";
                document.getElementById("writePage").style.display = "none";
            };

            $scope.changeToWrite = function () {
                document.getElementById("listenPage").style.display = "none";
                document.getElementById("speakPage").style.display = "none";
                document.getElementById("readPage").style.display = "none";
                document.getElementById("writePage").style.display = "block";
            };
//----------------------------------------------------------------------------------------------------------------

        })();

    $scope.initialize();
    // $scope.lan=LanguageService;
}]);

