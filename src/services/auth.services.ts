import authRepositories from "../repositories/auth.repositories";
import bcrypt from 'bcrypt'


async function checkEmail(email: string) {

    if (await authRepositories.getCompanyEmail(email) || await authRepositories.getInvetorEmail(email)) return true

    return false
}

function createHashPassword(password: string) {

    return bcrypt.hashSync(password, 8)
}

function validateHashPassword(password: string, hashPassword: string){


}

const authServices = {

    checkEmail,
    createHashPassword,
}

export default authServices