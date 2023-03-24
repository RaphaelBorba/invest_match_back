import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";


export default function validateModel(model: ObjectSchema) {

    return (req: Request, res: Response, next: NextFunction) => {

        const { error } = model.validate(req['body'], {
            abortEarly: false,
        })
        if (!error) {
            next()
        } else {
            res.status(400).send(error.details.map((d) => d.message))
        }
    }

}