import prisma from "../data/config";

function getAllProjectsDB(){

    return prisma.projects.findMany()
}

const projectsRepositories = {
    getAllProjectsDB
}

export default projectsRepositories