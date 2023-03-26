import { Request, Response } from "express";
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

        await authRepositories.postSignUpDB(body)

        res.sendStatus(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}