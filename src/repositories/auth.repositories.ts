import { SignUpType } from "../protocols";
import prisma from "../data/config";

function postSignUpDB(body: SignUpType) {

    if (body.type === 'invest') {
        return prisma.investors.create({
            data: {
                email: body.email,
                image_url: body.image_url,
                name: body.name,
                password: body.password
            }
        })
    } else {
        return prisma.companies.create({
            data: {
                email: body.email,
                image_url: body.image_url,
                name: body.name,
                password: body.password
            }
        })
    }
}

function getCompanyEmail(email: string) {

    return prisma.companies.findFirst({
        where:{
            email
        }
    })
}
function getInvestorEmail(email: string) {

    return prisma.investors.findFirst({
        where:{
            email
        }
    })
}

const authRepositories = {

    postSignUpDB,
    getCompanyEmail,
    getInvestorEmail,
    
}

export default authRepositories