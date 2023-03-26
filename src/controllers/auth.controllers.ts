import { Request, Response } from "express";
import authServices from "../services/auth.services";
import authRepositories from "../repositories/auth.repositories";



export async function signIn(req: Request, res:Response){
    
    const {body} = req
    try {


        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function signUp(req:Request, res:Response){

    const {body} = req

    try {

        if( await authServices.checkEmail(body.email) ) return res.status(409).send({message: 'Email already used!'})

        await authRepositories.postSignUpDB(body)

        res.sendStatus(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}