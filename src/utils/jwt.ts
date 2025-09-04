import jwt from "jsonwebtoken";

function getJwtSecret(): string {
  return process.env.JWT_SECRET || "minha_chave_secreta";
}

export function gerarToken(payload: object) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "1d" });
}

export function verificarToken(token: string) {
  return jwt.verify(token, getJwtSecret());
}

export function gerarRefreshToken(userId: number) {
  const payload = { userId, refresh: true };
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });
}
