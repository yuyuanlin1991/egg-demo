//需要普通权限的接口
module.exports = app => {
    const { router, controller } = app;
    let junior  = router.namespace('/api/v2/u');
    let card = junior.namespace('/cards');
    card.put('/:id',controller.v2.card.update);
    card.delete('/:id',controller.v2.card.destory);
    card.post('/:id',controller.v2.card.create);
};


