import bcrypt from "bcrypt"

async function gerar() {
    const senha = await bcrypt.hash("12345",10)
    console.log(senha)
}
gerar()