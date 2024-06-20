const Joi = require('joi');

const audioUploadSchema = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'Title is required',
        'string.empty': 'Title cannot be empty'
    }),
    artist: Joi.string().required().messages({
        'any.required': 'Artist is required',
        'string.empty': 'Artist cannot be empty'
    }),
    writer: Joi.string().required().messages({
        'any.required': 'Writer is required',
        'string.empty': 'Writer cannot be empty'
    }),
    createdBy: Joi.number().integer().messages({
        'number.base': 'Created By must be a number',
        'number.integer': 'Created By must be an integer'
    }),
});

module.exports = {
    audioUploadSchema
}