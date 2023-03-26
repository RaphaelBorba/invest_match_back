import authRepositories from "../repositories/auth.repositories";
import bcrypt from 'bcrypt'


async function checkEmail(email: string) {

    const checkCompany = await authRepositories.getCompanyEmail(email)

    if (checkCompany) return { type: 'company', userData:checkCompany }

    const checkInvestor = await authRepositories.getInvetorEmail(email)
    
    if (checkInvestor) return { type: 'invest', userData: checkInvestor }

    return false
}

function createHashPassword(password: string) {

    return bcrypt.hashSync(password, 8)
}

function validateHashPassword(password: string, hashPassword: string) {

    return bcrypt.compareSync(password, hashPassword)
}

const authServices = {

    checkEmail,
    createHashPassword,
    validateHashPassword
}

export default authServices