import prisma from "../data/config";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";


export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.sendStatus(400);

    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(409);
    
    try {

        const { userId, type } = jwt.verify(token, process.env.SECRET_JWT) as JWTPayload;
        let user: any

        if(type === 'company'){
            user = await prisma.companies.findFirst({
                where: {
                    id: userId,
                },
            });
        }else if(type === 'invest'){
            user = await prisma.investors.findFirst({
                where: {
                    id: userId,
                },
            });
        }
        
        if (!user) return res.sendStatus(404);

        res.locals.userId = userId
        res.locals.type = type
        
        return next();
    } catch (err) {
        return res.sendStatus(409);
    }
}

type JWTPayload = {
    userId: number,
    type: string
};