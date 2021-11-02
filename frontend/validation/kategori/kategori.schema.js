const joi = require('joi')

const schema = {
    create: joi.object({
        name: joi.string().max(100).required()
    }) 
}

module.exports = schema