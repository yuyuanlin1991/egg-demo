//需要超级权限的接口

/**
 * 定义card的接口
 * @param app
 */
module.exports = app => {
    const { router, controller } = app;
    let card = router.namespace('/api/v2/m/cards');
    card.get('/', controller.v2.card.index);
    card.get('/:id',controller.v2.card.show);
};