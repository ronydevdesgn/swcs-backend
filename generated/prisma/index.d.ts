
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Sumario
 * 
 */
export type Sumario = $Result.DefaultSelection<Prisma.$SumarioPayload>
/**
 * Model ProfessorCurso
 * 
 */
export type ProfessorCurso = $Result.DefaultSelection<Prisma.$ProfessorCursoPayload>
/**
 * Model Presenca
 * 
 */
export type Presenca = $Result.DefaultSelection<Prisma.$PresencaPayload>
/**
 * Model Efetividade
 * 
 */
export type Efetividade = $Result.DefaultSelection<Prisma.$EfetividadePayload>
/**
 * Model Permissao
 * 
 */
export type Permissao = $Result.DefaultSelection<Prisma.$PermissaoPayload>
/**
 * Model UsuarioPermissao
 * 
 */
export type UsuarioPermissao = $Result.DefaultSelection<Prisma.$UsuarioPermissaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Estado: {
  PRESENTE: 'PRESENTE',
  FALTA: 'FALTA'
};

export type Estado = (typeof Estado)[keyof typeof Estado]


export const TipoUsuario: {
  FUNCIONARIO: 'FUNCIONARIO',
  PROFESSOR: 'PROFESSOR',
  SUMARISTA: 'SUMARISTA'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]


export const Departamento: {
  INFORMATICA: 'INFORMATICA',
  OUTROS: 'OUTROS'
};

export type Departamento = (typeof Departamento)[keyof typeof Departamento]


export const Cargo: {
  SUMARISTA: 'SUMARISTA',
  SECRETARIO: 'SECRETARIO',
  ADMINISTRATIVO: 'ADMINISTRATIVO',
  OUTROS: 'OUTROS'
};

export type Cargo = (typeof Cargo)[keyof typeof Cargo]

}

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

export type Departamento = $Enums.Departamento

export const Departamento: typeof $Enums.Departamento

export type Cargo = $Enums.Cargo

export const Cargo: typeof $Enums.Cargo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RefreshTokens
 * const refreshTokens = await prisma.refreshToken.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sumario`: Exposes CRUD operations for the **Sumario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sumarios
    * const sumarios = await prisma.sumario.findMany()
    * ```
    */
  get sumario(): Prisma.SumarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professorCurso`: Exposes CRUD operations for the **ProfessorCurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessorCursos
    * const professorCursos = await prisma.professorCurso.findMany()
    * ```
    */
  get professorCurso(): Prisma.ProfessorCursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presenca`: Exposes CRUD operations for the **Presenca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presencas
    * const presencas = await prisma.presenca.findMany()
    * ```
    */
  get presenca(): Prisma.PresencaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.efetividade`: Exposes CRUD operations for the **Efetividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Efetividades
    * const efetividades = await prisma.efetividade.findMany()
    * ```
    */
  get efetividade(): Prisma.EfetividadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissao`: Exposes CRUD operations for the **Permissao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissaos
    * const permissaos = await prisma.permissao.findMany()
    * ```
    */
  get permissao(): Prisma.PermissaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioPermissao`: Exposes CRUD operations for the **UsuarioPermissao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioPermissaos
    * const usuarioPermissaos = await prisma.usuarioPermissao.findMany()
    * ```
    */
  get usuarioPermissao(): Prisma.UsuarioPermissaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RefreshToken: 'RefreshToken',
    PasswordReset: 'PasswordReset',
    Professor: 'Professor',
    Funcionario: 'Funcionario',
    Usuario: 'Usuario',
    Curso: 'Curso',
    Sumario: 'Sumario',
    ProfessorCurso: 'ProfessorCurso',
    Presenca: 'Presenca',
    Efetividade: 'Efetividade',
    Permissao: 'Permissao',
    UsuarioPermissao: 'UsuarioPermissao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "refreshToken" | "passwordReset" | "professor" | "funcionario" | "usuario" | "curso" | "sumario" | "professorCurso" | "presenca" | "efetividade" | "permissao" | "usuarioPermissao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Sumario: {
        payload: Prisma.$SumarioPayload<ExtArgs>
        fields: Prisma.SumarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SumarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SumarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>
          }
          findFirst: {
            args: Prisma.SumarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SumarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>
          }
          findMany: {
            args: Prisma.SumarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>[]
          }
          create: {
            args: Prisma.SumarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>
          }
          createMany: {
            args: Prisma.SumarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SumarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>[]
          }
          delete: {
            args: Prisma.SumarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>
          }
          update: {
            args: Prisma.SumarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>
          }
          deleteMany: {
            args: Prisma.SumarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SumarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SumarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>[]
          }
          upsert: {
            args: Prisma.SumarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SumarioPayload>
          }
          aggregate: {
            args: Prisma.SumarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSumario>
          }
          groupBy: {
            args: Prisma.SumarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SumarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SumarioCountArgs<ExtArgs>
            result: $Utils.Optional<SumarioCountAggregateOutputType> | number
          }
        }
      }
      ProfessorCurso: {
        payload: Prisma.$ProfessorCursoPayload<ExtArgs>
        fields: Prisma.ProfessorCursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorCursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorCursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>
          }
          findFirst: {
            args: Prisma.ProfessorCursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorCursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>
          }
          findMany: {
            args: Prisma.ProfessorCursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>[]
          }
          create: {
            args: Prisma.ProfessorCursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>
          }
          createMany: {
            args: Prisma.ProfessorCursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>[]
          }
          delete: {
            args: Prisma.ProfessorCursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>
          }
          update: {
            args: Prisma.ProfessorCursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorCursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorCursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorCursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorCursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorCursoPayload>
          }
          aggregate: {
            args: Prisma.ProfessorCursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessorCurso>
          }
          groupBy: {
            args: Prisma.ProfessorCursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCursoCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCursoCountAggregateOutputType> | number
          }
        }
      }
      Presenca: {
        payload: Prisma.$PresencaPayload<ExtArgs>
        fields: Prisma.PresencaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresencaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresencaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>
          }
          findFirst: {
            args: Prisma.PresencaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresencaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>
          }
          findMany: {
            args: Prisma.PresencaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>[]
          }
          create: {
            args: Prisma.PresencaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>
          }
          createMany: {
            args: Prisma.PresencaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresencaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>[]
          }
          delete: {
            args: Prisma.PresencaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>
          }
          update: {
            args: Prisma.PresencaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>
          }
          deleteMany: {
            args: Prisma.PresencaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresencaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresencaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>[]
          }
          upsert: {
            args: Prisma.PresencaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencaPayload>
          }
          aggregate: {
            args: Prisma.PresencaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresenca>
          }
          groupBy: {
            args: Prisma.PresencaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresencaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresencaCountArgs<ExtArgs>
            result: $Utils.Optional<PresencaCountAggregateOutputType> | number
          }
        }
      }
      Efetividade: {
        payload: Prisma.$EfetividadePayload<ExtArgs>
        fields: Prisma.EfetividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EfetividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EfetividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>
          }
          findFirst: {
            args: Prisma.EfetividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EfetividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>
          }
          findMany: {
            args: Prisma.EfetividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>[]
          }
          create: {
            args: Prisma.EfetividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>
          }
          createMany: {
            args: Prisma.EfetividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EfetividadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>[]
          }
          delete: {
            args: Prisma.EfetividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>
          }
          update: {
            args: Prisma.EfetividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>
          }
          deleteMany: {
            args: Prisma.EfetividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EfetividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EfetividadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>[]
          }
          upsert: {
            args: Prisma.EfetividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EfetividadePayload>
          }
          aggregate: {
            args: Prisma.EfetividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEfetividade>
          }
          groupBy: {
            args: Prisma.EfetividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EfetividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EfetividadeCountArgs<ExtArgs>
            result: $Utils.Optional<EfetividadeCountAggregateOutputType> | number
          }
        }
      }
      Permissao: {
        payload: Prisma.$PermissaoPayload<ExtArgs>
        fields: Prisma.PermissaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findFirst: {
            args: Prisma.PermissaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findMany: {
            args: Prisma.PermissaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          create: {
            args: Prisma.PermissaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          createMany: {
            args: Prisma.PermissaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          delete: {
            args: Prisma.PermissaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          update: {
            args: Prisma.PermissaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          deleteMany: {
            args: Prisma.PermissaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          upsert: {
            args: Prisma.PermissaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          aggregate: {
            args: Prisma.PermissaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissao>
          }
          groupBy: {
            args: Prisma.PermissaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissaoCountArgs<ExtArgs>
            result: $Utils.Optional<PermissaoCountAggregateOutputType> | number
          }
        }
      }
      UsuarioPermissao: {
        payload: Prisma.$UsuarioPermissaoPayload<ExtArgs>
        fields: Prisma.UsuarioPermissaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioPermissaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioPermissaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>
          }
          findFirst: {
            args: Prisma.UsuarioPermissaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioPermissaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>
          }
          findMany: {
            args: Prisma.UsuarioPermissaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>[]
          }
          create: {
            args: Prisma.UsuarioPermissaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>
          }
          createMany: {
            args: Prisma.UsuarioPermissaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioPermissaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>[]
          }
          delete: {
            args: Prisma.UsuarioPermissaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>
          }
          update: {
            args: Prisma.UsuarioPermissaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioPermissaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioPermissaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioPermissaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioPermissaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPermissaoPayload>
          }
          aggregate: {
            args: Prisma.UsuarioPermissaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioPermissao>
          }
          groupBy: {
            args: Prisma.UsuarioPermissaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioPermissaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioPermissaoCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioPermissaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    refreshToken?: RefreshTokenOmit
    passwordReset?: PasswordResetOmit
    professor?: ProfessorOmit
    funcionario?: FuncionarioOmit
    usuario?: UsuarioOmit
    curso?: CursoOmit
    sumario?: SumarioOmit
    professorCurso?: ProfessorCursoOmit
    presenca?: PresencaOmit
    efetividade?: EfetividadeOmit
    permissao?: PermissaoOmit
    usuarioPermissao?: UsuarioPermissaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    cursos: number
    sumarios: number
    presencas: number
    efetividades: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | ProfessorCountOutputTypeCountCursosArgs
    sumarios?: boolean | ProfessorCountOutputTypeCountSumariosArgs
    presencas?: boolean | ProfessorCountOutputTypeCountPresencasArgs
    efetividades?: boolean | ProfessorCountOutputTypeCountEfetividadesArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorCursoWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountSumariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SumarioWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountPresencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresencaWhereInput
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountEfetividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EfetividadeWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    permissoes: number
    refreshTokens: number
    passwordResets: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissoes?: boolean | UsuarioCountOutputTypeCountPermissoesArgs
    refreshTokens?: boolean | UsuarioCountOutputTypeCountRefreshTokensArgs
    passwordResets?: boolean | UsuarioCountOutputTypeCountPasswordResetsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPermissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioPermissaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    professores: number
    sumarios: number
    presenca: number
    efetividade: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professores?: boolean | CursoCountOutputTypeCountProfessoresArgs
    sumarios?: boolean | CursoCountOutputTypeCountSumariosArgs
    presenca?: boolean | CursoCountOutputTypeCountPresencaArgs
    efetividade?: boolean | CursoCountOutputTypeCountEfetividadeArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountProfessoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorCursoWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountSumariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SumarioWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountPresencaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresencaWhereInput
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountEfetividadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EfetividadeWhereInput
  }


  /**
   * Count Type PermissaoCountOutputType
   */

  export type PermissaoCountOutputType = {
    usuarios: number
  }

  export type PermissaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PermissaoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * PermissaoCountOutputType without action
   */
  export type PermissaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissaoCountOutputType
     */
    select?: PermissaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissaoCountOutputType without action
   */
  export type PermissaoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioPermissaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    tokenId: number | null
    usuarioId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    tokenId: number | null
    usuarioId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    tokenId: number | null
    token: string | null
    usuarioId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    tokenId: number | null
    token: string | null
    usuarioId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    tokenId: number
    token: number
    usuarioId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    tokenId?: true
    usuarioId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    tokenId?: true
    usuarioId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    tokenId?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    tokenId?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    tokenId?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    tokenId: number
    token: string
    usuarioId: number
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    tokenId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenId" | "token" | "usuarioId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenId: number
      token: string
      usuarioId: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `tokenId`
     * const refreshTokenWithTokenIdOnly = await prisma.refreshToken.findMany({ select: { tokenId: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `tokenId`
     * const refreshTokenWithTokenIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { tokenId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `tokenId`
     * const refreshTokenWithTokenIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { tokenId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly tokenId: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly usuarioId: FieldRef<"RefreshToken", 'Int'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetAvgAggregateOutputType = {
    passwordResetId: number | null
    usuarioId: number | null
  }

  export type PasswordResetSumAggregateOutputType = {
    passwordResetId: number | null
    usuarioId: number | null
  }

  export type PasswordResetMinAggregateOutputType = {
    passwordResetId: number | null
    token: string | null
    usuarioId: number | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    passwordResetId: number | null
    token: string | null
    usuarioId: number | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
  }

  export type PasswordResetCountAggregateOutputType = {
    passwordResetId: number
    token: number
    usuarioId: number
    expiresAt: number
    used: number
    createdAt: number
    _all: number
  }


  export type PasswordResetAvgAggregateInputType = {
    passwordResetId?: true
    usuarioId?: true
  }

  export type PasswordResetSumAggregateInputType = {
    passwordResetId?: true
    usuarioId?: true
  }

  export type PasswordResetMinAggregateInputType = {
    passwordResetId?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    passwordResetId?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    used?: true
    createdAt?: true
  }

  export type PasswordResetCountAggregateInputType = {
    passwordResetId?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _avg?: PasswordResetAvgAggregateInputType
    _sum?: PasswordResetSumAggregateInputType
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    passwordResetId: number
    token: string
    usuarioId: number
    expiresAt: Date
    used: boolean
    createdAt: Date
    _count: PasswordResetCountAggregateOutputType | null
    _avg: PasswordResetAvgAggregateOutputType | null
    _sum: PasswordResetSumAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    passwordResetId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    passwordResetId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    passwordResetId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    passwordResetId?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"passwordResetId" | "token" | "usuarioId" | "expiresAt" | "used" | "createdAt", ExtArgs["result"]["passwordReset"]>
  export type PasswordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      passwordResetId: number
      token: string
      usuarioId: number
      expiresAt: Date
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `passwordResetId`
     * const passwordResetWithPasswordResetIdOnly = await prisma.passwordReset.findMany({ select: { passwordResetId: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `passwordResetId`
     * const passwordResetWithPasswordResetIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { passwordResetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `passwordResetId`
     * const passwordResetWithPasswordResetIdOnly = await prisma.passwordReset.updateManyAndReturn({
     *   select: { passwordResetId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly passwordResetId: FieldRef<"PasswordReset", 'Int'>
    readonly token: FieldRef<"PasswordReset", 'String'>
    readonly usuarioId: FieldRef<"PasswordReset", 'Int'>
    readonly expiresAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly used: FieldRef<"PasswordReset", 'Boolean'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    professorId: number | null
    cargaHoraria: number | null
    usuarioId: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    professorId: number | null
    cargaHoraria: number | null
    usuarioId: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    professorId: number | null
    nome: string | null
    departamento: $Enums.Departamento | null
    cargaHoraria: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorMaxAggregateOutputType = {
    professorId: number | null
    nome: string | null
    departamento: $Enums.Departamento | null
    cargaHoraria: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessorCountAggregateOutputType = {
    professorId: number
    nome: number
    departamento: number
    cargaHoraria: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    professorId?: true
    cargaHoraria?: true
    usuarioId?: true
  }

  export type ProfessorSumAggregateInputType = {
    professorId?: true
    cargaHoraria?: true
    usuarioId?: true
  }

  export type ProfessorMinAggregateInputType = {
    professorId?: true
    nome?: true
    departamento?: true
    cargaHoraria?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorMaxAggregateInputType = {
    professorId?: true
    nome?: true
    departamento?: true
    cargaHoraria?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessorCountAggregateInputType = {
    professorId?: true
    nome?: true
    departamento?: true
    cargaHoraria?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    professorId: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    usuarioId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    nome?: boolean
    departamento?: boolean
    cargaHoraria?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cursos?: boolean | Professor$cursosArgs<ExtArgs>
    sumarios?: boolean | Professor$sumariosArgs<ExtArgs>
    presencas?: boolean | Professor$presencasArgs<ExtArgs>
    efetividades?: boolean | Professor$efetividadesArgs<ExtArgs>
    usuario?: boolean | Professor$usuarioArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    nome?: boolean
    departamento?: boolean
    cargaHoraria?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Professor$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    nome?: boolean
    departamento?: boolean
    cargaHoraria?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Professor$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    professorId?: boolean
    nome?: boolean
    departamento?: boolean
    cargaHoraria?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"professorId" | "nome" | "departamento" | "cargaHoraria" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Professor$cursosArgs<ExtArgs>
    sumarios?: boolean | Professor$sumariosArgs<ExtArgs>
    presencas?: boolean | Professor$presencasArgs<ExtArgs>
    efetividades?: boolean | Professor$efetividadesArgs<ExtArgs>
    usuario?: boolean | Professor$usuarioArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Professor$usuarioArgs<ExtArgs>
  }
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Professor$usuarioArgs<ExtArgs>
  }

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      cursos: Prisma.$ProfessorCursoPayload<ExtArgs>[]
      sumarios: Prisma.$SumarioPayload<ExtArgs>[]
      presencas: Prisma.$PresencaPayload<ExtArgs>[]
      efetividades: Prisma.$EfetividadePayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      professorId: number
      nome: string
      departamento: $Enums.Departamento
      cargaHoraria: number
      usuarioId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `professorId`
     * const professorWithProfessorIdOnly = await prisma.professor.findMany({ select: { professorId: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `professorId`
     * const professorWithProfessorIdOnly = await prisma.professor.createManyAndReturn({
     *   select: { professorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `professorId`
     * const professorWithProfessorIdOnly = await prisma.professor.updateManyAndReturn({
     *   select: { professorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends Professor$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Professor$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sumarios<T extends Professor$sumariosArgs<ExtArgs> = {}>(args?: Subset<T, Professor$sumariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presencas<T extends Professor$presencasArgs<ExtArgs> = {}>(args?: Subset<T, Professor$presencasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    efetividades<T extends Professor$efetividadesArgs<ExtArgs> = {}>(args?: Subset<T, Professor$efetividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends Professor$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Professor$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly professorId: FieldRef<"Professor", 'Int'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly departamento: FieldRef<"Professor", 'Departamento'>
    readonly cargaHoraria: FieldRef<"Professor", 'Int'>
    readonly usuarioId: FieldRef<"Professor", 'Int'>
    readonly createdAt: FieldRef<"Professor", 'DateTime'>
    readonly updatedAt: FieldRef<"Professor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.cursos
   */
  export type Professor$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    where?: ProfessorCursoWhereInput
    orderBy?: ProfessorCursoOrderByWithRelationInput | ProfessorCursoOrderByWithRelationInput[]
    cursor?: ProfessorCursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorCursoScalarFieldEnum | ProfessorCursoScalarFieldEnum[]
  }

  /**
   * Professor.sumarios
   */
  export type Professor$sumariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    where?: SumarioWhereInput
    orderBy?: SumarioOrderByWithRelationInput | SumarioOrderByWithRelationInput[]
    cursor?: SumarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SumarioScalarFieldEnum | SumarioScalarFieldEnum[]
  }

  /**
   * Professor.presencas
   */
  export type Professor$presencasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    where?: PresencaWhereInput
    orderBy?: PresencaOrderByWithRelationInput | PresencaOrderByWithRelationInput[]
    cursor?: PresencaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresencaScalarFieldEnum | PresencaScalarFieldEnum[]
  }

  /**
   * Professor.efetividades
   */
  export type Professor$efetividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    where?: EfetividadeWhereInput
    orderBy?: EfetividadeOrderByWithRelationInput | EfetividadeOrderByWithRelationInput[]
    cursor?: EfetividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EfetividadeScalarFieldEnum | EfetividadeScalarFieldEnum[]
  }

  /**
   * Professor.usuario
   */
  export type Professor$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    funcionarioId: number | null
    usuarioId: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    funcionarioId: number | null
    usuarioId: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    funcionarioId: number | null
    nome: string | null
    email: string | null
    cargo: $Enums.Cargo | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    funcionarioId: number | null
    nome: string | null
    email: string | null
    cargo: $Enums.Cargo | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioCountAggregateOutputType = {
    funcionarioId: number
    nome: number
    email: number
    cargo: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    funcionarioId?: true
    usuarioId?: true
  }

  export type FuncionarioSumAggregateInputType = {
    funcionarioId?: true
    usuarioId?: true
  }

  export type FuncionarioMinAggregateInputType = {
    funcionarioId?: true
    nome?: true
    email?: true
    cargo?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    funcionarioId?: true
    nome?: true
    email?: true
    cargo?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioCountAggregateInputType = {
    funcionarioId?: true
    nome?: true
    email?: true
    cargo?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    funcionarioId: number
    nome: string
    email: string
    cargo: $Enums.Cargo
    usuarioId: number | null
    createdAt: Date
    updatedAt: Date
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funcionarioId?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Funcionario$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funcionarioId?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Funcionario$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    funcionarioId?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Funcionario$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    funcionarioId?: boolean
    nome?: boolean
    email?: boolean
    cargo?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"funcionarioId" | "nome" | "email" | "cargo" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Funcionario$usuarioArgs<ExtArgs>
  }
  export type FuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Funcionario$usuarioArgs<ExtArgs>
  }
  export type FuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Funcionario$usuarioArgs<ExtArgs>
  }

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      funcionarioId: number
      nome: string
      email: string
      cargo: $Enums.Cargo
      usuarioId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `funcionarioId`
     * const funcionarioWithFuncionarioIdOnly = await prisma.funcionario.findMany({ select: { funcionarioId: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `funcionarioId`
     * const funcionarioWithFuncionarioIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { funcionarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `funcionarioId`
     * const funcionarioWithFuncionarioIdOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { funcionarioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Funcionario$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly funcionarioId: FieldRef<"Funcionario", 'Int'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly email: FieldRef<"Funcionario", 'String'>
    readonly cargo: FieldRef<"Funcionario", 'Cargo'>
    readonly usuarioId: FieldRef<"Funcionario", 'Int'>
    readonly createdAt: FieldRef<"Funcionario", 'DateTime'>
    readonly updatedAt: FieldRef<"Funcionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario.usuario
   */
  export type Funcionario$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    usuarioId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    usuarioId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    usuarioId: number | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    tipo: $Enums.TipoUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    usuarioId: number | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    tipo: $Enums.TipoUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    usuarioId: number
    nome: number
    email: number
    senhaHash: number
    tipo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    usuarioId?: true
  }

  export type UsuarioSumAggregateInputType = {
    usuarioId?: true
  }

  export type UsuarioMinAggregateInputType = {
    usuarioId?: true
    nome?: true
    email?: true
    senhaHash?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    usuarioId?: true
    nome?: true
    email?: true
    senhaHash?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    usuarioId?: true
    nome?: true
    email?: true
    senhaHash?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    usuarioId: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permissoes?: boolean | Usuario$permissoesArgs<ExtArgs>
    professor?: boolean | Usuario$professorArgs<ExtArgs>
    funcionario?: boolean | Usuario$funcionarioArgs<ExtArgs>
    refreshTokens?: boolean | Usuario$refreshTokensArgs<ExtArgs>
    passwordResets?: boolean | Usuario$passwordResetsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    usuarioId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuarioId" | "nome" | "email" | "senhaHash" | "tipo" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissoes?: boolean | Usuario$permissoesArgs<ExtArgs>
    professor?: boolean | Usuario$professorArgs<ExtArgs>
    funcionario?: boolean | Usuario$funcionarioArgs<ExtArgs>
    refreshTokens?: boolean | Usuario$refreshTokensArgs<ExtArgs>
    passwordResets?: boolean | Usuario$passwordResetsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      permissoes: Prisma.$UsuarioPermissaoPayload<ExtArgs>[]
      professor: Prisma.$ProfessorPayload<ExtArgs> | null
      funcionario: Prisma.$FuncionarioPayload<ExtArgs> | null
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      passwordResets: Prisma.$PasswordResetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usuarioId: number
      nome: string
      email: string
      senhaHash: string
      tipo: $Enums.TipoUsuario
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `usuarioId`
     * const usuarioWithUsuarioIdOnly = await prisma.usuario.findMany({ select: { usuarioId: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `usuarioId`
     * const usuarioWithUsuarioIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { usuarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `usuarioId`
     * const usuarioWithUsuarioIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { usuarioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissoes<T extends Usuario$permissoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$permissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professor<T extends Usuario$professorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$professorArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends Usuario$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$funcionarioArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    refreshTokens<T extends Usuario$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResets<T extends Usuario$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly usuarioId: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senhaHash: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'TipoUsuario'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.permissoes
   */
  export type Usuario$permissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    where?: UsuarioPermissaoWhereInput
    orderBy?: UsuarioPermissaoOrderByWithRelationInput | UsuarioPermissaoOrderByWithRelationInput[]
    cursor?: UsuarioPermissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioPermissaoScalarFieldEnum | UsuarioPermissaoScalarFieldEnum[]
  }

  /**
   * Usuario.professor
   */
  export type Usuario$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    where?: ProfessorWhereInput
  }

  /**
   * Usuario.funcionario
   */
  export type Usuario$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
  }

  /**
   * Usuario.refreshTokens
   */
  export type Usuario$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * Usuario.passwordResets
   */
  export type Usuario$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    cursor?: PasswordResetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    cursoId: number | null
  }

  export type CursoSumAggregateOutputType = {
    cursoId: number | null
  }

  export type CursoMinAggregateOutputType = {
    cursoId: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CursoMaxAggregateOutputType = {
    cursoId: number | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CursoCountAggregateOutputType = {
    cursoId: number
    nome: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    cursoId?: true
  }

  export type CursoSumAggregateInputType = {
    cursoId?: true
  }

  export type CursoMinAggregateInputType = {
    cursoId?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CursoMaxAggregateInputType = {
    cursoId?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CursoCountAggregateInputType = {
    cursoId?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    cursoId: number
    nome: string
    descricao: string
    createdAt: Date
    updatedAt: Date
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cursoId?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professores?: boolean | Curso$professoresArgs<ExtArgs>
    sumarios?: boolean | Curso$sumariosArgs<ExtArgs>
    presenca?: boolean | Curso$presencaArgs<ExtArgs>
    efetividade?: boolean | Curso$efetividadeArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cursoId?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cursoId?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    cursoId?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cursoId" | "nome" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professores?: boolean | Curso$professoresArgs<ExtArgs>
    sumarios?: boolean | Curso$sumariosArgs<ExtArgs>
    presenca?: boolean | Curso$presencaArgs<ExtArgs>
    efetividade?: boolean | Curso$efetividadeArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      professores: Prisma.$ProfessorCursoPayload<ExtArgs>[]
      sumarios: Prisma.$SumarioPayload<ExtArgs>[]
      presenca: Prisma.$PresencaPayload<ExtArgs>[]
      efetividade: Prisma.$EfetividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cursoId: number
      nome: string
      descricao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `cursoId`
     * const cursoWithCursoIdOnly = await prisma.curso.findMany({ select: { cursoId: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `cursoId`
     * const cursoWithCursoIdOnly = await prisma.curso.createManyAndReturn({
     *   select: { cursoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `cursoId`
     * const cursoWithCursoIdOnly = await prisma.curso.updateManyAndReturn({
     *   select: { cursoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professores<T extends Curso$professoresArgs<ExtArgs> = {}>(args?: Subset<T, Curso$professoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sumarios<T extends Curso$sumariosArgs<ExtArgs> = {}>(args?: Subset<T, Curso$sumariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presenca<T extends Curso$presencaArgs<ExtArgs> = {}>(args?: Subset<T, Curso$presencaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    efetividade<T extends Curso$efetividadeArgs<ExtArgs> = {}>(args?: Subset<T, Curso$efetividadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly cursoId: FieldRef<"Curso", 'Int'>
    readonly nome: FieldRef<"Curso", 'String'>
    readonly descricao: FieldRef<"Curso", 'String'>
    readonly createdAt: FieldRef<"Curso", 'DateTime'>
    readonly updatedAt: FieldRef<"Curso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.professores
   */
  export type Curso$professoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    where?: ProfessorCursoWhereInput
    orderBy?: ProfessorCursoOrderByWithRelationInput | ProfessorCursoOrderByWithRelationInput[]
    cursor?: ProfessorCursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorCursoScalarFieldEnum | ProfessorCursoScalarFieldEnum[]
  }

  /**
   * Curso.sumarios
   */
  export type Curso$sumariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    where?: SumarioWhereInput
    orderBy?: SumarioOrderByWithRelationInput | SumarioOrderByWithRelationInput[]
    cursor?: SumarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SumarioScalarFieldEnum | SumarioScalarFieldEnum[]
  }

  /**
   * Curso.presenca
   */
  export type Curso$presencaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    where?: PresencaWhereInput
    orderBy?: PresencaOrderByWithRelationInput | PresencaOrderByWithRelationInput[]
    cursor?: PresencaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresencaScalarFieldEnum | PresencaScalarFieldEnum[]
  }

  /**
   * Curso.efetividade
   */
  export type Curso$efetividadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    where?: EfetividadeWhereInput
    orderBy?: EfetividadeOrderByWithRelationInput | EfetividadeOrderByWithRelationInput[]
    cursor?: EfetividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EfetividadeScalarFieldEnum | EfetividadeScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Sumario
   */

  export type AggregateSumario = {
    _count: SumarioCountAggregateOutputType | null
    _avg: SumarioAvgAggregateOutputType | null
    _sum: SumarioSumAggregateOutputType | null
    _min: SumarioMinAggregateOutputType | null
    _max: SumarioMaxAggregateOutputType | null
  }

  export type SumarioAvgAggregateOutputType = {
    sumarioId: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type SumarioSumAggregateOutputType = {
    sumarioId: number | null
    cursoId: number | null
    professorId: number | null
  }

  export type SumarioMinAggregateOutputType = {
    sumarioId: number | null
    data: Date | null
    conteudo: string | null
    cursoId: number | null
    professorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SumarioMaxAggregateOutputType = {
    sumarioId: number | null
    data: Date | null
    conteudo: string | null
    cursoId: number | null
    professorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SumarioCountAggregateOutputType = {
    sumarioId: number
    data: number
    conteudo: number
    cursoId: number
    professorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SumarioAvgAggregateInputType = {
    sumarioId?: true
    cursoId?: true
    professorId?: true
  }

  export type SumarioSumAggregateInputType = {
    sumarioId?: true
    cursoId?: true
    professorId?: true
  }

  export type SumarioMinAggregateInputType = {
    sumarioId?: true
    data?: true
    conteudo?: true
    cursoId?: true
    professorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SumarioMaxAggregateInputType = {
    sumarioId?: true
    data?: true
    conteudo?: true
    cursoId?: true
    professorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SumarioCountAggregateInputType = {
    sumarioId?: true
    data?: true
    conteudo?: true
    cursoId?: true
    professorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SumarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sumario to aggregate.
     */
    where?: SumarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sumarios to fetch.
     */
    orderBy?: SumarioOrderByWithRelationInput | SumarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SumarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sumarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sumarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sumarios
    **/
    _count?: true | SumarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SumarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SumarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SumarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SumarioMaxAggregateInputType
  }

  export type GetSumarioAggregateType<T extends SumarioAggregateArgs> = {
        [P in keyof T & keyof AggregateSumario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSumario[P]>
      : GetScalarType<T[P], AggregateSumario[P]>
  }




  export type SumarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SumarioWhereInput
    orderBy?: SumarioOrderByWithAggregationInput | SumarioOrderByWithAggregationInput[]
    by: SumarioScalarFieldEnum[] | SumarioScalarFieldEnum
    having?: SumarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SumarioCountAggregateInputType | true
    _avg?: SumarioAvgAggregateInputType
    _sum?: SumarioSumAggregateInputType
    _min?: SumarioMinAggregateInputType
    _max?: SumarioMaxAggregateInputType
  }

  export type SumarioGroupByOutputType = {
    sumarioId: number
    data: Date
    conteudo: string
    cursoId: number
    professorId: number
    createdAt: Date
    updatedAt: Date
    _count: SumarioCountAggregateOutputType | null
    _avg: SumarioAvgAggregateOutputType | null
    _sum: SumarioSumAggregateOutputType | null
    _min: SumarioMinAggregateOutputType | null
    _max: SumarioMaxAggregateOutputType | null
  }

  type GetSumarioGroupByPayload<T extends SumarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SumarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SumarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SumarioGroupByOutputType[P]>
            : GetScalarType<T[P], SumarioGroupByOutputType[P]>
        }
      >
    >


  export type SumarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sumarioId?: boolean
    data?: boolean
    conteudo?: boolean
    cursoId?: boolean
    professorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sumario"]>

  export type SumarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sumarioId?: boolean
    data?: boolean
    conteudo?: boolean
    cursoId?: boolean
    professorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sumario"]>

  export type SumarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sumarioId?: boolean
    data?: boolean
    conteudo?: boolean
    cursoId?: boolean
    professorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sumario"]>

  export type SumarioSelectScalar = {
    sumarioId?: boolean
    data?: boolean
    conteudo?: boolean
    cursoId?: boolean
    professorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SumarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sumarioId" | "data" | "conteudo" | "cursoId" | "professorId" | "createdAt" | "updatedAt", ExtArgs["result"]["sumario"]>
  export type SumarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type SumarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }
  export type SumarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
  }

  export type $SumarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sumario"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      professor: Prisma.$ProfessorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sumarioId: number
      data: Date
      conteudo: string
      cursoId: number
      professorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sumario"]>
    composites: {}
  }

  type SumarioGetPayload<S extends boolean | null | undefined | SumarioDefaultArgs> = $Result.GetResult<Prisma.$SumarioPayload, S>

  type SumarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SumarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SumarioCountAggregateInputType | true
    }

  export interface SumarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sumario'], meta: { name: 'Sumario' } }
    /**
     * Find zero or one Sumario that matches the filter.
     * @param {SumarioFindUniqueArgs} args - Arguments to find a Sumario
     * @example
     * // Get one Sumario
     * const sumario = await prisma.sumario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SumarioFindUniqueArgs>(args: SelectSubset<T, SumarioFindUniqueArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sumario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SumarioFindUniqueOrThrowArgs} args - Arguments to find a Sumario
     * @example
     * // Get one Sumario
     * const sumario = await prisma.sumario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SumarioFindUniqueOrThrowArgs>(args: SelectSubset<T, SumarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sumario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumarioFindFirstArgs} args - Arguments to find a Sumario
     * @example
     * // Get one Sumario
     * const sumario = await prisma.sumario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SumarioFindFirstArgs>(args?: SelectSubset<T, SumarioFindFirstArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sumario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumarioFindFirstOrThrowArgs} args - Arguments to find a Sumario
     * @example
     * // Get one Sumario
     * const sumario = await prisma.sumario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SumarioFindFirstOrThrowArgs>(args?: SelectSubset<T, SumarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sumarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sumarios
     * const sumarios = await prisma.sumario.findMany()
     * 
     * // Get first 10 Sumarios
     * const sumarios = await prisma.sumario.findMany({ take: 10 })
     * 
     * // Only select the `sumarioId`
     * const sumarioWithSumarioIdOnly = await prisma.sumario.findMany({ select: { sumarioId: true } })
     * 
     */
    findMany<T extends SumarioFindManyArgs>(args?: SelectSubset<T, SumarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sumario.
     * @param {SumarioCreateArgs} args - Arguments to create a Sumario.
     * @example
     * // Create one Sumario
     * const Sumario = await prisma.sumario.create({
     *   data: {
     *     // ... data to create a Sumario
     *   }
     * })
     * 
     */
    create<T extends SumarioCreateArgs>(args: SelectSubset<T, SumarioCreateArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sumarios.
     * @param {SumarioCreateManyArgs} args - Arguments to create many Sumarios.
     * @example
     * // Create many Sumarios
     * const sumario = await prisma.sumario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SumarioCreateManyArgs>(args?: SelectSubset<T, SumarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sumarios and returns the data saved in the database.
     * @param {SumarioCreateManyAndReturnArgs} args - Arguments to create many Sumarios.
     * @example
     * // Create many Sumarios
     * const sumario = await prisma.sumario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sumarios and only return the `sumarioId`
     * const sumarioWithSumarioIdOnly = await prisma.sumario.createManyAndReturn({
     *   select: { sumarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SumarioCreateManyAndReturnArgs>(args?: SelectSubset<T, SumarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sumario.
     * @param {SumarioDeleteArgs} args - Arguments to delete one Sumario.
     * @example
     * // Delete one Sumario
     * const Sumario = await prisma.sumario.delete({
     *   where: {
     *     // ... filter to delete one Sumario
     *   }
     * })
     * 
     */
    delete<T extends SumarioDeleteArgs>(args: SelectSubset<T, SumarioDeleteArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sumario.
     * @param {SumarioUpdateArgs} args - Arguments to update one Sumario.
     * @example
     * // Update one Sumario
     * const sumario = await prisma.sumario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SumarioUpdateArgs>(args: SelectSubset<T, SumarioUpdateArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sumarios.
     * @param {SumarioDeleteManyArgs} args - Arguments to filter Sumarios to delete.
     * @example
     * // Delete a few Sumarios
     * const { count } = await prisma.sumario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SumarioDeleteManyArgs>(args?: SelectSubset<T, SumarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sumarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sumarios
     * const sumario = await prisma.sumario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SumarioUpdateManyArgs>(args: SelectSubset<T, SumarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sumarios and returns the data updated in the database.
     * @param {SumarioUpdateManyAndReturnArgs} args - Arguments to update many Sumarios.
     * @example
     * // Update many Sumarios
     * const sumario = await prisma.sumario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sumarios and only return the `sumarioId`
     * const sumarioWithSumarioIdOnly = await prisma.sumario.updateManyAndReturn({
     *   select: { sumarioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SumarioUpdateManyAndReturnArgs>(args: SelectSubset<T, SumarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sumario.
     * @param {SumarioUpsertArgs} args - Arguments to update or create a Sumario.
     * @example
     * // Update or create a Sumario
     * const sumario = await prisma.sumario.upsert({
     *   create: {
     *     // ... data to create a Sumario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sumario we want to update
     *   }
     * })
     */
    upsert<T extends SumarioUpsertArgs>(args: SelectSubset<T, SumarioUpsertArgs<ExtArgs>>): Prisma__SumarioClient<$Result.GetResult<Prisma.$SumarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sumarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumarioCountArgs} args - Arguments to filter Sumarios to count.
     * @example
     * // Count the number of Sumarios
     * const count = await prisma.sumario.count({
     *   where: {
     *     // ... the filter for the Sumarios we want to count
     *   }
     * })
    **/
    count<T extends SumarioCountArgs>(
      args?: Subset<T, SumarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SumarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sumario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SumarioAggregateArgs>(args: Subset<T, SumarioAggregateArgs>): Prisma.PrismaPromise<GetSumarioAggregateType<T>>

    /**
     * Group by Sumario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SumarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SumarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SumarioGroupByArgs['orderBy'] }
        : { orderBy?: SumarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SumarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSumarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sumario model
   */
  readonly fields: SumarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sumario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SumarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sumario model
   */
  interface SumarioFieldRefs {
    readonly sumarioId: FieldRef<"Sumario", 'Int'>
    readonly data: FieldRef<"Sumario", 'DateTime'>
    readonly conteudo: FieldRef<"Sumario", 'String'>
    readonly cursoId: FieldRef<"Sumario", 'Int'>
    readonly professorId: FieldRef<"Sumario", 'Int'>
    readonly createdAt: FieldRef<"Sumario", 'DateTime'>
    readonly updatedAt: FieldRef<"Sumario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sumario findUnique
   */
  export type SumarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * Filter, which Sumario to fetch.
     */
    where: SumarioWhereUniqueInput
  }

  /**
   * Sumario findUniqueOrThrow
   */
  export type SumarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * Filter, which Sumario to fetch.
     */
    where: SumarioWhereUniqueInput
  }

  /**
   * Sumario findFirst
   */
  export type SumarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * Filter, which Sumario to fetch.
     */
    where?: SumarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sumarios to fetch.
     */
    orderBy?: SumarioOrderByWithRelationInput | SumarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sumarios.
     */
    cursor?: SumarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sumarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sumarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sumarios.
     */
    distinct?: SumarioScalarFieldEnum | SumarioScalarFieldEnum[]
  }

  /**
   * Sumario findFirstOrThrow
   */
  export type SumarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * Filter, which Sumario to fetch.
     */
    where?: SumarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sumarios to fetch.
     */
    orderBy?: SumarioOrderByWithRelationInput | SumarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sumarios.
     */
    cursor?: SumarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sumarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sumarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sumarios.
     */
    distinct?: SumarioScalarFieldEnum | SumarioScalarFieldEnum[]
  }

  /**
   * Sumario findMany
   */
  export type SumarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * Filter, which Sumarios to fetch.
     */
    where?: SumarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sumarios to fetch.
     */
    orderBy?: SumarioOrderByWithRelationInput | SumarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sumarios.
     */
    cursor?: SumarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sumarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sumarios.
     */
    skip?: number
    distinct?: SumarioScalarFieldEnum | SumarioScalarFieldEnum[]
  }

  /**
   * Sumario create
   */
  export type SumarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Sumario.
     */
    data: XOR<SumarioCreateInput, SumarioUncheckedCreateInput>
  }

  /**
   * Sumario createMany
   */
  export type SumarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sumarios.
     */
    data: SumarioCreateManyInput | SumarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sumario createManyAndReturn
   */
  export type SumarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * The data used to create many Sumarios.
     */
    data: SumarioCreateManyInput | SumarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sumario update
   */
  export type SumarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Sumario.
     */
    data: XOR<SumarioUpdateInput, SumarioUncheckedUpdateInput>
    /**
     * Choose, which Sumario to update.
     */
    where: SumarioWhereUniqueInput
  }

  /**
   * Sumario updateMany
   */
  export type SumarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sumarios.
     */
    data: XOR<SumarioUpdateManyMutationInput, SumarioUncheckedUpdateManyInput>
    /**
     * Filter which Sumarios to update
     */
    where?: SumarioWhereInput
    /**
     * Limit how many Sumarios to update.
     */
    limit?: number
  }

  /**
   * Sumario updateManyAndReturn
   */
  export type SumarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * The data used to update Sumarios.
     */
    data: XOR<SumarioUpdateManyMutationInput, SumarioUncheckedUpdateManyInput>
    /**
     * Filter which Sumarios to update
     */
    where?: SumarioWhereInput
    /**
     * Limit how many Sumarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sumario upsert
   */
  export type SumarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Sumario to update in case it exists.
     */
    where: SumarioWhereUniqueInput
    /**
     * In case the Sumario found by the `where` argument doesn't exist, create a new Sumario with this data.
     */
    create: XOR<SumarioCreateInput, SumarioUncheckedCreateInput>
    /**
     * In case the Sumario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SumarioUpdateInput, SumarioUncheckedUpdateInput>
  }

  /**
   * Sumario delete
   */
  export type SumarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
    /**
     * Filter which Sumario to delete.
     */
    where: SumarioWhereUniqueInput
  }

  /**
   * Sumario deleteMany
   */
  export type SumarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sumarios to delete
     */
    where?: SumarioWhereInput
    /**
     * Limit how many Sumarios to delete.
     */
    limit?: number
  }

  /**
   * Sumario without action
   */
  export type SumarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sumario
     */
    select?: SumarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sumario
     */
    omit?: SumarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SumarioInclude<ExtArgs> | null
  }


  /**
   * Model ProfessorCurso
   */

  export type AggregateProfessorCurso = {
    _count: ProfessorCursoCountAggregateOutputType | null
    _avg: ProfessorCursoAvgAggregateOutputType | null
    _sum: ProfessorCursoSumAggregateOutputType | null
    _min: ProfessorCursoMinAggregateOutputType | null
    _max: ProfessorCursoMaxAggregateOutputType | null
  }

  export type ProfessorCursoAvgAggregateOutputType = {
    professorId: number | null
    cursoId: number | null
  }

  export type ProfessorCursoSumAggregateOutputType = {
    professorId: number | null
    cursoId: number | null
  }

  export type ProfessorCursoMinAggregateOutputType = {
    professorId: number | null
    cursoId: number | null
    createdAt: Date | null
  }

  export type ProfessorCursoMaxAggregateOutputType = {
    professorId: number | null
    cursoId: number | null
    createdAt: Date | null
  }

  export type ProfessorCursoCountAggregateOutputType = {
    professorId: number
    cursoId: number
    createdAt: number
    _all: number
  }


  export type ProfessorCursoAvgAggregateInputType = {
    professorId?: true
    cursoId?: true
  }

  export type ProfessorCursoSumAggregateInputType = {
    professorId?: true
    cursoId?: true
  }

  export type ProfessorCursoMinAggregateInputType = {
    professorId?: true
    cursoId?: true
    createdAt?: true
  }

  export type ProfessorCursoMaxAggregateInputType = {
    professorId?: true
    cursoId?: true
    createdAt?: true
  }

  export type ProfessorCursoCountAggregateInputType = {
    professorId?: true
    cursoId?: true
    createdAt?: true
    _all?: true
  }

  export type ProfessorCursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessorCurso to aggregate.
     */
    where?: ProfessorCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorCursos to fetch.
     */
    orderBy?: ProfessorCursoOrderByWithRelationInput | ProfessorCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessorCursos
    **/
    _count?: true | ProfessorCursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorCursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorCursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorCursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorCursoMaxAggregateInputType
  }

  export type GetProfessorCursoAggregateType<T extends ProfessorCursoAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessorCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessorCurso[P]>
      : GetScalarType<T[P], AggregateProfessorCurso[P]>
  }




  export type ProfessorCursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorCursoWhereInput
    orderBy?: ProfessorCursoOrderByWithAggregationInput | ProfessorCursoOrderByWithAggregationInput[]
    by: ProfessorCursoScalarFieldEnum[] | ProfessorCursoScalarFieldEnum
    having?: ProfessorCursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCursoCountAggregateInputType | true
    _avg?: ProfessorCursoAvgAggregateInputType
    _sum?: ProfessorCursoSumAggregateInputType
    _min?: ProfessorCursoMinAggregateInputType
    _max?: ProfessorCursoMaxAggregateInputType
  }

  export type ProfessorCursoGroupByOutputType = {
    professorId: number
    cursoId: number
    createdAt: Date
    _count: ProfessorCursoCountAggregateOutputType | null
    _avg: ProfessorCursoAvgAggregateOutputType | null
    _sum: ProfessorCursoSumAggregateOutputType | null
    _min: ProfessorCursoMinAggregateOutputType | null
    _max: ProfessorCursoMaxAggregateOutputType | null
  }

  type GetProfessorCursoGroupByPayload<T extends ProfessorCursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorCursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorCursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorCursoGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorCursoGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorCursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorCurso"]>

  export type ProfessorCursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorCurso"]>

  export type ProfessorCursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professorCurso"]>

  export type ProfessorCursoSelectScalar = {
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
  }

  export type ProfessorCursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"professorId" | "cursoId" | "createdAt", ExtArgs["result"]["professorCurso"]>
  export type ProfessorCursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type ProfessorCursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type ProfessorCursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $ProfessorCursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessorCurso"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      professorId: number
      cursoId: number
      createdAt: Date
    }, ExtArgs["result"]["professorCurso"]>
    composites: {}
  }

  type ProfessorCursoGetPayload<S extends boolean | null | undefined | ProfessorCursoDefaultArgs> = $Result.GetResult<Prisma.$ProfessorCursoPayload, S>

  type ProfessorCursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorCursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCursoCountAggregateInputType | true
    }

  export interface ProfessorCursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessorCurso'], meta: { name: 'ProfessorCurso' } }
    /**
     * Find zero or one ProfessorCurso that matches the filter.
     * @param {ProfessorCursoFindUniqueArgs} args - Arguments to find a ProfessorCurso
     * @example
     * // Get one ProfessorCurso
     * const professorCurso = await prisma.professorCurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorCursoFindUniqueArgs>(args: SelectSubset<T, ProfessorCursoFindUniqueArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessorCurso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorCursoFindUniqueOrThrowArgs} args - Arguments to find a ProfessorCurso
     * @example
     * // Get one ProfessorCurso
     * const professorCurso = await prisma.professorCurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorCursoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorCursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessorCurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCursoFindFirstArgs} args - Arguments to find a ProfessorCurso
     * @example
     * // Get one ProfessorCurso
     * const professorCurso = await prisma.professorCurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorCursoFindFirstArgs>(args?: SelectSubset<T, ProfessorCursoFindFirstArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessorCurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCursoFindFirstOrThrowArgs} args - Arguments to find a ProfessorCurso
     * @example
     * // Get one ProfessorCurso
     * const professorCurso = await prisma.professorCurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorCursoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorCursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessorCursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessorCursos
     * const professorCursos = await prisma.professorCurso.findMany()
     * 
     * // Get first 10 ProfessorCursos
     * const professorCursos = await prisma.professorCurso.findMany({ take: 10 })
     * 
     * // Only select the `professorId`
     * const professorCursoWithProfessorIdOnly = await prisma.professorCurso.findMany({ select: { professorId: true } })
     * 
     */
    findMany<T extends ProfessorCursoFindManyArgs>(args?: SelectSubset<T, ProfessorCursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessorCurso.
     * @param {ProfessorCursoCreateArgs} args - Arguments to create a ProfessorCurso.
     * @example
     * // Create one ProfessorCurso
     * const ProfessorCurso = await prisma.professorCurso.create({
     *   data: {
     *     // ... data to create a ProfessorCurso
     *   }
     * })
     * 
     */
    create<T extends ProfessorCursoCreateArgs>(args: SelectSubset<T, ProfessorCursoCreateArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessorCursos.
     * @param {ProfessorCursoCreateManyArgs} args - Arguments to create many ProfessorCursos.
     * @example
     * // Create many ProfessorCursos
     * const professorCurso = await prisma.professorCurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCursoCreateManyArgs>(args?: SelectSubset<T, ProfessorCursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessorCursos and returns the data saved in the database.
     * @param {ProfessorCursoCreateManyAndReturnArgs} args - Arguments to create many ProfessorCursos.
     * @example
     * // Create many ProfessorCursos
     * const professorCurso = await prisma.professorCurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessorCursos and only return the `professorId`
     * const professorCursoWithProfessorIdOnly = await prisma.professorCurso.createManyAndReturn({
     *   select: { professorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCursoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessorCurso.
     * @param {ProfessorCursoDeleteArgs} args - Arguments to delete one ProfessorCurso.
     * @example
     * // Delete one ProfessorCurso
     * const ProfessorCurso = await prisma.professorCurso.delete({
     *   where: {
     *     // ... filter to delete one ProfessorCurso
     *   }
     * })
     * 
     */
    delete<T extends ProfessorCursoDeleteArgs>(args: SelectSubset<T, ProfessorCursoDeleteArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessorCurso.
     * @param {ProfessorCursoUpdateArgs} args - Arguments to update one ProfessorCurso.
     * @example
     * // Update one ProfessorCurso
     * const professorCurso = await prisma.professorCurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorCursoUpdateArgs>(args: SelectSubset<T, ProfessorCursoUpdateArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessorCursos.
     * @param {ProfessorCursoDeleteManyArgs} args - Arguments to filter ProfessorCursos to delete.
     * @example
     * // Delete a few ProfessorCursos
     * const { count } = await prisma.professorCurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorCursoDeleteManyArgs>(args?: SelectSubset<T, ProfessorCursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessorCursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessorCursos
     * const professorCurso = await prisma.professorCurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorCursoUpdateManyArgs>(args: SelectSubset<T, ProfessorCursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessorCursos and returns the data updated in the database.
     * @param {ProfessorCursoUpdateManyAndReturnArgs} args - Arguments to update many ProfessorCursos.
     * @example
     * // Update many ProfessorCursos
     * const professorCurso = await prisma.professorCurso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessorCursos and only return the `professorId`
     * const professorCursoWithProfessorIdOnly = await prisma.professorCurso.updateManyAndReturn({
     *   select: { professorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorCursoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorCursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessorCurso.
     * @param {ProfessorCursoUpsertArgs} args - Arguments to update or create a ProfessorCurso.
     * @example
     * // Update or create a ProfessorCurso
     * const professorCurso = await prisma.professorCurso.upsert({
     *   create: {
     *     // ... data to create a ProfessorCurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessorCurso we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorCursoUpsertArgs>(args: SelectSubset<T, ProfessorCursoUpsertArgs<ExtArgs>>): Prisma__ProfessorCursoClient<$Result.GetResult<Prisma.$ProfessorCursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessorCursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCursoCountArgs} args - Arguments to filter ProfessorCursos to count.
     * @example
     * // Count the number of ProfessorCursos
     * const count = await prisma.professorCurso.count({
     *   where: {
     *     // ... the filter for the ProfessorCursos we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCursoCountArgs>(
      args?: Subset<T, ProfessorCursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessorCurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessorCursoAggregateArgs>(args: Subset<T, ProfessorCursoAggregateArgs>): Prisma.PrismaPromise<GetProfessorCursoAggregateType<T>>

    /**
     * Group by ProfessorCurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessorCursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorCursoGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorCursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessorCursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessorCurso model
   */
  readonly fields: ProfessorCursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessorCurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorCursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfessorCurso model
   */
  interface ProfessorCursoFieldRefs {
    readonly professorId: FieldRef<"ProfessorCurso", 'Int'>
    readonly cursoId: FieldRef<"ProfessorCurso", 'Int'>
    readonly createdAt: FieldRef<"ProfessorCurso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfessorCurso findUnique
   */
  export type ProfessorCursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorCurso to fetch.
     */
    where: ProfessorCursoWhereUniqueInput
  }

  /**
   * ProfessorCurso findUniqueOrThrow
   */
  export type ProfessorCursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorCurso to fetch.
     */
    where: ProfessorCursoWhereUniqueInput
  }

  /**
   * ProfessorCurso findFirst
   */
  export type ProfessorCursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorCurso to fetch.
     */
    where?: ProfessorCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorCursos to fetch.
     */
    orderBy?: ProfessorCursoOrderByWithRelationInput | ProfessorCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessorCursos.
     */
    cursor?: ProfessorCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessorCursos.
     */
    distinct?: ProfessorCursoScalarFieldEnum | ProfessorCursoScalarFieldEnum[]
  }

  /**
   * ProfessorCurso findFirstOrThrow
   */
  export type ProfessorCursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorCurso to fetch.
     */
    where?: ProfessorCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorCursos to fetch.
     */
    orderBy?: ProfessorCursoOrderByWithRelationInput | ProfessorCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessorCursos.
     */
    cursor?: ProfessorCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessorCursos.
     */
    distinct?: ProfessorCursoScalarFieldEnum | ProfessorCursoScalarFieldEnum[]
  }

  /**
   * ProfessorCurso findMany
   */
  export type ProfessorCursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * Filter, which ProfessorCursos to fetch.
     */
    where?: ProfessorCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessorCursos to fetch.
     */
    orderBy?: ProfessorCursoOrderByWithRelationInput | ProfessorCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessorCursos.
     */
    cursor?: ProfessorCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessorCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessorCursos.
     */
    skip?: number
    distinct?: ProfessorCursoScalarFieldEnum | ProfessorCursoScalarFieldEnum[]
  }

  /**
   * ProfessorCurso create
   */
  export type ProfessorCursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessorCurso.
     */
    data: XOR<ProfessorCursoCreateInput, ProfessorCursoUncheckedCreateInput>
  }

  /**
   * ProfessorCurso createMany
   */
  export type ProfessorCursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessorCursos.
     */
    data: ProfessorCursoCreateManyInput | ProfessorCursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessorCurso createManyAndReturn
   */
  export type ProfessorCursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessorCursos.
     */
    data: ProfessorCursoCreateManyInput | ProfessorCursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessorCurso update
   */
  export type ProfessorCursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessorCurso.
     */
    data: XOR<ProfessorCursoUpdateInput, ProfessorCursoUncheckedUpdateInput>
    /**
     * Choose, which ProfessorCurso to update.
     */
    where: ProfessorCursoWhereUniqueInput
  }

  /**
   * ProfessorCurso updateMany
   */
  export type ProfessorCursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessorCursos.
     */
    data: XOR<ProfessorCursoUpdateManyMutationInput, ProfessorCursoUncheckedUpdateManyInput>
    /**
     * Filter which ProfessorCursos to update
     */
    where?: ProfessorCursoWhereInput
    /**
     * Limit how many ProfessorCursos to update.
     */
    limit?: number
  }

  /**
   * ProfessorCurso updateManyAndReturn
   */
  export type ProfessorCursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * The data used to update ProfessorCursos.
     */
    data: XOR<ProfessorCursoUpdateManyMutationInput, ProfessorCursoUncheckedUpdateManyInput>
    /**
     * Filter which ProfessorCursos to update
     */
    where?: ProfessorCursoWhereInput
    /**
     * Limit how many ProfessorCursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessorCurso upsert
   */
  export type ProfessorCursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessorCurso to update in case it exists.
     */
    where: ProfessorCursoWhereUniqueInput
    /**
     * In case the ProfessorCurso found by the `where` argument doesn't exist, create a new ProfessorCurso with this data.
     */
    create: XOR<ProfessorCursoCreateInput, ProfessorCursoUncheckedCreateInput>
    /**
     * In case the ProfessorCurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorCursoUpdateInput, ProfessorCursoUncheckedUpdateInput>
  }

  /**
   * ProfessorCurso delete
   */
  export type ProfessorCursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
    /**
     * Filter which ProfessorCurso to delete.
     */
    where: ProfessorCursoWhereUniqueInput
  }

  /**
   * ProfessorCurso deleteMany
   */
  export type ProfessorCursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessorCursos to delete
     */
    where?: ProfessorCursoWhereInput
    /**
     * Limit how many ProfessorCursos to delete.
     */
    limit?: number
  }

  /**
   * ProfessorCurso without action
   */
  export type ProfessorCursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCurso
     */
    select?: ProfessorCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessorCurso
     */
    omit?: ProfessorCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorCursoInclude<ExtArgs> | null
  }


  /**
   * Model Presenca
   */

  export type AggregatePresenca = {
    _count: PresencaCountAggregateOutputType | null
    _avg: PresencaAvgAggregateOutputType | null
    _sum: PresencaSumAggregateOutputType | null
    _min: PresencaMinAggregateOutputType | null
    _max: PresencaMaxAggregateOutputType | null
  }

  export type PresencaAvgAggregateOutputType = {
    presencaId: number | null
    professorId: number | null
    cursoId: number | null
  }

  export type PresencaSumAggregateOutputType = {
    presencaId: number | null
    professorId: number | null
    cursoId: number | null
  }

  export type PresencaMinAggregateOutputType = {
    presencaId: number | null
    data: Date | null
    estado: $Enums.Estado | null
    professorId: number | null
    cursoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresencaMaxAggregateOutputType = {
    presencaId: number | null
    data: Date | null
    estado: $Enums.Estado | null
    professorId: number | null
    cursoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresencaCountAggregateOutputType = {
    presencaId: number
    data: number
    estado: number
    professorId: number
    cursoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PresencaAvgAggregateInputType = {
    presencaId?: true
    professorId?: true
    cursoId?: true
  }

  export type PresencaSumAggregateInputType = {
    presencaId?: true
    professorId?: true
    cursoId?: true
  }

  export type PresencaMinAggregateInputType = {
    presencaId?: true
    data?: true
    estado?: true
    professorId?: true
    cursoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresencaMaxAggregateInputType = {
    presencaId?: true
    data?: true
    estado?: true
    professorId?: true
    cursoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresencaCountAggregateInputType = {
    presencaId?: true
    data?: true
    estado?: true
    professorId?: true
    cursoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PresencaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presenca to aggregate.
     */
    where?: PresencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presencas to fetch.
     */
    orderBy?: PresencaOrderByWithRelationInput | PresencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presencas
    **/
    _count?: true | PresencaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresencaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresencaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresencaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresencaMaxAggregateInputType
  }

  export type GetPresencaAggregateType<T extends PresencaAggregateArgs> = {
        [P in keyof T & keyof AggregatePresenca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresenca[P]>
      : GetScalarType<T[P], AggregatePresenca[P]>
  }




  export type PresencaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresencaWhereInput
    orderBy?: PresencaOrderByWithAggregationInput | PresencaOrderByWithAggregationInput[]
    by: PresencaScalarFieldEnum[] | PresencaScalarFieldEnum
    having?: PresencaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresencaCountAggregateInputType | true
    _avg?: PresencaAvgAggregateInputType
    _sum?: PresencaSumAggregateInputType
    _min?: PresencaMinAggregateInputType
    _max?: PresencaMaxAggregateInputType
  }

  export type PresencaGroupByOutputType = {
    presencaId: number
    data: Date
    estado: $Enums.Estado
    professorId: number
    cursoId: number
    createdAt: Date
    updatedAt: Date
    _count: PresencaCountAggregateOutputType | null
    _avg: PresencaAvgAggregateOutputType | null
    _sum: PresencaSumAggregateOutputType | null
    _min: PresencaMinAggregateOutputType | null
    _max: PresencaMaxAggregateOutputType | null
  }

  type GetPresencaGroupByPayload<T extends PresencaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresencaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresencaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresencaGroupByOutputType[P]>
            : GetScalarType<T[P], PresencaGroupByOutputType[P]>
        }
      >
    >


  export type PresencaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presencaId?: boolean
    data?: boolean
    estado?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presenca"]>

  export type PresencaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presencaId?: boolean
    data?: boolean
    estado?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presenca"]>

  export type PresencaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presencaId?: boolean
    data?: boolean
    estado?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presenca"]>

  export type PresencaSelectScalar = {
    presencaId?: boolean
    data?: boolean
    estado?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PresencaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"presencaId" | "data" | "estado" | "professorId" | "cursoId" | "createdAt" | "updatedAt", ExtArgs["result"]["presenca"]>
  export type PresencaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type PresencaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type PresencaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $PresencaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presenca"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      presencaId: number
      data: Date
      estado: $Enums.Estado
      professorId: number
      cursoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["presenca"]>
    composites: {}
  }

  type PresencaGetPayload<S extends boolean | null | undefined | PresencaDefaultArgs> = $Result.GetResult<Prisma.$PresencaPayload, S>

  type PresencaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresencaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresencaCountAggregateInputType | true
    }

  export interface PresencaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presenca'], meta: { name: 'Presenca' } }
    /**
     * Find zero or one Presenca that matches the filter.
     * @param {PresencaFindUniqueArgs} args - Arguments to find a Presenca
     * @example
     * // Get one Presenca
     * const presenca = await prisma.presenca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresencaFindUniqueArgs>(args: SelectSubset<T, PresencaFindUniqueArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presenca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresencaFindUniqueOrThrowArgs} args - Arguments to find a Presenca
     * @example
     * // Get one Presenca
     * const presenca = await prisma.presenca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresencaFindUniqueOrThrowArgs>(args: SelectSubset<T, PresencaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presenca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaFindFirstArgs} args - Arguments to find a Presenca
     * @example
     * // Get one Presenca
     * const presenca = await prisma.presenca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresencaFindFirstArgs>(args?: SelectSubset<T, PresencaFindFirstArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presenca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaFindFirstOrThrowArgs} args - Arguments to find a Presenca
     * @example
     * // Get one Presenca
     * const presenca = await prisma.presenca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresencaFindFirstOrThrowArgs>(args?: SelectSubset<T, PresencaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presencas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presencas
     * const presencas = await prisma.presenca.findMany()
     * 
     * // Get first 10 Presencas
     * const presencas = await prisma.presenca.findMany({ take: 10 })
     * 
     * // Only select the `presencaId`
     * const presencaWithPresencaIdOnly = await prisma.presenca.findMany({ select: { presencaId: true } })
     * 
     */
    findMany<T extends PresencaFindManyArgs>(args?: SelectSubset<T, PresencaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presenca.
     * @param {PresencaCreateArgs} args - Arguments to create a Presenca.
     * @example
     * // Create one Presenca
     * const Presenca = await prisma.presenca.create({
     *   data: {
     *     // ... data to create a Presenca
     *   }
     * })
     * 
     */
    create<T extends PresencaCreateArgs>(args: SelectSubset<T, PresencaCreateArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presencas.
     * @param {PresencaCreateManyArgs} args - Arguments to create many Presencas.
     * @example
     * // Create many Presencas
     * const presenca = await prisma.presenca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresencaCreateManyArgs>(args?: SelectSubset<T, PresencaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presencas and returns the data saved in the database.
     * @param {PresencaCreateManyAndReturnArgs} args - Arguments to create many Presencas.
     * @example
     * // Create many Presencas
     * const presenca = await prisma.presenca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presencas and only return the `presencaId`
     * const presencaWithPresencaIdOnly = await prisma.presenca.createManyAndReturn({
     *   select: { presencaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresencaCreateManyAndReturnArgs>(args?: SelectSubset<T, PresencaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Presenca.
     * @param {PresencaDeleteArgs} args - Arguments to delete one Presenca.
     * @example
     * // Delete one Presenca
     * const Presenca = await prisma.presenca.delete({
     *   where: {
     *     // ... filter to delete one Presenca
     *   }
     * })
     * 
     */
    delete<T extends PresencaDeleteArgs>(args: SelectSubset<T, PresencaDeleteArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presenca.
     * @param {PresencaUpdateArgs} args - Arguments to update one Presenca.
     * @example
     * // Update one Presenca
     * const presenca = await prisma.presenca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresencaUpdateArgs>(args: SelectSubset<T, PresencaUpdateArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presencas.
     * @param {PresencaDeleteManyArgs} args - Arguments to filter Presencas to delete.
     * @example
     * // Delete a few Presencas
     * const { count } = await prisma.presenca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresencaDeleteManyArgs>(args?: SelectSubset<T, PresencaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presencas
     * const presenca = await prisma.presenca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresencaUpdateManyArgs>(args: SelectSubset<T, PresencaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presencas and returns the data updated in the database.
     * @param {PresencaUpdateManyAndReturnArgs} args - Arguments to update many Presencas.
     * @example
     * // Update many Presencas
     * const presenca = await prisma.presenca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presencas and only return the `presencaId`
     * const presencaWithPresencaIdOnly = await prisma.presenca.updateManyAndReturn({
     *   select: { presencaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PresencaUpdateManyAndReturnArgs>(args: SelectSubset<T, PresencaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Presenca.
     * @param {PresencaUpsertArgs} args - Arguments to update or create a Presenca.
     * @example
     * // Update or create a Presenca
     * const presenca = await prisma.presenca.upsert({
     *   create: {
     *     // ... data to create a Presenca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presenca we want to update
     *   }
     * })
     */
    upsert<T extends PresencaUpsertArgs>(args: SelectSubset<T, PresencaUpsertArgs<ExtArgs>>): Prisma__PresencaClient<$Result.GetResult<Prisma.$PresencaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaCountArgs} args - Arguments to filter Presencas to count.
     * @example
     * // Count the number of Presencas
     * const count = await prisma.presenca.count({
     *   where: {
     *     // ... the filter for the Presencas we want to count
     *   }
     * })
    **/
    count<T extends PresencaCountArgs>(
      args?: Subset<T, PresencaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresencaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresencaAggregateArgs>(args: Subset<T, PresencaAggregateArgs>): Prisma.PrismaPromise<GetPresencaAggregateType<T>>

    /**
     * Group by Presenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresencaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresencaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresencaGroupByArgs['orderBy'] }
        : { orderBy?: PresencaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresencaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresencaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presenca model
   */
  readonly fields: PresencaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presenca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresencaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Presenca model
   */
  interface PresencaFieldRefs {
    readonly presencaId: FieldRef<"Presenca", 'Int'>
    readonly data: FieldRef<"Presenca", 'DateTime'>
    readonly estado: FieldRef<"Presenca", 'Estado'>
    readonly professorId: FieldRef<"Presenca", 'Int'>
    readonly cursoId: FieldRef<"Presenca", 'Int'>
    readonly createdAt: FieldRef<"Presenca", 'DateTime'>
    readonly updatedAt: FieldRef<"Presenca", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Presenca findUnique
   */
  export type PresencaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * Filter, which Presenca to fetch.
     */
    where: PresencaWhereUniqueInput
  }

  /**
   * Presenca findUniqueOrThrow
   */
  export type PresencaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * Filter, which Presenca to fetch.
     */
    where: PresencaWhereUniqueInput
  }

  /**
   * Presenca findFirst
   */
  export type PresencaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * Filter, which Presenca to fetch.
     */
    where?: PresencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presencas to fetch.
     */
    orderBy?: PresencaOrderByWithRelationInput | PresencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presencas.
     */
    cursor?: PresencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presencas.
     */
    distinct?: PresencaScalarFieldEnum | PresencaScalarFieldEnum[]
  }

  /**
   * Presenca findFirstOrThrow
   */
  export type PresencaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * Filter, which Presenca to fetch.
     */
    where?: PresencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presencas to fetch.
     */
    orderBy?: PresencaOrderByWithRelationInput | PresencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presencas.
     */
    cursor?: PresencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presencas.
     */
    distinct?: PresencaScalarFieldEnum | PresencaScalarFieldEnum[]
  }

  /**
   * Presenca findMany
   */
  export type PresencaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * Filter, which Presencas to fetch.
     */
    where?: PresencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presencas to fetch.
     */
    orderBy?: PresencaOrderByWithRelationInput | PresencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presencas.
     */
    cursor?: PresencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presencas.
     */
    skip?: number
    distinct?: PresencaScalarFieldEnum | PresencaScalarFieldEnum[]
  }

  /**
   * Presenca create
   */
  export type PresencaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * The data needed to create a Presenca.
     */
    data: XOR<PresencaCreateInput, PresencaUncheckedCreateInput>
  }

  /**
   * Presenca createMany
   */
  export type PresencaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presencas.
     */
    data: PresencaCreateManyInput | PresencaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presenca createManyAndReturn
   */
  export type PresencaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * The data used to create many Presencas.
     */
    data: PresencaCreateManyInput | PresencaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presenca update
   */
  export type PresencaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * The data needed to update a Presenca.
     */
    data: XOR<PresencaUpdateInput, PresencaUncheckedUpdateInput>
    /**
     * Choose, which Presenca to update.
     */
    where: PresencaWhereUniqueInput
  }

  /**
   * Presenca updateMany
   */
  export type PresencaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presencas.
     */
    data: XOR<PresencaUpdateManyMutationInput, PresencaUncheckedUpdateManyInput>
    /**
     * Filter which Presencas to update
     */
    where?: PresencaWhereInput
    /**
     * Limit how many Presencas to update.
     */
    limit?: number
  }

  /**
   * Presenca updateManyAndReturn
   */
  export type PresencaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * The data used to update Presencas.
     */
    data: XOR<PresencaUpdateManyMutationInput, PresencaUncheckedUpdateManyInput>
    /**
     * Filter which Presencas to update
     */
    where?: PresencaWhereInput
    /**
     * Limit how many Presencas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presenca upsert
   */
  export type PresencaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * The filter to search for the Presenca to update in case it exists.
     */
    where: PresencaWhereUniqueInput
    /**
     * In case the Presenca found by the `where` argument doesn't exist, create a new Presenca with this data.
     */
    create: XOR<PresencaCreateInput, PresencaUncheckedCreateInput>
    /**
     * In case the Presenca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresencaUpdateInput, PresencaUncheckedUpdateInput>
  }

  /**
   * Presenca delete
   */
  export type PresencaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
    /**
     * Filter which Presenca to delete.
     */
    where: PresencaWhereUniqueInput
  }

  /**
   * Presenca deleteMany
   */
  export type PresencaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presencas to delete
     */
    where?: PresencaWhereInput
    /**
     * Limit how many Presencas to delete.
     */
    limit?: number
  }

  /**
   * Presenca without action
   */
  export type PresencaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presenca
     */
    select?: PresencaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presenca
     */
    omit?: PresencaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresencaInclude<ExtArgs> | null
  }


  /**
   * Model Efetividade
   */

  export type AggregateEfetividade = {
    _count: EfetividadeCountAggregateOutputType | null
    _avg: EfetividadeAvgAggregateOutputType | null
    _sum: EfetividadeSumAggregateOutputType | null
    _min: EfetividadeMinAggregateOutputType | null
    _max: EfetividadeMaxAggregateOutputType | null
  }

  export type EfetividadeAvgAggregateOutputType = {
    efetividadeId: number | null
    horasTrabalhadas: number | null
    professorId: number | null
    cursoId: number | null
  }

  export type EfetividadeSumAggregateOutputType = {
    efetividadeId: number | null
    horasTrabalhadas: number | null
    professorId: number | null
    cursoId: number | null
  }

  export type EfetividadeMinAggregateOutputType = {
    efetividadeId: number | null
    data: Date | null
    horasTrabalhadas: number | null
    professorId: number | null
    cursoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EfetividadeMaxAggregateOutputType = {
    efetividadeId: number | null
    data: Date | null
    horasTrabalhadas: number | null
    professorId: number | null
    cursoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EfetividadeCountAggregateOutputType = {
    efetividadeId: number
    data: number
    horasTrabalhadas: number
    professorId: number
    cursoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EfetividadeAvgAggregateInputType = {
    efetividadeId?: true
    horasTrabalhadas?: true
    professorId?: true
    cursoId?: true
  }

  export type EfetividadeSumAggregateInputType = {
    efetividadeId?: true
    horasTrabalhadas?: true
    professorId?: true
    cursoId?: true
  }

  export type EfetividadeMinAggregateInputType = {
    efetividadeId?: true
    data?: true
    horasTrabalhadas?: true
    professorId?: true
    cursoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EfetividadeMaxAggregateInputType = {
    efetividadeId?: true
    data?: true
    horasTrabalhadas?: true
    professorId?: true
    cursoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EfetividadeCountAggregateInputType = {
    efetividadeId?: true
    data?: true
    horasTrabalhadas?: true
    professorId?: true
    cursoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EfetividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Efetividade to aggregate.
     */
    where?: EfetividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Efetividades to fetch.
     */
    orderBy?: EfetividadeOrderByWithRelationInput | EfetividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EfetividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Efetividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Efetividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Efetividades
    **/
    _count?: true | EfetividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EfetividadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EfetividadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EfetividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EfetividadeMaxAggregateInputType
  }

  export type GetEfetividadeAggregateType<T extends EfetividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateEfetividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEfetividade[P]>
      : GetScalarType<T[P], AggregateEfetividade[P]>
  }




  export type EfetividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EfetividadeWhereInput
    orderBy?: EfetividadeOrderByWithAggregationInput | EfetividadeOrderByWithAggregationInput[]
    by: EfetividadeScalarFieldEnum[] | EfetividadeScalarFieldEnum
    having?: EfetividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EfetividadeCountAggregateInputType | true
    _avg?: EfetividadeAvgAggregateInputType
    _sum?: EfetividadeSumAggregateInputType
    _min?: EfetividadeMinAggregateInputType
    _max?: EfetividadeMaxAggregateInputType
  }

  export type EfetividadeGroupByOutputType = {
    efetividadeId: number
    data: Date
    horasTrabalhadas: number
    professorId: number
    cursoId: number
    createdAt: Date
    updatedAt: Date
    _count: EfetividadeCountAggregateOutputType | null
    _avg: EfetividadeAvgAggregateOutputType | null
    _sum: EfetividadeSumAggregateOutputType | null
    _min: EfetividadeMinAggregateOutputType | null
    _max: EfetividadeMaxAggregateOutputType | null
  }

  type GetEfetividadeGroupByPayload<T extends EfetividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EfetividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EfetividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EfetividadeGroupByOutputType[P]>
            : GetScalarType<T[P], EfetividadeGroupByOutputType[P]>
        }
      >
    >


  export type EfetividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    efetividadeId?: boolean
    data?: boolean
    horasTrabalhadas?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["efetividade"]>

  export type EfetividadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    efetividadeId?: boolean
    data?: boolean
    horasTrabalhadas?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["efetividade"]>

  export type EfetividadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    efetividadeId?: boolean
    data?: boolean
    horasTrabalhadas?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["efetividade"]>

  export type EfetividadeSelectScalar = {
    efetividadeId?: boolean
    data?: boolean
    horasTrabalhadas?: boolean
    professorId?: boolean
    cursoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EfetividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"efetividadeId" | "data" | "horasTrabalhadas" | "professorId" | "cursoId" | "createdAt" | "updatedAt", ExtArgs["result"]["efetividade"]>
  export type EfetividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type EfetividadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type EfetividadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $EfetividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Efetividade"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      efetividadeId: number
      data: Date
      horasTrabalhadas: number
      professorId: number
      cursoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["efetividade"]>
    composites: {}
  }

  type EfetividadeGetPayload<S extends boolean | null | undefined | EfetividadeDefaultArgs> = $Result.GetResult<Prisma.$EfetividadePayload, S>

  type EfetividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EfetividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EfetividadeCountAggregateInputType | true
    }

  export interface EfetividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Efetividade'], meta: { name: 'Efetividade' } }
    /**
     * Find zero or one Efetividade that matches the filter.
     * @param {EfetividadeFindUniqueArgs} args - Arguments to find a Efetividade
     * @example
     * // Get one Efetividade
     * const efetividade = await prisma.efetividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EfetividadeFindUniqueArgs>(args: SelectSubset<T, EfetividadeFindUniqueArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Efetividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EfetividadeFindUniqueOrThrowArgs} args - Arguments to find a Efetividade
     * @example
     * // Get one Efetividade
     * const efetividade = await prisma.efetividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EfetividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, EfetividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Efetividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EfetividadeFindFirstArgs} args - Arguments to find a Efetividade
     * @example
     * // Get one Efetividade
     * const efetividade = await prisma.efetividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EfetividadeFindFirstArgs>(args?: SelectSubset<T, EfetividadeFindFirstArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Efetividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EfetividadeFindFirstOrThrowArgs} args - Arguments to find a Efetividade
     * @example
     * // Get one Efetividade
     * const efetividade = await prisma.efetividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EfetividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, EfetividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Efetividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EfetividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Efetividades
     * const efetividades = await prisma.efetividade.findMany()
     * 
     * // Get first 10 Efetividades
     * const efetividades = await prisma.efetividade.findMany({ take: 10 })
     * 
     * // Only select the `efetividadeId`
     * const efetividadeWithEfetividadeIdOnly = await prisma.efetividade.findMany({ select: { efetividadeId: true } })
     * 
     */
    findMany<T extends EfetividadeFindManyArgs>(args?: SelectSubset<T, EfetividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Efetividade.
     * @param {EfetividadeCreateArgs} args - Arguments to create a Efetividade.
     * @example
     * // Create one Efetividade
     * const Efetividade = await prisma.efetividade.create({
     *   data: {
     *     // ... data to create a Efetividade
     *   }
     * })
     * 
     */
    create<T extends EfetividadeCreateArgs>(args: SelectSubset<T, EfetividadeCreateArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Efetividades.
     * @param {EfetividadeCreateManyArgs} args - Arguments to create many Efetividades.
     * @example
     * // Create many Efetividades
     * const efetividade = await prisma.efetividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EfetividadeCreateManyArgs>(args?: SelectSubset<T, EfetividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Efetividades and returns the data saved in the database.
     * @param {EfetividadeCreateManyAndReturnArgs} args - Arguments to create many Efetividades.
     * @example
     * // Create many Efetividades
     * const efetividade = await prisma.efetividade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Efetividades and only return the `efetividadeId`
     * const efetividadeWithEfetividadeIdOnly = await prisma.efetividade.createManyAndReturn({
     *   select: { efetividadeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EfetividadeCreateManyAndReturnArgs>(args?: SelectSubset<T, EfetividadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Efetividade.
     * @param {EfetividadeDeleteArgs} args - Arguments to delete one Efetividade.
     * @example
     * // Delete one Efetividade
     * const Efetividade = await prisma.efetividade.delete({
     *   where: {
     *     // ... filter to delete one Efetividade
     *   }
     * })
     * 
     */
    delete<T extends EfetividadeDeleteArgs>(args: SelectSubset<T, EfetividadeDeleteArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Efetividade.
     * @param {EfetividadeUpdateArgs} args - Arguments to update one Efetividade.
     * @example
     * // Update one Efetividade
     * const efetividade = await prisma.efetividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EfetividadeUpdateArgs>(args: SelectSubset<T, EfetividadeUpdateArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Efetividades.
     * @param {EfetividadeDeleteManyArgs} args - Arguments to filter Efetividades to delete.
     * @example
     * // Delete a few Efetividades
     * const { count } = await prisma.efetividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EfetividadeDeleteManyArgs>(args?: SelectSubset<T, EfetividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Efetividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EfetividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Efetividades
     * const efetividade = await prisma.efetividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EfetividadeUpdateManyArgs>(args: SelectSubset<T, EfetividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Efetividades and returns the data updated in the database.
     * @param {EfetividadeUpdateManyAndReturnArgs} args - Arguments to update many Efetividades.
     * @example
     * // Update many Efetividades
     * const efetividade = await prisma.efetividade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Efetividades and only return the `efetividadeId`
     * const efetividadeWithEfetividadeIdOnly = await prisma.efetividade.updateManyAndReturn({
     *   select: { efetividadeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EfetividadeUpdateManyAndReturnArgs>(args: SelectSubset<T, EfetividadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Efetividade.
     * @param {EfetividadeUpsertArgs} args - Arguments to update or create a Efetividade.
     * @example
     * // Update or create a Efetividade
     * const efetividade = await prisma.efetividade.upsert({
     *   create: {
     *     // ... data to create a Efetividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Efetividade we want to update
     *   }
     * })
     */
    upsert<T extends EfetividadeUpsertArgs>(args: SelectSubset<T, EfetividadeUpsertArgs<ExtArgs>>): Prisma__EfetividadeClient<$Result.GetResult<Prisma.$EfetividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Efetividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EfetividadeCountArgs} args - Arguments to filter Efetividades to count.
     * @example
     * // Count the number of Efetividades
     * const count = await prisma.efetividade.count({
     *   where: {
     *     // ... the filter for the Efetividades we want to count
     *   }
     * })
    **/
    count<T extends EfetividadeCountArgs>(
      args?: Subset<T, EfetividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EfetividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Efetividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EfetividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EfetividadeAggregateArgs>(args: Subset<T, EfetividadeAggregateArgs>): Prisma.PrismaPromise<GetEfetividadeAggregateType<T>>

    /**
     * Group by Efetividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EfetividadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EfetividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EfetividadeGroupByArgs['orderBy'] }
        : { orderBy?: EfetividadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EfetividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEfetividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Efetividade model
   */
  readonly fields: EfetividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Efetividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EfetividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Efetividade model
   */
  interface EfetividadeFieldRefs {
    readonly efetividadeId: FieldRef<"Efetividade", 'Int'>
    readonly data: FieldRef<"Efetividade", 'DateTime'>
    readonly horasTrabalhadas: FieldRef<"Efetividade", 'Int'>
    readonly professorId: FieldRef<"Efetividade", 'Int'>
    readonly cursoId: FieldRef<"Efetividade", 'Int'>
    readonly createdAt: FieldRef<"Efetividade", 'DateTime'>
    readonly updatedAt: FieldRef<"Efetividade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Efetividade findUnique
   */
  export type EfetividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * Filter, which Efetividade to fetch.
     */
    where: EfetividadeWhereUniqueInput
  }

  /**
   * Efetividade findUniqueOrThrow
   */
  export type EfetividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * Filter, which Efetividade to fetch.
     */
    where: EfetividadeWhereUniqueInput
  }

  /**
   * Efetividade findFirst
   */
  export type EfetividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * Filter, which Efetividade to fetch.
     */
    where?: EfetividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Efetividades to fetch.
     */
    orderBy?: EfetividadeOrderByWithRelationInput | EfetividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Efetividades.
     */
    cursor?: EfetividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Efetividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Efetividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Efetividades.
     */
    distinct?: EfetividadeScalarFieldEnum | EfetividadeScalarFieldEnum[]
  }

  /**
   * Efetividade findFirstOrThrow
   */
  export type EfetividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * Filter, which Efetividade to fetch.
     */
    where?: EfetividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Efetividades to fetch.
     */
    orderBy?: EfetividadeOrderByWithRelationInput | EfetividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Efetividades.
     */
    cursor?: EfetividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Efetividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Efetividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Efetividades.
     */
    distinct?: EfetividadeScalarFieldEnum | EfetividadeScalarFieldEnum[]
  }

  /**
   * Efetividade findMany
   */
  export type EfetividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * Filter, which Efetividades to fetch.
     */
    where?: EfetividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Efetividades to fetch.
     */
    orderBy?: EfetividadeOrderByWithRelationInput | EfetividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Efetividades.
     */
    cursor?: EfetividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Efetividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Efetividades.
     */
    skip?: number
    distinct?: EfetividadeScalarFieldEnum | EfetividadeScalarFieldEnum[]
  }

  /**
   * Efetividade create
   */
  export type EfetividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Efetividade.
     */
    data: XOR<EfetividadeCreateInput, EfetividadeUncheckedCreateInput>
  }

  /**
   * Efetividade createMany
   */
  export type EfetividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Efetividades.
     */
    data: EfetividadeCreateManyInput | EfetividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Efetividade createManyAndReturn
   */
  export type EfetividadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * The data used to create many Efetividades.
     */
    data: EfetividadeCreateManyInput | EfetividadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Efetividade update
   */
  export type EfetividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Efetividade.
     */
    data: XOR<EfetividadeUpdateInput, EfetividadeUncheckedUpdateInput>
    /**
     * Choose, which Efetividade to update.
     */
    where: EfetividadeWhereUniqueInput
  }

  /**
   * Efetividade updateMany
   */
  export type EfetividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Efetividades.
     */
    data: XOR<EfetividadeUpdateManyMutationInput, EfetividadeUncheckedUpdateManyInput>
    /**
     * Filter which Efetividades to update
     */
    where?: EfetividadeWhereInput
    /**
     * Limit how many Efetividades to update.
     */
    limit?: number
  }

  /**
   * Efetividade updateManyAndReturn
   */
  export type EfetividadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * The data used to update Efetividades.
     */
    data: XOR<EfetividadeUpdateManyMutationInput, EfetividadeUncheckedUpdateManyInput>
    /**
     * Filter which Efetividades to update
     */
    where?: EfetividadeWhereInput
    /**
     * Limit how many Efetividades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Efetividade upsert
   */
  export type EfetividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Efetividade to update in case it exists.
     */
    where: EfetividadeWhereUniqueInput
    /**
     * In case the Efetividade found by the `where` argument doesn't exist, create a new Efetividade with this data.
     */
    create: XOR<EfetividadeCreateInput, EfetividadeUncheckedCreateInput>
    /**
     * In case the Efetividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EfetividadeUpdateInput, EfetividadeUncheckedUpdateInput>
  }

  /**
   * Efetividade delete
   */
  export type EfetividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
    /**
     * Filter which Efetividade to delete.
     */
    where: EfetividadeWhereUniqueInput
  }

  /**
   * Efetividade deleteMany
   */
  export type EfetividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Efetividades to delete
     */
    where?: EfetividadeWhereInput
    /**
     * Limit how many Efetividades to delete.
     */
    limit?: number
  }

  /**
   * Efetividade without action
   */
  export type EfetividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Efetividade
     */
    select?: EfetividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Efetividade
     */
    omit?: EfetividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EfetividadeInclude<ExtArgs> | null
  }


  /**
   * Model Permissao
   */

  export type AggregatePermissao = {
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  export type PermissaoAvgAggregateOutputType = {
    permissaoId: number | null
  }

  export type PermissaoSumAggregateOutputType = {
    permissaoId: number | null
  }

  export type PermissaoMinAggregateOutputType = {
    permissaoId: number | null
    descricao: string | null
  }

  export type PermissaoMaxAggregateOutputType = {
    permissaoId: number | null
    descricao: string | null
  }

  export type PermissaoCountAggregateOutputType = {
    permissaoId: number
    descricao: number
    _all: number
  }


  export type PermissaoAvgAggregateInputType = {
    permissaoId?: true
  }

  export type PermissaoSumAggregateInputType = {
    permissaoId?: true
  }

  export type PermissaoMinAggregateInputType = {
    permissaoId?: true
    descricao?: true
  }

  export type PermissaoMaxAggregateInputType = {
    permissaoId?: true
    descricao?: true
  }

  export type PermissaoCountAggregateInputType = {
    permissaoId?: true
    descricao?: true
    _all?: true
  }

  export type PermissaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissao to aggregate.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissaos
    **/
    _count?: true | PermissaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissaoMaxAggregateInputType
  }

  export type GetPermissaoAggregateType<T extends PermissaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissao[P]>
      : GetScalarType<T[P], AggregatePermissao[P]>
  }




  export type PermissaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissaoWhereInput
    orderBy?: PermissaoOrderByWithAggregationInput | PermissaoOrderByWithAggregationInput[]
    by: PermissaoScalarFieldEnum[] | PermissaoScalarFieldEnum
    having?: PermissaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissaoCountAggregateInputType | true
    _avg?: PermissaoAvgAggregateInputType
    _sum?: PermissaoSumAggregateInputType
    _min?: PermissaoMinAggregateInputType
    _max?: PermissaoMaxAggregateInputType
  }

  export type PermissaoGroupByOutputType = {
    permissaoId: number
    descricao: string
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  type GetPermissaoGroupByPayload<T extends PermissaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
            : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
        }
      >
    >


  export type PermissaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissaoId?: boolean
    descricao?: boolean
    usuarios?: boolean | Permissao$usuariosArgs<ExtArgs>
    _count?: boolean | PermissaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissaoId?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissaoId?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectScalar = {
    permissaoId?: boolean
    descricao?: boolean
  }

  export type PermissaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"permissaoId" | "descricao", ExtArgs["result"]["permissao"]>
  export type PermissaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Permissao$usuariosArgs<ExtArgs>
    _count?: boolean | PermissaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissao"
    objects: {
      usuarios: Prisma.$UsuarioPermissaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      permissaoId: number
      descricao: string
    }, ExtArgs["result"]["permissao"]>
    composites: {}
  }

  type PermissaoGetPayload<S extends boolean | null | undefined | PermissaoDefaultArgs> = $Result.GetResult<Prisma.$PermissaoPayload, S>

  type PermissaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissaoCountAggregateInputType | true
    }

  export interface PermissaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissao'], meta: { name: 'Permissao' } }
    /**
     * Find zero or one Permissao that matches the filter.
     * @param {PermissaoFindUniqueArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissaoFindUniqueArgs>(args: SelectSubset<T, PermissaoFindUniqueArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissaoFindUniqueOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissaoFindFirstArgs>(args?: SelectSubset<T, PermissaoFindFirstArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissaos
     * const permissaos = await prisma.permissao.findMany()
     * 
     * // Get first 10 Permissaos
     * const permissaos = await prisma.permissao.findMany({ take: 10 })
     * 
     * // Only select the `permissaoId`
     * const permissaoWithPermissaoIdOnly = await prisma.permissao.findMany({ select: { permissaoId: true } })
     * 
     */
    findMany<T extends PermissaoFindManyArgs>(args?: SelectSubset<T, PermissaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissao.
     * @param {PermissaoCreateArgs} args - Arguments to create a Permissao.
     * @example
     * // Create one Permissao
     * const Permissao = await prisma.permissao.create({
     *   data: {
     *     // ... data to create a Permissao
     *   }
     * })
     * 
     */
    create<T extends PermissaoCreateArgs>(args: SelectSubset<T, PermissaoCreateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissaos.
     * @param {PermissaoCreateManyArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissaoCreateManyArgs>(args?: SelectSubset<T, PermissaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissaos and returns the data saved in the database.
     * @param {PermissaoCreateManyAndReturnArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissaos and only return the `permissaoId`
     * const permissaoWithPermissaoIdOnly = await prisma.permissao.createManyAndReturn({
     *   select: { permissaoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permissao.
     * @param {PermissaoDeleteArgs} args - Arguments to delete one Permissao.
     * @example
     * // Delete one Permissao
     * const Permissao = await prisma.permissao.delete({
     *   where: {
     *     // ... filter to delete one Permissao
     *   }
     * })
     * 
     */
    delete<T extends PermissaoDeleteArgs>(args: SelectSubset<T, PermissaoDeleteArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissao.
     * @param {PermissaoUpdateArgs} args - Arguments to update one Permissao.
     * @example
     * // Update one Permissao
     * const permissao = await prisma.permissao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissaoUpdateArgs>(args: SelectSubset<T, PermissaoUpdateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissaos.
     * @param {PermissaoDeleteManyArgs} args - Arguments to filter Permissaos to delete.
     * @example
     * // Delete a few Permissaos
     * const { count } = await prisma.permissao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissaoDeleteManyArgs>(args?: SelectSubset<T, PermissaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissaos
     * const permissao = await prisma.permissao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissaoUpdateManyArgs>(args: SelectSubset<T, PermissaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissaos and returns the data updated in the database.
     * @param {PermissaoUpdateManyAndReturnArgs} args - Arguments to update many Permissaos.
     * @example
     * // Update many Permissaos
     * const permissao = await prisma.permissao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissaos and only return the `permissaoId`
     * const permissaoWithPermissaoIdOnly = await prisma.permissao.updateManyAndReturn({
     *   select: { permissaoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permissao.
     * @param {PermissaoUpsertArgs} args - Arguments to update or create a Permissao.
     * @example
     * // Update or create a Permissao
     * const permissao = await prisma.permissao.upsert({
     *   create: {
     *     // ... data to create a Permissao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissao we want to update
     *   }
     * })
     */
    upsert<T extends PermissaoUpsertArgs>(args: SelectSubset<T, PermissaoUpsertArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoCountArgs} args - Arguments to filter Permissaos to count.
     * @example
     * // Count the number of Permissaos
     * const count = await prisma.permissao.count({
     *   where: {
     *     // ... the filter for the Permissaos we want to count
     *   }
     * })
    **/
    count<T extends PermissaoCountArgs>(
      args?: Subset<T, PermissaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissaoAggregateArgs>(args: Subset<T, PermissaoAggregateArgs>): Prisma.PrismaPromise<GetPermissaoAggregateType<T>>

    /**
     * Group by Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissaoGroupByArgs['orderBy'] }
        : { orderBy?: PermissaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissao model
   */
  readonly fields: PermissaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Permissao$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Permissao$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permissao model
   */
  interface PermissaoFieldRefs {
    readonly permissaoId: FieldRef<"Permissao", 'Int'>
    readonly descricao: FieldRef<"Permissao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permissao findUnique
   */
  export type PermissaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findUniqueOrThrow
   */
  export type PermissaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findFirst
   */
  export type PermissaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findFirstOrThrow
   */
  export type PermissaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findMany
   */
  export type PermissaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissaos to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao create
   */
  export type PermissaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissao.
     */
    data: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
  }

  /**
   * Permissao createMany
   */
  export type PermissaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissao createManyAndReturn
   */
  export type PermissaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissao update
   */
  export type PermissaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissao.
     */
    data: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
    /**
     * Choose, which Permissao to update.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao updateMany
   */
  export type PermissaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissaos.
     */
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyInput>
    /**
     * Filter which Permissaos to update
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to update.
     */
    limit?: number
  }

  /**
   * Permissao updateManyAndReturn
   */
  export type PermissaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * The data used to update Permissaos.
     */
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyInput>
    /**
     * Filter which Permissaos to update
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to update.
     */
    limit?: number
  }

  /**
   * Permissao upsert
   */
  export type PermissaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissao to update in case it exists.
     */
    where: PermissaoWhereUniqueInput
    /**
     * In case the Permissao found by the `where` argument doesn't exist, create a new Permissao with this data.
     */
    create: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
    /**
     * In case the Permissao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
  }

  /**
   * Permissao delete
   */
  export type PermissaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter which Permissao to delete.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao deleteMany
   */
  export type PermissaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissaos to delete
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to delete.
     */
    limit?: number
  }

  /**
   * Permissao.usuarios
   */
  export type Permissao$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    where?: UsuarioPermissaoWhereInput
    orderBy?: UsuarioPermissaoOrderByWithRelationInput | UsuarioPermissaoOrderByWithRelationInput[]
    cursor?: UsuarioPermissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioPermissaoScalarFieldEnum | UsuarioPermissaoScalarFieldEnum[]
  }

  /**
   * Permissao without action
   */
  export type PermissaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioPermissao
   */

  export type AggregateUsuarioPermissao = {
    _count: UsuarioPermissaoCountAggregateOutputType | null
    _avg: UsuarioPermissaoAvgAggregateOutputType | null
    _sum: UsuarioPermissaoSumAggregateOutputType | null
    _min: UsuarioPermissaoMinAggregateOutputType | null
    _max: UsuarioPermissaoMaxAggregateOutputType | null
  }

  export type UsuarioPermissaoAvgAggregateOutputType = {
    usuarioId: number | null
    permissaoId: number | null
  }

  export type UsuarioPermissaoSumAggregateOutputType = {
    usuarioId: number | null
    permissaoId: number | null
  }

  export type UsuarioPermissaoMinAggregateOutputType = {
    usuarioId: number | null
    permissaoId: number | null
  }

  export type UsuarioPermissaoMaxAggregateOutputType = {
    usuarioId: number | null
    permissaoId: number | null
  }

  export type UsuarioPermissaoCountAggregateOutputType = {
    usuarioId: number
    permissaoId: number
    _all: number
  }


  export type UsuarioPermissaoAvgAggregateInputType = {
    usuarioId?: true
    permissaoId?: true
  }

  export type UsuarioPermissaoSumAggregateInputType = {
    usuarioId?: true
    permissaoId?: true
  }

  export type UsuarioPermissaoMinAggregateInputType = {
    usuarioId?: true
    permissaoId?: true
  }

  export type UsuarioPermissaoMaxAggregateInputType = {
    usuarioId?: true
    permissaoId?: true
  }

  export type UsuarioPermissaoCountAggregateInputType = {
    usuarioId?: true
    permissaoId?: true
    _all?: true
  }

  export type UsuarioPermissaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioPermissao to aggregate.
     */
    where?: UsuarioPermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPermissaos to fetch.
     */
    orderBy?: UsuarioPermissaoOrderByWithRelationInput | UsuarioPermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioPermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPermissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPermissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioPermissaos
    **/
    _count?: true | UsuarioPermissaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioPermissaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioPermissaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioPermissaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioPermissaoMaxAggregateInputType
  }

  export type GetUsuarioPermissaoAggregateType<T extends UsuarioPermissaoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioPermissao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioPermissao[P]>
      : GetScalarType<T[P], AggregateUsuarioPermissao[P]>
  }




  export type UsuarioPermissaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioPermissaoWhereInput
    orderBy?: UsuarioPermissaoOrderByWithAggregationInput | UsuarioPermissaoOrderByWithAggregationInput[]
    by: UsuarioPermissaoScalarFieldEnum[] | UsuarioPermissaoScalarFieldEnum
    having?: UsuarioPermissaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioPermissaoCountAggregateInputType | true
    _avg?: UsuarioPermissaoAvgAggregateInputType
    _sum?: UsuarioPermissaoSumAggregateInputType
    _min?: UsuarioPermissaoMinAggregateInputType
    _max?: UsuarioPermissaoMaxAggregateInputType
  }

  export type UsuarioPermissaoGroupByOutputType = {
    usuarioId: number
    permissaoId: number
    _count: UsuarioPermissaoCountAggregateOutputType | null
    _avg: UsuarioPermissaoAvgAggregateOutputType | null
    _sum: UsuarioPermissaoSumAggregateOutputType | null
    _min: UsuarioPermissaoMinAggregateOutputType | null
    _max: UsuarioPermissaoMaxAggregateOutputType | null
  }

  type GetUsuarioPermissaoGroupByPayload<T extends UsuarioPermissaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioPermissaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioPermissaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioPermissaoGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioPermissaoGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioPermissaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    permissaoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    permissao?: boolean | PermissaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioPermissao"]>

  export type UsuarioPermissaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    permissaoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    permissao?: boolean | PermissaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioPermissao"]>

  export type UsuarioPermissaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    permissaoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    permissao?: boolean | PermissaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioPermissao"]>

  export type UsuarioPermissaoSelectScalar = {
    usuarioId?: boolean
    permissaoId?: boolean
  }

  export type UsuarioPermissaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuarioId" | "permissaoId", ExtArgs["result"]["usuarioPermissao"]>
  export type UsuarioPermissaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    permissao?: boolean | PermissaoDefaultArgs<ExtArgs>
  }
  export type UsuarioPermissaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    permissao?: boolean | PermissaoDefaultArgs<ExtArgs>
  }
  export type UsuarioPermissaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    permissao?: boolean | PermissaoDefaultArgs<ExtArgs>
  }

  export type $UsuarioPermissaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioPermissao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      permissao: Prisma.$PermissaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuarioId: number
      permissaoId: number
    }, ExtArgs["result"]["usuarioPermissao"]>
    composites: {}
  }

  type UsuarioPermissaoGetPayload<S extends boolean | null | undefined | UsuarioPermissaoDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPermissaoPayload, S>

  type UsuarioPermissaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioPermissaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioPermissaoCountAggregateInputType | true
    }

  export interface UsuarioPermissaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioPermissao'], meta: { name: 'UsuarioPermissao' } }
    /**
     * Find zero or one UsuarioPermissao that matches the filter.
     * @param {UsuarioPermissaoFindUniqueArgs} args - Arguments to find a UsuarioPermissao
     * @example
     * // Get one UsuarioPermissao
     * const usuarioPermissao = await prisma.usuarioPermissao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioPermissaoFindUniqueArgs>(args: SelectSubset<T, UsuarioPermissaoFindUniqueArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioPermissao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioPermissaoFindUniqueOrThrowArgs} args - Arguments to find a UsuarioPermissao
     * @example
     * // Get one UsuarioPermissao
     * const usuarioPermissao = await prisma.usuarioPermissao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioPermissaoFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioPermissaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioPermissao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPermissaoFindFirstArgs} args - Arguments to find a UsuarioPermissao
     * @example
     * // Get one UsuarioPermissao
     * const usuarioPermissao = await prisma.usuarioPermissao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioPermissaoFindFirstArgs>(args?: SelectSubset<T, UsuarioPermissaoFindFirstArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioPermissao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPermissaoFindFirstOrThrowArgs} args - Arguments to find a UsuarioPermissao
     * @example
     * // Get one UsuarioPermissao
     * const usuarioPermissao = await prisma.usuarioPermissao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioPermissaoFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioPermissaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioPermissaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPermissaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioPermissaos
     * const usuarioPermissaos = await prisma.usuarioPermissao.findMany()
     * 
     * // Get first 10 UsuarioPermissaos
     * const usuarioPermissaos = await prisma.usuarioPermissao.findMany({ take: 10 })
     * 
     * // Only select the `usuarioId`
     * const usuarioPermissaoWithUsuarioIdOnly = await prisma.usuarioPermissao.findMany({ select: { usuarioId: true } })
     * 
     */
    findMany<T extends UsuarioPermissaoFindManyArgs>(args?: SelectSubset<T, UsuarioPermissaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioPermissao.
     * @param {UsuarioPermissaoCreateArgs} args - Arguments to create a UsuarioPermissao.
     * @example
     * // Create one UsuarioPermissao
     * const UsuarioPermissao = await prisma.usuarioPermissao.create({
     *   data: {
     *     // ... data to create a UsuarioPermissao
     *   }
     * })
     * 
     */
    create<T extends UsuarioPermissaoCreateArgs>(args: SelectSubset<T, UsuarioPermissaoCreateArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioPermissaos.
     * @param {UsuarioPermissaoCreateManyArgs} args - Arguments to create many UsuarioPermissaos.
     * @example
     * // Create many UsuarioPermissaos
     * const usuarioPermissao = await prisma.usuarioPermissao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioPermissaoCreateManyArgs>(args?: SelectSubset<T, UsuarioPermissaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioPermissaos and returns the data saved in the database.
     * @param {UsuarioPermissaoCreateManyAndReturnArgs} args - Arguments to create many UsuarioPermissaos.
     * @example
     * // Create many UsuarioPermissaos
     * const usuarioPermissao = await prisma.usuarioPermissao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioPermissaos and only return the `usuarioId`
     * const usuarioPermissaoWithUsuarioIdOnly = await prisma.usuarioPermissao.createManyAndReturn({
     *   select: { usuarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioPermissaoCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioPermissaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioPermissao.
     * @param {UsuarioPermissaoDeleteArgs} args - Arguments to delete one UsuarioPermissao.
     * @example
     * // Delete one UsuarioPermissao
     * const UsuarioPermissao = await prisma.usuarioPermissao.delete({
     *   where: {
     *     // ... filter to delete one UsuarioPermissao
     *   }
     * })
     * 
     */
    delete<T extends UsuarioPermissaoDeleteArgs>(args: SelectSubset<T, UsuarioPermissaoDeleteArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioPermissao.
     * @param {UsuarioPermissaoUpdateArgs} args - Arguments to update one UsuarioPermissao.
     * @example
     * // Update one UsuarioPermissao
     * const usuarioPermissao = await prisma.usuarioPermissao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioPermissaoUpdateArgs>(args: SelectSubset<T, UsuarioPermissaoUpdateArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioPermissaos.
     * @param {UsuarioPermissaoDeleteManyArgs} args - Arguments to filter UsuarioPermissaos to delete.
     * @example
     * // Delete a few UsuarioPermissaos
     * const { count } = await prisma.usuarioPermissao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioPermissaoDeleteManyArgs>(args?: SelectSubset<T, UsuarioPermissaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioPermissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPermissaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioPermissaos
     * const usuarioPermissao = await prisma.usuarioPermissao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioPermissaoUpdateManyArgs>(args: SelectSubset<T, UsuarioPermissaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioPermissaos and returns the data updated in the database.
     * @param {UsuarioPermissaoUpdateManyAndReturnArgs} args - Arguments to update many UsuarioPermissaos.
     * @example
     * // Update many UsuarioPermissaos
     * const usuarioPermissao = await prisma.usuarioPermissao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioPermissaos and only return the `usuarioId`
     * const usuarioPermissaoWithUsuarioIdOnly = await prisma.usuarioPermissao.updateManyAndReturn({
     *   select: { usuarioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioPermissaoUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioPermissaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioPermissao.
     * @param {UsuarioPermissaoUpsertArgs} args - Arguments to update or create a UsuarioPermissao.
     * @example
     * // Update or create a UsuarioPermissao
     * const usuarioPermissao = await prisma.usuarioPermissao.upsert({
     *   create: {
     *     // ... data to create a UsuarioPermissao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioPermissao we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioPermissaoUpsertArgs>(args: SelectSubset<T, UsuarioPermissaoUpsertArgs<ExtArgs>>): Prisma__UsuarioPermissaoClient<$Result.GetResult<Prisma.$UsuarioPermissaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioPermissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPermissaoCountArgs} args - Arguments to filter UsuarioPermissaos to count.
     * @example
     * // Count the number of UsuarioPermissaos
     * const count = await prisma.usuarioPermissao.count({
     *   where: {
     *     // ... the filter for the UsuarioPermissaos we want to count
     *   }
     * })
    **/
    count<T extends UsuarioPermissaoCountArgs>(
      args?: Subset<T, UsuarioPermissaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioPermissaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioPermissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPermissaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioPermissaoAggregateArgs>(args: Subset<T, UsuarioPermissaoAggregateArgs>): Prisma.PrismaPromise<GetUsuarioPermissaoAggregateType<T>>

    /**
     * Group by UsuarioPermissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPermissaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioPermissaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioPermissaoGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioPermissaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioPermissaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioPermissaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioPermissao model
   */
  readonly fields: UsuarioPermissaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioPermissao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioPermissaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permissao<T extends PermissaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissaoDefaultArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioPermissao model
   */
  interface UsuarioPermissaoFieldRefs {
    readonly usuarioId: FieldRef<"UsuarioPermissao", 'Int'>
    readonly permissaoId: FieldRef<"UsuarioPermissao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioPermissao findUnique
   */
  export type UsuarioPermissaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPermissao to fetch.
     */
    where: UsuarioPermissaoWhereUniqueInput
  }

  /**
   * UsuarioPermissao findUniqueOrThrow
   */
  export type UsuarioPermissaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPermissao to fetch.
     */
    where: UsuarioPermissaoWhereUniqueInput
  }

  /**
   * UsuarioPermissao findFirst
   */
  export type UsuarioPermissaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPermissao to fetch.
     */
    where?: UsuarioPermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPermissaos to fetch.
     */
    orderBy?: UsuarioPermissaoOrderByWithRelationInput | UsuarioPermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioPermissaos.
     */
    cursor?: UsuarioPermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPermissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPermissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioPermissaos.
     */
    distinct?: UsuarioPermissaoScalarFieldEnum | UsuarioPermissaoScalarFieldEnum[]
  }

  /**
   * UsuarioPermissao findFirstOrThrow
   */
  export type UsuarioPermissaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPermissao to fetch.
     */
    where?: UsuarioPermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPermissaos to fetch.
     */
    orderBy?: UsuarioPermissaoOrderByWithRelationInput | UsuarioPermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioPermissaos.
     */
    cursor?: UsuarioPermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPermissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPermissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioPermissaos.
     */
    distinct?: UsuarioPermissaoScalarFieldEnum | UsuarioPermissaoScalarFieldEnum[]
  }

  /**
   * UsuarioPermissao findMany
   */
  export type UsuarioPermissaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPermissaos to fetch.
     */
    where?: UsuarioPermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPermissaos to fetch.
     */
    orderBy?: UsuarioPermissaoOrderByWithRelationInput | UsuarioPermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioPermissaos.
     */
    cursor?: UsuarioPermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPermissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPermissaos.
     */
    skip?: number
    distinct?: UsuarioPermissaoScalarFieldEnum | UsuarioPermissaoScalarFieldEnum[]
  }

  /**
   * UsuarioPermissao create
   */
  export type UsuarioPermissaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioPermissao.
     */
    data: XOR<UsuarioPermissaoCreateInput, UsuarioPermissaoUncheckedCreateInput>
  }

  /**
   * UsuarioPermissao createMany
   */
  export type UsuarioPermissaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioPermissaos.
     */
    data: UsuarioPermissaoCreateManyInput | UsuarioPermissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioPermissao createManyAndReturn
   */
  export type UsuarioPermissaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioPermissaos.
     */
    data: UsuarioPermissaoCreateManyInput | UsuarioPermissaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioPermissao update
   */
  export type UsuarioPermissaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioPermissao.
     */
    data: XOR<UsuarioPermissaoUpdateInput, UsuarioPermissaoUncheckedUpdateInput>
    /**
     * Choose, which UsuarioPermissao to update.
     */
    where: UsuarioPermissaoWhereUniqueInput
  }

  /**
   * UsuarioPermissao updateMany
   */
  export type UsuarioPermissaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioPermissaos.
     */
    data: XOR<UsuarioPermissaoUpdateManyMutationInput, UsuarioPermissaoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioPermissaos to update
     */
    where?: UsuarioPermissaoWhereInput
    /**
     * Limit how many UsuarioPermissaos to update.
     */
    limit?: number
  }

  /**
   * UsuarioPermissao updateManyAndReturn
   */
  export type UsuarioPermissaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioPermissaos.
     */
    data: XOR<UsuarioPermissaoUpdateManyMutationInput, UsuarioPermissaoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioPermissaos to update
     */
    where?: UsuarioPermissaoWhereInput
    /**
     * Limit how many UsuarioPermissaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioPermissao upsert
   */
  export type UsuarioPermissaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioPermissao to update in case it exists.
     */
    where: UsuarioPermissaoWhereUniqueInput
    /**
     * In case the UsuarioPermissao found by the `where` argument doesn't exist, create a new UsuarioPermissao with this data.
     */
    create: XOR<UsuarioPermissaoCreateInput, UsuarioPermissaoUncheckedCreateInput>
    /**
     * In case the UsuarioPermissao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioPermissaoUpdateInput, UsuarioPermissaoUncheckedUpdateInput>
  }

  /**
   * UsuarioPermissao delete
   */
  export type UsuarioPermissaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
    /**
     * Filter which UsuarioPermissao to delete.
     */
    where: UsuarioPermissaoWhereUniqueInput
  }

  /**
   * UsuarioPermissao deleteMany
   */
  export type UsuarioPermissaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioPermissaos to delete
     */
    where?: UsuarioPermissaoWhereInput
    /**
     * Limit how many UsuarioPermissaos to delete.
     */
    limit?: number
  }

  /**
   * UsuarioPermissao without action
   */
  export type UsuarioPermissaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPermissao
     */
    select?: UsuarioPermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPermissao
     */
    omit?: UsuarioPermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPermissaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RefreshTokenScalarFieldEnum: {
    tokenId: 'tokenId',
    token: 'token',
    usuarioId: 'usuarioId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    passwordResetId: 'passwordResetId',
    token: 'token',
    usuarioId: 'usuarioId',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    professorId: 'professorId',
    nome: 'nome',
    departamento: 'departamento',
    cargaHoraria: 'cargaHoraria',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    funcionarioId: 'funcionarioId',
    nome: 'nome',
    email: 'email',
    cargo: 'cargo',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    usuarioId: 'usuarioId',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash',
    tipo: 'tipo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    cursoId: 'cursoId',
    nome: 'nome',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const SumarioScalarFieldEnum: {
    sumarioId: 'sumarioId',
    data: 'data',
    conteudo: 'conteudo',
    cursoId: 'cursoId',
    professorId: 'professorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SumarioScalarFieldEnum = (typeof SumarioScalarFieldEnum)[keyof typeof SumarioScalarFieldEnum]


  export const ProfessorCursoScalarFieldEnum: {
    professorId: 'professorId',
    cursoId: 'cursoId',
    createdAt: 'createdAt'
  };

  export type ProfessorCursoScalarFieldEnum = (typeof ProfessorCursoScalarFieldEnum)[keyof typeof ProfessorCursoScalarFieldEnum]


  export const PresencaScalarFieldEnum: {
    presencaId: 'presencaId',
    data: 'data',
    estado: 'estado',
    professorId: 'professorId',
    cursoId: 'cursoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PresencaScalarFieldEnum = (typeof PresencaScalarFieldEnum)[keyof typeof PresencaScalarFieldEnum]


  export const EfetividadeScalarFieldEnum: {
    efetividadeId: 'efetividadeId',
    data: 'data',
    horasTrabalhadas: 'horasTrabalhadas',
    professorId: 'professorId',
    cursoId: 'cursoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EfetividadeScalarFieldEnum = (typeof EfetividadeScalarFieldEnum)[keyof typeof EfetividadeScalarFieldEnum]


  export const PermissaoScalarFieldEnum: {
    permissaoId: 'permissaoId',
    descricao: 'descricao'
  };

  export type PermissaoScalarFieldEnum = (typeof PermissaoScalarFieldEnum)[keyof typeof PermissaoScalarFieldEnum]


  export const UsuarioPermissaoScalarFieldEnum: {
    usuarioId: 'usuarioId',
    permissaoId: 'permissaoId'
  };

  export type UsuarioPermissaoScalarFieldEnum = (typeof UsuarioPermissaoScalarFieldEnum)[keyof typeof UsuarioPermissaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Departamento'
   */
  export type EnumDepartamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Departamento'>
    


  /**
   * Reference to a field of type 'Departamento[]'
   */
  export type ListEnumDepartamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Departamento[]'>
    


  /**
   * Reference to a field of type 'Cargo'
   */
  export type EnumCargoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cargo'>
    


  /**
   * Reference to a field of type 'Cargo[]'
   */
  export type ListEnumCargoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cargo[]'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


  /**
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Estado[]'
   */
  export type ListEnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    tokenId?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    usuarioId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    tokenId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    tokenId?: number
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    usuarioId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "tokenId" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    tokenId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    tokenId?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    usuarioId?: IntWithAggregatesFilter<"RefreshToken"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    passwordResetId?: IntFilter<"PasswordReset"> | number
    token?: StringFilter<"PasswordReset"> | string
    usuarioId?: IntFilter<"PasswordReset"> | number
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PasswordResetOrderByWithRelationInput = {
    passwordResetId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    passwordResetId?: number
    token?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    usuarioId?: IntFilter<"PasswordReset"> | number
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "passwordResetId" | "token">

  export type PasswordResetOrderByWithAggregationInput = {
    passwordResetId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _avg?: PasswordResetAvgOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
    _sum?: PasswordResetSumOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    passwordResetId?: IntWithAggregatesFilter<"PasswordReset"> | number
    token?: StringWithAggregatesFilter<"PasswordReset"> | string
    usuarioId?: IntWithAggregatesFilter<"PasswordReset"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    used?: BoolWithAggregatesFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    professorId?: IntFilter<"Professor"> | number
    nome?: StringFilter<"Professor"> | string
    departamento?: EnumDepartamentoFilter<"Professor"> | $Enums.Departamento
    cargaHoraria?: IntFilter<"Professor"> | number
    usuarioId?: IntNullableFilter<"Professor"> | number | null
    createdAt?: DateTimeFilter<"Professor"> | Date | string
    updatedAt?: DateTimeFilter<"Professor"> | Date | string
    cursos?: ProfessorCursoListRelationFilter
    sumarios?: SumarioListRelationFilter
    presencas?: PresencaListRelationFilter
    efetividades?: EfetividadeListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type ProfessorOrderByWithRelationInput = {
    professorId?: SortOrder
    nome?: SortOrder
    departamento?: SortOrder
    cargaHoraria?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cursos?: ProfessorCursoOrderByRelationAggregateInput
    sumarios?: SumarioOrderByRelationAggregateInput
    presencas?: PresencaOrderByRelationAggregateInput
    efetividades?: EfetividadeOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    professorId?: number
    usuarioId?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    departamento?: EnumDepartamentoFilter<"Professor"> | $Enums.Departamento
    cargaHoraria?: IntFilter<"Professor"> | number
    createdAt?: DateTimeFilter<"Professor"> | Date | string
    updatedAt?: DateTimeFilter<"Professor"> | Date | string
    cursos?: ProfessorCursoListRelationFilter
    sumarios?: SumarioListRelationFilter
    presencas?: PresencaListRelationFilter
    efetividades?: EfetividadeListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "professorId" | "usuarioId">

  export type ProfessorOrderByWithAggregationInput = {
    professorId?: SortOrder
    nome?: SortOrder
    departamento?: SortOrder
    cargaHoraria?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    professorId?: IntWithAggregatesFilter<"Professor"> | number
    nome?: StringWithAggregatesFilter<"Professor"> | string
    departamento?: EnumDepartamentoWithAggregatesFilter<"Professor"> | $Enums.Departamento
    cargaHoraria?: IntWithAggregatesFilter<"Professor"> | number
    usuarioId?: IntNullableWithAggregatesFilter<"Professor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    funcionarioId?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    cargo?: EnumCargoFilter<"Funcionario"> | $Enums.Cargo
    usuarioId?: IntNullableFilter<"Funcionario"> | number | null
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type FuncionarioOrderByWithRelationInput = {
    funcionarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    funcionarioId?: number
    email?: string
    usuarioId?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    cargo?: EnumCargoFilter<"Funcionario"> | $Enums.Cargo
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "funcionarioId" | "email" | "usuarioId">

  export type FuncionarioOrderByWithAggregationInput = {
    funcionarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    funcionarioId?: IntWithAggregatesFilter<"Funcionario"> | number
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    email?: StringWithAggregatesFilter<"Funcionario"> | string
    cargo?: EnumCargoWithAggregatesFilter<"Funcionario"> | $Enums.Cargo
    usuarioId?: IntNullableWithAggregatesFilter<"Funcionario"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    usuarioId?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    permissoes?: UsuarioPermissaoListRelationFilter
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    refreshTokens?: RefreshTokenListRelationFilter
    passwordResets?: PasswordResetListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    usuarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissoes?: UsuarioPermissaoOrderByRelationAggregateInput
    professor?: ProfessorOrderByWithRelationInput
    funcionario?: FuncionarioOrderByWithRelationInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    passwordResets?: PasswordResetOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    usuarioId?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    permissoes?: UsuarioPermissaoListRelationFilter
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    refreshTokens?: RefreshTokenListRelationFilter
    passwordResets?: PasswordResetListRelationFilter
  }, "usuarioId" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    usuarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    usuarioId?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senhaHash?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    cursoId?: IntFilter<"Curso"> | number
    nome?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    updatedAt?: DateTimeFilter<"Curso"> | Date | string
    professores?: ProfessorCursoListRelationFilter
    sumarios?: SumarioListRelationFilter
    presenca?: PresencaListRelationFilter
    efetividade?: EfetividadeListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    cursoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professores?: ProfessorCursoOrderByRelationAggregateInput
    sumarios?: SumarioOrderByRelationAggregateInput
    presenca?: PresencaOrderByRelationAggregateInput
    efetividade?: EfetividadeOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    cursoId?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    nome?: StringFilter<"Curso"> | string
    descricao?: StringFilter<"Curso"> | string
    createdAt?: DateTimeFilter<"Curso"> | Date | string
    updatedAt?: DateTimeFilter<"Curso"> | Date | string
    professores?: ProfessorCursoListRelationFilter
    sumarios?: SumarioListRelationFilter
    presenca?: PresencaListRelationFilter
    efetividade?: EfetividadeListRelationFilter
  }, "cursoId">

  export type CursoOrderByWithAggregationInput = {
    cursoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    cursoId?: IntWithAggregatesFilter<"Curso"> | number
    nome?: StringWithAggregatesFilter<"Curso"> | string
    descricao?: StringWithAggregatesFilter<"Curso"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Curso"> | Date | string
  }

  export type SumarioWhereInput = {
    AND?: SumarioWhereInput | SumarioWhereInput[]
    OR?: SumarioWhereInput[]
    NOT?: SumarioWhereInput | SumarioWhereInput[]
    sumarioId?: IntFilter<"Sumario"> | number
    data?: DateTimeFilter<"Sumario"> | Date | string
    conteudo?: StringFilter<"Sumario"> | string
    cursoId?: IntFilter<"Sumario"> | number
    professorId?: IntFilter<"Sumario"> | number
    createdAt?: DateTimeFilter<"Sumario"> | Date | string
    updatedAt?: DateTimeFilter<"Sumario"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }

  export type SumarioOrderByWithRelationInput = {
    sumarioId?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curso?: CursoOrderByWithRelationInput
    professor?: ProfessorOrderByWithRelationInput
  }

  export type SumarioWhereUniqueInput = Prisma.AtLeast<{
    sumarioId?: number
    AND?: SumarioWhereInput | SumarioWhereInput[]
    OR?: SumarioWhereInput[]
    NOT?: SumarioWhereInput | SumarioWhereInput[]
    data?: DateTimeFilter<"Sumario"> | Date | string
    conteudo?: StringFilter<"Sumario"> | string
    cursoId?: IntFilter<"Sumario"> | number
    professorId?: IntFilter<"Sumario"> | number
    createdAt?: DateTimeFilter<"Sumario"> | Date | string
    updatedAt?: DateTimeFilter<"Sumario"> | Date | string
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
  }, "sumarioId">

  export type SumarioOrderByWithAggregationInput = {
    sumarioId?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SumarioCountOrderByAggregateInput
    _avg?: SumarioAvgOrderByAggregateInput
    _max?: SumarioMaxOrderByAggregateInput
    _min?: SumarioMinOrderByAggregateInput
    _sum?: SumarioSumOrderByAggregateInput
  }

  export type SumarioScalarWhereWithAggregatesInput = {
    AND?: SumarioScalarWhereWithAggregatesInput | SumarioScalarWhereWithAggregatesInput[]
    OR?: SumarioScalarWhereWithAggregatesInput[]
    NOT?: SumarioScalarWhereWithAggregatesInput | SumarioScalarWhereWithAggregatesInput[]
    sumarioId?: IntWithAggregatesFilter<"Sumario"> | number
    data?: DateTimeWithAggregatesFilter<"Sumario"> | Date | string
    conteudo?: StringWithAggregatesFilter<"Sumario"> | string
    cursoId?: IntWithAggregatesFilter<"Sumario"> | number
    professorId?: IntWithAggregatesFilter<"Sumario"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sumario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sumario"> | Date | string
  }

  export type ProfessorCursoWhereInput = {
    AND?: ProfessorCursoWhereInput | ProfessorCursoWhereInput[]
    OR?: ProfessorCursoWhereInput[]
    NOT?: ProfessorCursoWhereInput | ProfessorCursoWhereInput[]
    professorId?: IntFilter<"ProfessorCurso"> | number
    cursoId?: IntFilter<"ProfessorCurso"> | number
    createdAt?: DateTimeFilter<"ProfessorCurso"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }

  export type ProfessorCursoOrderByWithRelationInput = {
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type ProfessorCursoWhereUniqueInput = Prisma.AtLeast<{
    professorId_cursoId?: ProfessorCursoProfessorIdCursoIdCompoundUniqueInput
    AND?: ProfessorCursoWhereInput | ProfessorCursoWhereInput[]
    OR?: ProfessorCursoWhereInput[]
    NOT?: ProfessorCursoWhereInput | ProfessorCursoWhereInput[]
    professorId?: IntFilter<"ProfessorCurso"> | number
    cursoId?: IntFilter<"ProfessorCurso"> | number
    createdAt?: DateTimeFilter<"ProfessorCurso"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }, "professorId_cursoId">

  export type ProfessorCursoOrderByWithAggregationInput = {
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    _count?: ProfessorCursoCountOrderByAggregateInput
    _avg?: ProfessorCursoAvgOrderByAggregateInput
    _max?: ProfessorCursoMaxOrderByAggregateInput
    _min?: ProfessorCursoMinOrderByAggregateInput
    _sum?: ProfessorCursoSumOrderByAggregateInput
  }

  export type ProfessorCursoScalarWhereWithAggregatesInput = {
    AND?: ProfessorCursoScalarWhereWithAggregatesInput | ProfessorCursoScalarWhereWithAggregatesInput[]
    OR?: ProfessorCursoScalarWhereWithAggregatesInput[]
    NOT?: ProfessorCursoScalarWhereWithAggregatesInput | ProfessorCursoScalarWhereWithAggregatesInput[]
    professorId?: IntWithAggregatesFilter<"ProfessorCurso"> | number
    cursoId?: IntWithAggregatesFilter<"ProfessorCurso"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProfessorCurso"> | Date | string
  }

  export type PresencaWhereInput = {
    AND?: PresencaWhereInput | PresencaWhereInput[]
    OR?: PresencaWhereInput[]
    NOT?: PresencaWhereInput | PresencaWhereInput[]
    presencaId?: IntFilter<"Presenca"> | number
    data?: DateTimeFilter<"Presenca"> | Date | string
    estado?: EnumEstadoFilter<"Presenca"> | $Enums.Estado
    professorId?: IntFilter<"Presenca"> | number
    cursoId?: IntFilter<"Presenca"> | number
    createdAt?: DateTimeFilter<"Presenca"> | Date | string
    updatedAt?: DateTimeFilter<"Presenca"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }

  export type PresencaOrderByWithRelationInput = {
    presencaId?: SortOrder
    data?: SortOrder
    estado?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type PresencaWhereUniqueInput = Prisma.AtLeast<{
    presencaId?: number
    AND?: PresencaWhereInput | PresencaWhereInput[]
    OR?: PresencaWhereInput[]
    NOT?: PresencaWhereInput | PresencaWhereInput[]
    data?: DateTimeFilter<"Presenca"> | Date | string
    estado?: EnumEstadoFilter<"Presenca"> | $Enums.Estado
    professorId?: IntFilter<"Presenca"> | number
    cursoId?: IntFilter<"Presenca"> | number
    createdAt?: DateTimeFilter<"Presenca"> | Date | string
    updatedAt?: DateTimeFilter<"Presenca"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }, "presencaId">

  export type PresencaOrderByWithAggregationInput = {
    presencaId?: SortOrder
    data?: SortOrder
    estado?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PresencaCountOrderByAggregateInput
    _avg?: PresencaAvgOrderByAggregateInput
    _max?: PresencaMaxOrderByAggregateInput
    _min?: PresencaMinOrderByAggregateInput
    _sum?: PresencaSumOrderByAggregateInput
  }

  export type PresencaScalarWhereWithAggregatesInput = {
    AND?: PresencaScalarWhereWithAggregatesInput | PresencaScalarWhereWithAggregatesInput[]
    OR?: PresencaScalarWhereWithAggregatesInput[]
    NOT?: PresencaScalarWhereWithAggregatesInput | PresencaScalarWhereWithAggregatesInput[]
    presencaId?: IntWithAggregatesFilter<"Presenca"> | number
    data?: DateTimeWithAggregatesFilter<"Presenca"> | Date | string
    estado?: EnumEstadoWithAggregatesFilter<"Presenca"> | $Enums.Estado
    professorId?: IntWithAggregatesFilter<"Presenca"> | number
    cursoId?: IntWithAggregatesFilter<"Presenca"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Presenca"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Presenca"> | Date | string
  }

  export type EfetividadeWhereInput = {
    AND?: EfetividadeWhereInput | EfetividadeWhereInput[]
    OR?: EfetividadeWhereInput[]
    NOT?: EfetividadeWhereInput | EfetividadeWhereInput[]
    efetividadeId?: IntFilter<"Efetividade"> | number
    data?: DateTimeFilter<"Efetividade"> | Date | string
    horasTrabalhadas?: IntFilter<"Efetividade"> | number
    professorId?: IntFilter<"Efetividade"> | number
    cursoId?: IntFilter<"Efetividade"> | number
    createdAt?: DateTimeFilter<"Efetividade"> | Date | string
    updatedAt?: DateTimeFilter<"Efetividade"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }

  export type EfetividadeOrderByWithRelationInput = {
    efetividadeId?: SortOrder
    data?: SortOrder
    horasTrabalhadas?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
  }

  export type EfetividadeWhereUniqueInput = Prisma.AtLeast<{
    efetividadeId?: number
    AND?: EfetividadeWhereInput | EfetividadeWhereInput[]
    OR?: EfetividadeWhereInput[]
    NOT?: EfetividadeWhereInput | EfetividadeWhereInput[]
    data?: DateTimeFilter<"Efetividade"> | Date | string
    horasTrabalhadas?: IntFilter<"Efetividade"> | number
    professorId?: IntFilter<"Efetividade"> | number
    cursoId?: IntFilter<"Efetividade"> | number
    createdAt?: DateTimeFilter<"Efetividade"> | Date | string
    updatedAt?: DateTimeFilter<"Efetividade"> | Date | string
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
  }, "efetividadeId">

  export type EfetividadeOrderByWithAggregationInput = {
    efetividadeId?: SortOrder
    data?: SortOrder
    horasTrabalhadas?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EfetividadeCountOrderByAggregateInput
    _avg?: EfetividadeAvgOrderByAggregateInput
    _max?: EfetividadeMaxOrderByAggregateInput
    _min?: EfetividadeMinOrderByAggregateInput
    _sum?: EfetividadeSumOrderByAggregateInput
  }

  export type EfetividadeScalarWhereWithAggregatesInput = {
    AND?: EfetividadeScalarWhereWithAggregatesInput | EfetividadeScalarWhereWithAggregatesInput[]
    OR?: EfetividadeScalarWhereWithAggregatesInput[]
    NOT?: EfetividadeScalarWhereWithAggregatesInput | EfetividadeScalarWhereWithAggregatesInput[]
    efetividadeId?: IntWithAggregatesFilter<"Efetividade"> | number
    data?: DateTimeWithAggregatesFilter<"Efetividade"> | Date | string
    horasTrabalhadas?: IntWithAggregatesFilter<"Efetividade"> | number
    professorId?: IntWithAggregatesFilter<"Efetividade"> | number
    cursoId?: IntWithAggregatesFilter<"Efetividade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Efetividade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Efetividade"> | Date | string
  }

  export type PermissaoWhereInput = {
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    permissaoId?: IntFilter<"Permissao"> | number
    descricao?: StringFilter<"Permissao"> | string
    usuarios?: UsuarioPermissaoListRelationFilter
  }

  export type PermissaoOrderByWithRelationInput = {
    permissaoId?: SortOrder
    descricao?: SortOrder
    usuarios?: UsuarioPermissaoOrderByRelationAggregateInput
  }

  export type PermissaoWhereUniqueInput = Prisma.AtLeast<{
    permissaoId?: number
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    descricao?: StringFilter<"Permissao"> | string
    usuarios?: UsuarioPermissaoListRelationFilter
  }, "permissaoId">

  export type PermissaoOrderByWithAggregationInput = {
    permissaoId?: SortOrder
    descricao?: SortOrder
    _count?: PermissaoCountOrderByAggregateInput
    _avg?: PermissaoAvgOrderByAggregateInput
    _max?: PermissaoMaxOrderByAggregateInput
    _min?: PermissaoMinOrderByAggregateInput
    _sum?: PermissaoSumOrderByAggregateInput
  }

  export type PermissaoScalarWhereWithAggregatesInput = {
    AND?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    OR?: PermissaoScalarWhereWithAggregatesInput[]
    NOT?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    permissaoId?: IntWithAggregatesFilter<"Permissao"> | number
    descricao?: StringWithAggregatesFilter<"Permissao"> | string
  }

  export type UsuarioPermissaoWhereInput = {
    AND?: UsuarioPermissaoWhereInput | UsuarioPermissaoWhereInput[]
    OR?: UsuarioPermissaoWhereInput[]
    NOT?: UsuarioPermissaoWhereInput | UsuarioPermissaoWhereInput[]
    usuarioId?: IntFilter<"UsuarioPermissao"> | number
    permissaoId?: IntFilter<"UsuarioPermissao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    permissao?: XOR<PermissaoScalarRelationFilter, PermissaoWhereInput>
  }

  export type UsuarioPermissaoOrderByWithRelationInput = {
    usuarioId?: SortOrder
    permissaoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    permissao?: PermissaoOrderByWithRelationInput
  }

  export type UsuarioPermissaoWhereUniqueInput = Prisma.AtLeast<{
    usuarioId_permissaoId?: UsuarioPermissaoUsuarioIdPermissaoIdCompoundUniqueInput
    AND?: UsuarioPermissaoWhereInput | UsuarioPermissaoWhereInput[]
    OR?: UsuarioPermissaoWhereInput[]
    NOT?: UsuarioPermissaoWhereInput | UsuarioPermissaoWhereInput[]
    usuarioId?: IntFilter<"UsuarioPermissao"> | number
    permissaoId?: IntFilter<"UsuarioPermissao"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    permissao?: XOR<PermissaoScalarRelationFilter, PermissaoWhereInput>
  }, "usuarioId_permissaoId">

  export type UsuarioPermissaoOrderByWithAggregationInput = {
    usuarioId?: SortOrder
    permissaoId?: SortOrder
    _count?: UsuarioPermissaoCountOrderByAggregateInput
    _avg?: UsuarioPermissaoAvgOrderByAggregateInput
    _max?: UsuarioPermissaoMaxOrderByAggregateInput
    _min?: UsuarioPermissaoMinOrderByAggregateInput
    _sum?: UsuarioPermissaoSumOrderByAggregateInput
  }

  export type UsuarioPermissaoScalarWhereWithAggregatesInput = {
    AND?: UsuarioPermissaoScalarWhereWithAggregatesInput | UsuarioPermissaoScalarWhereWithAggregatesInput[]
    OR?: UsuarioPermissaoScalarWhereWithAggregatesInput[]
    NOT?: UsuarioPermissaoScalarWhereWithAggregatesInput | UsuarioPermissaoScalarWhereWithAggregatesInput[]
    usuarioId?: IntWithAggregatesFilter<"UsuarioPermissao"> | number
    permissaoId?: IntWithAggregatesFilter<"UsuarioPermissao"> | number
  }

  export type RefreshTokenCreateInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    tokenId?: number
    token: string
    usuarioId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    tokenId?: number
    token: string
    usuarioId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPasswordResetsInput
  }

  export type PasswordResetUncheckedCreateInput = {
    passwordResetId?: number
    token: string
    usuarioId: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPasswordResetsNestedInput
  }

  export type PasswordResetUncheckedUpdateInput = {
    passwordResetId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateManyInput = {
    passwordResetId?: number
    token: string
    usuarioId: number
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    passwordResetId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateInput = {
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioCreateNestedManyWithoutProfessorInput
    presencas?: PresencaCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeCreateNestedManyWithoutProfessorInput
    usuario?: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    professorId?: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoUncheckedCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioUncheckedCreateNestedManyWithoutProfessorInput
    presencas?: PresencaUncheckedCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUpdateManyWithoutProfessorNestedInput
    usuario?: UsuarioUpdateOneWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUncheckedUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUncheckedUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUncheckedUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    professorId?: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateInput = {
    nome: string
    email: string
    cargo: $Enums.Cargo
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateInput = {
    funcionarioId?: number
    nome: string
    email: string
    cargo: $Enums.Cargo
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    funcionarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateManyInput = {
    funcionarioId?: number
    nome: string
    email: string
    cargo: $Enums.Cargo
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    funcionarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    usuarioId?: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoUncheckedCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    usuarioId?: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoCreateInput = {
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoCreateNestedManyWithoutCursoInput
    sumarios?: SumarioCreateNestedManyWithoutCursoInput
    presenca?: PresencaCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    cursoId?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoUncheckedCreateNestedManyWithoutCursoInput
    sumarios?: SumarioUncheckedCreateNestedManyWithoutCursoInput
    presenca?: PresencaUncheckedCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUpdateManyWithoutCursoNestedInput
    sumarios?: SumarioUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUncheckedUpdateManyWithoutCursoNestedInput
    sumarios?: SumarioUncheckedUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUncheckedUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    cursoId?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CursoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursoUncheckedUpdateManyInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SumarioCreateInput = {
    data: Date | string
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutSumariosInput
    professor: ProfessorCreateNestedOneWithoutSumariosInput
  }

  export type SumarioUncheckedCreateInput = {
    sumarioId?: number
    data: Date | string
    conteudo: string
    cursoId: number
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SumarioUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutSumariosNestedInput
    professor?: ProfessorUpdateOneRequiredWithoutSumariosNestedInput
  }

  export type SumarioUncheckedUpdateInput = {
    sumarioId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SumarioCreateManyInput = {
    sumarioId?: number
    data: Date | string
    conteudo: string
    cursoId: number
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SumarioUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SumarioUncheckedUpdateManyInput = {
    sumarioId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCursoCreateInput = {
    createdAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutCursosInput
    curso: CursoCreateNestedOneWithoutProfessoresInput
  }

  export type ProfessorCursoUncheckedCreateInput = {
    professorId: number
    cursoId: number
    createdAt?: Date | string
  }

  export type ProfessorCursoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutCursosNestedInput
    curso?: CursoUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type ProfessorCursoUncheckedUpdateInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCursoCreateManyInput = {
    professorId: number
    cursoId: number
    createdAt?: Date | string
  }

  export type ProfessorCursoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCursoUncheckedUpdateManyInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaCreateInput = {
    data: Date | string
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutPresencasInput
    curso?: CursoCreateNestedOneWithoutPresencaInput
  }

  export type PresencaUncheckedCreateInput = {
    presencaId?: number
    data: Date | string
    estado: $Enums.Estado
    professorId: number
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresencaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutPresencasNestedInput
    curso?: CursoUpdateOneRequiredWithoutPresencaNestedInput
  }

  export type PresencaUncheckedUpdateInput = {
    presencaId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    professorId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaCreateManyInput = {
    presencaId?: number
    data: Date | string
    estado: $Enums.Estado
    professorId: number
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresencaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaUncheckedUpdateManyInput = {
    presencaId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    professorId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EfetividadeCreateInput = {
    data: Date | string
    horasTrabalhadas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutEfetividadesInput
    curso?: CursoCreateNestedOneWithoutEfetividadeInput
  }

  export type EfetividadeUncheckedCreateInput = {
    efetividadeId?: number
    data: Date | string
    horasTrabalhadas: number
    professorId: number
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EfetividadeUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutEfetividadesNestedInput
    curso?: CursoUpdateOneRequiredWithoutEfetividadeNestedInput
  }

  export type EfetividadeUncheckedUpdateInput = {
    efetividadeId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EfetividadeCreateManyInput = {
    efetividadeId?: number
    data: Date | string
    horasTrabalhadas: number
    professorId: number
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EfetividadeUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EfetividadeUncheckedUpdateManyInput = {
    efetividadeId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissaoCreateInput = {
    descricao: string
    usuarios?: UsuarioPermissaoCreateNestedManyWithoutPermissaoInput
  }

  export type PermissaoUncheckedCreateInput = {
    permissaoId?: number
    descricao: string
    usuarios?: UsuarioPermissaoUncheckedCreateNestedManyWithoutPermissaoInput
  }

  export type PermissaoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioPermissaoUpdateManyWithoutPermissaoNestedInput
  }

  export type PermissaoUncheckedUpdateInput = {
    permissaoId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioPermissaoUncheckedUpdateManyWithoutPermissaoNestedInput
  }

  export type PermissaoCreateManyInput = {
    permissaoId?: number
    descricao: string
  }

  export type PermissaoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PermissaoUncheckedUpdateManyInput = {
    permissaoId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioPermissaoCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutPermissoesInput
    permissao: PermissaoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioPermissaoUncheckedCreateInput = {
    usuarioId: number
    permissaoId: number
  }

  export type UsuarioPermissaoUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutPermissoesNestedInput
    permissao?: PermissaoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioPermissaoUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    permissaoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioPermissaoCreateManyInput = {
    usuarioId: number
    permissaoId: number
  }

  export type UsuarioPermissaoUpdateManyMutationInput = {

  }

  export type UsuarioPermissaoUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    permissaoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    tokenId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    tokenId?: SortOrder
    usuarioId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    tokenId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    tokenId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    tokenId?: SortOrder
    usuarioId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PasswordResetCountOrderByAggregateInput = {
    passwordResetId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetAvgOrderByAggregateInput = {
    passwordResetId?: SortOrder
    usuarioId?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    passwordResetId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    passwordResetId?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetSumOrderByAggregateInput = {
    passwordResetId?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDepartamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.Departamento | EnumDepartamentoFieldRefInput<$PrismaModel>
    in?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartamentoFilter<$PrismaModel> | $Enums.Departamento
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfessorCursoListRelationFilter = {
    every?: ProfessorCursoWhereInput
    some?: ProfessorCursoWhereInput
    none?: ProfessorCursoWhereInput
  }

  export type SumarioListRelationFilter = {
    every?: SumarioWhereInput
    some?: SumarioWhereInput
    none?: SumarioWhereInput
  }

  export type PresencaListRelationFilter = {
    every?: PresencaWhereInput
    some?: PresencaWhereInput
    none?: PresencaWhereInput
  }

  export type EfetividadeListRelationFilter = {
    every?: EfetividadeWhereInput
    some?: EfetividadeWhereInput
    none?: EfetividadeWhereInput
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfessorCursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SumarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresencaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EfetividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    professorId?: SortOrder
    nome?: SortOrder
    departamento?: SortOrder
    cargaHoraria?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    professorId?: SortOrder
    cargaHoraria?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    professorId?: SortOrder
    nome?: SortOrder
    departamento?: SortOrder
    cargaHoraria?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    professorId?: SortOrder
    nome?: SortOrder
    departamento?: SortOrder
    cargaHoraria?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    professorId?: SortOrder
    cargaHoraria?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumDepartamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Departamento | EnumDepartamentoFieldRefInput<$PrismaModel>
    in?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartamentoWithAggregatesFilter<$PrismaModel> | $Enums.Departamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartamentoFilter<$PrismaModel>
    _max?: NestedEnumDepartamentoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCargoFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoFilter<$PrismaModel> | $Enums.Cargo
  }

  export type FuncionarioCountOrderByAggregateInput = {
    funcionarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    funcionarioId?: SortOrder
    usuarioId?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    funcionarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    funcionarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cargo?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    funcionarioId?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumCargoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoWithAggregatesFilter<$PrismaModel> | $Enums.Cargo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoFilter<$PrismaModel>
    _max?: NestedEnumCargoFilter<$PrismaModel>
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type UsuarioPermissaoListRelationFilter = {
    every?: UsuarioPermissaoWhereInput
    some?: UsuarioPermissaoWhereInput
    none?: UsuarioPermissaoWhereInput
  }

  export type ProfessorNullableScalarRelationFilter = {
    is?: ProfessorWhereInput | null
    isNot?: ProfessorWhereInput | null
  }

  export type FuncionarioNullableScalarRelationFilter = {
    is?: FuncionarioWhereInput | null
    isNot?: FuncionarioWhereInput | null
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type PasswordResetListRelationFilter = {
    every?: PasswordResetWhereInput
    some?: PasswordResetWhereInput
    none?: PasswordResetWhereInput
  }

  export type UsuarioPermissaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    usuarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    usuarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    usuarioId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type CursoCountOrderByAggregateInput = {
    cursoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    cursoId?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    cursoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    cursoId?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    cursoId?: SortOrder
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type SumarioCountOrderByAggregateInput = {
    sumarioId?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SumarioAvgOrderByAggregateInput = {
    sumarioId?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type SumarioMaxOrderByAggregateInput = {
    sumarioId?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SumarioMinOrderByAggregateInput = {
    sumarioId?: SortOrder
    data?: SortOrder
    conteudo?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SumarioSumOrderByAggregateInput = {
    sumarioId?: SortOrder
    cursoId?: SortOrder
    professorId?: SortOrder
  }

  export type ProfessorCursoProfessorIdCursoIdCompoundUniqueInput = {
    professorId: number
    cursoId: number
  }

  export type ProfessorCursoCountOrderByAggregateInput = {
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfessorCursoAvgOrderByAggregateInput = {
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type ProfessorCursoMaxOrderByAggregateInput = {
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfessorCursoMinOrderByAggregateInput = {
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfessorCursoSumOrderByAggregateInput = {
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type PresencaCountOrderByAggregateInput = {
    presencaId?: SortOrder
    data?: SortOrder
    estado?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresencaAvgOrderByAggregateInput = {
    presencaId?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type PresencaMaxOrderByAggregateInput = {
    presencaId?: SortOrder
    data?: SortOrder
    estado?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresencaMinOrderByAggregateInput = {
    presencaId?: SortOrder
    data?: SortOrder
    estado?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresencaSumOrderByAggregateInput = {
    presencaId?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type EfetividadeCountOrderByAggregateInput = {
    efetividadeId?: SortOrder
    data?: SortOrder
    horasTrabalhadas?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EfetividadeAvgOrderByAggregateInput = {
    efetividadeId?: SortOrder
    horasTrabalhadas?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type EfetividadeMaxOrderByAggregateInput = {
    efetividadeId?: SortOrder
    data?: SortOrder
    horasTrabalhadas?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EfetividadeMinOrderByAggregateInput = {
    efetividadeId?: SortOrder
    data?: SortOrder
    horasTrabalhadas?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EfetividadeSumOrderByAggregateInput = {
    efetividadeId?: SortOrder
    horasTrabalhadas?: SortOrder
    professorId?: SortOrder
    cursoId?: SortOrder
  }

  export type PermissaoCountOrderByAggregateInput = {
    permissaoId?: SortOrder
    descricao?: SortOrder
  }

  export type PermissaoAvgOrderByAggregateInput = {
    permissaoId?: SortOrder
  }

  export type PermissaoMaxOrderByAggregateInput = {
    permissaoId?: SortOrder
    descricao?: SortOrder
  }

  export type PermissaoMinOrderByAggregateInput = {
    permissaoId?: SortOrder
    descricao?: SortOrder
  }

  export type PermissaoSumOrderByAggregateInput = {
    permissaoId?: SortOrder
  }

  export type PermissaoScalarRelationFilter = {
    is?: PermissaoWhereInput
    isNot?: PermissaoWhereInput
  }

  export type UsuarioPermissaoUsuarioIdPermissaoIdCompoundUniqueInput = {
    usuarioId: number
    permissaoId: number
  }

  export type UsuarioPermissaoCountOrderByAggregateInput = {
    usuarioId?: SortOrder
    permissaoId?: SortOrder
  }

  export type UsuarioPermissaoAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
    permissaoId?: SortOrder
  }

  export type UsuarioPermissaoMaxOrderByAggregateInput = {
    usuarioId?: SortOrder
    permissaoId?: SortOrder
  }

  export type UsuarioPermissaoMinOrderByAggregateInput = {
    usuarioId?: SortOrder
    permissaoId?: SortOrder
  }

  export type UsuarioPermissaoSumOrderByAggregateInput = {
    usuarioId?: SortOrder
    permissaoId?: SortOrder
  }

  export type UsuarioCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRefreshTokensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRefreshTokensInput
    upsert?: UsuarioUpsertWithoutRefreshTokensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRefreshTokensInput, UsuarioUpdateWithoutRefreshTokensInput>, UsuarioUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<UsuarioCreateWithoutPasswordResetsInput, UsuarioUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPasswordResetsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<UsuarioCreateWithoutPasswordResetsInput, UsuarioUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPasswordResetsInput
    upsert?: UsuarioUpsertWithoutPasswordResetsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPasswordResetsInput, UsuarioUpdateWithoutPasswordResetsInput>, UsuarioUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type ProfessorCursoCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfessorCursoCreateWithoutProfessorInput, ProfessorCursoUncheckedCreateWithoutProfessorInput> | ProfessorCursoCreateWithoutProfessorInput[] | ProfessorCursoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutProfessorInput | ProfessorCursoCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfessorCursoCreateManyProfessorInputEnvelope
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
  }

  export type SumarioCreateNestedManyWithoutProfessorInput = {
    create?: XOR<SumarioCreateWithoutProfessorInput, SumarioUncheckedCreateWithoutProfessorInput> | SumarioCreateWithoutProfessorInput[] | SumarioUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutProfessorInput | SumarioCreateOrConnectWithoutProfessorInput[]
    createMany?: SumarioCreateManyProfessorInputEnvelope
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
  }

  export type PresencaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<PresencaCreateWithoutProfessorInput, PresencaUncheckedCreateWithoutProfessorInput> | PresencaCreateWithoutProfessorInput[] | PresencaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutProfessorInput | PresencaCreateOrConnectWithoutProfessorInput[]
    createMany?: PresencaCreateManyProfessorInputEnvelope
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
  }

  export type EfetividadeCreateNestedManyWithoutProfessorInput = {
    create?: XOR<EfetividadeCreateWithoutProfessorInput, EfetividadeUncheckedCreateWithoutProfessorInput> | EfetividadeCreateWithoutProfessorInput[] | EfetividadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutProfessorInput | EfetividadeCreateOrConnectWithoutProfessorInput[]
    createMany?: EfetividadeCreateManyProfessorInputEnvelope
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutProfessorInput = {
    create?: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfessorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProfessorCursoUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<ProfessorCursoCreateWithoutProfessorInput, ProfessorCursoUncheckedCreateWithoutProfessorInput> | ProfessorCursoCreateWithoutProfessorInput[] | ProfessorCursoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutProfessorInput | ProfessorCursoCreateOrConnectWithoutProfessorInput[]
    createMany?: ProfessorCursoCreateManyProfessorInputEnvelope
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
  }

  export type SumarioUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<SumarioCreateWithoutProfessorInput, SumarioUncheckedCreateWithoutProfessorInput> | SumarioCreateWithoutProfessorInput[] | SumarioUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutProfessorInput | SumarioCreateOrConnectWithoutProfessorInput[]
    createMany?: SumarioCreateManyProfessorInputEnvelope
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
  }

  export type PresencaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<PresencaCreateWithoutProfessorInput, PresencaUncheckedCreateWithoutProfessorInput> | PresencaCreateWithoutProfessorInput[] | PresencaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutProfessorInput | PresencaCreateOrConnectWithoutProfessorInput[]
    createMany?: PresencaCreateManyProfessorInputEnvelope
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
  }

  export type EfetividadeUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<EfetividadeCreateWithoutProfessorInput, EfetividadeUncheckedCreateWithoutProfessorInput> | EfetividadeCreateWithoutProfessorInput[] | EfetividadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutProfessorInput | EfetividadeCreateOrConnectWithoutProfessorInput[]
    createMany?: EfetividadeCreateManyProfessorInputEnvelope
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
  }

  export type EnumDepartamentoFieldUpdateOperationsInput = {
    set?: $Enums.Departamento
  }

  export type ProfessorCursoUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfessorCursoCreateWithoutProfessorInput, ProfessorCursoUncheckedCreateWithoutProfessorInput> | ProfessorCursoCreateWithoutProfessorInput[] | ProfessorCursoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutProfessorInput | ProfessorCursoCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfessorCursoUpsertWithWhereUniqueWithoutProfessorInput | ProfessorCursoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfessorCursoCreateManyProfessorInputEnvelope
    set?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    disconnect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    delete?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    update?: ProfessorCursoUpdateWithWhereUniqueWithoutProfessorInput | ProfessorCursoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfessorCursoUpdateManyWithWhereWithoutProfessorInput | ProfessorCursoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfessorCursoScalarWhereInput | ProfessorCursoScalarWhereInput[]
  }

  export type SumarioUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<SumarioCreateWithoutProfessorInput, SumarioUncheckedCreateWithoutProfessorInput> | SumarioCreateWithoutProfessorInput[] | SumarioUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutProfessorInput | SumarioCreateOrConnectWithoutProfessorInput[]
    upsert?: SumarioUpsertWithWhereUniqueWithoutProfessorInput | SumarioUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: SumarioCreateManyProfessorInputEnvelope
    set?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    disconnect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    delete?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    update?: SumarioUpdateWithWhereUniqueWithoutProfessorInput | SumarioUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: SumarioUpdateManyWithWhereWithoutProfessorInput | SumarioUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: SumarioScalarWhereInput | SumarioScalarWhereInput[]
  }

  export type PresencaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<PresencaCreateWithoutProfessorInput, PresencaUncheckedCreateWithoutProfessorInput> | PresencaCreateWithoutProfessorInput[] | PresencaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutProfessorInput | PresencaCreateOrConnectWithoutProfessorInput[]
    upsert?: PresencaUpsertWithWhereUniqueWithoutProfessorInput | PresencaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: PresencaCreateManyProfessorInputEnvelope
    set?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    disconnect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    delete?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    update?: PresencaUpdateWithWhereUniqueWithoutProfessorInput | PresencaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: PresencaUpdateManyWithWhereWithoutProfessorInput | PresencaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: PresencaScalarWhereInput | PresencaScalarWhereInput[]
  }

  export type EfetividadeUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<EfetividadeCreateWithoutProfessorInput, EfetividadeUncheckedCreateWithoutProfessorInput> | EfetividadeCreateWithoutProfessorInput[] | EfetividadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutProfessorInput | EfetividadeCreateOrConnectWithoutProfessorInput[]
    upsert?: EfetividadeUpsertWithWhereUniqueWithoutProfessorInput | EfetividadeUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: EfetividadeCreateManyProfessorInputEnvelope
    set?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    disconnect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    delete?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    update?: EfetividadeUpdateWithWhereUniqueWithoutProfessorInput | EfetividadeUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: EfetividadeUpdateManyWithWhereWithoutProfessorInput | EfetividadeUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: EfetividadeScalarWhereInput | EfetividadeScalarWhereInput[]
  }

  export type UsuarioUpdateOneWithoutProfessorNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfessorInput
    upsert?: UsuarioUpsertWithoutProfessorInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfessorInput, UsuarioUpdateWithoutProfessorInput>, UsuarioUncheckedUpdateWithoutProfessorInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessorCursoUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<ProfessorCursoCreateWithoutProfessorInput, ProfessorCursoUncheckedCreateWithoutProfessorInput> | ProfessorCursoCreateWithoutProfessorInput[] | ProfessorCursoUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutProfessorInput | ProfessorCursoCreateOrConnectWithoutProfessorInput[]
    upsert?: ProfessorCursoUpsertWithWhereUniqueWithoutProfessorInput | ProfessorCursoUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: ProfessorCursoCreateManyProfessorInputEnvelope
    set?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    disconnect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    delete?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    update?: ProfessorCursoUpdateWithWhereUniqueWithoutProfessorInput | ProfessorCursoUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: ProfessorCursoUpdateManyWithWhereWithoutProfessorInput | ProfessorCursoUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: ProfessorCursoScalarWhereInput | ProfessorCursoScalarWhereInput[]
  }

  export type SumarioUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<SumarioCreateWithoutProfessorInput, SumarioUncheckedCreateWithoutProfessorInput> | SumarioCreateWithoutProfessorInput[] | SumarioUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutProfessorInput | SumarioCreateOrConnectWithoutProfessorInput[]
    upsert?: SumarioUpsertWithWhereUniqueWithoutProfessorInput | SumarioUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: SumarioCreateManyProfessorInputEnvelope
    set?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    disconnect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    delete?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    update?: SumarioUpdateWithWhereUniqueWithoutProfessorInput | SumarioUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: SumarioUpdateManyWithWhereWithoutProfessorInput | SumarioUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: SumarioScalarWhereInput | SumarioScalarWhereInput[]
  }

  export type PresencaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<PresencaCreateWithoutProfessorInput, PresencaUncheckedCreateWithoutProfessorInput> | PresencaCreateWithoutProfessorInput[] | PresencaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutProfessorInput | PresencaCreateOrConnectWithoutProfessorInput[]
    upsert?: PresencaUpsertWithWhereUniqueWithoutProfessorInput | PresencaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: PresencaCreateManyProfessorInputEnvelope
    set?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    disconnect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    delete?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    update?: PresencaUpdateWithWhereUniqueWithoutProfessorInput | PresencaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: PresencaUpdateManyWithWhereWithoutProfessorInput | PresencaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: PresencaScalarWhereInput | PresencaScalarWhereInput[]
  }

  export type EfetividadeUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<EfetividadeCreateWithoutProfessorInput, EfetividadeUncheckedCreateWithoutProfessorInput> | EfetividadeCreateWithoutProfessorInput[] | EfetividadeUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutProfessorInput | EfetividadeCreateOrConnectWithoutProfessorInput[]
    upsert?: EfetividadeUpsertWithWhereUniqueWithoutProfessorInput | EfetividadeUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: EfetividadeCreateManyProfessorInputEnvelope
    set?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    disconnect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    delete?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    update?: EfetividadeUpdateWithWhereUniqueWithoutProfessorInput | EfetividadeUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: EfetividadeUpdateManyWithWhereWithoutProfessorInput | EfetividadeUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: EfetividadeScalarWhereInput | EfetividadeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutFuncionarioInput = {
    create?: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFuncionarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumCargoFieldUpdateOperationsInput = {
    set?: $Enums.Cargo
  }

  export type UsuarioUpdateOneWithoutFuncionarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFuncionarioInput
    upsert?: UsuarioUpsertWithoutFuncionarioInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFuncionarioInput, UsuarioUpdateWithoutFuncionarioInput>, UsuarioUncheckedUpdateWithoutFuncionarioInput>
  }

  export type UsuarioPermissaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutUsuarioInput, UsuarioPermissaoUncheckedCreateWithoutUsuarioInput> | UsuarioPermissaoCreateWithoutUsuarioInput[] | UsuarioPermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutUsuarioInput | UsuarioPermissaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioPermissaoCreateManyUsuarioInputEnvelope
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
  }

  export type ProfessorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    connect?: ProfessorWhereUniqueInput
  }

  export type FuncionarioCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type RefreshTokenCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PasswordResetCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PasswordResetCreateWithoutUsuarioInput, PasswordResetUncheckedCreateWithoutUsuarioInput> | PasswordResetCreateWithoutUsuarioInput[] | PasswordResetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUsuarioInput | PasswordResetCreateOrConnectWithoutUsuarioInput[]
    createMany?: PasswordResetCreateManyUsuarioInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type UsuarioPermissaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutUsuarioInput, UsuarioPermissaoUncheckedCreateWithoutUsuarioInput> | UsuarioPermissaoCreateWithoutUsuarioInput[] | UsuarioPermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutUsuarioInput | UsuarioPermissaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioPermissaoCreateManyUsuarioInputEnvelope
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
  }

  export type ProfessorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    connect?: ProfessorWhereUniqueInput
  }

  export type FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PasswordResetUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PasswordResetCreateWithoutUsuarioInput, PasswordResetUncheckedCreateWithoutUsuarioInput> | PasswordResetCreateWithoutUsuarioInput[] | PasswordResetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUsuarioInput | PasswordResetCreateOrConnectWithoutUsuarioInput[]
    createMany?: PasswordResetCreateManyUsuarioInputEnvelope
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type UsuarioPermissaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutUsuarioInput, UsuarioPermissaoUncheckedCreateWithoutUsuarioInput> | UsuarioPermissaoCreateWithoutUsuarioInput[] | UsuarioPermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutUsuarioInput | UsuarioPermissaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioPermissaoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioPermissaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioPermissaoCreateManyUsuarioInputEnvelope
    set?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    disconnect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    delete?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    update?: UsuarioPermissaoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioPermissaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioPermissaoUpdateManyWithWhereWithoutUsuarioInput | UsuarioPermissaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioPermissaoScalarWhereInput | UsuarioPermissaoScalarWhereInput[]
  }

  export type ProfessorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessorUpsertWithoutUsuarioInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUsuarioInput, ProfessorUpdateWithoutUsuarioInput>, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type FuncionarioUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    upsert?: FuncionarioUpsertWithoutUsuarioInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutUsuarioInput, FuncionarioUpdateWithoutUsuarioInput>, FuncionarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type RefreshTokenUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUsuarioInput | RefreshTokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PasswordResetUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUsuarioInput, PasswordResetUncheckedCreateWithoutUsuarioInput> | PasswordResetCreateWithoutUsuarioInput[] | PasswordResetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUsuarioInput | PasswordResetCreateOrConnectWithoutUsuarioInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUsuarioInput | PasswordResetUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PasswordResetCreateManyUsuarioInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUsuarioInput | PasswordResetUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUsuarioInput | PasswordResetUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutUsuarioInput, UsuarioPermissaoUncheckedCreateWithoutUsuarioInput> | UsuarioPermissaoCreateWithoutUsuarioInput[] | UsuarioPermissaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutUsuarioInput | UsuarioPermissaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioPermissaoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioPermissaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioPermissaoCreateManyUsuarioInputEnvelope
    set?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    disconnect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    delete?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    update?: UsuarioPermissaoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioPermissaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioPermissaoUpdateManyWithWhereWithoutUsuarioInput | UsuarioPermissaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioPermissaoScalarWhereInput | UsuarioPermissaoScalarWhereInput[]
  }

  export type ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessorUpsertWithoutUsuarioInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUsuarioInput, ProfessorUpdateWithoutUsuarioInput>, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutUsuarioInput
    upsert?: FuncionarioUpsertWithoutUsuarioInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutUsuarioInput, FuncionarioUpdateWithoutUsuarioInput>, FuncionarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUsuarioInput | RefreshTokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PasswordResetUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUsuarioInput, PasswordResetUncheckedCreateWithoutUsuarioInput> | PasswordResetCreateWithoutUsuarioInput[] | PasswordResetUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUsuarioInput | PasswordResetCreateOrConnectWithoutUsuarioInput[]
    upsert?: PasswordResetUpsertWithWhereUniqueWithoutUsuarioInput | PasswordResetUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PasswordResetCreateManyUsuarioInputEnvelope
    set?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    disconnect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    delete?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    connect?: PasswordResetWhereUniqueInput | PasswordResetWhereUniqueInput[]
    update?: PasswordResetUpdateWithWhereUniqueWithoutUsuarioInput | PasswordResetUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PasswordResetUpdateManyWithWhereWithoutUsuarioInput | PasswordResetUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
  }

  export type ProfessorCursoCreateNestedManyWithoutCursoInput = {
    create?: XOR<ProfessorCursoCreateWithoutCursoInput, ProfessorCursoUncheckedCreateWithoutCursoInput> | ProfessorCursoCreateWithoutCursoInput[] | ProfessorCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutCursoInput | ProfessorCursoCreateOrConnectWithoutCursoInput[]
    createMany?: ProfessorCursoCreateManyCursoInputEnvelope
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
  }

  export type SumarioCreateNestedManyWithoutCursoInput = {
    create?: XOR<SumarioCreateWithoutCursoInput, SumarioUncheckedCreateWithoutCursoInput> | SumarioCreateWithoutCursoInput[] | SumarioUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutCursoInput | SumarioCreateOrConnectWithoutCursoInput[]
    createMany?: SumarioCreateManyCursoInputEnvelope
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
  }

  export type PresencaCreateNestedManyWithoutCursoInput = {
    create?: XOR<PresencaCreateWithoutCursoInput, PresencaUncheckedCreateWithoutCursoInput> | PresencaCreateWithoutCursoInput[] | PresencaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutCursoInput | PresencaCreateOrConnectWithoutCursoInput[]
    createMany?: PresencaCreateManyCursoInputEnvelope
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
  }

  export type EfetividadeCreateNestedManyWithoutCursoInput = {
    create?: XOR<EfetividadeCreateWithoutCursoInput, EfetividadeUncheckedCreateWithoutCursoInput> | EfetividadeCreateWithoutCursoInput[] | EfetividadeUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutCursoInput | EfetividadeCreateOrConnectWithoutCursoInput[]
    createMany?: EfetividadeCreateManyCursoInputEnvelope
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
  }

  export type ProfessorCursoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<ProfessorCursoCreateWithoutCursoInput, ProfessorCursoUncheckedCreateWithoutCursoInput> | ProfessorCursoCreateWithoutCursoInput[] | ProfessorCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutCursoInput | ProfessorCursoCreateOrConnectWithoutCursoInput[]
    createMany?: ProfessorCursoCreateManyCursoInputEnvelope
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
  }

  export type SumarioUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<SumarioCreateWithoutCursoInput, SumarioUncheckedCreateWithoutCursoInput> | SumarioCreateWithoutCursoInput[] | SumarioUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutCursoInput | SumarioCreateOrConnectWithoutCursoInput[]
    createMany?: SumarioCreateManyCursoInputEnvelope
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
  }

  export type PresencaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<PresencaCreateWithoutCursoInput, PresencaUncheckedCreateWithoutCursoInput> | PresencaCreateWithoutCursoInput[] | PresencaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutCursoInput | PresencaCreateOrConnectWithoutCursoInput[]
    createMany?: PresencaCreateManyCursoInputEnvelope
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
  }

  export type EfetividadeUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<EfetividadeCreateWithoutCursoInput, EfetividadeUncheckedCreateWithoutCursoInput> | EfetividadeCreateWithoutCursoInput[] | EfetividadeUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutCursoInput | EfetividadeCreateOrConnectWithoutCursoInput[]
    createMany?: EfetividadeCreateManyCursoInputEnvelope
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
  }

  export type ProfessorCursoUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ProfessorCursoCreateWithoutCursoInput, ProfessorCursoUncheckedCreateWithoutCursoInput> | ProfessorCursoCreateWithoutCursoInput[] | ProfessorCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutCursoInput | ProfessorCursoCreateOrConnectWithoutCursoInput[]
    upsert?: ProfessorCursoUpsertWithWhereUniqueWithoutCursoInput | ProfessorCursoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ProfessorCursoCreateManyCursoInputEnvelope
    set?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    disconnect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    delete?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    update?: ProfessorCursoUpdateWithWhereUniqueWithoutCursoInput | ProfessorCursoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ProfessorCursoUpdateManyWithWhereWithoutCursoInput | ProfessorCursoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ProfessorCursoScalarWhereInput | ProfessorCursoScalarWhereInput[]
  }

  export type SumarioUpdateManyWithoutCursoNestedInput = {
    create?: XOR<SumarioCreateWithoutCursoInput, SumarioUncheckedCreateWithoutCursoInput> | SumarioCreateWithoutCursoInput[] | SumarioUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutCursoInput | SumarioCreateOrConnectWithoutCursoInput[]
    upsert?: SumarioUpsertWithWhereUniqueWithoutCursoInput | SumarioUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: SumarioCreateManyCursoInputEnvelope
    set?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    disconnect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    delete?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    update?: SumarioUpdateWithWhereUniqueWithoutCursoInput | SumarioUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: SumarioUpdateManyWithWhereWithoutCursoInput | SumarioUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: SumarioScalarWhereInput | SumarioScalarWhereInput[]
  }

  export type PresencaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<PresencaCreateWithoutCursoInput, PresencaUncheckedCreateWithoutCursoInput> | PresencaCreateWithoutCursoInput[] | PresencaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutCursoInput | PresencaCreateOrConnectWithoutCursoInput[]
    upsert?: PresencaUpsertWithWhereUniqueWithoutCursoInput | PresencaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: PresencaCreateManyCursoInputEnvelope
    set?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    disconnect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    delete?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    update?: PresencaUpdateWithWhereUniqueWithoutCursoInput | PresencaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: PresencaUpdateManyWithWhereWithoutCursoInput | PresencaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: PresencaScalarWhereInput | PresencaScalarWhereInput[]
  }

  export type EfetividadeUpdateManyWithoutCursoNestedInput = {
    create?: XOR<EfetividadeCreateWithoutCursoInput, EfetividadeUncheckedCreateWithoutCursoInput> | EfetividadeCreateWithoutCursoInput[] | EfetividadeUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutCursoInput | EfetividadeCreateOrConnectWithoutCursoInput[]
    upsert?: EfetividadeUpsertWithWhereUniqueWithoutCursoInput | EfetividadeUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: EfetividadeCreateManyCursoInputEnvelope
    set?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    disconnect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    delete?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    update?: EfetividadeUpdateWithWhereUniqueWithoutCursoInput | EfetividadeUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: EfetividadeUpdateManyWithWhereWithoutCursoInput | EfetividadeUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: EfetividadeScalarWhereInput | EfetividadeScalarWhereInput[]
  }

  export type ProfessorCursoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<ProfessorCursoCreateWithoutCursoInput, ProfessorCursoUncheckedCreateWithoutCursoInput> | ProfessorCursoCreateWithoutCursoInput[] | ProfessorCursoUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: ProfessorCursoCreateOrConnectWithoutCursoInput | ProfessorCursoCreateOrConnectWithoutCursoInput[]
    upsert?: ProfessorCursoUpsertWithWhereUniqueWithoutCursoInput | ProfessorCursoUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: ProfessorCursoCreateManyCursoInputEnvelope
    set?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    disconnect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    delete?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    connect?: ProfessorCursoWhereUniqueInput | ProfessorCursoWhereUniqueInput[]
    update?: ProfessorCursoUpdateWithWhereUniqueWithoutCursoInput | ProfessorCursoUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: ProfessorCursoUpdateManyWithWhereWithoutCursoInput | ProfessorCursoUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: ProfessorCursoScalarWhereInput | ProfessorCursoScalarWhereInput[]
  }

  export type SumarioUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<SumarioCreateWithoutCursoInput, SumarioUncheckedCreateWithoutCursoInput> | SumarioCreateWithoutCursoInput[] | SumarioUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: SumarioCreateOrConnectWithoutCursoInput | SumarioCreateOrConnectWithoutCursoInput[]
    upsert?: SumarioUpsertWithWhereUniqueWithoutCursoInput | SumarioUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: SumarioCreateManyCursoInputEnvelope
    set?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    disconnect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    delete?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    connect?: SumarioWhereUniqueInput | SumarioWhereUniqueInput[]
    update?: SumarioUpdateWithWhereUniqueWithoutCursoInput | SumarioUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: SumarioUpdateManyWithWhereWithoutCursoInput | SumarioUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: SumarioScalarWhereInput | SumarioScalarWhereInput[]
  }

  export type PresencaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<PresencaCreateWithoutCursoInput, PresencaUncheckedCreateWithoutCursoInput> | PresencaCreateWithoutCursoInput[] | PresencaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: PresencaCreateOrConnectWithoutCursoInput | PresencaCreateOrConnectWithoutCursoInput[]
    upsert?: PresencaUpsertWithWhereUniqueWithoutCursoInput | PresencaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: PresencaCreateManyCursoInputEnvelope
    set?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    disconnect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    delete?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    connect?: PresencaWhereUniqueInput | PresencaWhereUniqueInput[]
    update?: PresencaUpdateWithWhereUniqueWithoutCursoInput | PresencaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: PresencaUpdateManyWithWhereWithoutCursoInput | PresencaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: PresencaScalarWhereInput | PresencaScalarWhereInput[]
  }

  export type EfetividadeUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<EfetividadeCreateWithoutCursoInput, EfetividadeUncheckedCreateWithoutCursoInput> | EfetividadeCreateWithoutCursoInput[] | EfetividadeUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: EfetividadeCreateOrConnectWithoutCursoInput | EfetividadeCreateOrConnectWithoutCursoInput[]
    upsert?: EfetividadeUpsertWithWhereUniqueWithoutCursoInput | EfetividadeUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: EfetividadeCreateManyCursoInputEnvelope
    set?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    disconnect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    delete?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    connect?: EfetividadeWhereUniqueInput | EfetividadeWhereUniqueInput[]
    update?: EfetividadeUpdateWithWhereUniqueWithoutCursoInput | EfetividadeUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: EfetividadeUpdateManyWithWhereWithoutCursoInput | EfetividadeUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: EfetividadeScalarWhereInput | EfetividadeScalarWhereInput[]
  }

  export type CursoCreateNestedOneWithoutSumariosInput = {
    create?: XOR<CursoCreateWithoutSumariosInput, CursoUncheckedCreateWithoutSumariosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutSumariosInput
    connect?: CursoWhereUniqueInput
  }

  export type ProfessorCreateNestedOneWithoutSumariosInput = {
    create?: XOR<ProfessorCreateWithoutSumariosInput, ProfessorUncheckedCreateWithoutSumariosInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutSumariosInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CursoUpdateOneRequiredWithoutSumariosNestedInput = {
    create?: XOR<CursoCreateWithoutSumariosInput, CursoUncheckedCreateWithoutSumariosInput>
    connectOrCreate?: CursoCreateOrConnectWithoutSumariosInput
    upsert?: CursoUpsertWithoutSumariosInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutSumariosInput, CursoUpdateWithoutSumariosInput>, CursoUncheckedUpdateWithoutSumariosInput>
  }

  export type ProfessorUpdateOneRequiredWithoutSumariosNestedInput = {
    create?: XOR<ProfessorCreateWithoutSumariosInput, ProfessorUncheckedCreateWithoutSumariosInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutSumariosInput
    upsert?: ProfessorUpsertWithoutSumariosInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutSumariosInput, ProfessorUpdateWithoutSumariosInput>, ProfessorUncheckedUpdateWithoutSumariosInput>
  }

  export type ProfessorCreateNestedOneWithoutCursosInput = {
    create?: XOR<ProfessorCreateWithoutCursosInput, ProfessorUncheckedCreateWithoutCursosInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutCursosInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutProfessoresInput = {
    create?: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: CursoCreateOrConnectWithoutProfessoresInput
    connect?: CursoWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<ProfessorCreateWithoutCursosInput, ProfessorUncheckedCreateWithoutCursosInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutCursosInput
    upsert?: ProfessorUpsertWithoutCursosInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutCursosInput, ProfessorUpdateWithoutCursosInput>, ProfessorUncheckedUpdateWithoutCursosInput>
  }

  export type CursoUpdateOneRequiredWithoutProfessoresNestedInput = {
    create?: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: CursoCreateOrConnectWithoutProfessoresInput
    upsert?: CursoUpsertWithoutProfessoresInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutProfessoresInput, CursoUpdateWithoutProfessoresInput>, CursoUncheckedUpdateWithoutProfessoresInput>
  }

  export type ProfessorCreateNestedOneWithoutPresencasInput = {
    create?: XOR<ProfessorCreateWithoutPresencasInput, ProfessorUncheckedCreateWithoutPresencasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutPresencasInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutPresencaInput = {
    create?: XOR<CursoCreateWithoutPresencaInput, CursoUncheckedCreateWithoutPresencaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutPresencaInput
    connect?: CursoWhereUniqueInput
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type ProfessorUpdateOneRequiredWithoutPresencasNestedInput = {
    create?: XOR<ProfessorCreateWithoutPresencasInput, ProfessorUncheckedCreateWithoutPresencasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutPresencasInput
    upsert?: ProfessorUpsertWithoutPresencasInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutPresencasInput, ProfessorUpdateWithoutPresencasInput>, ProfessorUncheckedUpdateWithoutPresencasInput>
  }

  export type CursoUpdateOneRequiredWithoutPresencaNestedInput = {
    create?: XOR<CursoCreateWithoutPresencaInput, CursoUncheckedCreateWithoutPresencaInput>
    connectOrCreate?: CursoCreateOrConnectWithoutPresencaInput
    upsert?: CursoUpsertWithoutPresencaInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutPresencaInput, CursoUpdateWithoutPresencaInput>, CursoUncheckedUpdateWithoutPresencaInput>
  }

  export type ProfessorCreateNestedOneWithoutEfetividadesInput = {
    create?: XOR<ProfessorCreateWithoutEfetividadesInput, ProfessorUncheckedCreateWithoutEfetividadesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutEfetividadesInput
    connect?: ProfessorWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutEfetividadeInput = {
    create?: XOR<CursoCreateWithoutEfetividadeInput, CursoUncheckedCreateWithoutEfetividadeInput>
    connectOrCreate?: CursoCreateOrConnectWithoutEfetividadeInput
    connect?: CursoWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutEfetividadesNestedInput = {
    create?: XOR<ProfessorCreateWithoutEfetividadesInput, ProfessorUncheckedCreateWithoutEfetividadesInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutEfetividadesInput
    upsert?: ProfessorUpsertWithoutEfetividadesInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutEfetividadesInput, ProfessorUpdateWithoutEfetividadesInput>, ProfessorUncheckedUpdateWithoutEfetividadesInput>
  }

  export type CursoUpdateOneRequiredWithoutEfetividadeNestedInput = {
    create?: XOR<CursoCreateWithoutEfetividadeInput, CursoUncheckedCreateWithoutEfetividadeInput>
    connectOrCreate?: CursoCreateOrConnectWithoutEfetividadeInput
    upsert?: CursoUpsertWithoutEfetividadeInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutEfetividadeInput, CursoUpdateWithoutEfetividadeInput>, CursoUncheckedUpdateWithoutEfetividadeInput>
  }

  export type UsuarioPermissaoCreateNestedManyWithoutPermissaoInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutPermissaoInput, UsuarioPermissaoUncheckedCreateWithoutPermissaoInput> | UsuarioPermissaoCreateWithoutPermissaoInput[] | UsuarioPermissaoUncheckedCreateWithoutPermissaoInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutPermissaoInput | UsuarioPermissaoCreateOrConnectWithoutPermissaoInput[]
    createMany?: UsuarioPermissaoCreateManyPermissaoInputEnvelope
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
  }

  export type UsuarioPermissaoUncheckedCreateNestedManyWithoutPermissaoInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutPermissaoInput, UsuarioPermissaoUncheckedCreateWithoutPermissaoInput> | UsuarioPermissaoCreateWithoutPermissaoInput[] | UsuarioPermissaoUncheckedCreateWithoutPermissaoInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutPermissaoInput | UsuarioPermissaoCreateOrConnectWithoutPermissaoInput[]
    createMany?: UsuarioPermissaoCreateManyPermissaoInputEnvelope
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
  }

  export type UsuarioPermissaoUpdateManyWithoutPermissaoNestedInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutPermissaoInput, UsuarioPermissaoUncheckedCreateWithoutPermissaoInput> | UsuarioPermissaoCreateWithoutPermissaoInput[] | UsuarioPermissaoUncheckedCreateWithoutPermissaoInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutPermissaoInput | UsuarioPermissaoCreateOrConnectWithoutPermissaoInput[]
    upsert?: UsuarioPermissaoUpsertWithWhereUniqueWithoutPermissaoInput | UsuarioPermissaoUpsertWithWhereUniqueWithoutPermissaoInput[]
    createMany?: UsuarioPermissaoCreateManyPermissaoInputEnvelope
    set?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    disconnect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    delete?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    update?: UsuarioPermissaoUpdateWithWhereUniqueWithoutPermissaoInput | UsuarioPermissaoUpdateWithWhereUniqueWithoutPermissaoInput[]
    updateMany?: UsuarioPermissaoUpdateManyWithWhereWithoutPermissaoInput | UsuarioPermissaoUpdateManyWithWhereWithoutPermissaoInput[]
    deleteMany?: UsuarioPermissaoScalarWhereInput | UsuarioPermissaoScalarWhereInput[]
  }

  export type UsuarioPermissaoUncheckedUpdateManyWithoutPermissaoNestedInput = {
    create?: XOR<UsuarioPermissaoCreateWithoutPermissaoInput, UsuarioPermissaoUncheckedCreateWithoutPermissaoInput> | UsuarioPermissaoCreateWithoutPermissaoInput[] | UsuarioPermissaoUncheckedCreateWithoutPermissaoInput[]
    connectOrCreate?: UsuarioPermissaoCreateOrConnectWithoutPermissaoInput | UsuarioPermissaoCreateOrConnectWithoutPermissaoInput[]
    upsert?: UsuarioPermissaoUpsertWithWhereUniqueWithoutPermissaoInput | UsuarioPermissaoUpsertWithWhereUniqueWithoutPermissaoInput[]
    createMany?: UsuarioPermissaoCreateManyPermissaoInputEnvelope
    set?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    disconnect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    delete?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    connect?: UsuarioPermissaoWhereUniqueInput | UsuarioPermissaoWhereUniqueInput[]
    update?: UsuarioPermissaoUpdateWithWhereUniqueWithoutPermissaoInput | UsuarioPermissaoUpdateWithWhereUniqueWithoutPermissaoInput[]
    updateMany?: UsuarioPermissaoUpdateManyWithWhereWithoutPermissaoInput | UsuarioPermissaoUpdateManyWithWhereWithoutPermissaoInput[]
    deleteMany?: UsuarioPermissaoScalarWhereInput | UsuarioPermissaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPermissoesInput = {
    create?: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermissoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PermissaoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PermissaoCreateWithoutUsuariosInput, PermissaoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PermissaoCreateOrConnectWithoutUsuariosInput
    connect?: PermissaoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutPermissoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPermissoesInput
    upsert?: UsuarioUpsertWithoutPermissoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPermissoesInput, UsuarioUpdateWithoutPermissoesInput>, UsuarioUncheckedUpdateWithoutPermissoesInput>
  }

  export type PermissaoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<PermissaoCreateWithoutUsuariosInput, PermissaoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PermissaoCreateOrConnectWithoutUsuariosInput
    upsert?: PermissaoUpsertWithoutUsuariosInput
    connect?: PermissaoWhereUniqueInput
    update?: XOR<XOR<PermissaoUpdateToOneWithWhereWithoutUsuariosInput, PermissaoUpdateWithoutUsuariosInput>, PermissaoUncheckedUpdateWithoutUsuariosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDepartamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.Departamento | EnumDepartamentoFieldRefInput<$PrismaModel>
    in?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartamentoFilter<$PrismaModel> | $Enums.Departamento
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDepartamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Departamento | EnumDepartamentoFieldRefInput<$PrismaModel>
    in?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departamento[] | ListEnumDepartamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartamentoWithAggregatesFilter<$PrismaModel> | $Enums.Departamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartamentoFilter<$PrismaModel>
    _max?: NestedEnumDepartamentoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCargoFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoFilter<$PrismaModel> | $Enums.Cargo
  }

  export type NestedEnumCargoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cargo | EnumCargoFieldRefInput<$PrismaModel>
    in?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cargo[] | ListEnumCargoFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoWithAggregatesFilter<$PrismaModel> | $Enums.Cargo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoFilter<$PrismaModel>
    _max?: NestedEnumCargoFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Estado[] | ListEnumEstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutRefreshTokensInput = {
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRefreshTokensInput = {
    usuarioId?: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoUncheckedCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRefreshTokensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UsuarioUpsertWithoutRefreshTokensInput = {
    update: XOR<UsuarioUpdateWithoutRefreshTokensInput, UsuarioUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRefreshTokensInput, UsuarioUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UsuarioUpdateWithoutRefreshTokensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRefreshTokensInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutPasswordResetsInput = {
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPasswordResetsInput = {
    usuarioId?: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoUncheckedCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPasswordResetsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPasswordResetsInput, UsuarioUncheckedCreateWithoutPasswordResetsInput>
  }

  export type UsuarioUpsertWithoutPasswordResetsInput = {
    update: XOR<UsuarioUpdateWithoutPasswordResetsInput, UsuarioUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<UsuarioCreateWithoutPasswordResetsInput, UsuarioUncheckedCreateWithoutPasswordResetsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPasswordResetsInput, UsuarioUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UsuarioUpdateWithoutPasswordResetsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPasswordResetsInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProfessorCursoCreateWithoutProfessorInput = {
    createdAt?: Date | string
    curso: CursoCreateNestedOneWithoutProfessoresInput
  }

  export type ProfessorCursoUncheckedCreateWithoutProfessorInput = {
    cursoId: number
    createdAt?: Date | string
  }

  export type ProfessorCursoCreateOrConnectWithoutProfessorInput = {
    where: ProfessorCursoWhereUniqueInput
    create: XOR<ProfessorCursoCreateWithoutProfessorInput, ProfessorCursoUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorCursoCreateManyProfessorInputEnvelope = {
    data: ProfessorCursoCreateManyProfessorInput | ProfessorCursoCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type SumarioCreateWithoutProfessorInput = {
    data: Date | string
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    curso: CursoCreateNestedOneWithoutSumariosInput
  }

  export type SumarioUncheckedCreateWithoutProfessorInput = {
    sumarioId?: number
    data: Date | string
    conteudo: string
    cursoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SumarioCreateOrConnectWithoutProfessorInput = {
    where: SumarioWhereUniqueInput
    create: XOR<SumarioCreateWithoutProfessorInput, SumarioUncheckedCreateWithoutProfessorInput>
  }

  export type SumarioCreateManyProfessorInputEnvelope = {
    data: SumarioCreateManyProfessorInput | SumarioCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type PresencaCreateWithoutProfessorInput = {
    data: Date | string
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string
    curso?: CursoCreateNestedOneWithoutPresencaInput
  }

  export type PresencaUncheckedCreateWithoutProfessorInput = {
    presencaId?: number
    data: Date | string
    estado: $Enums.Estado
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresencaCreateOrConnectWithoutProfessorInput = {
    where: PresencaWhereUniqueInput
    create: XOR<PresencaCreateWithoutProfessorInput, PresencaUncheckedCreateWithoutProfessorInput>
  }

  export type PresencaCreateManyProfessorInputEnvelope = {
    data: PresencaCreateManyProfessorInput | PresencaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type EfetividadeCreateWithoutProfessorInput = {
    data: Date | string
    horasTrabalhadas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    curso?: CursoCreateNestedOneWithoutEfetividadeInput
  }

  export type EfetividadeUncheckedCreateWithoutProfessorInput = {
    efetividadeId?: number
    data: Date | string
    horasTrabalhadas: number
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EfetividadeCreateOrConnectWithoutProfessorInput = {
    where: EfetividadeWhereUniqueInput
    create: XOR<EfetividadeCreateWithoutProfessorInput, EfetividadeUncheckedCreateWithoutProfessorInput>
  }

  export type EfetividadeCreateManyProfessorInputEnvelope = {
    data: EfetividadeCreateManyProfessorInput | EfetividadeCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutProfessorInput = {
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoCreateNestedManyWithoutUsuarioInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProfessorInput = {
    usuarioId?: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoUncheckedCreateNestedManyWithoutUsuarioInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProfessorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorCursoUpsertWithWhereUniqueWithoutProfessorInput = {
    where: ProfessorCursoWhereUniqueInput
    update: XOR<ProfessorCursoUpdateWithoutProfessorInput, ProfessorCursoUncheckedUpdateWithoutProfessorInput>
    create: XOR<ProfessorCursoCreateWithoutProfessorInput, ProfessorCursoUncheckedCreateWithoutProfessorInput>
  }

  export type ProfessorCursoUpdateWithWhereUniqueWithoutProfessorInput = {
    where: ProfessorCursoWhereUniqueInput
    data: XOR<ProfessorCursoUpdateWithoutProfessorInput, ProfessorCursoUncheckedUpdateWithoutProfessorInput>
  }

  export type ProfessorCursoUpdateManyWithWhereWithoutProfessorInput = {
    where: ProfessorCursoScalarWhereInput
    data: XOR<ProfessorCursoUpdateManyMutationInput, ProfessorCursoUncheckedUpdateManyWithoutProfessorInput>
  }

  export type ProfessorCursoScalarWhereInput = {
    AND?: ProfessorCursoScalarWhereInput | ProfessorCursoScalarWhereInput[]
    OR?: ProfessorCursoScalarWhereInput[]
    NOT?: ProfessorCursoScalarWhereInput | ProfessorCursoScalarWhereInput[]
    professorId?: IntFilter<"ProfessorCurso"> | number
    cursoId?: IntFilter<"ProfessorCurso"> | number
    createdAt?: DateTimeFilter<"ProfessorCurso"> | Date | string
  }

  export type SumarioUpsertWithWhereUniqueWithoutProfessorInput = {
    where: SumarioWhereUniqueInput
    update: XOR<SumarioUpdateWithoutProfessorInput, SumarioUncheckedUpdateWithoutProfessorInput>
    create: XOR<SumarioCreateWithoutProfessorInput, SumarioUncheckedCreateWithoutProfessorInput>
  }

  export type SumarioUpdateWithWhereUniqueWithoutProfessorInput = {
    where: SumarioWhereUniqueInput
    data: XOR<SumarioUpdateWithoutProfessorInput, SumarioUncheckedUpdateWithoutProfessorInput>
  }

  export type SumarioUpdateManyWithWhereWithoutProfessorInput = {
    where: SumarioScalarWhereInput
    data: XOR<SumarioUpdateManyMutationInput, SumarioUncheckedUpdateManyWithoutProfessorInput>
  }

  export type SumarioScalarWhereInput = {
    AND?: SumarioScalarWhereInput | SumarioScalarWhereInput[]
    OR?: SumarioScalarWhereInput[]
    NOT?: SumarioScalarWhereInput | SumarioScalarWhereInput[]
    sumarioId?: IntFilter<"Sumario"> | number
    data?: DateTimeFilter<"Sumario"> | Date | string
    conteudo?: StringFilter<"Sumario"> | string
    cursoId?: IntFilter<"Sumario"> | number
    professorId?: IntFilter<"Sumario"> | number
    createdAt?: DateTimeFilter<"Sumario"> | Date | string
    updatedAt?: DateTimeFilter<"Sumario"> | Date | string
  }

  export type PresencaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: PresencaWhereUniqueInput
    update: XOR<PresencaUpdateWithoutProfessorInput, PresencaUncheckedUpdateWithoutProfessorInput>
    create: XOR<PresencaCreateWithoutProfessorInput, PresencaUncheckedCreateWithoutProfessorInput>
  }

  export type PresencaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: PresencaWhereUniqueInput
    data: XOR<PresencaUpdateWithoutProfessorInput, PresencaUncheckedUpdateWithoutProfessorInput>
  }

  export type PresencaUpdateManyWithWhereWithoutProfessorInput = {
    where: PresencaScalarWhereInput
    data: XOR<PresencaUpdateManyMutationInput, PresencaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type PresencaScalarWhereInput = {
    AND?: PresencaScalarWhereInput | PresencaScalarWhereInput[]
    OR?: PresencaScalarWhereInput[]
    NOT?: PresencaScalarWhereInput | PresencaScalarWhereInput[]
    presencaId?: IntFilter<"Presenca"> | number
    data?: DateTimeFilter<"Presenca"> | Date | string
    estado?: EnumEstadoFilter<"Presenca"> | $Enums.Estado
    professorId?: IntFilter<"Presenca"> | number
    cursoId?: IntFilter<"Presenca"> | number
    createdAt?: DateTimeFilter<"Presenca"> | Date | string
    updatedAt?: DateTimeFilter<"Presenca"> | Date | string
  }

  export type EfetividadeUpsertWithWhereUniqueWithoutProfessorInput = {
    where: EfetividadeWhereUniqueInput
    update: XOR<EfetividadeUpdateWithoutProfessorInput, EfetividadeUncheckedUpdateWithoutProfessorInput>
    create: XOR<EfetividadeCreateWithoutProfessorInput, EfetividadeUncheckedCreateWithoutProfessorInput>
  }

  export type EfetividadeUpdateWithWhereUniqueWithoutProfessorInput = {
    where: EfetividadeWhereUniqueInput
    data: XOR<EfetividadeUpdateWithoutProfessorInput, EfetividadeUncheckedUpdateWithoutProfessorInput>
  }

  export type EfetividadeUpdateManyWithWhereWithoutProfessorInput = {
    where: EfetividadeScalarWhereInput
    data: XOR<EfetividadeUpdateManyMutationInput, EfetividadeUncheckedUpdateManyWithoutProfessorInput>
  }

  export type EfetividadeScalarWhereInput = {
    AND?: EfetividadeScalarWhereInput | EfetividadeScalarWhereInput[]
    OR?: EfetividadeScalarWhereInput[]
    NOT?: EfetividadeScalarWhereInput | EfetividadeScalarWhereInput[]
    efetividadeId?: IntFilter<"Efetividade"> | number
    data?: DateTimeFilter<"Efetividade"> | Date | string
    horasTrabalhadas?: IntFilter<"Efetividade"> | number
    professorId?: IntFilter<"Efetividade"> | number
    cursoId?: IntFilter<"Efetividade"> | number
    createdAt?: DateTimeFilter<"Efetividade"> | Date | string
    updatedAt?: DateTimeFilter<"Efetividade"> | Date | string
  }

  export type UsuarioUpsertWithoutProfessorInput = {
    update: XOR<UsuarioUpdateWithoutProfessorInput, UsuarioUncheckedUpdateWithoutProfessorInput>
    create: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfessorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfessorInput, UsuarioUncheckedUpdateWithoutProfessorInput>
  }

  export type UsuarioUpdateWithoutProfessorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUpdateManyWithoutUsuarioNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfessorInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutFuncionarioInput = {
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFuncionarioInput = {
    usuarioId?: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    permissoes?: UsuarioPermissaoUncheckedCreateNestedManyWithoutUsuarioInput
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFuncionarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
  }

  export type UsuarioUpsertWithoutFuncionarioInput = {
    update: XOR<UsuarioUpdateWithoutFuncionarioInput, UsuarioUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<UsuarioCreateWithoutFuncionarioInput, UsuarioUncheckedCreateWithoutFuncionarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFuncionarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFuncionarioInput, UsuarioUncheckedUpdateWithoutFuncionarioInput>
  }

  export type UsuarioUpdateWithoutFuncionarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFuncionarioInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissoes?: UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioNestedInput
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioPermissaoCreateWithoutUsuarioInput = {
    permissao: PermissaoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioPermissaoUncheckedCreateWithoutUsuarioInput = {
    permissaoId: number
  }

  export type UsuarioPermissaoCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioPermissaoWhereUniqueInput
    create: XOR<UsuarioPermissaoCreateWithoutUsuarioInput, UsuarioPermissaoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioPermissaoCreateManyUsuarioInputEnvelope = {
    data: UsuarioPermissaoCreateManyUsuarioInput | UsuarioPermissaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorCreateWithoutUsuarioInput = {
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioCreateNestedManyWithoutProfessorInput
    presencas?: PresencaCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutUsuarioInput = {
    professorId?: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoUncheckedCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioUncheckedCreateNestedManyWithoutProfessorInput
    presencas?: PresencaUncheckedCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutUsuarioInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
  }

  export type FuncionarioCreateWithoutUsuarioInput = {
    nome: string
    email: string
    cargo: $Enums.Cargo
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUncheckedCreateWithoutUsuarioInput = {
    funcionarioId?: number
    nome: string
    email: string
    cargo: $Enums.Cargo
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioCreateOrConnectWithoutUsuarioInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
  }

  export type RefreshTokenCreateWithoutUsuarioInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUsuarioInput = {
    tokenId?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUsuarioInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput>
  }

  export type RefreshTokenCreateManyUsuarioInputEnvelope = {
    data: RefreshTokenCreateManyUsuarioInput | RefreshTokenCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetCreateWithoutUsuarioInput = {
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetUncheckedCreateWithoutUsuarioInput = {
    passwordResetId?: number
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type PasswordResetCreateOrConnectWithoutUsuarioInput = {
    where: PasswordResetWhereUniqueInput
    create: XOR<PasswordResetCreateWithoutUsuarioInput, PasswordResetUncheckedCreateWithoutUsuarioInput>
  }

  export type PasswordResetCreateManyUsuarioInputEnvelope = {
    data: PasswordResetCreateManyUsuarioInput | PasswordResetCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioPermissaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioPermissaoWhereUniqueInput
    update: XOR<UsuarioPermissaoUpdateWithoutUsuarioInput, UsuarioPermissaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioPermissaoCreateWithoutUsuarioInput, UsuarioPermissaoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioPermissaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioPermissaoWhereUniqueInput
    data: XOR<UsuarioPermissaoUpdateWithoutUsuarioInput, UsuarioPermissaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioPermissaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioPermissaoScalarWhereInput
    data: XOR<UsuarioPermissaoUpdateManyMutationInput, UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioPermissaoScalarWhereInput = {
    AND?: UsuarioPermissaoScalarWhereInput | UsuarioPermissaoScalarWhereInput[]
    OR?: UsuarioPermissaoScalarWhereInput[]
    NOT?: UsuarioPermissaoScalarWhereInput | UsuarioPermissaoScalarWhereInput[]
    usuarioId?: IntFilter<"UsuarioPermissao"> | number
    permissaoId?: IntFilter<"UsuarioPermissao"> | number
  }

  export type ProfessorUpsertWithoutUsuarioInput = {
    update: XOR<ProfessorUpdateWithoutUsuarioInput, ProfessorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutUsuarioInput, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessorUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutUsuarioInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUncheckedUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUncheckedUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUncheckedUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type FuncionarioUpsertWithoutUsuarioInput = {
    update: XOR<FuncionarioUpdateWithoutUsuarioInput, FuncionarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FuncionarioCreateWithoutUsuarioInput, FuncionarioUncheckedCreateWithoutUsuarioInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutUsuarioInput, FuncionarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type FuncionarioUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateWithoutUsuarioInput = {
    funcionarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoFieldUpdateOperationsInput | $Enums.Cargo
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUsuarioInput, RefreshTokenUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUsuarioInput, RefreshTokenUncheckedUpdateWithoutUsuarioInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUsuarioInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    tokenId?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    usuarioId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type PasswordResetUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PasswordResetWhereUniqueInput
    update: XOR<PasswordResetUpdateWithoutUsuarioInput, PasswordResetUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PasswordResetCreateWithoutUsuarioInput, PasswordResetUncheckedCreateWithoutUsuarioInput>
  }

  export type PasswordResetUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PasswordResetWhereUniqueInput
    data: XOR<PasswordResetUpdateWithoutUsuarioInput, PasswordResetUncheckedUpdateWithoutUsuarioInput>
  }

  export type PasswordResetUpdateManyWithWhereWithoutUsuarioInput = {
    where: PasswordResetScalarWhereInput
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PasswordResetScalarWhereInput = {
    AND?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    OR?: PasswordResetScalarWhereInput[]
    NOT?: PasswordResetScalarWhereInput | PasswordResetScalarWhereInput[]
    passwordResetId?: IntFilter<"PasswordReset"> | number
    token?: StringFilter<"PasswordReset"> | string
    usuarioId?: IntFilter<"PasswordReset"> | number
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    used?: BoolFilter<"PasswordReset"> | boolean
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
  }

  export type ProfessorCursoCreateWithoutCursoInput = {
    createdAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutCursosInput
  }

  export type ProfessorCursoUncheckedCreateWithoutCursoInput = {
    professorId: number
    createdAt?: Date | string
  }

  export type ProfessorCursoCreateOrConnectWithoutCursoInput = {
    where: ProfessorCursoWhereUniqueInput
    create: XOR<ProfessorCursoCreateWithoutCursoInput, ProfessorCursoUncheckedCreateWithoutCursoInput>
  }

  export type ProfessorCursoCreateManyCursoInputEnvelope = {
    data: ProfessorCursoCreateManyCursoInput | ProfessorCursoCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type SumarioCreateWithoutCursoInput = {
    data: Date | string
    conteudo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutSumariosInput
  }

  export type SumarioUncheckedCreateWithoutCursoInput = {
    sumarioId?: number
    data: Date | string
    conteudo: string
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SumarioCreateOrConnectWithoutCursoInput = {
    where: SumarioWhereUniqueInput
    create: XOR<SumarioCreateWithoutCursoInput, SumarioUncheckedCreateWithoutCursoInput>
  }

  export type SumarioCreateManyCursoInputEnvelope = {
    data: SumarioCreateManyCursoInput | SumarioCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type PresencaCreateWithoutCursoInput = {
    data: Date | string
    estado: $Enums.Estado
    createdAt?: Date | string
    updatedAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutPresencasInput
  }

  export type PresencaUncheckedCreateWithoutCursoInput = {
    presencaId?: number
    data: Date | string
    estado: $Enums.Estado
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresencaCreateOrConnectWithoutCursoInput = {
    where: PresencaWhereUniqueInput
    create: XOR<PresencaCreateWithoutCursoInput, PresencaUncheckedCreateWithoutCursoInput>
  }

  export type PresencaCreateManyCursoInputEnvelope = {
    data: PresencaCreateManyCursoInput | PresencaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type EfetividadeCreateWithoutCursoInput = {
    data: Date | string
    horasTrabalhadas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    professor: ProfessorCreateNestedOneWithoutEfetividadesInput
  }

  export type EfetividadeUncheckedCreateWithoutCursoInput = {
    efetividadeId?: number
    data: Date | string
    horasTrabalhadas: number
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EfetividadeCreateOrConnectWithoutCursoInput = {
    where: EfetividadeWhereUniqueInput
    create: XOR<EfetividadeCreateWithoutCursoInput, EfetividadeUncheckedCreateWithoutCursoInput>
  }

  export type EfetividadeCreateManyCursoInputEnvelope = {
    data: EfetividadeCreateManyCursoInput | EfetividadeCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorCursoUpsertWithWhereUniqueWithoutCursoInput = {
    where: ProfessorCursoWhereUniqueInput
    update: XOR<ProfessorCursoUpdateWithoutCursoInput, ProfessorCursoUncheckedUpdateWithoutCursoInput>
    create: XOR<ProfessorCursoCreateWithoutCursoInput, ProfessorCursoUncheckedCreateWithoutCursoInput>
  }

  export type ProfessorCursoUpdateWithWhereUniqueWithoutCursoInput = {
    where: ProfessorCursoWhereUniqueInput
    data: XOR<ProfessorCursoUpdateWithoutCursoInput, ProfessorCursoUncheckedUpdateWithoutCursoInput>
  }

  export type ProfessorCursoUpdateManyWithWhereWithoutCursoInput = {
    where: ProfessorCursoScalarWhereInput
    data: XOR<ProfessorCursoUpdateManyMutationInput, ProfessorCursoUncheckedUpdateManyWithoutCursoInput>
  }

  export type SumarioUpsertWithWhereUniqueWithoutCursoInput = {
    where: SumarioWhereUniqueInput
    update: XOR<SumarioUpdateWithoutCursoInput, SumarioUncheckedUpdateWithoutCursoInput>
    create: XOR<SumarioCreateWithoutCursoInput, SumarioUncheckedCreateWithoutCursoInput>
  }

  export type SumarioUpdateWithWhereUniqueWithoutCursoInput = {
    where: SumarioWhereUniqueInput
    data: XOR<SumarioUpdateWithoutCursoInput, SumarioUncheckedUpdateWithoutCursoInput>
  }

  export type SumarioUpdateManyWithWhereWithoutCursoInput = {
    where: SumarioScalarWhereInput
    data: XOR<SumarioUpdateManyMutationInput, SumarioUncheckedUpdateManyWithoutCursoInput>
  }

  export type PresencaUpsertWithWhereUniqueWithoutCursoInput = {
    where: PresencaWhereUniqueInput
    update: XOR<PresencaUpdateWithoutCursoInput, PresencaUncheckedUpdateWithoutCursoInput>
    create: XOR<PresencaCreateWithoutCursoInput, PresencaUncheckedCreateWithoutCursoInput>
  }

  export type PresencaUpdateWithWhereUniqueWithoutCursoInput = {
    where: PresencaWhereUniqueInput
    data: XOR<PresencaUpdateWithoutCursoInput, PresencaUncheckedUpdateWithoutCursoInput>
  }

  export type PresencaUpdateManyWithWhereWithoutCursoInput = {
    where: PresencaScalarWhereInput
    data: XOR<PresencaUpdateManyMutationInput, PresencaUncheckedUpdateManyWithoutCursoInput>
  }

  export type EfetividadeUpsertWithWhereUniqueWithoutCursoInput = {
    where: EfetividadeWhereUniqueInput
    update: XOR<EfetividadeUpdateWithoutCursoInput, EfetividadeUncheckedUpdateWithoutCursoInput>
    create: XOR<EfetividadeCreateWithoutCursoInput, EfetividadeUncheckedCreateWithoutCursoInput>
  }

  export type EfetividadeUpdateWithWhereUniqueWithoutCursoInput = {
    where: EfetividadeWhereUniqueInput
    data: XOR<EfetividadeUpdateWithoutCursoInput, EfetividadeUncheckedUpdateWithoutCursoInput>
  }

  export type EfetividadeUpdateManyWithWhereWithoutCursoInput = {
    where: EfetividadeScalarWhereInput
    data: XOR<EfetividadeUpdateManyMutationInput, EfetividadeUncheckedUpdateManyWithoutCursoInput>
  }

  export type CursoCreateWithoutSumariosInput = {
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoCreateNestedManyWithoutCursoInput
    presenca?: PresencaCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutSumariosInput = {
    cursoId?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoUncheckedCreateNestedManyWithoutCursoInput
    presenca?: PresencaUncheckedCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutSumariosInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutSumariosInput, CursoUncheckedCreateWithoutSumariosInput>
  }

  export type ProfessorCreateWithoutSumariosInput = {
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoCreateNestedManyWithoutProfessorInput
    presencas?: PresencaCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeCreateNestedManyWithoutProfessorInput
    usuario?: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutSumariosInput = {
    professorId?: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoUncheckedCreateNestedManyWithoutProfessorInput
    presencas?: PresencaUncheckedCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutSumariosInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutSumariosInput, ProfessorUncheckedCreateWithoutSumariosInput>
  }

  export type CursoUpsertWithoutSumariosInput = {
    update: XOR<CursoUpdateWithoutSumariosInput, CursoUncheckedUpdateWithoutSumariosInput>
    create: XOR<CursoCreateWithoutSumariosInput, CursoUncheckedCreateWithoutSumariosInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutSumariosInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutSumariosInput, CursoUncheckedUpdateWithoutSumariosInput>
  }

  export type CursoUpdateWithoutSumariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutSumariosInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUncheckedUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUncheckedUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type ProfessorUpsertWithoutSumariosInput = {
    update: XOR<ProfessorUpdateWithoutSumariosInput, ProfessorUncheckedUpdateWithoutSumariosInput>
    create: XOR<ProfessorCreateWithoutSumariosInput, ProfessorUncheckedCreateWithoutSumariosInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutSumariosInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutSumariosInput, ProfessorUncheckedUpdateWithoutSumariosInput>
  }

  export type ProfessorUpdateWithoutSumariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUpdateManyWithoutProfessorNestedInput
    usuario?: UsuarioUpdateOneWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutSumariosInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUncheckedUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUncheckedUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateWithoutCursosInput = {
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sumarios?: SumarioCreateNestedManyWithoutProfessorInput
    presencas?: PresencaCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeCreateNestedManyWithoutProfessorInput
    usuario?: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutCursosInput = {
    professorId?: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sumarios?: SumarioUncheckedCreateNestedManyWithoutProfessorInput
    presencas?: PresencaUncheckedCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutCursosInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutCursosInput, ProfessorUncheckedCreateWithoutCursosInput>
  }

  export type CursoCreateWithoutProfessoresInput = {
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sumarios?: SumarioCreateNestedManyWithoutCursoInput
    presenca?: PresencaCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutProfessoresInput = {
    cursoId?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sumarios?: SumarioUncheckedCreateNestedManyWithoutCursoInput
    presenca?: PresencaUncheckedCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutProfessoresInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
  }

  export type ProfessorUpsertWithoutCursosInput = {
    update: XOR<ProfessorUpdateWithoutCursosInput, ProfessorUncheckedUpdateWithoutCursosInput>
    create: XOR<ProfessorCreateWithoutCursosInput, ProfessorUncheckedCreateWithoutCursosInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutCursosInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutCursosInput, ProfessorUncheckedUpdateWithoutCursosInput>
  }

  export type ProfessorUpdateWithoutCursosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sumarios?: SumarioUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUpdateManyWithoutProfessorNestedInput
    usuario?: UsuarioUpdateOneWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutCursosInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sumarios?: SumarioUncheckedUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUncheckedUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type CursoUpsertWithoutProfessoresInput = {
    update: XOR<CursoUpdateWithoutProfessoresInput, CursoUncheckedUpdateWithoutProfessoresInput>
    create: XOR<CursoCreateWithoutProfessoresInput, CursoUncheckedCreateWithoutProfessoresInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutProfessoresInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutProfessoresInput, CursoUncheckedUpdateWithoutProfessoresInput>
  }

  export type CursoUpdateWithoutProfessoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sumarios?: SumarioUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutProfessoresInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sumarios?: SumarioUncheckedUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUncheckedUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type ProfessorCreateWithoutPresencasInput = {
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeCreateNestedManyWithoutProfessorInput
    usuario?: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutPresencasInput = {
    professorId?: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoUncheckedCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioUncheckedCreateNestedManyWithoutProfessorInput
    efetividades?: EfetividadeUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutPresencasInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutPresencasInput, ProfessorUncheckedCreateWithoutPresencasInput>
  }

  export type CursoCreateWithoutPresencaInput = {
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoCreateNestedManyWithoutCursoInput
    sumarios?: SumarioCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutPresencaInput = {
    cursoId?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoUncheckedCreateNestedManyWithoutCursoInput
    sumarios?: SumarioUncheckedCreateNestedManyWithoutCursoInput
    efetividade?: EfetividadeUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutPresencaInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutPresencaInput, CursoUncheckedCreateWithoutPresencaInput>
  }

  export type ProfessorUpsertWithoutPresencasInput = {
    update: XOR<ProfessorUpdateWithoutPresencasInput, ProfessorUncheckedUpdateWithoutPresencasInput>
    create: XOR<ProfessorCreateWithoutPresencasInput, ProfessorUncheckedCreateWithoutPresencasInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutPresencasInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutPresencasInput, ProfessorUncheckedUpdateWithoutPresencasInput>
  }

  export type ProfessorUpdateWithoutPresencasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUpdateManyWithoutProfessorNestedInput
    usuario?: UsuarioUpdateOneWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutPresencasInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUncheckedUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUncheckedUpdateManyWithoutProfessorNestedInput
    efetividades?: EfetividadeUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type CursoUpsertWithoutPresencaInput = {
    update: XOR<CursoUpdateWithoutPresencaInput, CursoUncheckedUpdateWithoutPresencaInput>
    create: XOR<CursoCreateWithoutPresencaInput, CursoUncheckedCreateWithoutPresencaInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutPresencaInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutPresencaInput, CursoUncheckedUpdateWithoutPresencaInput>
  }

  export type CursoUpdateWithoutPresencaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUpdateManyWithoutCursoNestedInput
    sumarios?: SumarioUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutPresencaInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUncheckedUpdateManyWithoutCursoNestedInput
    sumarios?: SumarioUncheckedUpdateManyWithoutCursoNestedInput
    efetividade?: EfetividadeUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type ProfessorCreateWithoutEfetividadesInput = {
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioCreateNestedManyWithoutProfessorInput
    presencas?: PresencaCreateNestedManyWithoutProfessorInput
    usuario?: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutEfetividadesInput = {
    professorId?: number
    nome: string
    departamento: $Enums.Departamento
    cargaHoraria: number
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cursos?: ProfessorCursoUncheckedCreateNestedManyWithoutProfessorInput
    sumarios?: SumarioUncheckedCreateNestedManyWithoutProfessorInput
    presencas?: PresencaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutEfetividadesInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutEfetividadesInput, ProfessorUncheckedCreateWithoutEfetividadesInput>
  }

  export type CursoCreateWithoutEfetividadeInput = {
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoCreateNestedManyWithoutCursoInput
    sumarios?: SumarioCreateNestedManyWithoutCursoInput
    presenca?: PresencaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutEfetividadeInput = {
    cursoId?: number
    nome: string
    descricao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professores?: ProfessorCursoUncheckedCreateNestedManyWithoutCursoInput
    sumarios?: SumarioUncheckedCreateNestedManyWithoutCursoInput
    presenca?: PresencaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutEfetividadeInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutEfetividadeInput, CursoUncheckedCreateWithoutEfetividadeInput>
  }

  export type ProfessorUpsertWithoutEfetividadesInput = {
    update: XOR<ProfessorUpdateWithoutEfetividadesInput, ProfessorUncheckedUpdateWithoutEfetividadesInput>
    create: XOR<ProfessorCreateWithoutEfetividadesInput, ProfessorUncheckedCreateWithoutEfetividadesInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutEfetividadesInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutEfetividadesInput, ProfessorUncheckedUpdateWithoutEfetividadesInput>
  }

  export type ProfessorUpdateWithoutEfetividadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUpdateManyWithoutProfessorNestedInput
    usuario?: UsuarioUpdateOneWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutEfetividadesInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamento?: EnumDepartamentoFieldUpdateOperationsInput | $Enums.Departamento
    cargaHoraria?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: ProfessorCursoUncheckedUpdateManyWithoutProfessorNestedInput
    sumarios?: SumarioUncheckedUpdateManyWithoutProfessorNestedInput
    presencas?: PresencaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type CursoUpsertWithoutEfetividadeInput = {
    update: XOR<CursoUpdateWithoutEfetividadeInput, CursoUncheckedUpdateWithoutEfetividadeInput>
    create: XOR<CursoCreateWithoutEfetividadeInput, CursoUncheckedCreateWithoutEfetividadeInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutEfetividadeInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutEfetividadeInput, CursoUncheckedUpdateWithoutEfetividadeInput>
  }

  export type CursoUpdateWithoutEfetividadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUpdateManyWithoutCursoNestedInput
    sumarios?: SumarioUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutEfetividadeInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professores?: ProfessorCursoUncheckedUpdateManyWithoutCursoNestedInput
    sumarios?: SumarioUncheckedUpdateManyWithoutCursoNestedInput
    presenca?: PresencaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type UsuarioPermissaoCreateWithoutPermissaoInput = {
    usuario: UsuarioCreateNestedOneWithoutPermissoesInput
  }

  export type UsuarioPermissaoUncheckedCreateWithoutPermissaoInput = {
    usuarioId: number
  }

  export type UsuarioPermissaoCreateOrConnectWithoutPermissaoInput = {
    where: UsuarioPermissaoWhereUniqueInput
    create: XOR<UsuarioPermissaoCreateWithoutPermissaoInput, UsuarioPermissaoUncheckedCreateWithoutPermissaoInput>
  }

  export type UsuarioPermissaoCreateManyPermissaoInputEnvelope = {
    data: UsuarioPermissaoCreateManyPermissaoInput | UsuarioPermissaoCreateManyPermissaoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioPermissaoUpsertWithWhereUniqueWithoutPermissaoInput = {
    where: UsuarioPermissaoWhereUniqueInput
    update: XOR<UsuarioPermissaoUpdateWithoutPermissaoInput, UsuarioPermissaoUncheckedUpdateWithoutPermissaoInput>
    create: XOR<UsuarioPermissaoCreateWithoutPermissaoInput, UsuarioPermissaoUncheckedCreateWithoutPermissaoInput>
  }

  export type UsuarioPermissaoUpdateWithWhereUniqueWithoutPermissaoInput = {
    where: UsuarioPermissaoWhereUniqueInput
    data: XOR<UsuarioPermissaoUpdateWithoutPermissaoInput, UsuarioPermissaoUncheckedUpdateWithoutPermissaoInput>
  }

  export type UsuarioPermissaoUpdateManyWithWhereWithoutPermissaoInput = {
    where: UsuarioPermissaoScalarWhereInput
    data: XOR<UsuarioPermissaoUpdateManyMutationInput, UsuarioPermissaoUncheckedUpdateManyWithoutPermissaoInput>
  }

  export type UsuarioCreateWithoutPermissoesInput = {
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPermissoesInput = {
    usuarioId?: number
    nome: string
    email: string
    senhaHash: string
    tipo: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    funcionario?: FuncionarioUncheckedCreateNestedOneWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    passwordResets?: PasswordResetUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPermissoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
  }

  export type PermissaoCreateWithoutUsuariosInput = {
    descricao: string
  }

  export type PermissaoUncheckedCreateWithoutUsuariosInput = {
    permissaoId?: number
    descricao: string
  }

  export type PermissaoCreateOrConnectWithoutUsuariosInput = {
    where: PermissaoWhereUniqueInput
    create: XOR<PermissaoCreateWithoutUsuariosInput, PermissaoUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutPermissoesInput = {
    update: XOR<UsuarioUpdateWithoutPermissoesInput, UsuarioUncheckedUpdateWithoutPermissoesInput>
    create: XOR<UsuarioCreateWithoutPermissoesInput, UsuarioUncheckedCreateWithoutPermissoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPermissoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPermissoesInput, UsuarioUncheckedUpdateWithoutPermissoesInput>
  }

  export type UsuarioUpdateWithoutPermissoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPermissoesInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    funcionario?: FuncionarioUncheckedUpdateOneWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    passwordResets?: PasswordResetUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PermissaoUpsertWithoutUsuariosInput = {
    update: XOR<PermissaoUpdateWithoutUsuariosInput, PermissaoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PermissaoCreateWithoutUsuariosInput, PermissaoUncheckedCreateWithoutUsuariosInput>
    where?: PermissaoWhereInput
  }

  export type PermissaoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PermissaoWhereInput
    data: XOR<PermissaoUpdateWithoutUsuariosInput, PermissaoUncheckedUpdateWithoutUsuariosInput>
  }

  export type PermissaoUpdateWithoutUsuariosInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PermissaoUncheckedUpdateWithoutUsuariosInput = {
    permissaoId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCursoCreateManyProfessorInput = {
    cursoId: number
    createdAt?: Date | string
  }

  export type SumarioCreateManyProfessorInput = {
    sumarioId?: number
    data: Date | string
    conteudo: string
    cursoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresencaCreateManyProfessorInput = {
    presencaId?: number
    data: Date | string
    estado: $Enums.Estado
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EfetividadeCreateManyProfessorInput = {
    efetividadeId?: number
    data: Date | string
    horasTrabalhadas: number
    cursoId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorCursoUpdateWithoutProfessorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type ProfessorCursoUncheckedUpdateWithoutProfessorInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCursoUncheckedUpdateManyWithoutProfessorInput = {
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SumarioUpdateWithoutProfessorInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutSumariosNestedInput
  }

  export type SumarioUncheckedUpdateWithoutProfessorInput = {
    sumarioId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SumarioUncheckedUpdateManyWithoutProfessorInput = {
    sumarioId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaUpdateWithoutProfessorInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutPresencaNestedInput
  }

  export type PresencaUncheckedUpdateWithoutProfessorInput = {
    presencaId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaUncheckedUpdateManyWithoutProfessorInput = {
    presencaId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EfetividadeUpdateWithoutProfessorInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curso?: CursoUpdateOneRequiredWithoutEfetividadeNestedInput
  }

  export type EfetividadeUncheckedUpdateWithoutProfessorInput = {
    efetividadeId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EfetividadeUncheckedUpdateManyWithoutProfessorInput = {
    efetividadeId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    cursoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPermissaoCreateManyUsuarioInput = {
    permissaoId: number
  }

  export type RefreshTokenCreateManyUsuarioInput = {
    tokenId?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetCreateManyUsuarioInput = {
    passwordResetId?: number
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type UsuarioPermissaoUpdateWithoutUsuarioInput = {
    permissao?: PermissaoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioPermissaoUncheckedUpdateWithoutUsuarioInput = {
    permissaoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioPermissaoUncheckedUpdateManyWithoutUsuarioInput = {
    permissaoId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenUpdateWithoutUsuarioInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUsuarioInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUsuarioInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUpdateWithoutUsuarioInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateWithoutUsuarioInput = {
    passwordResetId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyWithoutUsuarioInput = {
    passwordResetId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCursoCreateManyCursoInput = {
    professorId: number
    createdAt?: Date | string
  }

  export type SumarioCreateManyCursoInput = {
    sumarioId?: number
    data: Date | string
    conteudo: string
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresencaCreateManyCursoInput = {
    presencaId?: number
    data: Date | string
    estado: $Enums.Estado
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EfetividadeCreateManyCursoInput = {
    efetividadeId?: number
    data: Date | string
    horasTrabalhadas: number
    professorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessorCursoUpdateWithoutCursoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutCursosNestedInput
  }

  export type ProfessorCursoUncheckedUpdateWithoutCursoInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCursoUncheckedUpdateManyWithoutCursoInput = {
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SumarioUpdateWithoutCursoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutSumariosNestedInput
  }

  export type SumarioUncheckedUpdateWithoutCursoInput = {
    sumarioId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SumarioUncheckedUpdateManyWithoutCursoInput = {
    sumarioId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    conteudo?: StringFieldUpdateOperationsInput | string
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaUpdateWithoutCursoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutPresencasNestedInput
  }

  export type PresencaUncheckedUpdateWithoutCursoInput = {
    presencaId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresencaUncheckedUpdateManyWithoutCursoInput = {
    presencaId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EfetividadeUpdateWithoutCursoInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professor?: ProfessorUpdateOneRequiredWithoutEfetividadesNestedInput
  }

  export type EfetividadeUncheckedUpdateWithoutCursoInput = {
    efetividadeId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EfetividadeUncheckedUpdateManyWithoutCursoInput = {
    efetividadeId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horasTrabalhadas?: IntFieldUpdateOperationsInput | number
    professorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPermissaoCreateManyPermissaoInput = {
    usuarioId: number
  }

  export type UsuarioPermissaoUpdateWithoutPermissaoInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutPermissoesNestedInput
  }

  export type UsuarioPermissaoUncheckedUpdateWithoutPermissaoInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioPermissaoUncheckedUpdateManyWithoutPermissaoInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}