exports.keys = '12345test';
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

//关闭csrf安全拦截
exports.security = {
    csrf: false
};

//对某些模块进行初始化配置
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

