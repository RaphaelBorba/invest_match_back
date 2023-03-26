import prisma from "../../prisma/config";

function postSignInDB(body) {


}

function postSignUpDB(body) {

    if (body.type === 'invest') {
        return prisma.investors.create({
            data: {
                email: body.email,
                image_url: body.image_url,
                name: body.name,
                password: body.password
            }
        })
    }else{
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

const authRepositories = {

    postSignInDB,
    postSignUpDB
}

export default authRepositories