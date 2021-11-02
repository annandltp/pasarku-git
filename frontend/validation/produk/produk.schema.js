const joi = require('joi')

const schema = {
    create: joi.object({
        title: joi.string().max(150).required(),
        description: joi.string().max(255).allow(''),
        full_description: joi.string().max(5000).allow(''),
        price: joi.number().min(100).max(1000000000).required(),
        category_id: joi.number().required()
    }) 
}

module.exports = schema