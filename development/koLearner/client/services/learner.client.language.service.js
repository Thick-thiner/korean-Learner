//Bot users service used to communicate Bot users REST endpoints
(function ()
{
    'use strict';

    angular.module('kolearner').factory('LanguageService', function($cookies, $rootScope)
    {
        var code = $cookies.get('language');

        $rootScope.$on('changeLanguage', function()
        {
            code = $cookies.get('language');
        });

        var languages = {
            "Welcome to kolearner!": {
                "ko": "플레이챗에 오신 걸 환영합니다!",
                "en": "Welcome to kolearner!",
                "jp": "プレーイチェッにいらっしゃったことを歓迎します!",
                "zh": "欢迎来到kolearner!"
            }
        };

        var list = {};

        var lan = function(key)
        {

            if(!key) return '';

            key = key.trim();

            if(!languages[key])
            {
                if(!list[key])
                    list[key] = true;

                console.error('language', key);

                return 'no messages';
            }
            else
            {
                return languages[key][code] || languages[key]['en'];
            }
        };

        return lan;
    });
})();
