'use strict';

module.exports = function(app, db) {

    app.route('/')
        .get(function (req, res) {
            // res.send('Hello Shuang'); //res.send可以发送消息给browser。这是在Express中常见的参数。
            res.sendFile(process.cwd() + '/development/koLearner/client/views/index.html');//process.cwd()方法是显示现在的工作路径，让我们和文件一起拼成字符串。这样让Node能都找到文件。
        });
};
