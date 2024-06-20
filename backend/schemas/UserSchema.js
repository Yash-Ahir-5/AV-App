const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'Name is required',
        'string.empty': 'Name cannot be empty'
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email must be a valid email'
    }),
    password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")).required().messages({
        'any.required': 'Password is required',
        'string.empty': 'Password cannot be empty',
        'string.pattern.base': 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
    }),
    role: Joi.string().optional().allow(null, ''),
});

// const userSchema = Joi.object({
//     name: Joi.string().min(3).max(30).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{7,30}$')).required(),
//     status: Joi.string().valid('active', 'inactive').required(),
//     isDeleted: Joi.boolean().required(),
//     isApproved: Joi.boolean().required(),
//     role: Joi.string().valid('admin', 'user').required(),
//     createdAt: Joi.date().iso().required(),
//     updatedAt: Joi.date().iso().required(),
//     profilePic: Joi.string().uri()
// });

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email must be a valid email'
    }),
    password: Joi.string().required().messages({
        'any.required': 'Password is required',
        'string.empty': 'Password cannot be empty'
    })
});

module.exports = {
    registerSchema,
    loginSchema
}