//需要普通权限的接口
module.exports = app => {
    const { router, controller } = app;
    let junior  = router.namespace('/api/v3/u');
    let card = junior.namespace('/cards');
    card.put('/:id',controller.v3.card.update);
    card.delete('/:id',controller.v3.card.destory);
    card.post('/:id',controller.v3.card.create);

    let icon = junior.namespace('/icon');
    icon.put('/:id',controller.v3.icon.update);
    icon.delete('/:id',controller.v3.icon.destory);
    icon.post('/:id',controller.v3.icon.create);

};


