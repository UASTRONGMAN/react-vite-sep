import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().min(1).max(20).messages({
        'string.pattern.base':'Brand must consist of only letters.',
        'string.min':'Minimal length of brand is 1 symbol.',
        'string.max':'Maximal length of brand is 20 symbols.'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min':'Minimal price is 0$.',
        'number.max':'Maximal price is 1000000$.'
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min':'Minimal year is 1990.',
        'number.max':'Maximal year is 2024.'
    }),
})