export type AppErrorCode =
  | "NOT_FOUND"
  | "DUPLICATE"
  | "INVALID_HOURS"
  | "DUPLICATE_EMAIL"
  | "VALIDATION_ERROR"
  | "UNAUTHORIZED";

export class AppError extends Error {
  constructor(
    public code: AppErrorCode,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}
