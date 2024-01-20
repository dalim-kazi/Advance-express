import Joi from "joi";
const schema = Joi.object().keys({
    title: Joi.string().alphanum().required(),
    image: Joi.string().alphanum().required(),
    discretion: Joi.string().alphanum().required(),
    price: Joi.number().required(),
    price2:Joi.number().required()
})

const validate = (data) => {
    const result = schema.validate(data)
    return result
}
export default validate