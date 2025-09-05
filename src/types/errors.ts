// Enum para códigos de erro padronizados
export enum AppErrorCode {
  // Erros de Autenticação (400x)
  INVALID_CREDENTIALS = "AUTH_001",
  TOKEN_EXPIRED = "AUTH_002",
  TOKEN_INVALID = "AUTH_003",
  INSUFFICIENT_PERMISSIONS = "AUTH_004",
  USER_NOT_FOUND = "AUTH_005",

  // Erros de Validação (500x)
  VALIDATION_ERROR = "VAL_001",
  REQUIRED_FIELD_MISSING = "VAL_002",
  INVALID_FORMAT = "VAL_003",
  DUPLICATE_ENTRY = "VAL_004",

  // Erros de Negócio (600x)
  RESOURCE_NOT_FOUND = "BUS_001",
  RESOURCE_ALREADY_EXISTS = "BUS_002",
  OPERATION_NOT_ALLOWED = "BUS_003",
  CONSTRAINT_VIOLATION = "BUS_004",

  // Erros de Sistema (700x)
  DATABASE_ERROR = "SYS_001",
  EXTERNAL_SERVICE_ERROR = "SYS_002",
  INTERNAL_SERVER_ERROR = "SYS_003",
  SERVICE_UNAVAILABLE = "SYS_004",
}

// Classe base para erros customizados
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: AppErrorCode;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number = 500,
    code: AppErrorCode = AppErrorCode.INTERNAL_SERVER_ERROR,
    details?: any
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;

    // Captura o stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

// Erros específicos de autenticação
export class AuthenticationError extends AppError {
  constructor(
    message: string = "Falha na autenticação",
    code: AppErrorCode = AppErrorCode.INVALID_CREDENTIALS
  ) {
    super(message, 401, code);
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = "Permissões insuficientes") {
    super(message, 403, AppErrorCode.INSUFFICIENT_PERMISSIONS);
  }
}

// Erros de validação
export class ValidationError extends AppError {
  constructor(message: string = "Dados inválidos", details?: any) {
    super(message, 400, AppErrorCode.VALIDATION_ERROR, details);
  }
}

// Erros de recursos não encontrados
export class NotFoundError extends AppError {
  constructor(resource: string = "Recurso") {
    super(`${resource} não encontrado`, 404, AppErrorCode.RESOURCE_NOT_FOUND);
  }
}

// Erros de conflito (duplicatas)
export class ConflictError extends AppError {
  constructor(message: string = "Recurso já existe") {
    super(message, 409, AppErrorCode.RESOURCE_ALREADY_EXISTS);
  }
}

// Erros de regras de negócio
export class BusinessError extends AppError {
  constructor(
    message: string,
    code: AppErrorCode = AppErrorCode.OPERATION_NOT_ALLOWED
  ) {
    super(message, 400, code);
  }
}

// Erros de banco de dados
export class DatabaseError extends AppError {
  constructor(message: string = "Erro de banco de dados", details?: any) {
    super(message, 500, AppErrorCode.DATABASE_ERROR, details);
  }
}

// Factory functions para facilitar o uso
export const createAuthError = (message?: string) =>
  new AuthenticationError(message);
export const createValidationError = (message?: string, details?: any) =>
  new ValidationError(message, details);
export const createNotFoundError = (resource?: string) =>
  new NotFoundError(resource);
export const createConflictError = (message?: string) =>
  new ConflictError(message);
export const createBusinessError = (message: string, code?: AppErrorCode) =>
  new BusinessError(message, code);
