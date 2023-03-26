import { Request, Response } from "express";



export async function signIn(req: Request, res:Response){
    
    const {body} = req
    try {


        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}