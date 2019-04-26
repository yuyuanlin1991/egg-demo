module.exports = app => {
    const { router, controller } = app;
    //此处写返回html的接口
    router.get('/', controller.home.index);
};