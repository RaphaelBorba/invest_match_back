import { Request, Response } from "express";
import projectsRepositories from "../repositories/projects.repositories";


export async function getAllProjects(req: Request, res: Response){

    try {

        const projects = await projectsRepositories.getAllProjectsDB()

        res.status(200).send(projects)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}