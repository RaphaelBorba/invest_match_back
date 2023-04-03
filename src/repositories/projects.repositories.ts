import prisma from "../data/config";

function getAllProjectsDB(){

    return prisma.projects.findMany()
}

function getTypeByNameDB(type:string){

    return prisma.type_projects.findFirst({
        where:{
            name:type
        }
    })
}

function postTypeProjectDB(type:string){

    return prisma.type_projects.create({
        data:{
            name:type
        }
    })
}

function postProjectsDB(body:any, id:number, type_id: number){

    return prisma.projects.create({

        data:{
            name: body.name,
            description: body.description,
            image_url: body.image_url,
            amount: 0,
            company_id: id,
            type_id
        }
    })
}

const projectsRepositories = {
    getAllProjectsDB,
    getTypeByNameDB,
    postTypeProjectDB,
    postProjectsDB
}

export default projectsRepositories