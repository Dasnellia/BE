
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Plataforma
 * 
 */
export type Plataforma = $Result.DefaultSelection<Prisma.$PlataformaPayload>
/**
 * Model Juego
 * 
 */
export type Juego = $Result.DefaultSelection<Prisma.$JuegoPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model Noticia
 * 
 */
export type Noticia = $Result.DefaultSelection<Prisma.$NoticiaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plataforma`: Exposes CRUD operations for the **Plataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plataformas
    * const plataformas = await prisma.plataforma.findMany()
    * ```
    */
  get plataforma(): Prisma.PlataformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juego`: Exposes CRUD operations for the **Juego** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juegos
    * const juegos = await prisma.juego.findMany()
    * ```
    */
  get juego(): Prisma.JuegoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noticia`: Exposes CRUD operations for the **Noticia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noticias
    * const noticias = await prisma.noticia.findMany()
    * ```
    */
  get noticia(): Prisma.NoticiaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuario: 'Usuario',
    Categoria: 'Categoria',
    Plataforma: 'Plataforma',
    Juego: 'Juego',
    Comentario: 'Comentario',
    Venta: 'Venta',
    Noticia: 'Noticia'
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
      modelProps: "usuario" | "categoria" | "plataforma" | "juego" | "comentario" | "venta" | "noticia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Plataforma: {
        payload: Prisma.$PlataformaPayload<ExtArgs>
        fields: Prisma.PlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findFirst: {
            args: Prisma.PlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findMany: {
            args: Prisma.PlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          create: {
            args: Prisma.PlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          createMany: {
            args: Prisma.PlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlataformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          delete: {
            args: Prisma.PlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          update: {
            args: Prisma.PlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          deleteMany: {
            args: Prisma.PlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlataformaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          upsert: {
            args: Prisma.PlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          aggregate: {
            args: Prisma.PlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlataforma>
          }
          groupBy: {
            args: Prisma.PlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<PlataformaCountAggregateOutputType> | number
          }
        }
      }
      Juego: {
        payload: Prisma.$JuegoPayload<ExtArgs>
        fields: Prisma.JuegoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuegoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuegoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          findFirst: {
            args: Prisma.JuegoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuegoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          findMany: {
            args: Prisma.JuegoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          create: {
            args: Prisma.JuegoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          createMany: {
            args: Prisma.JuegoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuegoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          delete: {
            args: Prisma.JuegoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          update: {
            args: Prisma.JuegoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          deleteMany: {
            args: Prisma.JuegoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuegoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuegoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          upsert: {
            args: Prisma.JuegoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          aggregate: {
            args: Prisma.JuegoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuego>
          }
          groupBy: {
            args: Prisma.JuegoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuegoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuegoCountArgs<ExtArgs>
            result: $Utils.Optional<JuegoCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      Noticia: {
        payload: Prisma.$NoticiaPayload<ExtArgs>
        fields: Prisma.NoticiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findFirst: {
            args: Prisma.NoticiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findMany: {
            args: Prisma.NoticiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          create: {
            args: Prisma.NoticiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          createMany: {
            args: Prisma.NoticiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          delete: {
            args: Prisma.NoticiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          update: {
            args: Prisma.NoticiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          deleteMany: {
            args: Prisma.NoticiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          upsert: {
            args: Prisma.NoticiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          aggregate: {
            args: Prisma.NoticiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticia>
          }
          groupBy: {
            args: Prisma.NoticiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiaCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiaCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    usuario?: UsuarioOmit
    categoria?: CategoriaOmit
    plataforma?: PlataformaOmit
    juego?: JuegoOmit
    comentario?: ComentarioOmit
    venta?: VentaOmit
    noticia?: NoticiaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    ventas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | UsuarioCountOutputTypeCountVentasArgs
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
  export type UsuarioCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    juegos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | CategoriaCountOutputTypeCountJuegosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountJuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoWhereInput
  }


  /**
   * Count Type PlataformaCountOutputType
   */

  export type PlataformaCountOutputType = {
    juegos: number
  }

  export type PlataformaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | PlataformaCountOutputTypeCountJuegosArgs
  }

  // Custom InputTypes
  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaCountOutputType
     */
    select?: PlataformaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountJuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoWhereInput
  }


  /**
   * Count Type JuegoCountOutputType
   */

  export type JuegoCountOutputType = {
    plataformas: number
    comentarios: number
    ventas: number
  }

  export type JuegoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataformas?: boolean | JuegoCountOutputTypeCountPlataformasArgs
    comentarios?: boolean | JuegoCountOutputTypeCountComentariosArgs
    ventas?: boolean | JuegoCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoCountOutputType
     */
    select?: JuegoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeCountPlataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaWhereInput
  }

  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    correo: string | null
    contrasena: string | null
    pais: string | null
    imagen: string | null
    tipo: string | null
    verificado: boolean | null
    token: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    correo: string | null
    contrasena: string | null
    pais: string | null
    imagen: string | null
    tipo: string | null
    verificado: boolean | null
    token: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nickname: number
    correo: number
    contrasena: number
    pais: number
    imagen: number
    tipo: number
    verificado: number
    token: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nickname?: true
    correo?: true
    contrasena?: true
    pais?: true
    imagen?: true
    tipo?: true
    verificado?: true
    token?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nickname?: true
    correo?: true
    contrasena?: true
    pais?: true
    imagen?: true
    tipo?: true
    verificado?: true
    token?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nickname?: true
    correo?: true
    contrasena?: true
    pais?: true
    imagen?: true
    tipo?: true
    verificado?: true
    token?: true
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
    id: number
    nickname: string
    correo: string
    contrasena: string
    pais: string | null
    imagen: string | null
    tipo: string
    verificado: boolean
    token: string | null
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
    id?: boolean
    nickname?: boolean
    correo?: boolean
    contrasena?: boolean
    pais?: boolean
    imagen?: boolean
    tipo?: boolean
    verificado?: boolean
    token?: boolean
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    correo?: boolean
    contrasena?: boolean
    pais?: boolean
    imagen?: boolean
    tipo?: boolean
    verificado?: boolean
    token?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    correo?: boolean
    contrasena?: boolean
    pais?: boolean
    imagen?: boolean
    tipo?: boolean
    verificado?: boolean
    token?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nickname?: boolean
    correo?: boolean
    contrasena?: boolean
    pais?: boolean
    imagen?: boolean
    tipo?: boolean
    verificado?: boolean
    token?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "correo" | "contrasena" | "pais" | "imagen" | "tipo" | "verificado" | "token", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nickname: string
      correo: string
      contrasena: string
      pais: string | null
      imagen: string | null
      tipo: string
      verificado: boolean
      token: string | null
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
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
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
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
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
    ventas<T extends Usuario$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nickname: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly pais: FieldRef<"Usuario", 'String'>
    readonly imagen: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'String'>
    readonly verificado: FieldRef<"Usuario", 'Boolean'>
    readonly token: FieldRef<"Usuario", 'String'>
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
   * Usuario.ventas
   */
  export type Usuario$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
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
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    juegos?: boolean | Categoria$juegosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | Categoria$juegosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      juegos: Prisma.$JuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juegos<T extends Categoria$juegosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$juegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.juegos
   */
  export type Categoria$juegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    where?: JuegoWhereInput
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    cursor?: JuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Plataforma
   */

  export type AggregatePlataforma = {
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  export type PlataformaAvgAggregateOutputType = {
    id: number | null
  }

  export type PlataformaSumAggregateOutputType = {
    id: number | null
  }

  export type PlataformaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PlataformaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PlataformaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PlataformaAvgAggregateInputType = {
    id?: true
  }

  export type PlataformaSumAggregateInputType = {
    id?: true
  }

  export type PlataformaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PlataformaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PlataformaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataforma to aggregate.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plataformas
    **/
    _count?: true | PlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlataformaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlataformaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlataformaMaxAggregateInputType
  }

  export type GetPlataformaAggregateType<T extends PlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlataforma[P]>
      : GetScalarType<T[P], AggregatePlataforma[P]>
  }




  export type PlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaWhereInput
    orderBy?: PlataformaOrderByWithAggregationInput | PlataformaOrderByWithAggregationInput[]
    by: PlataformaScalarFieldEnum[] | PlataformaScalarFieldEnum
    having?: PlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlataformaCountAggregateInputType | true
    _avg?: PlataformaAvgAggregateInputType
    _sum?: PlataformaSumAggregateInputType
    _min?: PlataformaMinAggregateInputType
    _max?: PlataformaMaxAggregateInputType
  }

  export type PlataformaGroupByOutputType = {
    id: number
    nombre: string
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  type GetPlataformaGroupByPayload<T extends PlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
        }
      >
    >


  export type PlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    juegos?: boolean | Plataforma$juegosArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PlataformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["plataforma"]>
  export type PlataformaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | Plataforma$juegosArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlataformaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlataformaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plataforma"
    objects: {
      juegos: Prisma.$JuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["plataforma"]>
    composites: {}
  }

  type PlataformaGetPayload<S extends boolean | null | undefined | PlataformaDefaultArgs> = $Result.GetResult<Prisma.$PlataformaPayload, S>

  type PlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlataformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlataformaCountAggregateInputType | true
    }

  export interface PlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plataforma'], meta: { name: 'Plataforma' } }
    /**
     * Find zero or one Plataforma that matches the filter.
     * @param {PlataformaFindUniqueArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlataformaFindUniqueArgs>(args: SelectSubset<T, PlataformaFindUniqueArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plataforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlataformaFindUniqueOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlataformaFindFirstArgs>(args?: SelectSubset<T, PlataformaFindFirstArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plataformas
     * const plataformas = await prisma.plataforma.findMany()
     * 
     * // Get first 10 Plataformas
     * const plataformas = await prisma.plataforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlataformaFindManyArgs>(args?: SelectSubset<T, PlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plataforma.
     * @param {PlataformaCreateArgs} args - Arguments to create a Plataforma.
     * @example
     * // Create one Plataforma
     * const Plataforma = await prisma.plataforma.create({
     *   data: {
     *     // ... data to create a Plataforma
     *   }
     * })
     * 
     */
    create<T extends PlataformaCreateArgs>(args: SelectSubset<T, PlataformaCreateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plataformas.
     * @param {PlataformaCreateManyArgs} args - Arguments to create many Plataformas.
     * @example
     * // Create many Plataformas
     * const plataforma = await prisma.plataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlataformaCreateManyArgs>(args?: SelectSubset<T, PlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plataformas and returns the data saved in the database.
     * @param {PlataformaCreateManyAndReturnArgs} args - Arguments to create many Plataformas.
     * @example
     * // Create many Plataformas
     * const plataforma = await prisma.plataforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plataformas and only return the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlataformaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlataformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plataforma.
     * @param {PlataformaDeleteArgs} args - Arguments to delete one Plataforma.
     * @example
     * // Delete one Plataforma
     * const Plataforma = await prisma.plataforma.delete({
     *   where: {
     *     // ... filter to delete one Plataforma
     *   }
     * })
     * 
     */
    delete<T extends PlataformaDeleteArgs>(args: SelectSubset<T, PlataformaDeleteArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plataforma.
     * @param {PlataformaUpdateArgs} args - Arguments to update one Plataforma.
     * @example
     * // Update one Plataforma
     * const plataforma = await prisma.plataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlataformaUpdateArgs>(args: SelectSubset<T, PlataformaUpdateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plataformas.
     * @param {PlataformaDeleteManyArgs} args - Arguments to filter Plataformas to delete.
     * @example
     * // Delete a few Plataformas
     * const { count } = await prisma.plataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlataformaDeleteManyArgs>(args?: SelectSubset<T, PlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plataformas
     * const plataforma = await prisma.plataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlataformaUpdateManyArgs>(args: SelectSubset<T, PlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plataformas and returns the data updated in the database.
     * @param {PlataformaUpdateManyAndReturnArgs} args - Arguments to update many Plataformas.
     * @example
     * // Update many Plataformas
     * const plataforma = await prisma.plataforma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plataformas and only return the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PlataformaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlataformaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plataforma.
     * @param {PlataformaUpsertArgs} args - Arguments to update or create a Plataforma.
     * @example
     * // Update or create a Plataforma
     * const plataforma = await prisma.plataforma.upsert({
     *   create: {
     *     // ... data to create a Plataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plataforma we want to update
     *   }
     * })
     */
    upsert<T extends PlataformaUpsertArgs>(args: SelectSubset<T, PlataformaUpsertArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaCountArgs} args - Arguments to filter Plataformas to count.
     * @example
     * // Count the number of Plataformas
     * const count = await prisma.plataforma.count({
     *   where: {
     *     // ... the filter for the Plataformas we want to count
     *   }
     * })
    **/
    count<T extends PlataformaCountArgs>(
      args?: Subset<T, PlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlataformaAggregateArgs>(args: Subset<T, PlataformaAggregateArgs>): Prisma.PrismaPromise<GetPlataformaAggregateType<T>>

    /**
     * Group by Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaGroupByArgs} args - Group by arguments.
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
      T extends PlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlataformaGroupByArgs['orderBy'] }
        : { orderBy?: PlataformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plataforma model
   */
  readonly fields: PlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juegos<T extends Plataforma$juegosArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$juegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plataforma model
   */
  interface PlataformaFieldRefs {
    readonly id: FieldRef<"Plataforma", 'Int'>
    readonly nombre: FieldRef<"Plataforma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plataforma findUnique
   */
  export type PlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findUniqueOrThrow
   */
  export type PlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findFirst
   */
  export type PlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findFirstOrThrow
   */
  export type PlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findMany
   */
  export type PlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataformas to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma create
   */
  export type PlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to create a Plataforma.
     */
    data: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
  }

  /**
   * Plataforma createMany
   */
  export type PlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plataformas.
     */
    data: PlataformaCreateManyInput | PlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plataforma createManyAndReturn
   */
  export type PlataformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * The data used to create many Plataformas.
     */
    data: PlataformaCreateManyInput | PlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plataforma update
   */
  export type PlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to update a Plataforma.
     */
    data: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
    /**
     * Choose, which Plataforma to update.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma updateMany
   */
  export type PlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plataformas.
     */
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyInput>
    /**
     * Filter which Plataformas to update
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to update.
     */
    limit?: number
  }

  /**
   * Plataforma updateManyAndReturn
   */
  export type PlataformaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * The data used to update Plataformas.
     */
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyInput>
    /**
     * Filter which Plataformas to update
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to update.
     */
    limit?: number
  }

  /**
   * Plataforma upsert
   */
  export type PlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The filter to search for the Plataforma to update in case it exists.
     */
    where: PlataformaWhereUniqueInput
    /**
     * In case the Plataforma found by the `where` argument doesn't exist, create a new Plataforma with this data.
     */
    create: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
    /**
     * In case the Plataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
  }

  /**
   * Plataforma delete
   */
  export type PlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter which Plataforma to delete.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma deleteMany
   */
  export type PlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataformas to delete
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to delete.
     */
    limit?: number
  }

  /**
   * Plataforma.juegos
   */
  export type Plataforma$juegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    where?: JuegoWhereInput
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    cursor?: JuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Plataforma without action
   */
  export type PlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
  }


  /**
   * Model Juego
   */

  export type AggregateJuego = {
    _count: JuegoCountAggregateOutputType | null
    _avg: JuegoAvgAggregateOutputType | null
    _sum: JuegoSumAggregateOutputType | null
    _min: JuegoMinAggregateOutputType | null
    _max: JuegoMaxAggregateOutputType | null
  }

  export type JuegoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    rating: number | null
    descuento: number | null
    categoriaId: number | null
  }

  export type JuegoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    rating: number | null
    descuento: number | null
    categoriaId: number | null
  }

  export type JuegoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    stock: number | null
    rating: number | null
    imagen: string | null
    descripcion: string | null
    descripcionLarga: string | null
    trailerURL: string | null
    lanzamiento: Date | null
    descuento: number | null
    categoriaId: number | null
  }

  export type JuegoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    stock: number | null
    rating: number | null
    imagen: string | null
    descripcion: string | null
    descripcionLarga: string | null
    trailerURL: string | null
    lanzamiento: Date | null
    descuento: number | null
    categoriaId: number | null
  }

  export type JuegoCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    stock: number
    rating: number
    imagen: number
    descripcion: number
    descripcionLarga: number
    trailerURL: number
    galeria: number
    caracteristicas: number
    lanzamiento: number
    descuento: number
    categoriaId: number
    _all: number
  }


  export type JuegoAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    rating?: true
    descuento?: true
    categoriaId?: true
  }

  export type JuegoSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    rating?: true
    descuento?: true
    categoriaId?: true
  }

  export type JuegoMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    stock?: true
    rating?: true
    imagen?: true
    descripcion?: true
    descripcionLarga?: true
    trailerURL?: true
    lanzamiento?: true
    descuento?: true
    categoriaId?: true
  }

  export type JuegoMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    stock?: true
    rating?: true
    imagen?: true
    descripcion?: true
    descripcionLarga?: true
    trailerURL?: true
    lanzamiento?: true
    descuento?: true
    categoriaId?: true
  }

  export type JuegoCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    stock?: true
    rating?: true
    imagen?: true
    descripcion?: true
    descripcionLarga?: true
    trailerURL?: true
    galeria?: true
    caracteristicas?: true
    lanzamiento?: true
    descuento?: true
    categoriaId?: true
    _all?: true
  }

  export type JuegoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juego to aggregate.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Juegos
    **/
    _count?: true | JuegoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuegoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuegoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuegoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuegoMaxAggregateInputType
  }

  export type GetJuegoAggregateType<T extends JuegoAggregateArgs> = {
        [P in keyof T & keyof AggregateJuego]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuego[P]>
      : GetScalarType<T[P], AggregateJuego[P]>
  }




  export type JuegoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoWhereInput
    orderBy?: JuegoOrderByWithAggregationInput | JuegoOrderByWithAggregationInput[]
    by: JuegoScalarFieldEnum[] | JuegoScalarFieldEnum
    having?: JuegoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuegoCountAggregateInputType | true
    _avg?: JuegoAvgAggregateInputType
    _sum?: JuegoSumAggregateInputType
    _min?: JuegoMinAggregateInputType
    _max?: JuegoMaxAggregateInputType
  }

  export type JuegoGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria: string[]
    caracteristicas: string[]
    lanzamiento: Date
    descuento: number
    categoriaId: number | null
    _count: JuegoCountAggregateOutputType | null
    _avg: JuegoAvgAggregateOutputType | null
    _sum: JuegoSumAggregateOutputType | null
    _min: JuegoMinAggregateOutputType | null
    _max: JuegoMaxAggregateOutputType | null
  }

  type GetJuegoGroupByPayload<T extends JuegoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuegoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuegoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuegoGroupByOutputType[P]>
            : GetScalarType<T[P], JuegoGroupByOutputType[P]>
        }
      >
    >


  export type JuegoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
    rating?: boolean
    imagen?: boolean
    descripcion?: boolean
    descripcionLarga?: boolean
    trailerURL?: boolean
    galeria?: boolean
    caracteristicas?: boolean
    lanzamiento?: boolean
    descuento?: boolean
    categoriaId?: boolean
    categoria?: boolean | Juego$categoriaArgs<ExtArgs>
    plataformas?: boolean | Juego$plataformasArgs<ExtArgs>
    comentarios?: boolean | Juego$comentariosArgs<ExtArgs>
    ventas?: boolean | Juego$ventasArgs<ExtArgs>
    _count?: boolean | JuegoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
    rating?: boolean
    imagen?: boolean
    descripcion?: boolean
    descripcionLarga?: boolean
    trailerURL?: boolean
    galeria?: boolean
    caracteristicas?: boolean
    lanzamiento?: boolean
    descuento?: boolean
    categoriaId?: boolean
    categoria?: boolean | Juego$categoriaArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
    rating?: boolean
    imagen?: boolean
    descripcion?: boolean
    descripcionLarga?: boolean
    trailerURL?: boolean
    galeria?: boolean
    caracteristicas?: boolean
    lanzamiento?: boolean
    descuento?: boolean
    categoriaId?: boolean
    categoria?: boolean | Juego$categoriaArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    stock?: boolean
    rating?: boolean
    imagen?: boolean
    descripcion?: boolean
    descripcionLarga?: boolean
    trailerURL?: boolean
    galeria?: boolean
    caracteristicas?: boolean
    lanzamiento?: boolean
    descuento?: boolean
    categoriaId?: boolean
  }

  export type JuegoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio" | "stock" | "rating" | "imagen" | "descripcion" | "descripcionLarga" | "trailerURL" | "galeria" | "caracteristicas" | "lanzamiento" | "descuento" | "categoriaId", ExtArgs["result"]["juego"]>
  export type JuegoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Juego$categoriaArgs<ExtArgs>
    plataformas?: boolean | Juego$plataformasArgs<ExtArgs>
    comentarios?: boolean | Juego$comentariosArgs<ExtArgs>
    ventas?: boolean | Juego$ventasArgs<ExtArgs>
    _count?: boolean | JuegoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JuegoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Juego$categoriaArgs<ExtArgs>
  }
  export type JuegoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Juego$categoriaArgs<ExtArgs>
  }

  export type $JuegoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Juego"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      plataformas: Prisma.$PlataformaPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      stock: number
      rating: number
      imagen: string
      descripcion: string
      descripcionLarga: string
      trailerURL: string
      galeria: string[]
      caracteristicas: string[]
      lanzamiento: Date
      descuento: number
      categoriaId: number | null
    }, ExtArgs["result"]["juego"]>
    composites: {}
  }

  type JuegoGetPayload<S extends boolean | null | undefined | JuegoDefaultArgs> = $Result.GetResult<Prisma.$JuegoPayload, S>

  type JuegoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuegoCountAggregateInputType | true
    }

  export interface JuegoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Juego'], meta: { name: 'Juego' } }
    /**
     * Find zero or one Juego that matches the filter.
     * @param {JuegoFindUniqueArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuegoFindUniqueArgs>(args: SelectSubset<T, JuegoFindUniqueArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Juego that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuegoFindUniqueOrThrowArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuegoFindUniqueOrThrowArgs>(args: SelectSubset<T, JuegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juego that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindFirstArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuegoFindFirstArgs>(args?: SelectSubset<T, JuegoFindFirstArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juego that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindFirstOrThrowArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuegoFindFirstOrThrowArgs>(args?: SelectSubset<T, JuegoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juegos
     * const juegos = await prisma.juego.findMany()
     * 
     * // Get first 10 Juegos
     * const juegos = await prisma.juego.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juegoWithIdOnly = await prisma.juego.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JuegoFindManyArgs>(args?: SelectSubset<T, JuegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Juego.
     * @param {JuegoCreateArgs} args - Arguments to create a Juego.
     * @example
     * // Create one Juego
     * const Juego = await prisma.juego.create({
     *   data: {
     *     // ... data to create a Juego
     *   }
     * })
     * 
     */
    create<T extends JuegoCreateArgs>(args: SelectSubset<T, JuegoCreateArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juegos.
     * @param {JuegoCreateManyArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juego = await prisma.juego.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuegoCreateManyArgs>(args?: SelectSubset<T, JuegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Juegos and returns the data saved in the database.
     * @param {JuegoCreateManyAndReturnArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juego = await prisma.juego.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Juegos and only return the `id`
     * const juegoWithIdOnly = await prisma.juego.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuegoCreateManyAndReturnArgs>(args?: SelectSubset<T, JuegoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Juego.
     * @param {JuegoDeleteArgs} args - Arguments to delete one Juego.
     * @example
     * // Delete one Juego
     * const Juego = await prisma.juego.delete({
     *   where: {
     *     // ... filter to delete one Juego
     *   }
     * })
     * 
     */
    delete<T extends JuegoDeleteArgs>(args: SelectSubset<T, JuegoDeleteArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Juego.
     * @param {JuegoUpdateArgs} args - Arguments to update one Juego.
     * @example
     * // Update one Juego
     * const juego = await prisma.juego.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuegoUpdateArgs>(args: SelectSubset<T, JuegoUpdateArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juegos.
     * @param {JuegoDeleteManyArgs} args - Arguments to filter Juegos to delete.
     * @example
     * // Delete a few Juegos
     * const { count } = await prisma.juego.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuegoDeleteManyArgs>(args?: SelectSubset<T, JuegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juegos
     * const juego = await prisma.juego.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuegoUpdateManyArgs>(args: SelectSubset<T, JuegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos and returns the data updated in the database.
     * @param {JuegoUpdateManyAndReturnArgs} args - Arguments to update many Juegos.
     * @example
     * // Update many Juegos
     * const juego = await prisma.juego.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Juegos and only return the `id`
     * const juegoWithIdOnly = await prisma.juego.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends JuegoUpdateManyAndReturnArgs>(args: SelectSubset<T, JuegoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Juego.
     * @param {JuegoUpsertArgs} args - Arguments to update or create a Juego.
     * @example
     * // Update or create a Juego
     * const juego = await prisma.juego.upsert({
     *   create: {
     *     // ... data to create a Juego
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Juego we want to update
     *   }
     * })
     */
    upsert<T extends JuegoUpsertArgs>(args: SelectSubset<T, JuegoUpsertArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoCountArgs} args - Arguments to filter Juegos to count.
     * @example
     * // Count the number of Juegos
     * const count = await prisma.juego.count({
     *   where: {
     *     // ... the filter for the Juegos we want to count
     *   }
     * })
    **/
    count<T extends JuegoCountArgs>(
      args?: Subset<T, JuegoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuegoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Juego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JuegoAggregateArgs>(args: Subset<T, JuegoAggregateArgs>): Prisma.PrismaPromise<GetJuegoAggregateType<T>>

    /**
     * Group by Juego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoGroupByArgs} args - Group by arguments.
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
      T extends JuegoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuegoGroupByArgs['orderBy'] }
        : { orderBy?: JuegoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JuegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Juego model
   */
  readonly fields: JuegoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Juego.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuegoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends Juego$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Juego$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plataformas<T extends Juego$plataformasArgs<ExtArgs> = {}>(args?: Subset<T, Juego$plataformasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Juego$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Juego$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventas<T extends Juego$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Juego$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Juego model
   */
  interface JuegoFieldRefs {
    readonly id: FieldRef<"Juego", 'Int'>
    readonly nombre: FieldRef<"Juego", 'String'>
    readonly precio: FieldRef<"Juego", 'Float'>
    readonly stock: FieldRef<"Juego", 'Int'>
    readonly rating: FieldRef<"Juego", 'Float'>
    readonly imagen: FieldRef<"Juego", 'String'>
    readonly descripcion: FieldRef<"Juego", 'String'>
    readonly descripcionLarga: FieldRef<"Juego", 'String'>
    readonly trailerURL: FieldRef<"Juego", 'String'>
    readonly galeria: FieldRef<"Juego", 'String[]'>
    readonly caracteristicas: FieldRef<"Juego", 'String[]'>
    readonly lanzamiento: FieldRef<"Juego", 'DateTime'>
    readonly descuento: FieldRef<"Juego", 'Int'>
    readonly categoriaId: FieldRef<"Juego", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Juego findUnique
   */
  export type JuegoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego findUniqueOrThrow
   */
  export type JuegoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego findFirst
   */
  export type JuegoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego findFirstOrThrow
   */
  export type JuegoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego findMany
   */
  export type JuegoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego create
   */
  export type JuegoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The data needed to create a Juego.
     */
    data: XOR<JuegoCreateInput, JuegoUncheckedCreateInput>
  }

  /**
   * Juego createMany
   */
  export type JuegoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Juegos.
     */
    data: JuegoCreateManyInput | JuegoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Juego createManyAndReturn
   */
  export type JuegoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * The data used to create many Juegos.
     */
    data: JuegoCreateManyInput | JuegoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Juego update
   */
  export type JuegoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The data needed to update a Juego.
     */
    data: XOR<JuegoUpdateInput, JuegoUncheckedUpdateInput>
    /**
     * Choose, which Juego to update.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego updateMany
   */
  export type JuegoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Juegos.
     */
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyInput>
    /**
     * Filter which Juegos to update
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to update.
     */
    limit?: number
  }

  /**
   * Juego updateManyAndReturn
   */
  export type JuegoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * The data used to update Juegos.
     */
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyInput>
    /**
     * Filter which Juegos to update
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Juego upsert
   */
  export type JuegoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The filter to search for the Juego to update in case it exists.
     */
    where: JuegoWhereUniqueInput
    /**
     * In case the Juego found by the `where` argument doesn't exist, create a new Juego with this data.
     */
    create: XOR<JuegoCreateInput, JuegoUncheckedCreateInput>
    /**
     * In case the Juego was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuegoUpdateInput, JuegoUncheckedUpdateInput>
  }

  /**
   * Juego delete
   */
  export type JuegoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter which Juego to delete.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego deleteMany
   */
  export type JuegoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juegos to delete
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to delete.
     */
    limit?: number
  }

  /**
   * Juego.categoria
   */
  export type Juego$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Juego.plataformas
   */
  export type Juego$plataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    where?: PlataformaWhereInput
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    cursor?: PlataformaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Juego.comentarios
   */
  export type Juego$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Juego.ventas
   */
  export type Juego$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Juego without action
   */
  export type JuegoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    juegoId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    rating: number | null
    juegoId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    user: string | null
    rating: number | null
    text: string | null
    date: Date | null
    juegoId: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    user: string | null
    rating: number | null
    text: string | null
    date: Date | null
    juegoId: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    user: number
    rating: number
    text: number
    date: number
    juegoId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    rating?: true
    juegoId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    rating?: true
    juegoId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    user?: true
    rating?: true
    text?: true
    date?: true
    juegoId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    user?: true
    rating?: true
    text?: true
    date?: true
    juegoId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    user?: true
    rating?: true
    text?: true
    date?: true
    juegoId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    user: string
    rating: number
    text: string
    date: Date
    juegoId: number
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    rating?: boolean
    text?: boolean
    date?: boolean
    juegoId?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    rating?: boolean
    text?: boolean
    date?: boolean
    juegoId?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    rating?: boolean
    text?: boolean
    date?: boolean
    juegoId?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    user?: boolean
    rating?: boolean
    text?: boolean
    date?: boolean
    juegoId?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user" | "rating" | "text" | "date" | "juegoId", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      juego: Prisma.$JuegoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user: string
      rating: number
      text: string
      date: Date
      juegoId: number
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios and returns the data updated in the database.
     * @param {ComentarioUpdateManyAndReturnArgs} args - Arguments to update many Comentarios.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
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
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juego<T extends JuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegoDefaultArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly user: FieldRef<"Comentario", 'String'>
    readonly rating: FieldRef<"Comentario", 'Int'>
    readonly text: FieldRef<"Comentario", 'String'>
    readonly date: FieldRef<"Comentario", 'DateTime'>
    readonly juegoId: FieldRef<"Comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario updateManyAndReturn
   */
  export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    juegoId: number | null
    total: number | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    juegoId: number | null
    total: number | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    juegoId: number | null
    clave: string | null
    fecha: Date | null
    total: number | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    juegoId: number | null
    clave: string | null
    fecha: Date | null
    total: number | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    usuarioId: number
    juegoId: number
    clave: number
    fecha: number
    total: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    juegoId?: true
    total?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    juegoId?: true
    total?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    juegoId?: true
    clave?: true
    fecha?: true
    total?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    juegoId?: true
    clave?: true
    fecha?: true
    total?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    juegoId?: true
    clave?: true
    fecha?: true
    total?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    usuarioId: number
    juegoId: number
    clave: string
    fecha: Date
    total: number
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    juegoId?: boolean
    clave?: boolean
    fecha?: boolean
    total?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    juegoId?: boolean
    clave?: boolean
    fecha?: boolean
    total?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    juegoId?: boolean
    clave?: boolean
    fecha?: boolean
    total?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    juegoId?: boolean
    clave?: boolean
    fecha?: boolean
    total?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "juegoId" | "clave" | "fecha" | "total", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }
  export type VentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }
  export type VentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      juego: Prisma.$JuegoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      juegoId: number
      clave: string
      fecha: Date
      total: number
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {VentaUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
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
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    juego<T extends JuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegoDefaultArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly usuarioId: FieldRef<"Venta", 'Int'>
    readonly juegoId: FieldRef<"Venta", 'Int'>
    readonly clave: FieldRef<"Venta", 'String'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
    readonly total: FieldRef<"Venta", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta updateManyAndReturn
   */
  export type VentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model Noticia
   */

  export type AggregateNoticia = {
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  export type NoticiaAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticiaSumAggregateOutputType = {
    id: number | null
  }

  export type NoticiaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    imagen: string | null
    fecha: Date | null
  }

  export type NoticiaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    contenido: string | null
    imagen: string | null
    fecha: Date | null
  }

  export type NoticiaCountAggregateOutputType = {
    id: number
    titulo: number
    contenido: number
    imagen: number
    fecha: number
    _all: number
  }


  export type NoticiaAvgAggregateInputType = {
    id?: true
  }

  export type NoticiaSumAggregateInputType = {
    id?: true
  }

  export type NoticiaMinAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    imagen?: true
    fecha?: true
  }

  export type NoticiaMaxAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    imagen?: true
    fecha?: true
  }

  export type NoticiaCountAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    imagen?: true
    fecha?: true
    _all?: true
  }

  export type NoticiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticia to aggregate.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noticias
    **/
    _count?: true | NoticiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiaMaxAggregateInputType
  }

  export type GetNoticiaAggregateType<T extends NoticiaAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticia[P]>
      : GetScalarType<T[P], AggregateNoticia[P]>
  }




  export type NoticiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiaWhereInput
    orderBy?: NoticiaOrderByWithAggregationInput | NoticiaOrderByWithAggregationInput[]
    by: NoticiaScalarFieldEnum[] | NoticiaScalarFieldEnum
    having?: NoticiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiaCountAggregateInputType | true
    _avg?: NoticiaAvgAggregateInputType
    _sum?: NoticiaSumAggregateInputType
    _min?: NoticiaMinAggregateInputType
    _max?: NoticiaMaxAggregateInputType
  }

  export type NoticiaGroupByOutputType = {
    id: number
    titulo: string
    contenido: string
    imagen: string | null
    fecha: Date
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  type GetNoticiaGroupByPayload<T extends NoticiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
        }
      >
    >


  export type NoticiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    imagen?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    imagen?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    imagen?: boolean
    fecha?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectScalar = {
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    imagen?: boolean
    fecha?: boolean
  }

  export type NoticiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "contenido" | "imagen" | "fecha", ExtArgs["result"]["noticia"]>

  export type $NoticiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noticia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      contenido: string
      imagen: string | null
      fecha: Date
    }, ExtArgs["result"]["noticia"]>
    composites: {}
  }

  type NoticiaGetPayload<S extends boolean | null | undefined | NoticiaDefaultArgs> = $Result.GetResult<Prisma.$NoticiaPayload, S>

  type NoticiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticiaCountAggregateInputType | true
    }

  export interface NoticiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noticia'], meta: { name: 'Noticia' } }
    /**
     * Find zero or one Noticia that matches the filter.
     * @param {NoticiaFindUniqueArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiaFindUniqueArgs>(args: SelectSubset<T, NoticiaFindUniqueArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Noticia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticiaFindUniqueOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiaFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiaFindFirstArgs>(args?: SelectSubset<T, NoticiaFindFirstArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiaFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticia.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiaWithIdOnly = await prisma.noticia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiaFindManyArgs>(args?: SelectSubset<T, NoticiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Noticia.
     * @param {NoticiaCreateArgs} args - Arguments to create a Noticia.
     * @example
     * // Create one Noticia
     * const Noticia = await prisma.noticia.create({
     *   data: {
     *     // ... data to create a Noticia
     *   }
     * })
     * 
     */
    create<T extends NoticiaCreateArgs>(args: SelectSubset<T, NoticiaCreateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Noticias.
     * @param {NoticiaCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiaCreateManyArgs>(args?: SelectSubset<T, NoticiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noticias and returns the data saved in the database.
     * @param {NoticiaCreateManyAndReturnArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticiaCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Noticia.
     * @param {NoticiaDeleteArgs} args - Arguments to delete one Noticia.
     * @example
     * // Delete one Noticia
     * const Noticia = await prisma.noticia.delete({
     *   where: {
     *     // ... filter to delete one Noticia
     *   }
     * })
     * 
     */
    delete<T extends NoticiaDeleteArgs>(args: SelectSubset<T, NoticiaDeleteArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Noticia.
     * @param {NoticiaUpdateArgs} args - Arguments to update one Noticia.
     * @example
     * // Update one Noticia
     * const noticia = await prisma.noticia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiaUpdateArgs>(args: SelectSubset<T, NoticiaUpdateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Noticias.
     * @param {NoticiaDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiaDeleteManyArgs>(args?: SelectSubset<T, NoticiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiaUpdateManyArgs>(args: SelectSubset<T, NoticiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias and returns the data updated in the database.
     * @param {NoticiaUpdateManyAndReturnArgs} args - Arguments to update many Noticias.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends NoticiaUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Noticia.
     * @param {NoticiaUpsertArgs} args - Arguments to update or create a Noticia.
     * @example
     * // Update or create a Noticia
     * const noticia = await prisma.noticia.upsert({
     *   create: {
     *     // ... data to create a Noticia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticia we want to update
     *   }
     * })
     */
    upsert<T extends NoticiaUpsertArgs>(args: SelectSubset<T, NoticiaUpsertArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticia.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends NoticiaCountArgs>(
      args?: Subset<T, NoticiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiaAggregateArgs>(args: Subset<T, NoticiaAggregateArgs>): Prisma.PrismaPromise<GetNoticiaAggregateType<T>>

    /**
     * Group by Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaGroupByArgs} args - Group by arguments.
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
      T extends NoticiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiaGroupByArgs['orderBy'] }
        : { orderBy?: NoticiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noticia model
   */
  readonly fields: NoticiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noticia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Noticia model
   */
  interface NoticiaFieldRefs {
    readonly id: FieldRef<"Noticia", 'Int'>
    readonly titulo: FieldRef<"Noticia", 'String'>
    readonly contenido: FieldRef<"Noticia", 'String'>
    readonly imagen: FieldRef<"Noticia", 'String'>
    readonly fecha: FieldRef<"Noticia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Noticia findUnique
   */
  export type NoticiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findUniqueOrThrow
   */
  export type NoticiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findFirst
   */
  export type NoticiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findFirstOrThrow
   */
  export type NoticiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findMany
   */
  export type NoticiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia create
   */
  export type NoticiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data needed to create a Noticia.
     */
    data: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
  }

  /**
   * Noticia createMany
   */
  export type NoticiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia createManyAndReturn
   */
  export type NoticiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia update
   */
  export type NoticiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data needed to update a Noticia.
     */
    data: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
    /**
     * Choose, which Noticia to update.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia updateMany
   */
  export type NoticiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
  }

  /**
   * Noticia updateManyAndReturn
   */
  export type NoticiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
  }

  /**
   * Noticia upsert
   */
  export type NoticiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The filter to search for the Noticia to update in case it exists.
     */
    where: NoticiaWhereUniqueInput
    /**
     * In case the Noticia found by the `where` argument doesn't exist, create a new Noticia with this data.
     */
    create: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
    /**
     * In case the Noticia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
  }

  /**
   * Noticia delete
   */
  export type NoticiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter which Noticia to delete.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia deleteMany
   */
  export type NoticiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to delete
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to delete.
     */
    limit?: number
  }

  /**
   * Noticia without action
   */
  export type NoticiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    correo: 'correo',
    contrasena: 'contrasena',
    pais: 'pais',
    imagen: 'imagen',
    tipo: 'tipo',
    verificado: 'verificado',
    token: 'token'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PlataformaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PlataformaScalarFieldEnum = (typeof PlataformaScalarFieldEnum)[keyof typeof PlataformaScalarFieldEnum]


  export const JuegoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    stock: 'stock',
    rating: 'rating',
    imagen: 'imagen',
    descripcion: 'descripcion',
    descripcionLarga: 'descripcionLarga',
    trailerURL: 'trailerURL',
    galeria: 'galeria',
    caracteristicas: 'caracteristicas',
    lanzamiento: 'lanzamiento',
    descuento: 'descuento',
    categoriaId: 'categoriaId'
  };

  export type JuegoScalarFieldEnum = (typeof JuegoScalarFieldEnum)[keyof typeof JuegoScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    user: 'user',
    rating: 'rating',
    text: 'text',
    date: 'date',
    juegoId: 'juegoId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    juegoId: 'juegoId',
    clave: 'clave',
    fecha: 'fecha',
    total: 'total'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const NoticiaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    contenido: 'contenido',
    imagen: 'imagen',
    fecha: 'fecha'
  };

  export type NoticiaScalarFieldEnum = (typeof NoticiaScalarFieldEnum)[keyof typeof NoticiaScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nickname?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    pais?: StringNullableFilter<"Usuario"> | string | null
    imagen?: StringNullableFilter<"Usuario"> | string | null
    tipo?: StringFilter<"Usuario"> | string
    verificado?: BoolFilter<"Usuario"> | boolean
    token?: StringNullableFilter<"Usuario"> | string | null
    ventas?: VentaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    pais?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    tipo?: SortOrder
    verificado?: SortOrder
    token?: SortOrderInput | SortOrder
    ventas?: VentaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nickname?: string
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    contrasena?: StringFilter<"Usuario"> | string
    pais?: StringNullableFilter<"Usuario"> | string | null
    imagen?: StringNullableFilter<"Usuario"> | string | null
    tipo?: StringFilter<"Usuario"> | string
    verificado?: BoolFilter<"Usuario"> | boolean
    token?: StringNullableFilter<"Usuario"> | string | null
    ventas?: VentaListRelationFilter
  }, "id" | "nickname" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    pais?: SortOrderInput | SortOrder
    imagen?: SortOrderInput | SortOrder
    tipo?: SortOrder
    verificado?: SortOrder
    token?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nickname?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    pais?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    imagen?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    tipo?: StringWithAggregatesFilter<"Usuario"> | string
    verificado?: BoolWithAggregatesFilter<"Usuario"> | boolean
    token?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    juegos?: JuegoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    juegos?: JuegoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    juegos?: JuegoListRelationFilter
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type PlataformaWhereInput = {
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    id?: IntFilter<"Plataforma"> | number
    nombre?: StringFilter<"Plataforma"> | string
    juegos?: JuegoListRelationFilter
  }

  export type PlataformaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    juegos?: JuegoOrderByRelationAggregateInput
  }

  export type PlataformaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    juegos?: JuegoListRelationFilter
  }, "id" | "nombre">

  export type PlataformaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PlataformaCountOrderByAggregateInput
    _avg?: PlataformaAvgOrderByAggregateInput
    _max?: PlataformaMaxOrderByAggregateInput
    _min?: PlataformaMinOrderByAggregateInput
    _sum?: PlataformaSumOrderByAggregateInput
  }

  export type PlataformaScalarWhereWithAggregatesInput = {
    AND?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    OR?: PlataformaScalarWhereWithAggregatesInput[]
    NOT?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plataforma"> | number
    nombre?: StringWithAggregatesFilter<"Plataforma"> | string
  }

  export type JuegoWhereInput = {
    AND?: JuegoWhereInput | JuegoWhereInput[]
    OR?: JuegoWhereInput[]
    NOT?: JuegoWhereInput | JuegoWhereInput[]
    id?: IntFilter<"Juego"> | number
    nombre?: StringFilter<"Juego"> | string
    precio?: FloatFilter<"Juego"> | number
    stock?: IntFilter<"Juego"> | number
    rating?: FloatFilter<"Juego"> | number
    imagen?: StringFilter<"Juego"> | string
    descripcion?: StringFilter<"Juego"> | string
    descripcionLarga?: StringFilter<"Juego"> | string
    trailerURL?: StringFilter<"Juego"> | string
    galeria?: StringNullableListFilter<"Juego">
    caracteristicas?: StringNullableListFilter<"Juego">
    lanzamiento?: DateTimeFilter<"Juego"> | Date | string
    descuento?: IntFilter<"Juego"> | number
    categoriaId?: IntNullableFilter<"Juego"> | number | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    plataformas?: PlataformaListRelationFilter
    comentarios?: ComentarioListRelationFilter
    ventas?: VentaListRelationFilter
  }

  export type JuegoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    descripcionLarga?: SortOrder
    trailerURL?: SortOrder
    galeria?: SortOrder
    caracteristicas?: SortOrder
    lanzamiento?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    plataformas?: PlataformaOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    ventas?: VentaOrderByRelationAggregateInput
  }

  export type JuegoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JuegoWhereInput | JuegoWhereInput[]
    OR?: JuegoWhereInput[]
    NOT?: JuegoWhereInput | JuegoWhereInput[]
    nombre?: StringFilter<"Juego"> | string
    precio?: FloatFilter<"Juego"> | number
    stock?: IntFilter<"Juego"> | number
    rating?: FloatFilter<"Juego"> | number
    imagen?: StringFilter<"Juego"> | string
    descripcion?: StringFilter<"Juego"> | string
    descripcionLarga?: StringFilter<"Juego"> | string
    trailerURL?: StringFilter<"Juego"> | string
    galeria?: StringNullableListFilter<"Juego">
    caracteristicas?: StringNullableListFilter<"Juego">
    lanzamiento?: DateTimeFilter<"Juego"> | Date | string
    descuento?: IntFilter<"Juego"> | number
    categoriaId?: IntNullableFilter<"Juego"> | number | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    plataformas?: PlataformaListRelationFilter
    comentarios?: ComentarioListRelationFilter
    ventas?: VentaListRelationFilter
  }, "id">

  export type JuegoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    descripcionLarga?: SortOrder
    trailerURL?: SortOrder
    galeria?: SortOrder
    caracteristicas?: SortOrder
    lanzamiento?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    _count?: JuegoCountOrderByAggregateInput
    _avg?: JuegoAvgOrderByAggregateInput
    _max?: JuegoMaxOrderByAggregateInput
    _min?: JuegoMinOrderByAggregateInput
    _sum?: JuegoSumOrderByAggregateInput
  }

  export type JuegoScalarWhereWithAggregatesInput = {
    AND?: JuegoScalarWhereWithAggregatesInput | JuegoScalarWhereWithAggregatesInput[]
    OR?: JuegoScalarWhereWithAggregatesInput[]
    NOT?: JuegoScalarWhereWithAggregatesInput | JuegoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Juego"> | number
    nombre?: StringWithAggregatesFilter<"Juego"> | string
    precio?: FloatWithAggregatesFilter<"Juego"> | number
    stock?: IntWithAggregatesFilter<"Juego"> | number
    rating?: FloatWithAggregatesFilter<"Juego"> | number
    imagen?: StringWithAggregatesFilter<"Juego"> | string
    descripcion?: StringWithAggregatesFilter<"Juego"> | string
    descripcionLarga?: StringWithAggregatesFilter<"Juego"> | string
    trailerURL?: StringWithAggregatesFilter<"Juego"> | string
    galeria?: StringNullableListFilter<"Juego">
    caracteristicas?: StringNullableListFilter<"Juego">
    lanzamiento?: DateTimeWithAggregatesFilter<"Juego"> | Date | string
    descuento?: IntWithAggregatesFilter<"Juego"> | number
    categoriaId?: IntNullableWithAggregatesFilter<"Juego"> | number | null
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    user?: StringFilter<"Comentario"> | string
    rating?: IntFilter<"Comentario"> | number
    text?: StringFilter<"Comentario"> | string
    date?: DateTimeFilter<"Comentario"> | Date | string
    juegoId?: IntFilter<"Comentario"> | number
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    date?: SortOrder
    juegoId?: SortOrder
    juego?: JuegoOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    user?: StringFilter<"Comentario"> | string
    rating?: IntFilter<"Comentario"> | number
    text?: StringFilter<"Comentario"> | string
    date?: DateTimeFilter<"Comentario"> | Date | string
    juegoId?: IntFilter<"Comentario"> | number
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    date?: SortOrder
    juegoId?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    user?: StringWithAggregatesFilter<"Comentario"> | string
    rating?: IntWithAggregatesFilter<"Comentario"> | number
    text?: StringWithAggregatesFilter<"Comentario"> | string
    date?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    juegoId?: IntWithAggregatesFilter<"Comentario"> | number
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    usuarioId?: IntFilter<"Venta"> | number
    juegoId?: IntFilter<"Venta"> | number
    clave?: StringFilter<"Venta"> | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
    total?: FloatFilter<"Venta"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    juegoId?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    juego?: JuegoOrderByWithRelationInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    usuarioId?: IntFilter<"Venta"> | number
    juegoId?: IntFilter<"Venta"> | number
    clave?: StringFilter<"Venta"> | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
    total?: FloatFilter<"Venta"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
  }, "id">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    juegoId?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    usuarioId?: IntWithAggregatesFilter<"Venta"> | number
    juegoId?: IntWithAggregatesFilter<"Venta"> | number
    clave?: StringWithAggregatesFilter<"Venta"> | string
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    total?: FloatWithAggregatesFilter<"Venta"> | number
  }

  export type NoticiaWhereInput = {
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    id?: IntFilter<"Noticia"> | number
    titulo?: StringFilter<"Noticia"> | string
    contenido?: StringFilter<"Noticia"> | string
    imagen?: StringNullableFilter<"Noticia"> | string | null
    fecha?: DateTimeFilter<"Noticia"> | Date | string
  }

  export type NoticiaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagen?: SortOrderInput | SortOrder
    fecha?: SortOrder
  }

  export type NoticiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    titulo?: StringFilter<"Noticia"> | string
    contenido?: StringFilter<"Noticia"> | string
    imagen?: StringNullableFilter<"Noticia"> | string | null
    fecha?: DateTimeFilter<"Noticia"> | Date | string
  }, "id">

  export type NoticiaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagen?: SortOrderInput | SortOrder
    fecha?: SortOrder
    _count?: NoticiaCountOrderByAggregateInput
    _avg?: NoticiaAvgOrderByAggregateInput
    _max?: NoticiaMaxOrderByAggregateInput
    _min?: NoticiaMinOrderByAggregateInput
    _sum?: NoticiaSumOrderByAggregateInput
  }

  export type NoticiaScalarWhereWithAggregatesInput = {
    AND?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    OR?: NoticiaScalarWhereWithAggregatesInput[]
    NOT?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noticia"> | number
    titulo?: StringWithAggregatesFilter<"Noticia"> | string
    contenido?: StringWithAggregatesFilter<"Noticia"> | string
    imagen?: StringNullableWithAggregatesFilter<"Noticia"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"Noticia"> | Date | string
  }

  export type UsuarioCreateInput = {
    nickname: string
    correo: string
    contrasena: string
    pais?: string | null
    imagen?: string | null
    tipo?: string
    verificado?: boolean
    token?: string | null
    ventas?: VentaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nickname: string
    correo: string
    contrasena: string
    pais?: string | null
    imagen?: string | null
    tipo?: string
    verificado?: boolean
    token?: string | null
    ventas?: VentaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nickname: string
    correo: string
    contrasena: string
    pais?: string | null
    imagen?: string | null
    tipo?: string
    verificado?: boolean
    token?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaCreateInput = {
    nombre: string
    juegos?: JuegoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    juegos?: JuegoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaCreateInput = {
    nombre: string
    juegos?: JuegoCreateNestedManyWithoutPlataformasInput
  }

  export type PlataformaUncheckedCreateInput = {
    id?: number
    nombre: string
    juegos?: JuegoUncheckedCreateNestedManyWithoutPlataformasInput
  }

  export type PlataformaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUpdateManyWithoutPlataformasNestedInput
  }

  export type PlataformaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUncheckedUpdateManyWithoutPlataformasNestedInput
  }

  export type PlataformaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PlataformaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type JuegoCreateInput = {
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoria?: CategoriaCreateNestedOneWithoutJuegosInput
    plataformas?: PlataformaCreateNestedManyWithoutJuegosInput
    comentarios?: ComentarioCreateNestedManyWithoutJuegoInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoriaId?: number | null
    plataformas?: PlataformaUncheckedCreateNestedManyWithoutJuegosInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutJuegoInput
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneWithoutJuegosNestedInput
    plataformas?: PlataformaUpdateManyWithoutJuegosNestedInput
    comentarios?: ComentarioUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    plataformas?: PlataformaUncheckedUpdateManyWithoutJuegosNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoriaId?: number | null
  }

  export type JuegoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
  }

  export type JuegoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComentarioCreateInput = {
    user: string
    rating: number
    text: string
    date: Date | string
    juego: JuegoCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    user: string
    rating: number
    text: string
    date: Date | string
    juegoId: number
  }

  export type ComentarioUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    juego?: JuegoUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    juegoId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateManyInput = {
    id?: number
    user: string
    rating: number
    text: string
    date: Date | string
    juegoId: number
  }

  export type ComentarioUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    juegoId?: IntFieldUpdateOperationsInput | number
  }

  export type VentaCreateInput = {
    clave: string
    fecha?: Date | string
    total: number
    usuario: UsuarioCreateNestedOneWithoutVentasInput
    juego: JuegoCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    juegoId: number
    clave: string
    fecha?: Date | string
    total: number
  }

  export type VentaUpdateInput = {
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
    juego?: JuegoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    juegoId?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaCreateManyInput = {
    id?: number
    usuarioId: number
    juegoId: number
    clave: string
    fecha?: Date | string
    total: number
  }

  export type VentaUpdateManyMutationInput = {
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    juegoId?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type NoticiaCreateInput = {
    titulo: string
    contenido: string
    imagen?: string | null
    fecha?: Date | string
  }

  export type NoticiaUncheckedCreateInput = {
    id?: number
    titulo: string
    contenido: string
    imagen?: string | null
    fecha?: Date | string
  }

  export type NoticiaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticiaCreateManyInput = {
    id?: number
    titulo: string
    contenido: string
    imagen?: string | null
    fecha?: Date | string
  }

  export type NoticiaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    pais?: SortOrder
    imagen?: SortOrder
    tipo?: SortOrder
    verificado?: SortOrder
    token?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    pais?: SortOrder
    imagen?: SortOrder
    tipo?: SortOrder
    verificado?: SortOrder
    token?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    pais?: SortOrder
    imagen?: SortOrder
    tipo?: SortOrder
    verificado?: SortOrder
    token?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type JuegoListRelationFilter = {
    every?: JuegoWhereInput
    some?: JuegoWhereInput
    none?: JuegoWhereInput
  }

  export type JuegoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PlataformaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PlataformaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PlataformaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type PlataformaListRelationFilter = {
    every?: PlataformaWhereInput
    some?: PlataformaWhereInput
    none?: PlataformaWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type PlataformaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JuegoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    descripcionLarga?: SortOrder
    trailerURL?: SortOrder
    galeria?: SortOrder
    caracteristicas?: SortOrder
    lanzamiento?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
  }

  export type JuegoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
  }

  export type JuegoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    descripcionLarga?: SortOrder
    trailerURL?: SortOrder
    lanzamiento?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
  }

  export type JuegoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    imagen?: SortOrder
    descripcion?: SortOrder
    descripcionLarga?: SortOrder
    trailerURL?: SortOrder
    lanzamiento?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
  }

  export type JuegoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    rating?: SortOrder
    descuento?: SortOrder
    categoriaId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type JuegoScalarRelationFilter = {
    is?: JuegoWhereInput
    isNot?: JuegoWhereInput
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    date?: SortOrder
    juegoId?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    juegoId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    date?: SortOrder
    juegoId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    date?: SortOrder
    juegoId?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    juegoId?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    juegoId?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    juegoId?: SortOrder
    total?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    juegoId?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    juegoId?: SortOrder
    clave?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    juegoId?: SortOrder
    total?: SortOrder
  }

  export type NoticiaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagen?: SortOrder
    fecha?: SortOrder
  }

  export type NoticiaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticiaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagen?: SortOrder
    fecha?: SortOrder
  }

  export type NoticiaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    imagen?: SortOrder
    fecha?: SortOrder
  }

  export type NoticiaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VentaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VentaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type JuegoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutCategoriaInput | JuegoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutCategoriaInput | JuegoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutCategoriaInput | JuegoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type JuegoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutCategoriaInput | JuegoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutCategoriaInput | JuegoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutCategoriaInput | JuegoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type JuegoCreateNestedManyWithoutPlataformasInput = {
    create?: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput> | JuegoCreateWithoutPlataformasInput[] | JuegoUncheckedCreateWithoutPlataformasInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutPlataformasInput | JuegoCreateOrConnectWithoutPlataformasInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUncheckedCreateNestedManyWithoutPlataformasInput = {
    create?: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput> | JuegoCreateWithoutPlataformasInput[] | JuegoUncheckedCreateWithoutPlataformasInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutPlataformasInput | JuegoCreateOrConnectWithoutPlataformasInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUpdateManyWithoutPlataformasNestedInput = {
    create?: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput> | JuegoCreateWithoutPlataformasInput[] | JuegoUncheckedCreateWithoutPlataformasInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutPlataformasInput | JuegoCreateOrConnectWithoutPlataformasInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutPlataformasInput | JuegoUpsertWithWhereUniqueWithoutPlataformasInput[]
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutPlataformasInput | JuegoUpdateWithWhereUniqueWithoutPlataformasInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutPlataformasInput | JuegoUpdateManyWithWhereWithoutPlataformasInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type JuegoUncheckedUpdateManyWithoutPlataformasNestedInput = {
    create?: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput> | JuegoCreateWithoutPlataformasInput[] | JuegoUncheckedCreateWithoutPlataformasInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutPlataformasInput | JuegoCreateOrConnectWithoutPlataformasInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutPlataformasInput | JuegoUpsertWithWhereUniqueWithoutPlataformasInput[]
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutPlataformasInput | JuegoUpdateWithWhereUniqueWithoutPlataformasInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutPlataformasInput | JuegoUpdateManyWithWhereWithoutPlataformasInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type JuegoCreategaleriaInput = {
    set: string[]
  }

  export type JuegoCreatecaracteristicasInput = {
    set: string[]
  }

  export type CategoriaCreateNestedOneWithoutJuegosInput = {
    create?: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutJuegosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type PlataformaCreateNestedManyWithoutJuegosInput = {
    create?: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput> | PlataformaCreateWithoutJuegosInput[] | PlataformaUncheckedCreateWithoutJuegosInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutJuegosInput | PlataformaCreateOrConnectWithoutJuegosInput[]
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutJuegoInput = {
    create?: XOR<ComentarioCreateWithoutJuegoInput, ComentarioUncheckedCreateWithoutJuegoInput> | ComentarioCreateWithoutJuegoInput[] | ComentarioUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutJuegoInput | ComentarioCreateOrConnectWithoutJuegoInput[]
    createMany?: ComentarioCreateManyJuegoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type VentaCreateNestedManyWithoutJuegoInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type PlataformaUncheckedCreateNestedManyWithoutJuegosInput = {
    create?: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput> | PlataformaCreateWithoutJuegosInput[] | PlataformaUncheckedCreateWithoutJuegosInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutJuegosInput | PlataformaCreateOrConnectWithoutJuegosInput[]
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutJuegoInput = {
    create?: XOR<ComentarioCreateWithoutJuegoInput, ComentarioUncheckedCreateWithoutJuegoInput> | ComentarioCreateWithoutJuegoInput[] | ComentarioUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutJuegoInput | ComentarioCreateOrConnectWithoutJuegoInput[]
    createMany?: ComentarioCreateManyJuegoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutJuegoInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JuegoUpdategaleriaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JuegoUpdatecaracteristicasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoriaUpdateOneWithoutJuegosNestedInput = {
    create?: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutJuegosInput
    upsert?: CategoriaUpsertWithoutJuegosInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutJuegosInput, CategoriaUpdateWithoutJuegosInput>, CategoriaUncheckedUpdateWithoutJuegosInput>
  }

  export type PlataformaUpdateManyWithoutJuegosNestedInput = {
    create?: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput> | PlataformaCreateWithoutJuegosInput[] | PlataformaUncheckedCreateWithoutJuegosInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutJuegosInput | PlataformaCreateOrConnectWithoutJuegosInput[]
    upsert?: PlataformaUpsertWithWhereUniqueWithoutJuegosInput | PlataformaUpsertWithWhereUniqueWithoutJuegosInput[]
    set?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    disconnect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    delete?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    update?: PlataformaUpdateWithWhereUniqueWithoutJuegosInput | PlataformaUpdateWithWhereUniqueWithoutJuegosInput[]
    updateMany?: PlataformaUpdateManyWithWhereWithoutJuegosInput | PlataformaUpdateManyWithWhereWithoutJuegosInput[]
    deleteMany?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<ComentarioCreateWithoutJuegoInput, ComentarioUncheckedCreateWithoutJuegoInput> | ComentarioCreateWithoutJuegoInput[] | ComentarioUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutJuegoInput | ComentarioCreateOrConnectWithoutJuegoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutJuegoInput | ComentarioUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: ComentarioCreateManyJuegoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutJuegoInput | ComentarioUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutJuegoInput | ComentarioUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type VentaUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutJuegoInput | VentaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutJuegoInput | VentaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutJuegoInput | VentaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlataformaUncheckedUpdateManyWithoutJuegosNestedInput = {
    create?: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput> | PlataformaCreateWithoutJuegosInput[] | PlataformaUncheckedCreateWithoutJuegosInput[]
    connectOrCreate?: PlataformaCreateOrConnectWithoutJuegosInput | PlataformaCreateOrConnectWithoutJuegosInput[]
    upsert?: PlataformaUpsertWithWhereUniqueWithoutJuegosInput | PlataformaUpsertWithWhereUniqueWithoutJuegosInput[]
    set?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    disconnect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    delete?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    connect?: PlataformaWhereUniqueInput | PlataformaWhereUniqueInput[]
    update?: PlataformaUpdateWithWhereUniqueWithoutJuegosInput | PlataformaUpdateWithWhereUniqueWithoutJuegosInput[]
    updateMany?: PlataformaUpdateManyWithWhereWithoutJuegosInput | PlataformaUpdateManyWithWhereWithoutJuegosInput[]
    deleteMany?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<ComentarioCreateWithoutJuegoInput, ComentarioUncheckedCreateWithoutJuegoInput> | ComentarioCreateWithoutJuegoInput[] | ComentarioUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutJuegoInput | ComentarioCreateOrConnectWithoutJuegoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutJuegoInput | ComentarioUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: ComentarioCreateManyJuegoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutJuegoInput | ComentarioUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutJuegoInput | ComentarioUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutJuegoInput | VentaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutJuegoInput | VentaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutJuegoInput | VentaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type JuegoCreateNestedOneWithoutComentariosInput = {
    create?: XOR<JuegoCreateWithoutComentariosInput, JuegoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutComentariosInput
    connect?: JuegoWhereUniqueInput
  }

  export type JuegoUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<JuegoCreateWithoutComentariosInput, JuegoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutComentariosInput
    upsert?: JuegoUpsertWithoutComentariosInput
    connect?: JuegoWhereUniqueInput
    update?: XOR<XOR<JuegoUpdateToOneWithWhereWithoutComentariosInput, JuegoUpdateWithoutComentariosInput>, JuegoUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioCreateNestedOneWithoutVentasInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type JuegoCreateNestedOneWithoutVentasInput = {
    create?: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutVentasInput
    connect?: JuegoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    upsert?: UsuarioUpsertWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVentasInput, UsuarioUpdateWithoutVentasInput>, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type JuegoUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutVentasInput
    upsert?: JuegoUpsertWithoutVentasInput
    connect?: JuegoWhereUniqueInput
    update?: XOR<XOR<JuegoUpdateToOneWithWhereWithoutVentasInput, JuegoUpdateWithoutVentasInput>, JuegoUncheckedUpdateWithoutVentasInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type VentaCreateWithoutUsuarioInput = {
    clave: string
    fecha?: Date | string
    total: number
    juego: JuegoCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    juegoId: number
    clave: string
    fecha?: Date | string
    total: number
  }

  export type VentaCreateOrConnectWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaCreateManyUsuarioInputEnvelope = {
    data: VentaCreateManyUsuarioInput | VentaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
  }

  export type VentaUpdateManyWithWhereWithoutUsuarioInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: IntFilter<"Venta"> | number
    usuarioId?: IntFilter<"Venta"> | number
    juegoId?: IntFilter<"Venta"> | number
    clave?: StringFilter<"Venta"> | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
    total?: FloatFilter<"Venta"> | number
  }

  export type JuegoCreateWithoutCategoriaInput = {
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    plataformas?: PlataformaCreateNestedManyWithoutJuegosInput
    comentarios?: ComentarioCreateNestedManyWithoutJuegoInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    plataformas?: PlataformaUncheckedCreateNestedManyWithoutJuegosInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutJuegoInput
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput>
  }

  export type JuegoCreateManyCategoriaInputEnvelope = {
    data: JuegoCreateManyCategoriaInput | JuegoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type JuegoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    update: XOR<JuegoUpdateWithoutCategoriaInput, JuegoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput>
  }

  export type JuegoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    data: XOR<JuegoUpdateWithoutCategoriaInput, JuegoUncheckedUpdateWithoutCategoriaInput>
  }

  export type JuegoUpdateManyWithWhereWithoutCategoriaInput = {
    where: JuegoScalarWhereInput
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type JuegoScalarWhereInput = {
    AND?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
    OR?: JuegoScalarWhereInput[]
    NOT?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
    id?: IntFilter<"Juego"> | number
    nombre?: StringFilter<"Juego"> | string
    precio?: FloatFilter<"Juego"> | number
    stock?: IntFilter<"Juego"> | number
    rating?: FloatFilter<"Juego"> | number
    imagen?: StringFilter<"Juego"> | string
    descripcion?: StringFilter<"Juego"> | string
    descripcionLarga?: StringFilter<"Juego"> | string
    trailerURL?: StringFilter<"Juego"> | string
    galeria?: StringNullableListFilter<"Juego">
    caracteristicas?: StringNullableListFilter<"Juego">
    lanzamiento?: DateTimeFilter<"Juego"> | Date | string
    descuento?: IntFilter<"Juego"> | number
    categoriaId?: IntNullableFilter<"Juego"> | number | null
  }

  export type JuegoCreateWithoutPlataformasInput = {
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoria?: CategoriaCreateNestedOneWithoutJuegosInput
    comentarios?: ComentarioCreateNestedManyWithoutJuegoInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutPlataformasInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoriaId?: number | null
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutJuegoInput
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutPlataformasInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput>
  }

  export type JuegoUpsertWithWhereUniqueWithoutPlataformasInput = {
    where: JuegoWhereUniqueInput
    update: XOR<JuegoUpdateWithoutPlataformasInput, JuegoUncheckedUpdateWithoutPlataformasInput>
    create: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput>
  }

  export type JuegoUpdateWithWhereUniqueWithoutPlataformasInput = {
    where: JuegoWhereUniqueInput
    data: XOR<JuegoUpdateWithoutPlataformasInput, JuegoUncheckedUpdateWithoutPlataformasInput>
  }

  export type JuegoUpdateManyWithWhereWithoutPlataformasInput = {
    where: JuegoScalarWhereInput
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyWithoutPlataformasInput>
  }

  export type CategoriaCreateWithoutJuegosInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateWithoutJuegosInput = {
    id?: number
    nombre: string
  }

  export type CategoriaCreateOrConnectWithoutJuegosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
  }

  export type PlataformaCreateWithoutJuegosInput = {
    nombre: string
  }

  export type PlataformaUncheckedCreateWithoutJuegosInput = {
    id?: number
    nombre: string
  }

  export type PlataformaCreateOrConnectWithoutJuegosInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput>
  }

  export type ComentarioCreateWithoutJuegoInput = {
    user: string
    rating: number
    text: string
    date: Date | string
  }

  export type ComentarioUncheckedCreateWithoutJuegoInput = {
    id?: number
    user: string
    rating: number
    text: string
    date: Date | string
  }

  export type ComentarioCreateOrConnectWithoutJuegoInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutJuegoInput, ComentarioUncheckedCreateWithoutJuegoInput>
  }

  export type ComentarioCreateManyJuegoInputEnvelope = {
    data: ComentarioCreateManyJuegoInput | ComentarioCreateManyJuegoInput[]
    skipDuplicates?: boolean
  }

  export type VentaCreateWithoutJuegoInput = {
    clave: string
    fecha?: Date | string
    total: number
    usuario: UsuarioCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateWithoutJuegoInput = {
    id?: number
    usuarioId: number
    clave: string
    fecha?: Date | string
    total: number
  }

  export type VentaCreateOrConnectWithoutJuegoInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput>
  }

  export type VentaCreateManyJuegoInputEnvelope = {
    data: VentaCreateManyJuegoInput | VentaCreateManyJuegoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutJuegosInput = {
    update: XOR<CategoriaUpdateWithoutJuegosInput, CategoriaUncheckedUpdateWithoutJuegosInput>
    create: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutJuegosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutJuegosInput, CategoriaUncheckedUpdateWithoutJuegosInput>
  }

  export type CategoriaUpdateWithoutJuegosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutJuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaUpsertWithWhereUniqueWithoutJuegosInput = {
    where: PlataformaWhereUniqueInput
    update: XOR<PlataformaUpdateWithoutJuegosInput, PlataformaUncheckedUpdateWithoutJuegosInput>
    create: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput>
  }

  export type PlataformaUpdateWithWhereUniqueWithoutJuegosInput = {
    where: PlataformaWhereUniqueInput
    data: XOR<PlataformaUpdateWithoutJuegosInput, PlataformaUncheckedUpdateWithoutJuegosInput>
  }

  export type PlataformaUpdateManyWithWhereWithoutJuegosInput = {
    where: PlataformaScalarWhereInput
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyWithoutJuegosInput>
  }

  export type PlataformaScalarWhereInput = {
    AND?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
    OR?: PlataformaScalarWhereInput[]
    NOT?: PlataformaScalarWhereInput | PlataformaScalarWhereInput[]
    id?: IntFilter<"Plataforma"> | number
    nombre?: StringFilter<"Plataforma"> | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutJuegoInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutJuegoInput, ComentarioUncheckedUpdateWithoutJuegoInput>
    create: XOR<ComentarioCreateWithoutJuegoInput, ComentarioUncheckedCreateWithoutJuegoInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutJuegoInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutJuegoInput, ComentarioUncheckedUpdateWithoutJuegoInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutJuegoInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutJuegoInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    user?: StringFilter<"Comentario"> | string
    rating?: IntFilter<"Comentario"> | number
    text?: StringFilter<"Comentario"> | string
    date?: DateTimeFilter<"Comentario"> | Date | string
    juegoId?: IntFilter<"Comentario"> | number
  }

  export type VentaUpsertWithWhereUniqueWithoutJuegoInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutJuegoInput, VentaUncheckedUpdateWithoutJuegoInput>
    create: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutJuegoInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutJuegoInput, VentaUncheckedUpdateWithoutJuegoInput>
  }

  export type VentaUpdateManyWithWhereWithoutJuegoInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutJuegoInput>
  }

  export type JuegoCreateWithoutComentariosInput = {
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoria?: CategoriaCreateNestedOneWithoutJuegosInput
    plataformas?: PlataformaCreateNestedManyWithoutJuegosInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutComentariosInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoriaId?: number | null
    plataformas?: PlataformaUncheckedCreateNestedManyWithoutJuegosInput
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutComentariosInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutComentariosInput, JuegoUncheckedCreateWithoutComentariosInput>
  }

  export type JuegoUpsertWithoutComentariosInput = {
    update: XOR<JuegoUpdateWithoutComentariosInput, JuegoUncheckedUpdateWithoutComentariosInput>
    create: XOR<JuegoCreateWithoutComentariosInput, JuegoUncheckedCreateWithoutComentariosInput>
    where?: JuegoWhereInput
  }

  export type JuegoUpdateToOneWithWhereWithoutComentariosInput = {
    where?: JuegoWhereInput
    data: XOR<JuegoUpdateWithoutComentariosInput, JuegoUncheckedUpdateWithoutComentariosInput>
  }

  export type JuegoUpdateWithoutComentariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneWithoutJuegosNestedInput
    plataformas?: PlataformaUpdateManyWithoutJuegosNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    plataformas?: PlataformaUncheckedUpdateManyWithoutJuegosNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type UsuarioCreateWithoutVentasInput = {
    nickname: string
    correo: string
    contrasena: string
    pais?: string | null
    imagen?: string | null
    tipo?: string
    verificado?: boolean
    token?: string | null
  }

  export type UsuarioUncheckedCreateWithoutVentasInput = {
    id?: number
    nickname: string
    correo: string
    contrasena: string
    pais?: string | null
    imagen?: string | null
    tipo?: string
    verificado?: boolean
    token?: string | null
  }

  export type UsuarioCreateOrConnectWithoutVentasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
  }

  export type JuegoCreateWithoutVentasInput = {
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoria?: CategoriaCreateNestedOneWithoutJuegosInput
    plataformas?: PlataformaCreateNestedManyWithoutJuegosInput
    comentarios?: ComentarioCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutVentasInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
    categoriaId?: number | null
    plataformas?: PlataformaUncheckedCreateNestedManyWithoutJuegosInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutVentasInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
  }

  export type UsuarioUpsertWithoutVentasInput = {
    update: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVentasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type UsuarioUpdateWithoutVentasInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    pais?: NullableStringFieldUpdateOperationsInput | string | null
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    verificado?: BoolFieldUpdateOperationsInput | boolean
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuegoUpsertWithoutVentasInput = {
    update: XOR<JuegoUpdateWithoutVentasInput, JuegoUncheckedUpdateWithoutVentasInput>
    create: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
    where?: JuegoWhereInput
  }

  export type JuegoUpdateToOneWithWhereWithoutVentasInput = {
    where?: JuegoWhereInput
    data: XOR<JuegoUpdateWithoutVentasInput, JuegoUncheckedUpdateWithoutVentasInput>
  }

  export type JuegoUpdateWithoutVentasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneWithoutJuegosNestedInput
    plataformas?: PlataformaUpdateManyWithoutJuegosNestedInput
    comentarios?: ComentarioUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    plataformas?: PlataformaUncheckedUpdateManyWithoutJuegosNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type VentaCreateManyUsuarioInput = {
    id?: number
    juegoId: number
    clave: string
    fecha?: Date | string
    total: number
  }

  export type VentaUpdateWithoutUsuarioInput = {
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    juego?: JuegoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    juegoId?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    juegoId?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type JuegoCreateManyCategoriaInput = {
    id?: number
    nombre: string
    precio: number
    stock: number
    rating: number
    imagen: string
    descripcion: string
    descripcionLarga: string
    trailerURL: string
    galeria?: JuegoCreategaleriaInput | string[]
    caracteristicas?: JuegoCreatecaracteristicasInput | string[]
    lanzamiento: Date | string
    descuento?: number
  }

  export type JuegoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    plataformas?: PlataformaUpdateManyWithoutJuegosNestedInput
    comentarios?: ComentarioUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    plataformas?: PlataformaUncheckedUpdateManyWithoutJuegosNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
  }

  export type JuegoUpdateWithoutPlataformasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaUpdateOneWithoutJuegosNestedInput
    comentarios?: ComentarioUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutPlataformasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    comentarios?: ComentarioUncheckedUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateManyWithoutPlataformasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    descripcionLarga?: StringFieldUpdateOperationsInput | string
    trailerURL?: StringFieldUpdateOperationsInput | string
    galeria?: JuegoUpdategaleriaInput | string[]
    caracteristicas?: JuegoUpdatecaracteristicasInput | string[]
    lanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    descuento?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComentarioCreateManyJuegoInput = {
    id?: number
    user: string
    rating: number
    text: string
    date: Date | string
  }

  export type VentaCreateManyJuegoInput = {
    id?: number
    usuarioId: number
    clave: string
    fecha?: Date | string
    total: number
  }

  export type PlataformaUpdateWithoutJuegosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaUncheckedUpdateWithoutJuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaUncheckedUpdateManyWithoutJuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioUpdateWithoutJuegoInput = {
    user?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaUpdateWithoutJuegoInput = {
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaUncheckedUpdateManyWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
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