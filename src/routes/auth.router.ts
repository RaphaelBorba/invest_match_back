import { signIn, signUp } from "../controllers/auth.controllers";
import { Router } from "express";
import authModels from "../models/auth.models";
import validateModel from "../middlewares/validateModels";
import { authenticateToken } from "../middlewares/validateToken";

const authRouter = Router()

authRouter  
    .post('/signIn', validateModel(authModels.singInModel), signIn)
    .post('/signUp', validateModel(authModels.signUpModel), signUp)
    .get('/', authenticateToken, (req, res)=> res.status(200).send(res.locals))

export {authRouter}