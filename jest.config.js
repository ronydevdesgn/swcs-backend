/** @type {import('ts-jest').JestConfigWithTsJest} **/

/**
* Configuração do Jest para testar projetos TypeScript/Node.js
*
* @description Configura o Jest para usar o ambiente de teste Node.js e ts-jest para transformação TypeScript
* @see https://jestjs.io/docs/configuration
* @see https://www.npmjs.com/package/ts-jest
*/
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/server.ts',
    '!src/tests/**/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  testTimeout: 30000, // 30 segundos de timeout
  maxWorkers: 1, // Executar testes sequencialmente para evitar conflitos de porta
  forceExit: true, // Forçar saída após os testes
  detectOpenHandles: true, // Detectar handles abertos
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
