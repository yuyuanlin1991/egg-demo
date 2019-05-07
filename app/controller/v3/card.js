const Controller = require('egg').Controller;

class CardController extends Controller {
    //get /
    async index() {
        this.ctx.body={
            data:'all'
        }
    }
    //get /:id
    async show(ctx){
        ctx.body={
            data:ctx.params.id+' show'
        }
    }
    // post /
    async create(ctx){
        this.ctx.body={
            data:'create'
        }
    }
    //put /:id
    async update(ctx){
        this.ctx.body={
            data:ctx.params.id+ ' update'
        }
    }

    //delete /:id
    async destory(ctx){
        this.ctx.body={
            data:ctx.params.id+' destory'
        }
    }
}

module.exports = CardController;