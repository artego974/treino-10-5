import { verifyToken } from "../utils/jwt"

export const authMid = (req:any, res:any, next:any)=>{
    const header = req.headers.authorization
    if(!header || !header.startsWith("bearer")){
        return res.status(401).json({message: "token nao fornecido"})
    }
    const token = header.split(" ")[1]
    const decoded = verifyToken(token)
    if(!decoded){
        return res.status(401).json({message: "token invalido"})
    }
    (req as any ).user = decoded
    next()

}