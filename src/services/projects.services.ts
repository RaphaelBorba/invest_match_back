import projectsRepositories from "../repositories/projects.repositories";


async function checkTypeProject(type:string){

    const existType =await  projectsRepositories.getTypeByNameDB(type)

    if(existType){
        return existType
    }else{
        const createdType = projectsRepositories.postTypeProjectDB(type)
        return createdType
    }
}

const projectsServices = {

    checkTypeProject
}

export default projectsServices