import jwt from 'jsonwebtoken';
export declare function gerarToken(payload: object): string;
export declare function verificarToken(token: string): string | jwt.JwtPayload;
