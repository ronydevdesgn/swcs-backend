import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'minha_chave_secreta'

export function gerarToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
}

export function verificarToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}

export function gerarRefreshToken(userId: number) {
  const payload = { userId, refresh: true }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}
// export function verificarRefreshToken(token: string) {
//   try {
//     return jwt.verify(token, JWT_SECRET)
//   } catch (error) {
//     throw new Error('Token inválido ou expirado')
//   }
// }
// export function extrairPayload(token: string) {
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; refresh?: boolean }
//     return decoded
//   } catch (error) {
//     throw new Error('Token inválido ou expirado')
//   }
// }