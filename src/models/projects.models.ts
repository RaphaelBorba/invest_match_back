import Joi from "joi";

const validateProject = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image_url: Joi.string().uri().required(),
    type: Joi.string().required(),
})

const projectsModels = {

    validateProject
}

export default projectsModels