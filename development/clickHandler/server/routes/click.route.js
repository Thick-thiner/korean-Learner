'use strict';

var ClickHandler = require(process.cwd() + '/development/server/controllers/clickHandler.server.js');

module.exports = function(app, db) {
    var clickHandler = new ClickHandler(db);

    app.route('/')
        .get(function (req, res) {
            // res.send('Hello Shuang'); //res.send可以发送消息给browser。这是在Express中常见的参数。
            res.sendFile(process.cwd() + '/development/clickHandler/client/views/button.html');//process.cwd()方法是显示现在的工作路径，让我们和文件一起拼成字符串。这样让Node能都找到文件。
        });

    app.route('/api/clicks')
        .get(clickHandler.getClicks)
        .post(clickHandler.addClick)
        .delete(clickHandler.resetClicks);

};