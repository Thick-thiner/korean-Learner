'use strict';

(function () {
    var addButton = document.querySelector('.btn-add');
    var deleteButton = document.querySelector('.btn-delete');
    var clickNbr = document.querySelector('#click-nbr');
    var apiUrl = 'http://localhost:3000/api/clicks';

    function ready (fn) {
        if (typeof fn !== 'function') {
            return;
        }

        if (document.readyState === 'complete') {
            return fn();
        }

        document.addEventListener('DOMContentLoaded', fn, false);
    }

    function ajaxRequest (method, url, callback) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                callback(xmlhttp.response);
            }
        };

        xmlhttp.open(method, url, true);
        xmlhttp.send();
    }

    function updateClickCount (data) {
        var clicksObject = JSON.parse(data);
        clickNbr.innerHTML = clicksObject.clicks;
    }

    ready(ajaxRequest('GET', apiUrl, updateClickCount));

    addButton.addEventListener('click', function () {
        console.log('click!');
        ajaxRequest('POST', apiUrl, function () {
            ajaxRequest('GET', apiUrl, updateClickCount)
        });

    }, false);

    deleteButton.addEventListener('click', function () {
        console.log('reset!');
        ajaxRequest('DELETE', apiUrl, function () {
            ajaxRequest('GET', apiUrl, updateClickCount);
        });

    }, false);

})();
//IIFE将所有的变量绑定在函数内，这样就不会与程序中其他的变量有命名空间的冲突。
//我们要使用XMLHttpRequest,这个对象可以让我们在不改变整个页面的情况下，改变内容。这又叫做AJAX，是一个非常方便的方法。