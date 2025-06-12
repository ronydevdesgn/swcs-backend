export const errorResponseSchema = {
  type: 'object',
  properties: {
    statusCode: { type: 'number' },
    error: { type: 'string' },
    message: { type: 'string' }
  }
};

export const paginationQuerySchema = {
  type: 'object',
  properties: {
    page: { type: 'number', minimum: 1 },
    limit: { type: 'number', minimum: 1, maximum: 100 }
  }
};

export const defaultResponseSchema = {
  type: 'object',
  properties: {
    mensagem: { type: 'string' }
  }
};

export const securitySchema = {
  bearerAuth: []
};