//不需要权限的接口
/**
 * 不需要权限的接口
 * @param app
 */
module.exports = app => {
    const { router, controller } = app;
    let card = router.namespace('/api/v3/cards');
    card.get('/', controller.v3.card.index);
    card.get('/:id',controller.v3.card.show);

    let user = router.namespace('/api/v3/users');
    user.get('/', controller.v3.user.index);
    user.get('/:id',controller.v3.user.show);
    user.post('/login',controller.v3.user.login);
};