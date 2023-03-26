import authRepositories from "../repositories/auth.repositories";


async function checkEmail(email: string){

    if( await authRepositories.getCompanyEmail(email) || await authRepositories.getInvetorEmail(email)) return true

    return false
}

const authServices = {

    checkEmail,
}

export default authServices