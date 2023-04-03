import { getAllProjects, postProject } from "../controllers/project.controllers";
import { Router } from "express";
import { authenticateToken } from "../middlewares/validateToken";
import validateModel from "../middlewares/validateModels";
import projectsModels from "../models/projects.models";

const projectRouter = Router()

projectRouter
    .get('/', getAllProjects)
    .post('/',validateModel(projectsModels.validateProject), authenticateToken, postProject)

export {projectRouter}