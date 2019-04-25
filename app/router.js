module.exports = app => {
    require('./router/card.js')(app);
    require('./router/user.js')(app);
    const { router, controller } = app;
    router.get('/', controller.home.index);
};