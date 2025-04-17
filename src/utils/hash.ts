import bcrypt from 'bcryptjs'

export async function hashSenha(senha: string) {
  return await bcrypt.hash(senha, 10)
}

export async function compararSenha(senha: string, hash: string) {
  return await bcrypt.compare(senha, hash)
}