import prisma from "../data/config";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";


export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.sendStatus(400);

    const token = authHeader.split(" ")[1];
    if (!token) return res.sendStatus(409);
    
    try {

        const { userId } = jwt.verify(token, process.env.SECRET_JWT) as JWTPayload;
        
        const user = await prisma.companies.findFirst({
            where: {
                id: userId,
            },
        });
        if (!user) return res.sendStatus(404);

        res.locals.userId = userId
        
        return next();
    } catch (err) {
        return res.sendStatus(409);
    }
}

type JWTPayload = {
    userId: number;
};