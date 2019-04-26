//不需要权限的接口
/**
 * 不需要权限的接口
 * @param app
 */
module.exports = app => {
    const { router, controller } = app;
    let card = router.namespace('/api/v2/cards');
    card.get('/', controller.v2.card.index);
    card.get('/:id',controller.v2.card.show);

    let user = router.namespace('/api/v2/users');
    user.get('/', controller.v2.user.index);
    user.get('/:id',controller.v2.user.show);
    user.post('/login',controller.v2.user.login);
};