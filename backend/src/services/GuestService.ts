import { Like } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Guest } from "../models/Guest";


export class GuestService{
    private repo = AppDataSource.getRepository(Guest)
    async list(name?:string){
        if(name){
            const user = await this.repo.find({where:{name: Like(`%${name}%`)}})
            return user
        }
        const user = await this.repo.find()
        return user
    }
    async create(data:any){
        const exist =  await this.repo.findOneBy({email:data.email})
        if(exist) throw new Error("user já existe")
        const user = this.repo.create(data)
        return this.repo.save(user)
    }
    async update(id:any, data:any){
        const user = await this.repo.update(id,data)
        return user
    }
    async delete(id:any){
        const user = await this.repo.findOneBy({id:id})
        if(!user) throw new Error("user nao encontrado")
        const data =  this.repo.delete(id)
        return data
    }
    async dashboard(){
        const guest = await this.repo.find()
        const total = guest.length
        const check_in = guest.filter(g=> g.check_in).length
        const pending = total - check_in
        const occupancy = total == 0 ? 0 : Number(((check_in/total) * 100).toFixed(2))
        return{
            total, check_in,pending,occupancy
        }
    }
    async checkin(id:any){
        const guest = await this.repo.findOneBy({id:id})
        if(!guest) throw new Error("guest não encontrado")
        if(guest.check_in) throw new Error("user ja fez cehck_in")
        guest.check_in = true
        return this.repo.save(guest)
    }

}