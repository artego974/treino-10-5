import { Request, Response } from "express"
import { AuthService } from "../services/AuthService"
import { generateToken } from "../utils/jwt"

const service = new AuthService()
export class AuthController{
    async login(req:Request, res: Response){
        const {email, password} = req.body
        const user = await service.login(email,password)
        const token = generateToken({
            id:user.id,
            email:user.email,
            role: user.role
        })
        return res.status(200).json({user:user, token})
    }
}