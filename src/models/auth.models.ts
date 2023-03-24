import Joi from "joi";

const singInModel = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const signUpModel = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    imageUrl: Joi.string().uri().required(),
    type: Joi.string().required()
})

const authModels = {
    singInModel,
    signUpModel
}

export default authModels