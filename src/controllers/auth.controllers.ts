import { Request, Response } from "express";
import authServices from "../services/auth.services";
import authRepositories from "../repositories/auth.repositories";
import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()



export async function signIn(req: Request, res: Response) {

    const { body } = req
    try {

        const user = await authServices.checkEmail(body.email)

        if (!user) return res.status(400).send({ message: 'Email or Password wrong!' })

        if(!authServices.validateHashPassword(body.password, user.userData.password)) return res.status(400).send({ message: 'Email or Password wrong!' })

        const token = jwt.sign({type: user.type, userId: user.userData.id}, process.env.SECRET_JWT)

        res.status(200).send({token})

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function signUp(req: Request, res: Response) {

    const { body } = req

    try {

        if (await authServices.checkEmail(body.email)) return res.status(409).send({ message: 'Email already used!' })

        const hashPassword = authServices.createHashPassword(body.password)

        await authRepositories.postSignUpDB({ ...body, password: hashPassword })

        res.sendStatus(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}