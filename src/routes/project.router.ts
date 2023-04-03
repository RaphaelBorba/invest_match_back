import { getAllProjects } from "../controllers/project.controllers";
import { Router } from "express";

const projectRouter = Router()

projectRouter.get('/', getAllProjects)

export {projectRouter}