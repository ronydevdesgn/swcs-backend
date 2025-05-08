/** @type {import('ts-jest').JestConfigWithTsJest} **/

/**
* Configuração do Jest para testar projetos TypeScript/Node.js
*
* @description Configura o Jest para usar o ambiente de teste Node.js e ts-jest para transformação TypeScript
* @see https://jestjs.io/docs/configuration
* @see https://www.npmjs.com/package/ts-jest
*/
export default {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  testMatch: ['**/src/tests/**/*.test.ts'],
};
