import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'minha_chave_secreta'

export function gerarToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

export function verificarToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}