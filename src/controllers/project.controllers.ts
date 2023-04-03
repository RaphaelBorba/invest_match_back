import { Request, Response } from "express";
import projectsServices from "../services/projects.services";
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

export async function postProject(req: Request, res: Response){

    const {userId, type} = res.locals
    const {body} = req

    if(type !== 'company') return res.status(400).send({message: 'Apenas empresas pode criar projetos.'})


    try {

        const type = await projectsServices.checkTypeProject(body.type.toLowerCase())

        await projectsRepositories.postProjectsDB(body, Number(userId), type.id)

        res.sendStatus(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}