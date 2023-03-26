import Joi from "joi";

const singInModel = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const signUpModel = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    image_url: Joi.string().uri().required(),
    type: Joi.string().valid('invest','company').required()
})

const authModels = {
    singInModel,
    signUpModel
}

export default authModels