import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export function gerarToken(payload: object) {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "1d" });
}

export function verificarToken(token: string) {
  return jwt.verify(token, ACCESS_SECRET);
}

export async function gerarRefreshToken(userId: number): Promise<string> {
  return jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: "7d" });
}
