import { Router } from "express";
import authModels from "models/auth.models";
import validateModel from "../middlewares/validateModels";

const authRouter = Router()

authRouter  
    .post('/signIn', validateModel(authModels.singInModel))