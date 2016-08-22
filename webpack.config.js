const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const COMMON_CONFIG = require('./webpack-config/common');
const Joi = validate.Joi;
const schemaExtension = Joi.object({
    sassLoader: Joi.any(),
    resolve: {
        plugins: Joi.any()
    }
});

var config;

switch (process.env.npm_lifecycle_event) {
    case 'dev':
        config = merge(COMMON_CONFIG, require('./webpack-config/dev.js'));
        break;
    case 'test':
        config = merge(COMMON_CONFIG, require('./webpack-config/test.js'));
        break;
    case 'build':
        config = merge(COMMON_CONFIG, require('./webpack-config/prod.js'));
}

module.exports = validate(config, {
    schemaExtension: schemaExtension
});
