
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
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model Complicacion
 * 
 */
export type Complicacion = $Result.DefaultSelection<Prisma.$ComplicacionPayload>
/**
 * Model Descripcion
 * 
 */
export type Descripcion = $Result.DefaultSelection<Prisma.$DescripcionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDIENTE: 'PENDIENTE',
  COMPLETADO: 'COMPLETADO',
  CANCELADO: 'CANCELADO'
};

export type Status = (typeof Status)[keyof typeof Status]


export const TypeServicio: {
  MEDICO: 'MEDICO',
  TRAUMA: 'TRAUMA',
  PSIQUIATRICO: 'PSIQUIATRICO',
  OTRO: 'OTRO'
};

export type TypeServicio = (typeof TypeServicio)[keyof typeof TypeServicio]


export const Typecomplicacion: {
  RESPIRATORIA: 'RESPIRATORIA',
  CARDIOVASCULAR: 'CARDIOVASCULAR',
  TRAUMATISMO: 'TRAUMATISMO',
  NEUROLOGICO: 'NEUROLOGICO',
  TRAUMATICO: 'TRAUMATICO',
  INFECCIOSO: 'INFECCIOSO',
  OTRO: 'OTRO',
  NO_APLICA: 'NO_APLICA'
};

export type Typecomplicacion = (typeof Typecomplicacion)[keyof typeof Typecomplicacion]


export const TypeContext: {
  ESCOLAR: 'ESCOLAR',
  LABORAL: 'LABORAL',
  DEPORTIVO: 'DEPORTIVO',
  PUBLICO: 'PUBLICO',
  OTRO: 'OTRO'
};

export type TypeContext = (typeof TypeContext)[keyof typeof TypeContext]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type TypeServicio = $Enums.TypeServicio

export const TypeServicio: typeof $Enums.TypeServicio

export type Typecomplicacion = $Enums.Typecomplicacion

export const Typecomplicacion: typeof $Enums.Typecomplicacion

export type TypeContext = $Enums.TypeContext

export const TypeContext: typeof $Enums.TypeContext

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Servicios
 * const servicios = await prisma.servicio.findMany()
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
   * // Fetch zero or more Servicios
   * const servicios = await prisma.servicio.findMany()
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
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complicacion`: Exposes CRUD operations for the **Complicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complicacions
    * const complicacions = await prisma.complicacion.findMany()
    * ```
    */
  get complicacion(): Prisma.ComplicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.descripcion`: Exposes CRUD operations for the **Descripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Descripcions
    * const descripcions = await prisma.descripcion.findMany()
    * ```
    */
  get descripcion(): Prisma.DescripcionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Servicio: 'Servicio',
    Complicacion: 'Complicacion',
    Descripcion: 'Descripcion'
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
      modelProps: "servicio" | "complicacion" | "descripcion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      Complicacion: {
        payload: Prisma.$ComplicacionPayload<ExtArgs>
        fields: Prisma.ComplicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          findFirst: {
            args: Prisma.ComplicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          findMany: {
            args: Prisma.ComplicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>[]
          }
          create: {
            args: Prisma.ComplicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          createMany: {
            args: Prisma.ComplicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>[]
          }
          delete: {
            args: Prisma.ComplicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          update: {
            args: Prisma.ComplicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          deleteMany: {
            args: Prisma.ComplicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>[]
          }
          upsert: {
            args: Prisma.ComplicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          aggregate: {
            args: Prisma.ComplicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplicacion>
          }
          groupBy: {
            args: Prisma.ComplicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplicacionCountArgs<ExtArgs>
            result: $Utils.Optional<ComplicacionCountAggregateOutputType> | number
          }
        }
      }
      Descripcion: {
        payload: Prisma.$DescripcionPayload<ExtArgs>
        fields: Prisma.DescripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DescripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DescripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          findFirst: {
            args: Prisma.DescripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DescripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          findMany: {
            args: Prisma.DescripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>[]
          }
          create: {
            args: Prisma.DescripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          createMany: {
            args: Prisma.DescripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DescripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>[]
          }
          delete: {
            args: Prisma.DescripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          update: {
            args: Prisma.DescripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          deleteMany: {
            args: Prisma.DescripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DescripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DescripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>[]
          }
          upsert: {
            args: Prisma.DescripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          aggregate: {
            args: Prisma.DescripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDescripcion>
          }
          groupBy: {
            args: Prisma.DescripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DescripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DescripcionCountArgs<ExtArgs>
            result: $Utils.Optional<DescripcionCountAggregateOutputType> | number
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
    servicio?: ServicioOmit
    complicacion?: ComplicacionOmit
    descripcion?: DescripcionOmit
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
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    complicaciones: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complicaciones?: boolean | ServicioCountOutputTypeCountComplicacionesArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountComplicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplicacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    id: number | null
    id_paciente: number | null
    id_turno: number | null
  }

  export type ServicioSumAggregateOutputType = {
    id: number | null
    id_paciente: number | null
    id_turno: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id: number | null
    date: Date | null
    status: $Enums.Status | null
    time_arrived: Date | null
    time_finish: Date | null
    code_start: string | null
    code_end: string | null
    place_accident: string | null
    nro_informe: string | null
    id_paciente: number | null
    id_turno: number | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    status: $Enums.Status | null
    time_arrived: Date | null
    time_finish: Date | null
    code_start: string | null
    code_end: string | null
    place_accident: string | null
    nro_informe: string | null
    id_paciente: number | null
    id_turno: number | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    date: number
    status: number
    time_arrived: number
    time_finish: number
    code_start: number
    code_end: number
    place_accident: number
    nro_informe: number
    id_paciente: number
    id_turno: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id?: true
    id_paciente?: true
    id_turno?: true
  }

  export type ServicioSumAggregateInputType = {
    id?: true
    id_paciente?: true
    id_turno?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    time_arrived?: true
    time_finish?: true
    code_start?: true
    code_end?: true
    place_accident?: true
    nro_informe?: true
    id_paciente?: true
    id_turno?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    time_arrived?: true
    time_finish?: true
    code_start?: true
    code_end?: true
    place_accident?: true
    nro_informe?: true
    id_paciente?: true
    id_turno?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    time_arrived?: true
    time_finish?: true
    code_start?: true
    code_end?: true
    place_accident?: true
    nro_informe?: true
    id_paciente?: true
    id_turno?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: number
    date: Date
    status: $Enums.Status
    time_arrived: Date
    time_finish: Date
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_paciente?: boolean
    id_turno?: boolean
    complicaciones?: boolean | Servicio$complicacionesArgs<ExtArgs>
    descripcion?: boolean | Servicio$descripcionArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_paciente?: boolean
    id_turno?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_paciente?: boolean
    id_turno?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_paciente?: boolean
    id_turno?: boolean
  }

  export type ServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "time_arrived" | "time_finish" | "code_start" | "code_end" | "place_accident" | "nro_informe" | "id_paciente" | "id_turno", ExtArgs["result"]["servicio"]>
  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complicaciones?: boolean | Servicio$complicacionesArgs<ExtArgs>
    descripcion?: boolean | Servicio$descripcionArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      complicaciones: Prisma.$ComplicacionPayload<ExtArgs>[]
      descripcion: Prisma.$DescripcionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      status: $Enums.Status
      time_arrived: Date
      time_finish: Date
      code_start: string
      code_end: string
      place_accident: string
      nro_informe: string
      id_paciente: number
      id_turno: number
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicios and returns the data saved in the database.
     * @param {ServicioCreateManyAndReturnArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios and returns the data updated in the database.
     * @param {ServicioUpdateManyAndReturnArgs} args - Arguments to update many Servicios.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
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
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complicaciones<T extends Servicio$complicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$complicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    descripcion<T extends Servicio$descripcionArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$descripcionArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Servicio model
   */
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'Int'>
    readonly date: FieldRef<"Servicio", 'DateTime'>
    readonly status: FieldRef<"Servicio", 'Status'>
    readonly time_arrived: FieldRef<"Servicio", 'DateTime'>
    readonly time_finish: FieldRef<"Servicio", 'DateTime'>
    readonly code_start: FieldRef<"Servicio", 'String'>
    readonly code_end: FieldRef<"Servicio", 'String'>
    readonly place_accident: FieldRef<"Servicio", 'String'>
    readonly nro_informe: FieldRef<"Servicio", 'String'>
    readonly id_paciente: FieldRef<"Servicio", 'Int'>
    readonly id_turno: FieldRef<"Servicio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio createManyAndReturn
   */
  export type ServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio updateManyAndReturn
   */
  export type ServicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to delete.
     */
    limit?: number
  }

  /**
   * Servicio.complicaciones
   */
  export type Servicio$complicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    where?: ComplicacionWhereInput
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    cursor?: ComplicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Servicio.descripcion
   */
  export type Servicio$descripcionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    where?: DescripcionWhereInput
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model Complicacion
   */

  export type AggregateComplicacion = {
    _count: ComplicacionCountAggregateOutputType | null
    _avg: ComplicacionAvgAggregateOutputType | null
    _sum: ComplicacionSumAggregateOutputType | null
    _min: ComplicacionMinAggregateOutputType | null
    _max: ComplicacionMaxAggregateOutputType | null
  }

  export type ComplicacionAvgAggregateOutputType = {
    id: number | null
    id_servicio: number | null
  }

  export type ComplicacionSumAggregateOutputType = {
    id: number | null
    id_servicio: number | null
  }

  export type ComplicacionMinAggregateOutputType = {
    id: number | null
    type: $Enums.Typecomplicacion | null
    description: string | null
    id_servicio: number | null
  }

  export type ComplicacionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.Typecomplicacion | null
    description: string | null
    id_servicio: number | null
  }

  export type ComplicacionCountAggregateOutputType = {
    id: number
    type: number
    description: number
    id_servicio: number
    _all: number
  }


  export type ComplicacionAvgAggregateInputType = {
    id?: true
    id_servicio?: true
  }

  export type ComplicacionSumAggregateInputType = {
    id?: true
    id_servicio?: true
  }

  export type ComplicacionMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
    id_servicio?: true
  }

  export type ComplicacionMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
    id_servicio?: true
  }

  export type ComplicacionCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    id_servicio?: true
    _all?: true
  }

  export type ComplicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complicacion to aggregate.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Complicacions
    **/
    _count?: true | ComplicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplicacionMaxAggregateInputType
  }

  export type GetComplicacionAggregateType<T extends ComplicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateComplicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplicacion[P]>
      : GetScalarType<T[P], AggregateComplicacion[P]>
  }




  export type ComplicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplicacionWhereInput
    orderBy?: ComplicacionOrderByWithAggregationInput | ComplicacionOrderByWithAggregationInput[]
    by: ComplicacionScalarFieldEnum[] | ComplicacionScalarFieldEnum
    having?: ComplicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplicacionCountAggregateInputType | true
    _avg?: ComplicacionAvgAggregateInputType
    _sum?: ComplicacionSumAggregateInputType
    _min?: ComplicacionMinAggregateInputType
    _max?: ComplicacionMaxAggregateInputType
  }

  export type ComplicacionGroupByOutputType = {
    id: number
    type: $Enums.Typecomplicacion
    description: string
    id_servicio: number
    _count: ComplicacionCountAggregateOutputType | null
    _avg: ComplicacionAvgAggregateOutputType | null
    _sum: ComplicacionSumAggregateOutputType | null
    _min: ComplicacionMinAggregateOutputType | null
    _max: ComplicacionMaxAggregateOutputType | null
  }

  type GetComplicacionGroupByPayload<T extends ComplicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplicacionGroupByOutputType[P]>
            : GetScalarType<T[P], ComplicacionGroupByOutputType[P]>
        }
      >
    >


  export type ComplicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complicacion"]>

  export type ComplicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complicacion"]>

  export type ComplicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complicacion"]>

  export type ComplicacionSelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
  }

  export type ComplicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description" | "id_servicio", ExtArgs["result"]["complicacion"]>
  export type ComplicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ComplicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ComplicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }

  export type $ComplicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Complicacion"
    objects: {
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.Typecomplicacion
      description: string
      id_servicio: number
    }, ExtArgs["result"]["complicacion"]>
    composites: {}
  }

  type ComplicacionGetPayload<S extends boolean | null | undefined | ComplicacionDefaultArgs> = $Result.GetResult<Prisma.$ComplicacionPayload, S>

  type ComplicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplicacionCountAggregateInputType | true
    }

  export interface ComplicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Complicacion'], meta: { name: 'Complicacion' } }
    /**
     * Find zero or one Complicacion that matches the filter.
     * @param {ComplicacionFindUniqueArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplicacionFindUniqueArgs>(args: SelectSubset<T, ComplicacionFindUniqueArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplicacionFindUniqueOrThrowArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionFindFirstArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplicacionFindFirstArgs>(args?: SelectSubset<T, ComplicacionFindFirstArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionFindFirstOrThrowArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complicacions
     * const complicacions = await prisma.complicacion.findMany()
     * 
     * // Get first 10 Complicacions
     * const complicacions = await prisma.complicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complicacionWithIdOnly = await prisma.complicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplicacionFindManyArgs>(args?: SelectSubset<T, ComplicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complicacion.
     * @param {ComplicacionCreateArgs} args - Arguments to create a Complicacion.
     * @example
     * // Create one Complicacion
     * const Complicacion = await prisma.complicacion.create({
     *   data: {
     *     // ... data to create a Complicacion
     *   }
     * })
     * 
     */
    create<T extends ComplicacionCreateArgs>(args: SelectSubset<T, ComplicacionCreateArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complicacions.
     * @param {ComplicacionCreateManyArgs} args - Arguments to create many Complicacions.
     * @example
     * // Create many Complicacions
     * const complicacion = await prisma.complicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplicacionCreateManyArgs>(args?: SelectSubset<T, ComplicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complicacions and returns the data saved in the database.
     * @param {ComplicacionCreateManyAndReturnArgs} args - Arguments to create many Complicacions.
     * @example
     * // Create many Complicacions
     * const complicacion = await prisma.complicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complicacions and only return the `id`
     * const complicacionWithIdOnly = await prisma.complicacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complicacion.
     * @param {ComplicacionDeleteArgs} args - Arguments to delete one Complicacion.
     * @example
     * // Delete one Complicacion
     * const Complicacion = await prisma.complicacion.delete({
     *   where: {
     *     // ... filter to delete one Complicacion
     *   }
     * })
     * 
     */
    delete<T extends ComplicacionDeleteArgs>(args: SelectSubset<T, ComplicacionDeleteArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complicacion.
     * @param {ComplicacionUpdateArgs} args - Arguments to update one Complicacion.
     * @example
     * // Update one Complicacion
     * const complicacion = await prisma.complicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplicacionUpdateArgs>(args: SelectSubset<T, ComplicacionUpdateArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complicacions.
     * @param {ComplicacionDeleteManyArgs} args - Arguments to filter Complicacions to delete.
     * @example
     * // Delete a few Complicacions
     * const { count } = await prisma.complicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplicacionDeleteManyArgs>(args?: SelectSubset<T, ComplicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complicacions
     * const complicacion = await prisma.complicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplicacionUpdateManyArgs>(args: SelectSubset<T, ComplicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complicacions and returns the data updated in the database.
     * @param {ComplicacionUpdateManyAndReturnArgs} args - Arguments to update many Complicacions.
     * @example
     * // Update many Complicacions
     * const complicacion = await prisma.complicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complicacions and only return the `id`
     * const complicacionWithIdOnly = await prisma.complicacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComplicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complicacion.
     * @param {ComplicacionUpsertArgs} args - Arguments to update or create a Complicacion.
     * @example
     * // Update or create a Complicacion
     * const complicacion = await prisma.complicacion.upsert({
     *   create: {
     *     // ... data to create a Complicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complicacion we want to update
     *   }
     * })
     */
    upsert<T extends ComplicacionUpsertArgs>(args: SelectSubset<T, ComplicacionUpsertArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionCountArgs} args - Arguments to filter Complicacions to count.
     * @example
     * // Count the number of Complicacions
     * const count = await prisma.complicacion.count({
     *   where: {
     *     // ... the filter for the Complicacions we want to count
     *   }
     * })
    **/
    count<T extends ComplicacionCountArgs>(
      args?: Subset<T, ComplicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplicacionAggregateArgs>(args: Subset<T, ComplicacionAggregateArgs>): Prisma.PrismaPromise<GetComplicacionAggregateType<T>>

    /**
     * Group by Complicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionGroupByArgs} args - Group by arguments.
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
      T extends ComplicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplicacionGroupByArgs['orderBy'] }
        : { orderBy?: ComplicacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Complicacion model
   */
  readonly fields: ComplicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Complicacion model
   */
  interface ComplicacionFieldRefs {
    readonly id: FieldRef<"Complicacion", 'Int'>
    readonly type: FieldRef<"Complicacion", 'Typecomplicacion'>
    readonly description: FieldRef<"Complicacion", 'String'>
    readonly id_servicio: FieldRef<"Complicacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Complicacion findUnique
   */
  export type ComplicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion findUniqueOrThrow
   */
  export type ComplicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion findFirst
   */
  export type ComplicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complicacions.
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complicacions.
     */
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Complicacion findFirstOrThrow
   */
  export type ComplicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complicacions.
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complicacions.
     */
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Complicacion findMany
   */
  export type ComplicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacions to fetch.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Complicacions.
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Complicacion create
   */
  export type ComplicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Complicacion.
     */
    data: XOR<ComplicacionCreateInput, ComplicacionUncheckedCreateInput>
  }

  /**
   * Complicacion createMany
   */
  export type ComplicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Complicacions.
     */
    data: ComplicacionCreateManyInput | ComplicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complicacion createManyAndReturn
   */
  export type ComplicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * The data used to create many Complicacions.
     */
    data: ComplicacionCreateManyInput | ComplicacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complicacion update
   */
  export type ComplicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Complicacion.
     */
    data: XOR<ComplicacionUpdateInput, ComplicacionUncheckedUpdateInput>
    /**
     * Choose, which Complicacion to update.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion updateMany
   */
  export type ComplicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Complicacions.
     */
    data: XOR<ComplicacionUpdateManyMutationInput, ComplicacionUncheckedUpdateManyInput>
    /**
     * Filter which Complicacions to update
     */
    where?: ComplicacionWhereInput
    /**
     * Limit how many Complicacions to update.
     */
    limit?: number
  }

  /**
   * Complicacion updateManyAndReturn
   */
  export type ComplicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * The data used to update Complicacions.
     */
    data: XOR<ComplicacionUpdateManyMutationInput, ComplicacionUncheckedUpdateManyInput>
    /**
     * Filter which Complicacions to update
     */
    where?: ComplicacionWhereInput
    /**
     * Limit how many Complicacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complicacion upsert
   */
  export type ComplicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Complicacion to update in case it exists.
     */
    where: ComplicacionWhereUniqueInput
    /**
     * In case the Complicacion found by the `where` argument doesn't exist, create a new Complicacion with this data.
     */
    create: XOR<ComplicacionCreateInput, ComplicacionUncheckedCreateInput>
    /**
     * In case the Complicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplicacionUpdateInput, ComplicacionUncheckedUpdateInput>
  }

  /**
   * Complicacion delete
   */
  export type ComplicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter which Complicacion to delete.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion deleteMany
   */
  export type ComplicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complicacions to delete
     */
    where?: ComplicacionWhereInput
    /**
     * Limit how many Complicacions to delete.
     */
    limit?: number
  }

  /**
   * Complicacion without action
   */
  export type ComplicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
  }


  /**
   * Model Descripcion
   */

  export type AggregateDescripcion = {
    _count: DescripcionCountAggregateOutputType | null
    _avg: DescripcionAvgAggregateOutputType | null
    _sum: DescripcionSumAggregateOutputType | null
    _min: DescripcionMinAggregateOutputType | null
    _max: DescripcionMaxAggregateOutputType | null
  }

  export type DescripcionAvgAggregateOutputType = {
    id: number | null
    id_servicio: number | null
  }

  export type DescripcionSumAggregateOutputType = {
    id: number | null
    id_servicio: number | null
  }

  export type DescripcionMinAggregateOutputType = {
    id: number | null
    hallazgos: string | null
    motivo_atencion: string | null
    antecedentes: string | null
    examen_fisico: string | null
    id_servicio: number | null
  }

  export type DescripcionMaxAggregateOutputType = {
    id: number | null
    hallazgos: string | null
    motivo_atencion: string | null
    antecedentes: string | null
    examen_fisico: string | null
    id_servicio: number | null
  }

  export type DescripcionCountAggregateOutputType = {
    id: number
    hallazgos: number
    motivo_atencion: number
    antecedentes: number
    examen_fisico: number
    id_servicio: number
    _all: number
  }


  export type DescripcionAvgAggregateInputType = {
    id?: true
    id_servicio?: true
  }

  export type DescripcionSumAggregateInputType = {
    id?: true
    id_servicio?: true
  }

  export type DescripcionMinAggregateInputType = {
    id?: true
    hallazgos?: true
    motivo_atencion?: true
    antecedentes?: true
    examen_fisico?: true
    id_servicio?: true
  }

  export type DescripcionMaxAggregateInputType = {
    id?: true
    hallazgos?: true
    motivo_atencion?: true
    antecedentes?: true
    examen_fisico?: true
    id_servicio?: true
  }

  export type DescripcionCountAggregateInputType = {
    id?: true
    hallazgos?: true
    motivo_atencion?: true
    antecedentes?: true
    examen_fisico?: true
    id_servicio?: true
    _all?: true
  }

  export type DescripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Descripcion to aggregate.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Descripcions
    **/
    _count?: true | DescripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DescripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DescripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DescripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DescripcionMaxAggregateInputType
  }

  export type GetDescripcionAggregateType<T extends DescripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateDescripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDescripcion[P]>
      : GetScalarType<T[P], AggregateDescripcion[P]>
  }




  export type DescripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DescripcionWhereInput
    orderBy?: DescripcionOrderByWithAggregationInput | DescripcionOrderByWithAggregationInput[]
    by: DescripcionScalarFieldEnum[] | DescripcionScalarFieldEnum
    having?: DescripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DescripcionCountAggregateInputType | true
    _avg?: DescripcionAvgAggregateInputType
    _sum?: DescripcionSumAggregateInputType
    _min?: DescripcionMinAggregateInputType
    _max?: DescripcionMaxAggregateInputType
  }

  export type DescripcionGroupByOutputType = {
    id: number
    hallazgos: string
    motivo_atencion: string
    antecedentes: string
    examen_fisico: string
    id_servicio: number
    _count: DescripcionCountAggregateOutputType | null
    _avg: DescripcionAvgAggregateOutputType | null
    _sum: DescripcionSumAggregateOutputType | null
    _min: DescripcionMinAggregateOutputType | null
    _max: DescripcionMaxAggregateOutputType | null
  }

  type GetDescripcionGroupByPayload<T extends DescripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DescripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DescripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DescripcionGroupByOutputType[P]>
            : GetScalarType<T[P], DescripcionGroupByOutputType[P]>
        }
      >
    >


  export type DescripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hallazgos?: boolean
    motivo_atencion?: boolean
    antecedentes?: boolean
    examen_fisico?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["descripcion"]>

  export type DescripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hallazgos?: boolean
    motivo_atencion?: boolean
    antecedentes?: boolean
    examen_fisico?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["descripcion"]>

  export type DescripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hallazgos?: boolean
    motivo_atencion?: boolean
    antecedentes?: boolean
    examen_fisico?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["descripcion"]>

  export type DescripcionSelectScalar = {
    id?: boolean
    hallazgos?: boolean
    motivo_atencion?: boolean
    antecedentes?: boolean
    examen_fisico?: boolean
    id_servicio?: boolean
  }

  export type DescripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hallazgos" | "motivo_atencion" | "antecedentes" | "examen_fisico" | "id_servicio", ExtArgs["result"]["descripcion"]>
  export type DescripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type DescripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type DescripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }

  export type $DescripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Descripcion"
    objects: {
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hallazgos: string
      motivo_atencion: string
      antecedentes: string
      examen_fisico: string
      id_servicio: number
    }, ExtArgs["result"]["descripcion"]>
    composites: {}
  }

  type DescripcionGetPayload<S extends boolean | null | undefined | DescripcionDefaultArgs> = $Result.GetResult<Prisma.$DescripcionPayload, S>

  type DescripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DescripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DescripcionCountAggregateInputType | true
    }

  export interface DescripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Descripcion'], meta: { name: 'Descripcion' } }
    /**
     * Find zero or one Descripcion that matches the filter.
     * @param {DescripcionFindUniqueArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DescripcionFindUniqueArgs>(args: SelectSubset<T, DescripcionFindUniqueArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Descripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DescripcionFindUniqueOrThrowArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DescripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, DescripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Descripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionFindFirstArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DescripcionFindFirstArgs>(args?: SelectSubset<T, DescripcionFindFirstArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Descripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionFindFirstOrThrowArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DescripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, DescripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Descripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Descripcions
     * const descripcions = await prisma.descripcion.findMany()
     * 
     * // Get first 10 Descripcions
     * const descripcions = await prisma.descripcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const descripcionWithIdOnly = await prisma.descripcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DescripcionFindManyArgs>(args?: SelectSubset<T, DescripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Descripcion.
     * @param {DescripcionCreateArgs} args - Arguments to create a Descripcion.
     * @example
     * // Create one Descripcion
     * const Descripcion = await prisma.descripcion.create({
     *   data: {
     *     // ... data to create a Descripcion
     *   }
     * })
     * 
     */
    create<T extends DescripcionCreateArgs>(args: SelectSubset<T, DescripcionCreateArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Descripcions.
     * @param {DescripcionCreateManyArgs} args - Arguments to create many Descripcions.
     * @example
     * // Create many Descripcions
     * const descripcion = await prisma.descripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DescripcionCreateManyArgs>(args?: SelectSubset<T, DescripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Descripcions and returns the data saved in the database.
     * @param {DescripcionCreateManyAndReturnArgs} args - Arguments to create many Descripcions.
     * @example
     * // Create many Descripcions
     * const descripcion = await prisma.descripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Descripcions and only return the `id`
     * const descripcionWithIdOnly = await prisma.descripcion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DescripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, DescripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Descripcion.
     * @param {DescripcionDeleteArgs} args - Arguments to delete one Descripcion.
     * @example
     * // Delete one Descripcion
     * const Descripcion = await prisma.descripcion.delete({
     *   where: {
     *     // ... filter to delete one Descripcion
     *   }
     * })
     * 
     */
    delete<T extends DescripcionDeleteArgs>(args: SelectSubset<T, DescripcionDeleteArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Descripcion.
     * @param {DescripcionUpdateArgs} args - Arguments to update one Descripcion.
     * @example
     * // Update one Descripcion
     * const descripcion = await prisma.descripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DescripcionUpdateArgs>(args: SelectSubset<T, DescripcionUpdateArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Descripcions.
     * @param {DescripcionDeleteManyArgs} args - Arguments to filter Descripcions to delete.
     * @example
     * // Delete a few Descripcions
     * const { count } = await prisma.descripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DescripcionDeleteManyArgs>(args?: SelectSubset<T, DescripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Descripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Descripcions
     * const descripcion = await prisma.descripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DescripcionUpdateManyArgs>(args: SelectSubset<T, DescripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Descripcions and returns the data updated in the database.
     * @param {DescripcionUpdateManyAndReturnArgs} args - Arguments to update many Descripcions.
     * @example
     * // Update many Descripcions
     * const descripcion = await prisma.descripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Descripcions and only return the `id`
     * const descripcionWithIdOnly = await prisma.descripcion.updateManyAndReturn({
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
    updateManyAndReturn<T extends DescripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, DescripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Descripcion.
     * @param {DescripcionUpsertArgs} args - Arguments to update or create a Descripcion.
     * @example
     * // Update or create a Descripcion
     * const descripcion = await prisma.descripcion.upsert({
     *   create: {
     *     // ... data to create a Descripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Descripcion we want to update
     *   }
     * })
     */
    upsert<T extends DescripcionUpsertArgs>(args: SelectSubset<T, DescripcionUpsertArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Descripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionCountArgs} args - Arguments to filter Descripcions to count.
     * @example
     * // Count the number of Descripcions
     * const count = await prisma.descripcion.count({
     *   where: {
     *     // ... the filter for the Descripcions we want to count
     *   }
     * })
    **/
    count<T extends DescripcionCountArgs>(
      args?: Subset<T, DescripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DescripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Descripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DescripcionAggregateArgs>(args: Subset<T, DescripcionAggregateArgs>): Prisma.PrismaPromise<GetDescripcionAggregateType<T>>

    /**
     * Group by Descripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionGroupByArgs} args - Group by arguments.
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
      T extends DescripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DescripcionGroupByArgs['orderBy'] }
        : { orderBy?: DescripcionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DescripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDescripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Descripcion model
   */
  readonly fields: DescripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Descripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DescripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Descripcion model
   */
  interface DescripcionFieldRefs {
    readonly id: FieldRef<"Descripcion", 'Int'>
    readonly hallazgos: FieldRef<"Descripcion", 'String'>
    readonly motivo_atencion: FieldRef<"Descripcion", 'String'>
    readonly antecedentes: FieldRef<"Descripcion", 'String'>
    readonly examen_fisico: FieldRef<"Descripcion", 'String'>
    readonly id_servicio: FieldRef<"Descripcion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Descripcion findUnique
   */
  export type DescripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion findUniqueOrThrow
   */
  export type DescripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion findFirst
   */
  export type DescripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Descripcions.
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Descripcions.
     */
    distinct?: DescripcionScalarFieldEnum | DescripcionScalarFieldEnum[]
  }

  /**
   * Descripcion findFirstOrThrow
   */
  export type DescripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Descripcions.
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Descripcions.
     */
    distinct?: DescripcionScalarFieldEnum | DescripcionScalarFieldEnum[]
  }

  /**
   * Descripcion findMany
   */
  export type DescripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcions to fetch.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Descripcions.
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    distinct?: DescripcionScalarFieldEnum | DescripcionScalarFieldEnum[]
  }

  /**
   * Descripcion create
   */
  export type DescripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Descripcion.
     */
    data: XOR<DescripcionCreateInput, DescripcionUncheckedCreateInput>
  }

  /**
   * Descripcion createMany
   */
  export type DescripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Descripcions.
     */
    data: DescripcionCreateManyInput | DescripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Descripcion createManyAndReturn
   */
  export type DescripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * The data used to create many Descripcions.
     */
    data: DescripcionCreateManyInput | DescripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Descripcion update
   */
  export type DescripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Descripcion.
     */
    data: XOR<DescripcionUpdateInput, DescripcionUncheckedUpdateInput>
    /**
     * Choose, which Descripcion to update.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion updateMany
   */
  export type DescripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Descripcions.
     */
    data: XOR<DescripcionUpdateManyMutationInput, DescripcionUncheckedUpdateManyInput>
    /**
     * Filter which Descripcions to update
     */
    where?: DescripcionWhereInput
    /**
     * Limit how many Descripcions to update.
     */
    limit?: number
  }

  /**
   * Descripcion updateManyAndReturn
   */
  export type DescripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * The data used to update Descripcions.
     */
    data: XOR<DescripcionUpdateManyMutationInput, DescripcionUncheckedUpdateManyInput>
    /**
     * Filter which Descripcions to update
     */
    where?: DescripcionWhereInput
    /**
     * Limit how many Descripcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Descripcion upsert
   */
  export type DescripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Descripcion to update in case it exists.
     */
    where: DescripcionWhereUniqueInput
    /**
     * In case the Descripcion found by the `where` argument doesn't exist, create a new Descripcion with this data.
     */
    create: XOR<DescripcionCreateInput, DescripcionUncheckedCreateInput>
    /**
     * In case the Descripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DescripcionUpdateInput, DescripcionUncheckedUpdateInput>
  }

  /**
   * Descripcion delete
   */
  export type DescripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter which Descripcion to delete.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion deleteMany
   */
  export type DescripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Descripcions to delete
     */
    where?: DescripcionWhereInput
    /**
     * Limit how many Descripcions to delete.
     */
    limit?: number
  }

  /**
   * Descripcion without action
   */
  export type DescripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
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


  export const ServicioScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    time_arrived: 'time_arrived',
    time_finish: 'time_finish',
    code_start: 'code_start',
    code_end: 'code_end',
    place_accident: 'place_accident',
    nro_informe: 'nro_informe',
    id_paciente: 'id_paciente',
    id_turno: 'id_turno'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const ComplicacionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description',
    id_servicio: 'id_servicio'
  };

  export type ComplicacionScalarFieldEnum = (typeof ComplicacionScalarFieldEnum)[keyof typeof ComplicacionScalarFieldEnum]


  export const DescripcionScalarFieldEnum: {
    id: 'id',
    hallazgos: 'hallazgos',
    motivo_atencion: 'motivo_atencion',
    antecedentes: 'antecedentes',
    examen_fisico: 'examen_fisico',
    id_servicio: 'id_servicio'
  };

  export type DescripcionScalarFieldEnum = (typeof DescripcionScalarFieldEnum)[keyof typeof DescripcionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Typecomplicacion'
   */
  export type EnumTypecomplicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Typecomplicacion'>
    


  /**
   * Reference to a field of type 'Typecomplicacion[]'
   */
  export type ListEnumTypecomplicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Typecomplicacion[]'>
    


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


  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: IntFilter<"Servicio"> | number
    date?: DateTimeFilter<"Servicio"> | Date | string
    status?: EnumStatusFilter<"Servicio"> | $Enums.Status
    time_arrived?: DateTimeFilter<"Servicio"> | Date | string
    time_finish?: DateTimeFilter<"Servicio"> | Date | string
    code_start?: StringFilter<"Servicio"> | string
    code_end?: StringFilter<"Servicio"> | string
    place_accident?: StringFilter<"Servicio"> | string
    nro_informe?: StringFilter<"Servicio"> | string
    id_paciente?: IntFilter<"Servicio"> | number
    id_turno?: IntFilter<"Servicio"> | number
    complicaciones?: ComplicacionListRelationFilter
    descripcion?: XOR<DescripcionNullableScalarRelationFilter, DescripcionWhereInput> | null
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_paciente?: SortOrder
    id_turno?: SortOrder
    complicaciones?: ComplicacionOrderByRelationAggregateInput
    descripcion?: DescripcionOrderByWithRelationInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    date?: DateTimeFilter<"Servicio"> | Date | string
    status?: EnumStatusFilter<"Servicio"> | $Enums.Status
    time_arrived?: DateTimeFilter<"Servicio"> | Date | string
    time_finish?: DateTimeFilter<"Servicio"> | Date | string
    code_start?: StringFilter<"Servicio"> | string
    code_end?: StringFilter<"Servicio"> | string
    place_accident?: StringFilter<"Servicio"> | string
    nro_informe?: StringFilter<"Servicio"> | string
    id_paciente?: IntFilter<"Servicio"> | number
    id_turno?: IntFilter<"Servicio"> | number
    complicaciones?: ComplicacionListRelationFilter
    descripcion?: XOR<DescripcionNullableScalarRelationFilter, DescripcionWhereInput> | null
  }, "id">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_paciente?: SortOrder
    id_turno?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _avg?: ServicioAvgOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
    _sum?: ServicioSumOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servicio"> | number
    date?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Servicio"> | $Enums.Status
    time_arrived?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    time_finish?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    code_start?: StringWithAggregatesFilter<"Servicio"> | string
    code_end?: StringWithAggregatesFilter<"Servicio"> | string
    place_accident?: StringWithAggregatesFilter<"Servicio"> | string
    nro_informe?: StringWithAggregatesFilter<"Servicio"> | string
    id_paciente?: IntWithAggregatesFilter<"Servicio"> | number
    id_turno?: IntWithAggregatesFilter<"Servicio"> | number
  }

  export type ComplicacionWhereInput = {
    AND?: ComplicacionWhereInput | ComplicacionWhereInput[]
    OR?: ComplicacionWhereInput[]
    NOT?: ComplicacionWhereInput | ComplicacionWhereInput[]
    id?: IntFilter<"Complicacion"> | number
    type?: EnumTypecomplicacionFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringFilter<"Complicacion"> | string
    id_servicio?: IntFilter<"Complicacion"> | number
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }

  export type ComplicacionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
    servicio?: ServicioOrderByWithRelationInput
  }

  export type ComplicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComplicacionWhereInput | ComplicacionWhereInput[]
    OR?: ComplicacionWhereInput[]
    NOT?: ComplicacionWhereInput | ComplicacionWhereInput[]
    type?: EnumTypecomplicacionFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringFilter<"Complicacion"> | string
    id_servicio?: IntFilter<"Complicacion"> | number
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }, "id">

  export type ComplicacionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
    _count?: ComplicacionCountOrderByAggregateInput
    _avg?: ComplicacionAvgOrderByAggregateInput
    _max?: ComplicacionMaxOrderByAggregateInput
    _min?: ComplicacionMinOrderByAggregateInput
    _sum?: ComplicacionSumOrderByAggregateInput
  }

  export type ComplicacionScalarWhereWithAggregatesInput = {
    AND?: ComplicacionScalarWhereWithAggregatesInput | ComplicacionScalarWhereWithAggregatesInput[]
    OR?: ComplicacionScalarWhereWithAggregatesInput[]
    NOT?: ComplicacionScalarWhereWithAggregatesInput | ComplicacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Complicacion"> | number
    type?: EnumTypecomplicacionWithAggregatesFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringWithAggregatesFilter<"Complicacion"> | string
    id_servicio?: IntWithAggregatesFilter<"Complicacion"> | number
  }

  export type DescripcionWhereInput = {
    AND?: DescripcionWhereInput | DescripcionWhereInput[]
    OR?: DescripcionWhereInput[]
    NOT?: DescripcionWhereInput | DescripcionWhereInput[]
    id?: IntFilter<"Descripcion"> | number
    hallazgos?: StringFilter<"Descripcion"> | string
    motivo_atencion?: StringFilter<"Descripcion"> | string
    antecedentes?: StringFilter<"Descripcion"> | string
    examen_fisico?: StringFilter<"Descripcion"> | string
    id_servicio?: IntFilter<"Descripcion"> | number
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }

  export type DescripcionOrderByWithRelationInput = {
    id?: SortOrder
    hallazgos?: SortOrder
    motivo_atencion?: SortOrder
    antecedentes?: SortOrder
    examen_fisico?: SortOrder
    id_servicio?: SortOrder
    servicio?: ServicioOrderByWithRelationInput
  }

  export type DescripcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_servicio?: number
    AND?: DescripcionWhereInput | DescripcionWhereInput[]
    OR?: DescripcionWhereInput[]
    NOT?: DescripcionWhereInput | DescripcionWhereInput[]
    hallazgos?: StringFilter<"Descripcion"> | string
    motivo_atencion?: StringFilter<"Descripcion"> | string
    antecedentes?: StringFilter<"Descripcion"> | string
    examen_fisico?: StringFilter<"Descripcion"> | string
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }, "id" | "id_servicio">

  export type DescripcionOrderByWithAggregationInput = {
    id?: SortOrder
    hallazgos?: SortOrder
    motivo_atencion?: SortOrder
    antecedentes?: SortOrder
    examen_fisico?: SortOrder
    id_servicio?: SortOrder
    _count?: DescripcionCountOrderByAggregateInput
    _avg?: DescripcionAvgOrderByAggregateInput
    _max?: DescripcionMaxOrderByAggregateInput
    _min?: DescripcionMinOrderByAggregateInput
    _sum?: DescripcionSumOrderByAggregateInput
  }

  export type DescripcionScalarWhereWithAggregatesInput = {
    AND?: DescripcionScalarWhereWithAggregatesInput | DescripcionScalarWhereWithAggregatesInput[]
    OR?: DescripcionScalarWhereWithAggregatesInput[]
    NOT?: DescripcionScalarWhereWithAggregatesInput | DescripcionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Descripcion"> | number
    hallazgos?: StringWithAggregatesFilter<"Descripcion"> | string
    motivo_atencion?: StringWithAggregatesFilter<"Descripcion"> | string
    antecedentes?: StringWithAggregatesFilter<"Descripcion"> | string
    examen_fisico?: StringWithAggregatesFilter<"Descripcion"> | string
    id_servicio?: IntWithAggregatesFilter<"Descripcion"> | number
  }

  export type ServicioCreateInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
    complicaciones?: ComplicacionCreateNestedManyWithoutServicioInput
    descripcion?: DescripcionCreateNestedOneWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
    complicaciones?: ComplicacionUncheckedCreateNestedManyWithoutServicioInput
    descripcion?: DescripcionUncheckedCreateNestedOneWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
    complicaciones?: ComplicacionUpdateManyWithoutServicioNestedInput
    descripcion?: DescripcionUpdateOneWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
    complicaciones?: ComplicacionUncheckedUpdateManyWithoutServicioNestedInput
    descripcion?: DescripcionUncheckedUpdateOneWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
  }

  export type ServicioUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
  }

  export type ComplicacionCreateInput = {
    type: $Enums.Typecomplicacion
    description: string
    servicio: ServicioCreateNestedOneWithoutComplicacionesInput
  }

  export type ComplicacionUncheckedCreateInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
    id_servicio: number
  }

  export type ComplicacionUpdateInput = {
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
    servicio?: ServicioUpdateOneRequiredWithoutComplicacionesNestedInput
  }

  export type ComplicacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
    id_servicio?: IntFieldUpdateOperationsInput | number
  }

  export type ComplicacionCreateManyInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
    id_servicio: number
  }

  export type ComplicacionUpdateManyMutationInput = {
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ComplicacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
    id_servicio?: IntFieldUpdateOperationsInput | number
  }

  export type DescripcionCreateInput = {
    hallazgos: string
    motivo_atencion: string
    antecedentes: string
    examen_fisico: string
    servicio: ServicioCreateNestedOneWithoutDescripcionInput
  }

  export type DescripcionUncheckedCreateInput = {
    id?: number
    hallazgos: string
    motivo_atencion: string
    antecedentes: string
    examen_fisico: string
    id_servicio: number
  }

  export type DescripcionUpdateInput = {
    hallazgos?: StringFieldUpdateOperationsInput | string
    motivo_atencion?: StringFieldUpdateOperationsInput | string
    antecedentes?: StringFieldUpdateOperationsInput | string
    examen_fisico?: StringFieldUpdateOperationsInput | string
    servicio?: ServicioUpdateOneRequiredWithoutDescripcionNestedInput
  }

  export type DescripcionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hallazgos?: StringFieldUpdateOperationsInput | string
    motivo_atencion?: StringFieldUpdateOperationsInput | string
    antecedentes?: StringFieldUpdateOperationsInput | string
    examen_fisico?: StringFieldUpdateOperationsInput | string
    id_servicio?: IntFieldUpdateOperationsInput | number
  }

  export type DescripcionCreateManyInput = {
    id?: number
    hallazgos: string
    motivo_atencion: string
    antecedentes: string
    examen_fisico: string
    id_servicio: number
  }

  export type DescripcionUpdateManyMutationInput = {
    hallazgos?: StringFieldUpdateOperationsInput | string
    motivo_atencion?: StringFieldUpdateOperationsInput | string
    antecedentes?: StringFieldUpdateOperationsInput | string
    examen_fisico?: StringFieldUpdateOperationsInput | string
  }

  export type DescripcionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hallazgos?: StringFieldUpdateOperationsInput | string
    motivo_atencion?: StringFieldUpdateOperationsInput | string
    antecedentes?: StringFieldUpdateOperationsInput | string
    examen_fisico?: StringFieldUpdateOperationsInput | string
    id_servicio?: IntFieldUpdateOperationsInput | number
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type ComplicacionListRelationFilter = {
    every?: ComplicacionWhereInput
    some?: ComplicacionWhereInput
    none?: ComplicacionWhereInput
  }

  export type DescripcionNullableScalarRelationFilter = {
    is?: DescripcionWhereInput | null
    isNot?: DescripcionWhereInput | null
  }

  export type ComplicacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_paciente?: SortOrder
    id_turno?: SortOrder
  }

  export type ServicioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_paciente?: SortOrder
    id_turno?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_paciente?: SortOrder
    id_turno?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_paciente?: SortOrder
    id_turno?: SortOrder
  }

  export type ServicioSumOrderByAggregateInput = {
    id?: SortOrder
    id_paciente?: SortOrder
    id_turno?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type EnumTypecomplicacionFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionFilter<$PrismaModel> | $Enums.Typecomplicacion
  }

  export type ServicioScalarRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type ComplicacionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionSumOrderByAggregateInput = {
    id?: SortOrder
    id_servicio?: SortOrder
  }

  export type EnumTypecomplicacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionWithAggregatesFilter<$PrismaModel> | $Enums.Typecomplicacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypecomplicacionFilter<$PrismaModel>
    _max?: NestedEnumTypecomplicacionFilter<$PrismaModel>
  }

  export type DescripcionCountOrderByAggregateInput = {
    id?: SortOrder
    hallazgos?: SortOrder
    motivo_atencion?: SortOrder
    antecedentes?: SortOrder
    examen_fisico?: SortOrder
    id_servicio?: SortOrder
  }

  export type DescripcionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_servicio?: SortOrder
  }

  export type DescripcionMaxOrderByAggregateInput = {
    id?: SortOrder
    hallazgos?: SortOrder
    motivo_atencion?: SortOrder
    antecedentes?: SortOrder
    examen_fisico?: SortOrder
    id_servicio?: SortOrder
  }

  export type DescripcionMinOrderByAggregateInput = {
    id?: SortOrder
    hallazgos?: SortOrder
    motivo_atencion?: SortOrder
    antecedentes?: SortOrder
    examen_fisico?: SortOrder
    id_servicio?: SortOrder
  }

  export type DescripcionSumOrderByAggregateInput = {
    id?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionCreateNestedManyWithoutServicioInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
  }

  export type DescripcionCreateNestedOneWithoutServicioInput = {
    create?: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    connectOrCreate?: DescripcionCreateOrConnectWithoutServicioInput
    connect?: DescripcionWhereUniqueInput
  }

  export type ComplicacionUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
  }

  export type DescripcionUncheckedCreateNestedOneWithoutServicioInput = {
    create?: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    connectOrCreate?: DescripcionCreateOrConnectWithoutServicioInput
    connect?: DescripcionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComplicacionUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    upsert?: ComplicacionUpsertWithWhereUniqueWithoutServicioInput | ComplicacionUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    set?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    disconnect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    delete?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    update?: ComplicacionUpdateWithWhereUniqueWithoutServicioInput | ComplicacionUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ComplicacionUpdateManyWithWhereWithoutServicioInput | ComplicacionUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
  }

  export type DescripcionUpdateOneWithoutServicioNestedInput = {
    create?: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    connectOrCreate?: DescripcionCreateOrConnectWithoutServicioInput
    upsert?: DescripcionUpsertWithoutServicioInput
    disconnect?: DescripcionWhereInput | boolean
    delete?: DescripcionWhereInput | boolean
    connect?: DescripcionWhereUniqueInput
    update?: XOR<XOR<DescripcionUpdateToOneWithWhereWithoutServicioInput, DescripcionUpdateWithoutServicioInput>, DescripcionUncheckedUpdateWithoutServicioInput>
  }

  export type ComplicacionUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    upsert?: ComplicacionUpsertWithWhereUniqueWithoutServicioInput | ComplicacionUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    set?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    disconnect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    delete?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    update?: ComplicacionUpdateWithWhereUniqueWithoutServicioInput | ComplicacionUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ComplicacionUpdateManyWithWhereWithoutServicioInput | ComplicacionUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
  }

  export type DescripcionUncheckedUpdateOneWithoutServicioNestedInput = {
    create?: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    connectOrCreate?: DescripcionCreateOrConnectWithoutServicioInput
    upsert?: DescripcionUpsertWithoutServicioInput
    disconnect?: DescripcionWhereInput | boolean
    delete?: DescripcionWhereInput | boolean
    connect?: DescripcionWhereUniqueInput
    update?: XOR<XOR<DescripcionUpdateToOneWithWhereWithoutServicioInput, DescripcionUpdateWithoutServicioInput>, DescripcionUncheckedUpdateWithoutServicioInput>
  }

  export type ServicioCreateNestedOneWithoutComplicacionesInput = {
    create?: XOR<ServicioCreateWithoutComplicacionesInput, ServicioUncheckedCreateWithoutComplicacionesInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutComplicacionesInput
    connect?: ServicioWhereUniqueInput
  }

  export type EnumTypecomplicacionFieldUpdateOperationsInput = {
    set?: $Enums.Typecomplicacion
  }

  export type ServicioUpdateOneRequiredWithoutComplicacionesNestedInput = {
    create?: XOR<ServicioCreateWithoutComplicacionesInput, ServicioUncheckedCreateWithoutComplicacionesInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutComplicacionesInput
    upsert?: ServicioUpsertWithoutComplicacionesInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutComplicacionesInput, ServicioUpdateWithoutComplicacionesInput>, ServicioUncheckedUpdateWithoutComplicacionesInput>
  }

  export type ServicioCreateNestedOneWithoutDescripcionInput = {
    create?: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutDescripcionInput
    connect?: ServicioWhereUniqueInput
  }

  export type ServicioUpdateOneRequiredWithoutDescripcionNestedInput = {
    create?: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutDescripcionInput
    upsert?: ServicioUpsertWithoutDescripcionInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutDescripcionInput, ServicioUpdateWithoutDescripcionInput>, ServicioUncheckedUpdateWithoutDescripcionInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedEnumTypecomplicacionFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionFilter<$PrismaModel> | $Enums.Typecomplicacion
  }

  export type NestedEnumTypecomplicacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionWithAggregatesFilter<$PrismaModel> | $Enums.Typecomplicacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypecomplicacionFilter<$PrismaModel>
    _max?: NestedEnumTypecomplicacionFilter<$PrismaModel>
  }

  export type ComplicacionCreateWithoutServicioInput = {
    type: $Enums.Typecomplicacion
    description: string
  }

  export type ComplicacionUncheckedCreateWithoutServicioInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
  }

  export type ComplicacionCreateOrConnectWithoutServicioInput = {
    where: ComplicacionWhereUniqueInput
    create: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput>
  }

  export type ComplicacionCreateManyServicioInputEnvelope = {
    data: ComplicacionCreateManyServicioInput | ComplicacionCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type DescripcionCreateWithoutServicioInput = {
    hallazgos: string
    motivo_atencion: string
    antecedentes: string
    examen_fisico: string
  }

  export type DescripcionUncheckedCreateWithoutServicioInput = {
    id?: number
    hallazgos: string
    motivo_atencion: string
    antecedentes: string
    examen_fisico: string
  }

  export type DescripcionCreateOrConnectWithoutServicioInput = {
    where: DescripcionWhereUniqueInput
    create: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
  }

  export type ComplicacionUpsertWithWhereUniqueWithoutServicioInput = {
    where: ComplicacionWhereUniqueInput
    update: XOR<ComplicacionUpdateWithoutServicioInput, ComplicacionUncheckedUpdateWithoutServicioInput>
    create: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput>
  }

  export type ComplicacionUpdateWithWhereUniqueWithoutServicioInput = {
    where: ComplicacionWhereUniqueInput
    data: XOR<ComplicacionUpdateWithoutServicioInput, ComplicacionUncheckedUpdateWithoutServicioInput>
  }

  export type ComplicacionUpdateManyWithWhereWithoutServicioInput = {
    where: ComplicacionScalarWhereInput
    data: XOR<ComplicacionUpdateManyMutationInput, ComplicacionUncheckedUpdateManyWithoutServicioInput>
  }

  export type ComplicacionScalarWhereInput = {
    AND?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
    OR?: ComplicacionScalarWhereInput[]
    NOT?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
    id?: IntFilter<"Complicacion"> | number
    type?: EnumTypecomplicacionFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringFilter<"Complicacion"> | string
    id_servicio?: IntFilter<"Complicacion"> | number
  }

  export type DescripcionUpsertWithoutServicioInput = {
    update: XOR<DescripcionUpdateWithoutServicioInput, DescripcionUncheckedUpdateWithoutServicioInput>
    create: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    where?: DescripcionWhereInput
  }

  export type DescripcionUpdateToOneWithWhereWithoutServicioInput = {
    where?: DescripcionWhereInput
    data: XOR<DescripcionUpdateWithoutServicioInput, DescripcionUncheckedUpdateWithoutServicioInput>
  }

  export type DescripcionUpdateWithoutServicioInput = {
    hallazgos?: StringFieldUpdateOperationsInput | string
    motivo_atencion?: StringFieldUpdateOperationsInput | string
    antecedentes?: StringFieldUpdateOperationsInput | string
    examen_fisico?: StringFieldUpdateOperationsInput | string
  }

  export type DescripcionUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    hallazgos?: StringFieldUpdateOperationsInput | string
    motivo_atencion?: StringFieldUpdateOperationsInput | string
    antecedentes?: StringFieldUpdateOperationsInput | string
    examen_fisico?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioCreateWithoutComplicacionesInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
    descripcion?: DescripcionCreateNestedOneWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutComplicacionesInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
    descripcion?: DescripcionUncheckedCreateNestedOneWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutComplicacionesInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutComplicacionesInput, ServicioUncheckedCreateWithoutComplicacionesInput>
  }

  export type ServicioUpsertWithoutComplicacionesInput = {
    update: XOR<ServicioUpdateWithoutComplicacionesInput, ServicioUncheckedUpdateWithoutComplicacionesInput>
    create: XOR<ServicioCreateWithoutComplicacionesInput, ServicioUncheckedCreateWithoutComplicacionesInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutComplicacionesInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutComplicacionesInput, ServicioUncheckedUpdateWithoutComplicacionesInput>
  }

  export type ServicioUpdateWithoutComplicacionesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
    descripcion?: DescripcionUpdateOneWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutComplicacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
    descripcion?: DescripcionUncheckedUpdateOneWithoutServicioNestedInput
  }

  export type ServicioCreateWithoutDescripcionInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
    complicaciones?: ComplicacionCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutDescripcionInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_turno: number
    complicaciones?: ComplicacionUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutDescripcionInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput>
  }

  export type ServicioUpsertWithoutDescripcionInput = {
    update: XOR<ServicioUpdateWithoutDescripcionInput, ServicioUncheckedUpdateWithoutDescripcionInput>
    create: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutDescripcionInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutDescripcionInput, ServicioUncheckedUpdateWithoutDescripcionInput>
  }

  export type ServicioUpdateWithoutDescripcionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
    complicaciones?: ComplicacionUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutDescripcionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_turno?: IntFieldUpdateOperationsInput | number
    complicaciones?: ComplicacionUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ComplicacionCreateManyServicioInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
  }

  export type ComplicacionUpdateWithoutServicioInput = {
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ComplicacionUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ComplicacionUncheckedUpdateManyWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
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