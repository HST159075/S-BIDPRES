
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model OTP
 * 
 */
export type OTP = $Result.DefaultSelection<Prisma.$OTPPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model SellerApplication
 * 
 */
export type SellerApplication = $Result.DefaultSelection<Prisma.$SellerApplicationPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model Auction
 * 
 */
export type Auction = $Result.DefaultSelection<Prisma.$AuctionPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Strike
 * 
 */
export type Strike = $Result.DefaultSelection<Prisma.$StrikePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  buyer: 'buyer',
  seller: 'seller',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SellerApplicationStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type SellerApplicationStatus = (typeof SellerApplicationStatus)[keyof typeof SellerApplicationStatus]


export const ListingStatus: {
  draft: 'draft',
  active: 'active',
  ended: 'ended',
  cancelled: 'cancelled'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]


export const ProductCategory: {
  electronics: 'electronics',
  fashion: 'fashion',
  home: 'home',
  vehicle: 'vehicle',
  sports: 'sports',
  books: 'books',
  other: 'other'
};

export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory]


export const ProductCondition: {
  new: 'new',
  used: 'used',
  refurbished: 'refurbished'
};

export type ProductCondition = (typeof ProductCondition)[keyof typeof ProductCondition]


export const AuctionStatus: {
  scheduled: 'scheduled',
  live: 'live',
  ended: 'ended',
  cancelled: 'cancelled'
};

export type AuctionStatus = (typeof AuctionStatus)[keyof typeof AuctionStatus]


export const BidStatus: {
  active: 'active',
  outbid: 'outbid',
  won: 'won',
  refunded: 'refunded'
};

export type BidStatus = (typeof BidStatus)[keyof typeof BidStatus]


export const PaymentStatus: {
  pending: 'pending',
  held: 'held',
  released: 'released',
  refunded: 'refunded',
  failed: 'failed'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentGateway: {
  sslcommerz: 'sslcommerz',
  bkash: 'bkash'
};

export type PaymentGateway = (typeof PaymentGateway)[keyof typeof PaymentGateway]


export const StrikeReason: {
  non_payment: 'non_payment',
  fraudulent_bid: 'fraudulent_bid',
  admin_manual: 'admin_manual'
};

export type StrikeReason = (typeof StrikeReason)[keyof typeof StrikeReason]


export const NotificationType: {
  bid_placed: 'bid_placed',
  outbid: 'outbid',
  auction_won: 'auction_won',
  auction_ended: 'auction_ended',
  payment_reminder: 'payment_reminder',
  payment_received: 'payment_received',
  seller_approved: 'seller_approved',
  seller_rejected: 'seller_rejected',
  strike_added: 'strike_added',
  account_banned: 'account_banned',
  delivery_confirmed: 'delivery_confirmed'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SellerApplicationStatus = $Enums.SellerApplicationStatus

export const SellerApplicationStatus: typeof $Enums.SellerApplicationStatus

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

export type ProductCategory = $Enums.ProductCategory

export const ProductCategory: typeof $Enums.ProductCategory

export type ProductCondition = $Enums.ProductCondition

export const ProductCondition: typeof $Enums.ProductCondition

export type AuctionStatus = $Enums.AuctionStatus

export const AuctionStatus: typeof $Enums.AuctionStatus

export type BidStatus = $Enums.BidStatus

export const BidStatus: typeof $Enums.BidStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentGateway = $Enums.PaymentGateway

export const PaymentGateway: typeof $Enums.PaymentGateway

export type StrikeReason = $Enums.StrikeReason

export const StrikeReason: typeof $Enums.StrikeReason

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPS
    * const oTPS = await prisma.oTP.findMany()
    * ```
    */
  get oTP(): Prisma.OTPDelegate<ExtArgs>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs>;

  /**
   * `prisma.sellerApplication`: Exposes CRUD operations for the **SellerApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellerApplications
    * const sellerApplications = await prisma.sellerApplication.findMany()
    * ```
    */
  get sellerApplication(): Prisma.SellerApplicationDelegate<ExtArgs>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs>;

  /**
   * `prisma.auction`: Exposes CRUD operations for the **Auction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctions
    * const auctions = await prisma.auction.findMany()
    * ```
    */
  get auction(): Prisma.AuctionDelegate<ExtArgs>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.strike`: Exposes CRUD operations for the **Strike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Strikes
    * const strikes = await prisma.strike.findMany()
    * ```
    */
  get strike(): Prisma.StrikeDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    OTP: 'OTP',
    Verification: 'Verification',
    SellerApplication: 'SellerApplication',
    Listing: 'Listing',
    Auction: 'Auction',
    Bid: 'Bid',
    Payment: 'Payment',
    Strike: 'Strike',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "account" | "session" | "oTP" | "verification" | "sellerApplication" | "listing" | "auction" | "bid" | "payment" | "strike" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      OTP: {
        payload: Prisma.$OTPPayload<ExtArgs>
        fields: Prisma.OTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findFirst: {
            args: Prisma.OTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findMany: {
            args: Prisma.OTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          create: {
            args: Prisma.OTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          createMany: {
            args: Prisma.OTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          delete: {
            args: Prisma.OTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          update: {
            args: Prisma.OTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          deleteMany: {
            args: Prisma.OTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          aggregate: {
            args: Prisma.OTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTP>
          }
          groupBy: {
            args: Prisma.OTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTPCountArgs<ExtArgs>
            result: $Utils.Optional<OTPCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      SellerApplication: {
        payload: Prisma.$SellerApplicationPayload<ExtArgs>
        fields: Prisma.SellerApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>
          }
          findFirst: {
            args: Prisma.SellerApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>
          }
          findMany: {
            args: Prisma.SellerApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>[]
          }
          create: {
            args: Prisma.SellerApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>
          }
          createMany: {
            args: Prisma.SellerApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>[]
          }
          delete: {
            args: Prisma.SellerApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>
          }
          update: {
            args: Prisma.SellerApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>
          }
          deleteMany: {
            args: Prisma.SellerApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SellerApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerApplicationPayload>
          }
          aggregate: {
            args: Prisma.SellerApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellerApplication>
          }
          groupBy: {
            args: Prisma.SellerApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<SellerApplicationCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      Auction: {
        payload: Prisma.$AuctionPayload<ExtArgs>
        fields: Prisma.AuctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findFirst: {
            args: Prisma.AuctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findMany: {
            args: Prisma.AuctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          create: {
            args: Prisma.AuctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          createMany: {
            args: Prisma.AuctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          delete: {
            args: Prisma.AuctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          update: {
            args: Prisma.AuctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          deleteMany: {
            args: Prisma.AuctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          aggregate: {
            args: Prisma.AuctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuction>
          }
          groupBy: {
            args: Prisma.AuctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Strike: {
        payload: Prisma.$StrikePayload<ExtArgs>
        fields: Prisma.StrikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StrikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StrikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>
          }
          findFirst: {
            args: Prisma.StrikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StrikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>
          }
          findMany: {
            args: Prisma.StrikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>[]
          }
          create: {
            args: Prisma.StrikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>
          }
          createMany: {
            args: Prisma.StrikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StrikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>[]
          }
          delete: {
            args: Prisma.StrikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>
          }
          update: {
            args: Prisma.StrikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>
          }
          deleteMany: {
            args: Prisma.StrikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StrikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StrikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrikePayload>
          }
          aggregate: {
            args: Prisma.StrikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStrike>
          }
          groupBy: {
            args: Prisma.StrikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StrikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StrikeCountArgs<ExtArgs>
            result: $Utils.Optional<StrikeCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    listings: number
    bids: number
    payments: number
    strikes: number
    strikesGiven: number
    notifications: number
    otps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    bids?: boolean | UserCountOutputTypeCountBidsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    strikes?: boolean | UserCountOutputTypeCountStrikesArgs
    strikesGiven?: boolean | UserCountOutputTypeCountStrikesGivenArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStrikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStrikesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
  }


  /**
   * Count Type AuctionCountOutputType
   */

  export type AuctionCountOutputType = {
    bids: number
  }

  export type AuctionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | AuctionCountOutputTypeCountBidsArgs
  }

  // Custom InputTypes
  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionCountOutputType
     */
    select?: AuctionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuctionCountOutputType without action
   */
  export type AuctionCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    purchaseCount: number | null
    strikeCount: number | null
  }

  export type UserSumAggregateOutputType = {
    purchaseCount: number | null
    strikeCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    purchaseCount: number | null
    strikeCount: number | null
    isBanned: boolean | null
    bannedAt: Date | null
    bannedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    purchaseCount: number | null
    strikeCount: number | null
    isBanned: boolean | null
    bannedAt: Date | null
    bannedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    emailVerified: number
    phoneVerified: number
    password: number
    role: number
    avatar: number
    purchaseCount: number
    strikeCount: number
    isBanned: number
    bannedAt: number
    bannedReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    purchaseCount?: true
    strikeCount?: true
  }

  export type UserSumAggregateInputType = {
    purchaseCount?: true
    strikeCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    emailVerified?: true
    phoneVerified?: true
    password?: true
    role?: true
    avatar?: true
    purchaseCount?: true
    strikeCount?: true
    isBanned?: true
    bannedAt?: true
    bannedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    emailVerified?: true
    phoneVerified?: true
    password?: true
    role?: true
    avatar?: true
    purchaseCount?: true
    strikeCount?: true
    isBanned?: true
    bannedAt?: true
    bannedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    emailVerified?: true
    phoneVerified?: true
    password?: true
    role?: true
    avatar?: true
    purchaseCount?: true
    strikeCount?: true
    isBanned?: true
    bannedAt?: true
    bannedReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    emailVerified: boolean
    phoneVerified: boolean
    password: string
    role: $Enums.Role
    avatar: string | null
    purchaseCount: number
    strikeCount: number
    isBanned: boolean
    bannedAt: Date | null
    bannedReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    purchaseCount?: boolean
    strikeCount?: boolean
    isBanned?: boolean
    bannedAt?: boolean
    bannedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sellerApplication?: boolean | User$sellerApplicationArgs<ExtArgs>
    listings?: boolean | User$listingsArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    strikes?: boolean | User$strikesArgs<ExtArgs>
    strikesGiven?: boolean | User$strikesGivenArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    purchaseCount?: boolean
    strikeCount?: boolean
    isBanned?: boolean
    bannedAt?: boolean
    bannedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    purchaseCount?: boolean
    strikeCount?: boolean
    isBanned?: boolean
    bannedAt?: boolean
    bannedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sellerApplication?: boolean | User$sellerApplicationArgs<ExtArgs>
    listings?: boolean | User$listingsArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    strikes?: boolean | User$strikesArgs<ExtArgs>
    strikesGiven?: boolean | User$strikesGivenArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sellerApplication: Prisma.$SellerApplicationPayload<ExtArgs> | null
      listings: Prisma.$ListingPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      strikes: Prisma.$StrikePayload<ExtArgs>[]
      strikesGiven: Prisma.$StrikePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      otps: Prisma.$OTPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      emailVerified: boolean
      phoneVerified: boolean
      password: string
      role: $Enums.Role
      avatar: string | null
      purchaseCount: number
      strikeCount: number
      isBanned: boolean
      bannedAt: Date | null
      bannedReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    sellerApplication<T extends User$sellerApplicationArgs<ExtArgs> = {}>(args?: Subset<T, User$sellerApplicationArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany"> | Null>
    bids<T extends User$bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    strikes<T extends User$strikesArgs<ExtArgs> = {}>(args?: Subset<T, User$strikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "findMany"> | Null>
    strikesGiven<T extends User$strikesGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$strikesGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    otps<T extends User$otpsArgs<ExtArgs> = {}>(args?: Subset<T, User$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly purchaseCount: FieldRef<"User", 'Int'>
    readonly strikeCount: FieldRef<"User", 'Int'>
    readonly isBanned: FieldRef<"User", 'Boolean'>
    readonly bannedAt: FieldRef<"User", 'DateTime'>
    readonly bannedReason: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sellerApplication
   */
  export type User$sellerApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    where?: SellerApplicationWhereInput
  }

  /**
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.strikes
   */
  export type User$strikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    where?: StrikeWhereInput
    orderBy?: StrikeOrderByWithRelationInput | StrikeOrderByWithRelationInput[]
    cursor?: StrikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StrikeScalarFieldEnum | StrikeScalarFieldEnum[]
  }

  /**
   * User.strikesGiven
   */
  export type User$strikesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    where?: StrikeWhereInput
    orderBy?: StrikeOrderByWithRelationInput | StrikeOrderByWithRelationInput[]
    cursor?: StrikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StrikeScalarFieldEnum | StrikeScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.otps
   */
  export type User$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    cursor?: OTPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model OTP
   */

  export type AggregateOTP = {
    _count: OTPCountAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  export type OTPMinAggregateOutputType = {
    id: string | null
    userId: string | null
    target: string | null
    code: string | null
    type: string | null
    verified: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OTPMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    target: string | null
    code: string | null
    type: string | null
    verified: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OTPCountAggregateOutputType = {
    id: number
    userId: number
    target: number
    code: number
    type: number
    verified: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OTPMinAggregateInputType = {
    id?: true
    userId?: true
    target?: true
    code?: true
    type?: true
    verified?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OTPMaxAggregateInputType = {
    id?: true
    userId?: true
    target?: true
    code?: true
    type?: true
    verified?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OTPCountAggregateInputType = {
    id?: true
    userId?: true
    target?: true
    code?: true
    type?: true
    verified?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTP to aggregate.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPS
    **/
    _count?: true | OTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPMaxAggregateInputType
  }

  export type GetOTPAggregateType<T extends OTPAggregateArgs> = {
        [P in keyof T & keyof AggregateOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTP[P]>
      : GetScalarType<T[P], AggregateOTP[P]>
  }




  export type OTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithAggregationInput | OTPOrderByWithAggregationInput[]
    by: OTPScalarFieldEnum[] | OTPScalarFieldEnum
    having?: OTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPCountAggregateInputType | true
    _min?: OTPMinAggregateInputType
    _max?: OTPMaxAggregateInputType
  }

  export type OTPGroupByOutputType = {
    id: string
    userId: string | null
    target: string
    code: string
    type: string
    verified: boolean
    expiresAt: Date
    createdAt: Date
    _count: OTPCountAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  type GetOTPGroupByPayload<T extends OTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPGroupByOutputType[P]>
            : GetScalarType<T[P], OTPGroupByOutputType[P]>
        }
      >
    >


  export type OTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    target?: boolean
    code?: boolean
    type?: boolean
    verified?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | OTP$userArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    target?: boolean
    code?: boolean
    type?: boolean
    verified?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | OTP$userArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectScalar = {
    id?: boolean
    userId?: boolean
    target?: boolean
    code?: boolean
    type?: boolean
    verified?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OTPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OTP$userArgs<ExtArgs>
  }
  export type OTPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OTP$userArgs<ExtArgs>
  }

  export type $OTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTP"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      target: string
      code: string
      type: string
      verified: boolean
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["oTP"]>
    composites: {}
  }

  type OTPGetPayload<S extends boolean | null | undefined | OTPDefaultArgs> = $Result.GetResult<Prisma.$OTPPayload, S>

  type OTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OTPFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OTPCountAggregateInputType | true
    }

  export interface OTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTP'], meta: { name: 'OTP' } }
    /**
     * Find zero or one OTP that matches the filter.
     * @param {OTPFindUniqueArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPFindUniqueArgs>(args: SelectSubset<T, OTPFindUniqueArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OTP that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OTPFindUniqueOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPFindFirstArgs>(args?: SelectSubset<T, OTPFindFirstArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPS
     * const oTPS = await prisma.oTP.findMany()
     * 
     * // Get first 10 OTPS
     * const oTPS = await prisma.oTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPWithIdOnly = await prisma.oTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPFindManyArgs>(args?: SelectSubset<T, OTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OTP.
     * @param {OTPCreateArgs} args - Arguments to create a OTP.
     * @example
     * // Create one OTP
     * const OTP = await prisma.oTP.create({
     *   data: {
     *     // ... data to create a OTP
     *   }
     * })
     * 
     */
    create<T extends OTPCreateArgs>(args: SelectSubset<T, OTPCreateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OTPS.
     * @param {OTPCreateManyArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPCreateManyArgs>(args?: SelectSubset<T, OTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OTPS and returns the data saved in the database.
     * @param {OTPCreateManyAndReturnArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OTPCreateManyAndReturnArgs>(args?: SelectSubset<T, OTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OTP.
     * @param {OTPDeleteArgs} args - Arguments to delete one OTP.
     * @example
     * // Delete one OTP
     * const OTP = await prisma.oTP.delete({
     *   where: {
     *     // ... filter to delete one OTP
     *   }
     * })
     * 
     */
    delete<T extends OTPDeleteArgs>(args: SelectSubset<T, OTPDeleteArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OTP.
     * @param {OTPUpdateArgs} args - Arguments to update one OTP.
     * @example
     * // Update one OTP
     * const oTP = await prisma.oTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPUpdateArgs>(args: SelectSubset<T, OTPUpdateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OTPS.
     * @param {OTPDeleteManyArgs} args - Arguments to filter OTPS to delete.
     * @example
     * // Delete a few OTPS
     * const { count } = await prisma.oTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPDeleteManyArgs>(args?: SelectSubset<T, OTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPUpdateManyArgs>(args: SelectSubset<T, OTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTP.
     * @param {OTPUpsertArgs} args - Arguments to update or create a OTP.
     * @example
     * // Update or create a OTP
     * const oTP = await prisma.oTP.upsert({
     *   create: {
     *     // ... data to create a OTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTP we want to update
     *   }
     * })
     */
    upsert<T extends OTPUpsertArgs>(args: SelectSubset<T, OTPUpsertArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPCountArgs} args - Arguments to filter OTPS to count.
     * @example
     * // Count the number of OTPS
     * const count = await prisma.oTP.count({
     *   where: {
     *     // ... the filter for the OTPS we want to count
     *   }
     * })
    **/
    count<T extends OTPCountArgs>(
      args?: Subset<T, OTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OTPAggregateArgs>(args: Subset<T, OTPAggregateArgs>): Prisma.PrismaPromise<GetOTPAggregateType<T>>

    /**
     * Group by OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPGroupByArgs} args - Group by arguments.
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
      T extends OTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPGroupByArgs['orderBy'] }
        : { orderBy?: OTPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTP model
   */
  readonly fields: OTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends OTP$userArgs<ExtArgs> = {}>(args?: Subset<T, OTP$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the OTP model
   */ 
  interface OTPFieldRefs {
    readonly id: FieldRef<"OTP", 'String'>
    readonly userId: FieldRef<"OTP", 'String'>
    readonly target: FieldRef<"OTP", 'String'>
    readonly code: FieldRef<"OTP", 'String'>
    readonly type: FieldRef<"OTP", 'String'>
    readonly verified: FieldRef<"OTP", 'Boolean'>
    readonly expiresAt: FieldRef<"OTP", 'DateTime'>
    readonly createdAt: FieldRef<"OTP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OTP findUnique
   */
  export type OTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findUniqueOrThrow
   */
  export type OTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findFirst
   */
  export type OTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findFirstOrThrow
   */
  export type OTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findMany
   */
  export type OTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTPS to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP create
   */
  export type OTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to create a OTP.
     */
    data: XOR<OTPCreateInput, OTPUncheckedCreateInput>
  }

  /**
   * OTP createMany
   */
  export type OTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OTP createManyAndReturn
   */
  export type OTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OTP update
   */
  export type OTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to update a OTP.
     */
    data: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
    /**
     * Choose, which OTP to update.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP updateMany
   */
  export type OTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
  }

  /**
   * OTP upsert
   */
  export type OTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The filter to search for the OTP to update in case it exists.
     */
    where: OTPWhereUniqueInput
    /**
     * In case the OTP found by the `where` argument doesn't exist, create a new OTP with this data.
     */
    create: XOR<OTPCreateInput, OTPUncheckedCreateInput>
    /**
     * In case the OTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
  }

  /**
   * OTP delete
   */
  export type OTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter which OTP to delete.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP deleteMany
   */
  export type OTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPS to delete
     */
    where?: OTPWhereInput
  }

  /**
   * OTP.user
   */
  export type OTP$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OTP without action
   */
  export type OTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Verification model
   */ 
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
  }


  /**
   * Model SellerApplication
   */

  export type AggregateSellerApplication = {
    _count: SellerApplicationCountAggregateOutputType | null
    _min: SellerApplicationMinAggregateOutputType | null
    _max: SellerApplicationMaxAggregateOutputType | null
  }

  export type SellerApplicationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.SellerApplicationStatus | null
    idCardUrl: string | null
    profilePhotoUrl: string | null
    reviewedBy: string | null
    rejectionReason: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellerApplicationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.SellerApplicationStatus | null
    idCardUrl: string | null
    profilePhotoUrl: string | null
    reviewedBy: string | null
    rejectionReason: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellerApplicationCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    idCardUrl: number
    profilePhotoUrl: number
    reviewedBy: number
    rejectionReason: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SellerApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    idCardUrl?: true
    profilePhotoUrl?: true
    reviewedBy?: true
    rejectionReason?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellerApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    idCardUrl?: true
    profilePhotoUrl?: true
    reviewedBy?: true
    rejectionReason?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellerApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    idCardUrl?: true
    profilePhotoUrl?: true
    reviewedBy?: true
    rejectionReason?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SellerApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerApplication to aggregate.
     */
    where?: SellerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerApplications to fetch.
     */
    orderBy?: SellerApplicationOrderByWithRelationInput | SellerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellerApplications
    **/
    _count?: true | SellerApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerApplicationMaxAggregateInputType
  }

  export type GetSellerApplicationAggregateType<T extends SellerApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateSellerApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellerApplication[P]>
      : GetScalarType<T[P], AggregateSellerApplication[P]>
  }




  export type SellerApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerApplicationWhereInput
    orderBy?: SellerApplicationOrderByWithAggregationInput | SellerApplicationOrderByWithAggregationInput[]
    by: SellerApplicationScalarFieldEnum[] | SellerApplicationScalarFieldEnum
    having?: SellerApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerApplicationCountAggregateInputType | true
    _min?: SellerApplicationMinAggregateInputType
    _max?: SellerApplicationMaxAggregateInputType
  }

  export type SellerApplicationGroupByOutputType = {
    id: string
    userId: string
    status: $Enums.SellerApplicationStatus
    idCardUrl: string
    profilePhotoUrl: string
    reviewedBy: string | null
    rejectionReason: string | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SellerApplicationCountAggregateOutputType | null
    _min: SellerApplicationMinAggregateOutputType | null
    _max: SellerApplicationMaxAggregateOutputType | null
  }

  type GetSellerApplicationGroupByPayload<T extends SellerApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], SellerApplicationGroupByOutputType[P]>
        }
      >
    >


  export type SellerApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    idCardUrl?: boolean
    profilePhotoUrl?: boolean
    reviewedBy?: boolean
    rejectionReason?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerApplication"]>

  export type SellerApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    idCardUrl?: boolean
    profilePhotoUrl?: boolean
    reviewedBy?: boolean
    rejectionReason?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerApplication"]>

  export type SellerApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    idCardUrl?: boolean
    profilePhotoUrl?: boolean
    reviewedBy?: boolean
    rejectionReason?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SellerApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SellerApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SellerApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellerApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: $Enums.SellerApplicationStatus
      idCardUrl: string
      profilePhotoUrl: string
      reviewedBy: string | null
      rejectionReason: string | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sellerApplication"]>
    composites: {}
  }

  type SellerApplicationGetPayload<S extends boolean | null | undefined | SellerApplicationDefaultArgs> = $Result.GetResult<Prisma.$SellerApplicationPayload, S>

  type SellerApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SellerApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SellerApplicationCountAggregateInputType | true
    }

  export interface SellerApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellerApplication'], meta: { name: 'SellerApplication' } }
    /**
     * Find zero or one SellerApplication that matches the filter.
     * @param {SellerApplicationFindUniqueArgs} args - Arguments to find a SellerApplication
     * @example
     * // Get one SellerApplication
     * const sellerApplication = await prisma.sellerApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerApplicationFindUniqueArgs>(args: SelectSubset<T, SellerApplicationFindUniqueArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SellerApplication that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SellerApplicationFindUniqueOrThrowArgs} args - Arguments to find a SellerApplication
     * @example
     * // Get one SellerApplication
     * const sellerApplication = await prisma.sellerApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SellerApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerApplicationFindFirstArgs} args - Arguments to find a SellerApplication
     * @example
     * // Get one SellerApplication
     * const sellerApplication = await prisma.sellerApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerApplicationFindFirstArgs>(args?: SelectSubset<T, SellerApplicationFindFirstArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SellerApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerApplicationFindFirstOrThrowArgs} args - Arguments to find a SellerApplication
     * @example
     * // Get one SellerApplication
     * const sellerApplication = await prisma.sellerApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SellerApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellerApplications
     * const sellerApplications = await prisma.sellerApplication.findMany()
     * 
     * // Get first 10 SellerApplications
     * const sellerApplications = await prisma.sellerApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerApplicationWithIdOnly = await prisma.sellerApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerApplicationFindManyArgs>(args?: SelectSubset<T, SellerApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SellerApplication.
     * @param {SellerApplicationCreateArgs} args - Arguments to create a SellerApplication.
     * @example
     * // Create one SellerApplication
     * const SellerApplication = await prisma.sellerApplication.create({
     *   data: {
     *     // ... data to create a SellerApplication
     *   }
     * })
     * 
     */
    create<T extends SellerApplicationCreateArgs>(args: SelectSubset<T, SellerApplicationCreateArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SellerApplications.
     * @param {SellerApplicationCreateManyArgs} args - Arguments to create many SellerApplications.
     * @example
     * // Create many SellerApplications
     * const sellerApplication = await prisma.sellerApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerApplicationCreateManyArgs>(args?: SelectSubset<T, SellerApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellerApplications and returns the data saved in the database.
     * @param {SellerApplicationCreateManyAndReturnArgs} args - Arguments to create many SellerApplications.
     * @example
     * // Create many SellerApplications
     * const sellerApplication = await prisma.sellerApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellerApplications and only return the `id`
     * const sellerApplicationWithIdOnly = await prisma.sellerApplication.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SellerApplication.
     * @param {SellerApplicationDeleteArgs} args - Arguments to delete one SellerApplication.
     * @example
     * // Delete one SellerApplication
     * const SellerApplication = await prisma.sellerApplication.delete({
     *   where: {
     *     // ... filter to delete one SellerApplication
     *   }
     * })
     * 
     */
    delete<T extends SellerApplicationDeleteArgs>(args: SelectSubset<T, SellerApplicationDeleteArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SellerApplication.
     * @param {SellerApplicationUpdateArgs} args - Arguments to update one SellerApplication.
     * @example
     * // Update one SellerApplication
     * const sellerApplication = await prisma.sellerApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerApplicationUpdateArgs>(args: SelectSubset<T, SellerApplicationUpdateArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SellerApplications.
     * @param {SellerApplicationDeleteManyArgs} args - Arguments to filter SellerApplications to delete.
     * @example
     * // Delete a few SellerApplications
     * const { count } = await prisma.sellerApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerApplicationDeleteManyArgs>(args?: SelectSubset<T, SellerApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellerApplications
     * const sellerApplication = await prisma.sellerApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerApplicationUpdateManyArgs>(args: SelectSubset<T, SellerApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SellerApplication.
     * @param {SellerApplicationUpsertArgs} args - Arguments to update or create a SellerApplication.
     * @example
     * // Update or create a SellerApplication
     * const sellerApplication = await prisma.sellerApplication.upsert({
     *   create: {
     *     // ... data to create a SellerApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellerApplication we want to update
     *   }
     * })
     */
    upsert<T extends SellerApplicationUpsertArgs>(args: SelectSubset<T, SellerApplicationUpsertArgs<ExtArgs>>): Prisma__SellerApplicationClient<$Result.GetResult<Prisma.$SellerApplicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SellerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerApplicationCountArgs} args - Arguments to filter SellerApplications to count.
     * @example
     * // Count the number of SellerApplications
     * const count = await prisma.sellerApplication.count({
     *   where: {
     *     // ... the filter for the SellerApplications we want to count
     *   }
     * })
    **/
    count<T extends SellerApplicationCountArgs>(
      args?: Subset<T, SellerApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerApplicationAggregateArgs>(args: Subset<T, SellerApplicationAggregateArgs>): Prisma.PrismaPromise<GetSellerApplicationAggregateType<T>>

    /**
     * Group by SellerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerApplicationGroupByArgs} args - Group by arguments.
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
      T extends SellerApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerApplicationGroupByArgs['orderBy'] }
        : { orderBy?: SellerApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellerApplication model
   */
  readonly fields: SellerApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellerApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SellerApplication model
   */ 
  interface SellerApplicationFieldRefs {
    readonly id: FieldRef<"SellerApplication", 'String'>
    readonly userId: FieldRef<"SellerApplication", 'String'>
    readonly status: FieldRef<"SellerApplication", 'SellerApplicationStatus'>
    readonly idCardUrl: FieldRef<"SellerApplication", 'String'>
    readonly profilePhotoUrl: FieldRef<"SellerApplication", 'String'>
    readonly reviewedBy: FieldRef<"SellerApplication", 'String'>
    readonly rejectionReason: FieldRef<"SellerApplication", 'String'>
    readonly reviewedAt: FieldRef<"SellerApplication", 'DateTime'>
    readonly createdAt: FieldRef<"SellerApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"SellerApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SellerApplication findUnique
   */
  export type SellerApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SellerApplication to fetch.
     */
    where: SellerApplicationWhereUniqueInput
  }

  /**
   * SellerApplication findUniqueOrThrow
   */
  export type SellerApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SellerApplication to fetch.
     */
    where: SellerApplicationWhereUniqueInput
  }

  /**
   * SellerApplication findFirst
   */
  export type SellerApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SellerApplication to fetch.
     */
    where?: SellerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerApplications to fetch.
     */
    orderBy?: SellerApplicationOrderByWithRelationInput | SellerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerApplications.
     */
    cursor?: SellerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerApplications.
     */
    distinct?: SellerApplicationScalarFieldEnum | SellerApplicationScalarFieldEnum[]
  }

  /**
   * SellerApplication findFirstOrThrow
   */
  export type SellerApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SellerApplication to fetch.
     */
    where?: SellerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerApplications to fetch.
     */
    orderBy?: SellerApplicationOrderByWithRelationInput | SellerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerApplications.
     */
    cursor?: SellerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerApplications.
     */
    distinct?: SellerApplicationScalarFieldEnum | SellerApplicationScalarFieldEnum[]
  }

  /**
   * SellerApplication findMany
   */
  export type SellerApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which SellerApplications to fetch.
     */
    where?: SellerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerApplications to fetch.
     */
    orderBy?: SellerApplicationOrderByWithRelationInput | SellerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellerApplications.
     */
    cursor?: SellerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerApplications.
     */
    skip?: number
    distinct?: SellerApplicationScalarFieldEnum | SellerApplicationScalarFieldEnum[]
  }

  /**
   * SellerApplication create
   */
  export type SellerApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a SellerApplication.
     */
    data: XOR<SellerApplicationCreateInput, SellerApplicationUncheckedCreateInput>
  }

  /**
   * SellerApplication createMany
   */
  export type SellerApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellerApplications.
     */
    data: SellerApplicationCreateManyInput | SellerApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellerApplication createManyAndReturn
   */
  export type SellerApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SellerApplications.
     */
    data: SellerApplicationCreateManyInput | SellerApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerApplication update
   */
  export type SellerApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a SellerApplication.
     */
    data: XOR<SellerApplicationUpdateInput, SellerApplicationUncheckedUpdateInput>
    /**
     * Choose, which SellerApplication to update.
     */
    where: SellerApplicationWhereUniqueInput
  }

  /**
   * SellerApplication updateMany
   */
  export type SellerApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellerApplications.
     */
    data: XOR<SellerApplicationUpdateManyMutationInput, SellerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which SellerApplications to update
     */
    where?: SellerApplicationWhereInput
  }

  /**
   * SellerApplication upsert
   */
  export type SellerApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the SellerApplication to update in case it exists.
     */
    where: SellerApplicationWhereUniqueInput
    /**
     * In case the SellerApplication found by the `where` argument doesn't exist, create a new SellerApplication with this data.
     */
    create: XOR<SellerApplicationCreateInput, SellerApplicationUncheckedCreateInput>
    /**
     * In case the SellerApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerApplicationUpdateInput, SellerApplicationUncheckedUpdateInput>
  }

  /**
   * SellerApplication delete
   */
  export type SellerApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
    /**
     * Filter which SellerApplication to delete.
     */
    where: SellerApplicationWhereUniqueInput
  }

  /**
   * SellerApplication deleteMany
   */
  export type SellerApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerApplications to delete
     */
    where?: SellerApplicationWhereInput
  }

  /**
   * SellerApplication without action
   */
  export type SellerApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerApplication
     */
    select?: SellerApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    shippingCost: Decimal | null
  }

  export type ListingSumAggregateOutputType = {
    shippingCost: Decimal | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    sellerId: string | null
    status: $Enums.ListingStatus | null
    title: string | null
    description: string | null
    category: $Enums.ProductCategory | null
    condition: $Enums.ProductCondition | null
    brand: string | null
    videoUrl: string | null
    location: string | null
    shippingCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    sellerId: string | null
    status: $Enums.ListingStatus | null
    title: string | null
    description: string | null
    category: $Enums.ProductCategory | null
    condition: $Enums.ProductCondition | null
    brand: string | null
    videoUrl: string | null
    location: string | null
    shippingCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    sellerId: number
    status: number
    title: number
    description: number
    category: number
    condition: number
    brand: number
    photos: number
    videoUrl: number
    location: number
    shippingCost: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    shippingCost?: true
  }

  export type ListingSumAggregateInputType = {
    shippingCost?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    sellerId?: true
    status?: true
    title?: true
    description?: true
    category?: true
    condition?: true
    brand?: true
    videoUrl?: true
    location?: true
    shippingCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    sellerId?: true
    status?: true
    title?: true
    description?: true
    category?: true
    condition?: true
    brand?: true
    videoUrl?: true
    location?: true
    shippingCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    sellerId?: true
    status?: true
    title?: true
    description?: true
    category?: true
    condition?: true
    brand?: true
    photos?: true
    videoUrl?: true
    location?: true
    shippingCost?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    sellerId: string
    status: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition: $Enums.ProductCondition | null
    brand: string | null
    photos: string[]
    videoUrl: string
    location: string
    shippingCost: Decimal
    createdAt: Date
    updatedAt: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    condition?: boolean
    brand?: boolean
    photos?: boolean
    videoUrl?: boolean
    location?: boolean
    shippingCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    auction?: boolean | Listing$auctionArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    condition?: boolean
    brand?: boolean
    photos?: boolean
    videoUrl?: boolean
    location?: boolean
    shippingCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    sellerId?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    condition?: boolean
    brand?: boolean
    photos?: boolean
    videoUrl?: boolean
    location?: boolean
    shippingCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    auction?: boolean | Listing$auctionArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      seller: Prisma.$UserPayload<ExtArgs>
      auction: Prisma.$AuctionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sellerId: string
      status: $Enums.ListingStatus
      title: string
      description: string
      category: $Enums.ProductCategory
      condition: $Enums.ProductCondition | null
      brand: string | null
      photos: string[]
      videoUrl: string
      location: string
      shippingCost: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    auction<T extends Listing$auctionArgs<ExtArgs> = {}>(args?: Subset<T, Listing$auctionArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Listing model
   */ 
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly sellerId: FieldRef<"Listing", 'String'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly title: FieldRef<"Listing", 'String'>
    readonly description: FieldRef<"Listing", 'String'>
    readonly category: FieldRef<"Listing", 'ProductCategory'>
    readonly condition: FieldRef<"Listing", 'ProductCondition'>
    readonly brand: FieldRef<"Listing", 'String'>
    readonly photos: FieldRef<"Listing", 'String[]'>
    readonly videoUrl: FieldRef<"Listing", 'String'>
    readonly location: FieldRef<"Listing", 'String'>
    readonly shippingCost: FieldRef<"Listing", 'Decimal'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
  }

  /**
   * Listing.auction
   */
  export type Listing$auctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model Auction
   */

  export type AggregateAuction = {
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  export type AuctionAvgAggregateOutputType = {
    startingPrice: Decimal | null
    bidIncrement: Decimal | null
    currentPrice: Decimal | null
    finalPrice: Decimal | null
  }

  export type AuctionSumAggregateOutputType = {
    startingPrice: Decimal | null
    bidIncrement: Decimal | null
    currentPrice: Decimal | null
    finalPrice: Decimal | null
  }

  export type AuctionMinAggregateOutputType = {
    id: string | null
    listingId: string | null
    status: $Enums.AuctionStatus | null
    startingPrice: Decimal | null
    bidIncrement: Decimal | null
    currentPrice: Decimal | null
    startTime: Date | null
    endTime: Date | null
    winnerId: string | null
    finalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuctionMaxAggregateOutputType = {
    id: string | null
    listingId: string | null
    status: $Enums.AuctionStatus | null
    startingPrice: Decimal | null
    bidIncrement: Decimal | null
    currentPrice: Decimal | null
    startTime: Date | null
    endTime: Date | null
    winnerId: string | null
    finalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuctionCountAggregateOutputType = {
    id: number
    listingId: number
    status: number
    startingPrice: number
    bidIncrement: number
    currentPrice: number
    startTime: number
    endTime: number
    winnerId: number
    finalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuctionAvgAggregateInputType = {
    startingPrice?: true
    bidIncrement?: true
    currentPrice?: true
    finalPrice?: true
  }

  export type AuctionSumAggregateInputType = {
    startingPrice?: true
    bidIncrement?: true
    currentPrice?: true
    finalPrice?: true
  }

  export type AuctionMinAggregateInputType = {
    id?: true
    listingId?: true
    status?: true
    startingPrice?: true
    bidIncrement?: true
    currentPrice?: true
    startTime?: true
    endTime?: true
    winnerId?: true
    finalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuctionMaxAggregateInputType = {
    id?: true
    listingId?: true
    status?: true
    startingPrice?: true
    bidIncrement?: true
    currentPrice?: true
    startTime?: true
    endTime?: true
    winnerId?: true
    finalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuctionCountAggregateInputType = {
    id?: true
    listingId?: true
    status?: true
    startingPrice?: true
    bidIncrement?: true
    currentPrice?: true
    startTime?: true
    endTime?: true
    winnerId?: true
    finalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auction to aggregate.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auctions
    **/
    _count?: true | AuctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionMaxAggregateInputType
  }

  export type GetAuctionAggregateType<T extends AuctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction[P]>
      : GetScalarType<T[P], AggregateAuction[P]>
  }




  export type AuctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithAggregationInput | AuctionOrderByWithAggregationInput[]
    by: AuctionScalarFieldEnum[] | AuctionScalarFieldEnum
    having?: AuctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionCountAggregateInputType | true
    _avg?: AuctionAvgAggregateInputType
    _sum?: AuctionSumAggregateInputType
    _min?: AuctionMinAggregateInputType
    _max?: AuctionMaxAggregateInputType
  }

  export type AuctionGroupByOutputType = {
    id: string
    listingId: string
    status: $Enums.AuctionStatus
    startingPrice: Decimal
    bidIncrement: Decimal
    currentPrice: Decimal
    startTime: Date
    endTime: Date
    winnerId: string | null
    finalPrice: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  type GetAuctionGroupByPayload<T extends AuctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionGroupByOutputType[P]>
        }
      >
    >


  export type AuctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    status?: boolean
    startingPrice?: boolean
    bidIncrement?: boolean
    currentPrice?: boolean
    startTime?: boolean
    endTime?: boolean
    winnerId?: boolean
    finalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listingId?: boolean
    status?: boolean
    startingPrice?: boolean
    bidIncrement?: boolean
    currentPrice?: boolean
    startTime?: boolean
    endTime?: boolean
    winnerId?: boolean
    finalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectScalar = {
    id?: boolean
    listingId?: boolean
    status?: boolean
    startingPrice?: boolean
    bidIncrement?: boolean
    currentPrice?: boolean
    startTime?: boolean
    endTime?: boolean
    winnerId?: boolean
    finalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    bids?: boolean | Auction$bidsArgs<ExtArgs>
    _count?: boolean | AuctionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $AuctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auction"
    objects: {
      listing: Prisma.$ListingPayload<ExtArgs>
      bids: Prisma.$BidPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listingId: string
      status: $Enums.AuctionStatus
      startingPrice: Prisma.Decimal
      bidIncrement: Prisma.Decimal
      currentPrice: Prisma.Decimal
      startTime: Date
      endTime: Date
      winnerId: string | null
      finalPrice: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auction"]>
    composites: {}
  }

  type AuctionGetPayload<S extends boolean | null | undefined | AuctionDefaultArgs> = $Result.GetResult<Prisma.$AuctionPayload, S>

  type AuctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuctionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuctionCountAggregateInputType | true
    }

  export interface AuctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auction'], meta: { name: 'Auction' } }
    /**
     * Find zero or one Auction that matches the filter.
     * @param {AuctionFindUniqueArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionFindUniqueArgs>(args: SelectSubset<T, AuctionFindUniqueArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Auction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuctionFindUniqueOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Auction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionFindFirstArgs>(args?: SelectSubset<T, AuctionFindFirstArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Auction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Auctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctions
     * const auctions = await prisma.auction.findMany()
     * 
     * // Get first 10 Auctions
     * const auctions = await prisma.auction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionWithIdOnly = await prisma.auction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionFindManyArgs>(args?: SelectSubset<T, AuctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Auction.
     * @param {AuctionCreateArgs} args - Arguments to create a Auction.
     * @example
     * // Create one Auction
     * const Auction = await prisma.auction.create({
     *   data: {
     *     // ... data to create a Auction
     *   }
     * })
     * 
     */
    create<T extends AuctionCreateArgs>(args: SelectSubset<T, AuctionCreateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Auctions.
     * @param {AuctionCreateManyArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionCreateManyArgs>(args?: SelectSubset<T, AuctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auctions and returns the data saved in the database.
     * @param {AuctionCreateManyAndReturnArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Auction.
     * @param {AuctionDeleteArgs} args - Arguments to delete one Auction.
     * @example
     * // Delete one Auction
     * const Auction = await prisma.auction.delete({
     *   where: {
     *     // ... filter to delete one Auction
     *   }
     * })
     * 
     */
    delete<T extends AuctionDeleteArgs>(args: SelectSubset<T, AuctionDeleteArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Auction.
     * @param {AuctionUpdateArgs} args - Arguments to update one Auction.
     * @example
     * // Update one Auction
     * const auction = await prisma.auction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionUpdateArgs>(args: SelectSubset<T, AuctionUpdateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Auctions.
     * @param {AuctionDeleteManyArgs} args - Arguments to filter Auctions to delete.
     * @example
     * // Delete a few Auctions
     * const { count } = await prisma.auction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionDeleteManyArgs>(args?: SelectSubset<T, AuctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionUpdateManyArgs>(args: SelectSubset<T, AuctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auction.
     * @param {AuctionUpsertArgs} args - Arguments to update or create a Auction.
     * @example
     * // Update or create a Auction
     * const auction = await prisma.auction.upsert({
     *   create: {
     *     // ... data to create a Auction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction we want to update
     *   }
     * })
     */
    upsert<T extends AuctionUpsertArgs>(args: SelectSubset<T, AuctionUpsertArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionCountArgs} args - Arguments to filter Auctions to count.
     * @example
     * // Count the number of Auctions
     * const count = await prisma.auction.count({
     *   where: {
     *     // ... the filter for the Auctions we want to count
     *   }
     * })
    **/
    count<T extends AuctionCountArgs>(
      args?: Subset<T, AuctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuctionAggregateArgs>(args: Subset<T, AuctionAggregateArgs>): Prisma.PrismaPromise<GetAuctionAggregateType<T>>

    /**
     * Group by Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionGroupByArgs} args - Group by arguments.
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
      T extends AuctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionGroupByArgs['orderBy'] }
        : { orderBy?: AuctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auction model
   */
  readonly fields: AuctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bids<T extends Auction$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Auction$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Auction model
   */ 
  interface AuctionFieldRefs {
    readonly id: FieldRef<"Auction", 'String'>
    readonly listingId: FieldRef<"Auction", 'String'>
    readonly status: FieldRef<"Auction", 'AuctionStatus'>
    readonly startingPrice: FieldRef<"Auction", 'Decimal'>
    readonly bidIncrement: FieldRef<"Auction", 'Decimal'>
    readonly currentPrice: FieldRef<"Auction", 'Decimal'>
    readonly startTime: FieldRef<"Auction", 'DateTime'>
    readonly endTime: FieldRef<"Auction", 'DateTime'>
    readonly winnerId: FieldRef<"Auction", 'String'>
    readonly finalPrice: FieldRef<"Auction", 'Decimal'>
    readonly createdAt: FieldRef<"Auction", 'DateTime'>
    readonly updatedAt: FieldRef<"Auction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auction findUnique
   */
  export type AuctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findUniqueOrThrow
   */
  export type AuctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findFirst
   */
  export type AuctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findFirstOrThrow
   */
  export type AuctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findMany
   */
  export type AuctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auctions to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction create
   */
  export type AuctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to create a Auction.
     */
    data: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
  }

  /**
   * Auction createMany
   */
  export type AuctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auction createManyAndReturn
   */
  export type AuctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auction update
   */
  export type AuctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to update a Auction.
     */
    data: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
    /**
     * Choose, which Auction to update.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction updateMany
   */
  export type AuctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
  }

  /**
   * Auction upsert
   */
  export type AuctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The filter to search for the Auction to update in case it exists.
     */
    where: AuctionWhereUniqueInput
    /**
     * In case the Auction found by the `where` argument doesn't exist, create a new Auction with this data.
     */
    create: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
    /**
     * In case the Auction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
  }

  /**
   * Auction delete
   */
  export type AuctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter which Auction to delete.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction deleteMany
   */
  export type AuctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctions to delete
     */
    where?: AuctionWhereInput
  }

  /**
   * Auction.bids
   */
  export type Auction$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Auction without action
   */
  export type AuctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    amount: Decimal | null
    maxAmount: Decimal | null
  }

  export type BidSumAggregateOutputType = {
    amount: Decimal | null
    maxAmount: Decimal | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    auctionId: string | null
    bidderId: string | null
    status: $Enums.BidStatus | null
    amount: Decimal | null
    isAutoBid: boolean | null
    maxAmount: Decimal | null
    createdAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    auctionId: string | null
    bidderId: string | null
    status: $Enums.BidStatus | null
    amount: Decimal | null
    isAutoBid: boolean | null
    maxAmount: Decimal | null
    createdAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    auctionId: number
    bidderId: number
    status: number
    amount: number
    isAutoBid: number
    maxAmount: number
    createdAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    amount?: true
    maxAmount?: true
  }

  export type BidSumAggregateInputType = {
    amount?: true
    maxAmount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    auctionId?: true
    bidderId?: true
    status?: true
    amount?: true
    isAutoBid?: true
    maxAmount?: true
    createdAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    auctionId?: true
    bidderId?: true
    status?: true
    amount?: true
    isAutoBid?: true
    maxAmount?: true
    createdAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    auctionId?: true
    bidderId?: true
    status?: true
    amount?: true
    isAutoBid?: true
    maxAmount?: true
    createdAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    auctionId: string
    bidderId: string
    status: $Enums.BidStatus
    amount: Decimal
    isAutoBid: boolean
    maxAmount: Decimal | null
    createdAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    bidderId?: boolean
    status?: boolean
    amount?: boolean
    isAutoBid?: boolean
    maxAmount?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    bidder?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Bid$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auctionId?: boolean
    bidderId?: boolean
    status?: boolean
    amount?: boolean
    isAutoBid?: boolean
    maxAmount?: boolean
    createdAt?: boolean
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    bidder?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    auctionId?: boolean
    bidderId?: boolean
    status?: boolean
    amount?: boolean
    isAutoBid?: boolean
    maxAmount?: boolean
    createdAt?: boolean
  }

  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    bidder?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Bid$paymentArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auction?: boolean | AuctionDefaultArgs<ExtArgs>
    bidder?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      auction: Prisma.$AuctionPayload<ExtArgs>
      bidder: Prisma.$UserPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auctionId: string
      bidderId: string
      status: $Enums.BidStatus
      amount: Prisma.Decimal
      isAutoBid: boolean
      maxAmount: Prisma.Decimal | null
      createdAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
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
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auction<T extends AuctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuctionDefaultArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bidder<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payment<T extends Bid$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Bid$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Bid model
   */ 
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly auctionId: FieldRef<"Bid", 'String'>
    readonly bidderId: FieldRef<"Bid", 'String'>
    readonly status: FieldRef<"Bid", 'BidStatus'>
    readonly amount: FieldRef<"Bid", 'Decimal'>
    readonly isAutoBid: FieldRef<"Bid", 'Boolean'>
    readonly maxAmount: FieldRef<"Bid", 'Decimal'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
  }

  /**
   * Bid.payment
   */
  export type Bid$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    totalAmount: Decimal | null
    platformFee: Decimal | null
    sellerAmount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    totalAmount: Decimal | null
    platformFee: Decimal | null
    sellerAmount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    bidId: string | null
    userId: string | null
    status: $Enums.PaymentStatus | null
    gateway: $Enums.PaymentGateway | null
    totalAmount: Decimal | null
    platformFee: Decimal | null
    sellerAmount: Decimal | null
    transactionId: string | null
    paidAt: Date | null
    releasedAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    bidId: string | null
    userId: string | null
    status: $Enums.PaymentStatus | null
    gateway: $Enums.PaymentGateway | null
    totalAmount: Decimal | null
    platformFee: Decimal | null
    sellerAmount: Decimal | null
    transactionId: string | null
    paidAt: Date | null
    releasedAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    bidId: number
    userId: number
    status: number
    gateway: number
    totalAmount: number
    platformFee: number
    sellerAmount: number
    transactionId: number
    gatewayResponse: number
    paidAt: number
    releasedAt: number
    refundedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    totalAmount?: true
    platformFee?: true
    sellerAmount?: true
  }

  export type PaymentSumAggregateInputType = {
    totalAmount?: true
    platformFee?: true
    sellerAmount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    bidId?: true
    userId?: true
    status?: true
    gateway?: true
    totalAmount?: true
    platformFee?: true
    sellerAmount?: true
    transactionId?: true
    paidAt?: true
    releasedAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    bidId?: true
    userId?: true
    status?: true
    gateway?: true
    totalAmount?: true
    platformFee?: true
    sellerAmount?: true
    transactionId?: true
    paidAt?: true
    releasedAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    bidId?: true
    userId?: true
    status?: true
    gateway?: true
    totalAmount?: true
    platformFee?: true
    sellerAmount?: true
    transactionId?: true
    gatewayResponse?: true
    paidAt?: true
    releasedAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    bidId: string
    userId: string
    status: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal
    platformFee: Decimal
    sellerAmount: Decimal
    transactionId: string | null
    gatewayResponse: JsonValue | null
    paidAt: Date | null
    releasedAt: Date | null
    refundedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bidId?: boolean
    userId?: boolean
    status?: boolean
    gateway?: boolean
    totalAmount?: boolean
    platformFee?: boolean
    sellerAmount?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    releasedAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bid?: boolean | BidDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bidId?: boolean
    userId?: boolean
    status?: boolean
    gateway?: boolean
    totalAmount?: boolean
    platformFee?: boolean
    sellerAmount?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    releasedAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bid?: boolean | BidDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    bidId?: boolean
    userId?: boolean
    status?: boolean
    gateway?: boolean
    totalAmount?: boolean
    platformFee?: boolean
    sellerAmount?: boolean
    transactionId?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    releasedAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | BidDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | BidDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      bid: Prisma.$BidPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bidId: string
      userId: string
      status: $Enums.PaymentStatus
      gateway: $Enums.PaymentGateway
      totalAmount: Prisma.Decimal
      platformFee: Prisma.Decimal
      sellerAmount: Prisma.Decimal
      transactionId: string | null
      gatewayResponse: Prisma.JsonValue | null
      paidAt: Date | null
      releasedAt: Date | null
      refundedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bid<T extends BidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BidDefaultArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly bidId: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly gateway: FieldRef<"Payment", 'PaymentGateway'>
    readonly totalAmount: FieldRef<"Payment", 'Decimal'>
    readonly platformFee: FieldRef<"Payment", 'Decimal'>
    readonly sellerAmount: FieldRef<"Payment", 'Decimal'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly gatewayResponse: FieldRef<"Payment", 'Json'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly releasedAt: FieldRef<"Payment", 'DateTime'>
    readonly refundedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Strike
   */

  export type AggregateStrike = {
    _count: StrikeCountAggregateOutputType | null
    _min: StrikeMinAggregateOutputType | null
    _max: StrikeMaxAggregateOutputType | null
  }

  export type StrikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: $Enums.StrikeReason | null
    description: string | null
    addedById: string | null
    createdAt: Date | null
  }

  export type StrikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reason: $Enums.StrikeReason | null
    description: string | null
    addedById: string | null
    createdAt: Date | null
  }

  export type StrikeCountAggregateOutputType = {
    id: number
    userId: number
    reason: number
    description: number
    addedById: number
    createdAt: number
    _all: number
  }


  export type StrikeMinAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    description?: true
    addedById?: true
    createdAt?: true
  }

  export type StrikeMaxAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    description?: true
    addedById?: true
    createdAt?: true
  }

  export type StrikeCountAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    description?: true
    addedById?: true
    createdAt?: true
    _all?: true
  }

  export type StrikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Strike to aggregate.
     */
    where?: StrikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strikes to fetch.
     */
    orderBy?: StrikeOrderByWithRelationInput | StrikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StrikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Strikes
    **/
    _count?: true | StrikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StrikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StrikeMaxAggregateInputType
  }

  export type GetStrikeAggregateType<T extends StrikeAggregateArgs> = {
        [P in keyof T & keyof AggregateStrike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStrike[P]>
      : GetScalarType<T[P], AggregateStrike[P]>
  }




  export type StrikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrikeWhereInput
    orderBy?: StrikeOrderByWithAggregationInput | StrikeOrderByWithAggregationInput[]
    by: StrikeScalarFieldEnum[] | StrikeScalarFieldEnum
    having?: StrikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StrikeCountAggregateInputType | true
    _min?: StrikeMinAggregateInputType
    _max?: StrikeMaxAggregateInputType
  }

  export type StrikeGroupByOutputType = {
    id: string
    userId: string
    reason: $Enums.StrikeReason
    description: string | null
    addedById: string
    createdAt: Date
    _count: StrikeCountAggregateOutputType | null
    _min: StrikeMinAggregateOutputType | null
    _max: StrikeMaxAggregateOutputType | null
  }

  type GetStrikeGroupByPayload<T extends StrikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StrikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StrikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StrikeGroupByOutputType[P]>
            : GetScalarType<T[P], StrikeGroupByOutputType[P]>
        }
      >
    >


  export type StrikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    description?: boolean
    addedById?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["strike"]>

  export type StrikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    description?: boolean
    addedById?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["strike"]>

  export type StrikeSelectScalar = {
    id?: boolean
    userId?: boolean
    reason?: boolean
    description?: boolean
    addedById?: boolean
    createdAt?: boolean
  }

  export type StrikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StrikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StrikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Strike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      addedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reason: $Enums.StrikeReason
      description: string | null
      addedById: string
      createdAt: Date
    }, ExtArgs["result"]["strike"]>
    composites: {}
  }

  type StrikeGetPayload<S extends boolean | null | undefined | StrikeDefaultArgs> = $Result.GetResult<Prisma.$StrikePayload, S>

  type StrikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StrikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StrikeCountAggregateInputType | true
    }

  export interface StrikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Strike'], meta: { name: 'Strike' } }
    /**
     * Find zero or one Strike that matches the filter.
     * @param {StrikeFindUniqueArgs} args - Arguments to find a Strike
     * @example
     * // Get one Strike
     * const strike = await prisma.strike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StrikeFindUniqueArgs>(args: SelectSubset<T, StrikeFindUniqueArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Strike that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StrikeFindUniqueOrThrowArgs} args - Arguments to find a Strike
     * @example
     * // Get one Strike
     * const strike = await prisma.strike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StrikeFindUniqueOrThrowArgs>(args: SelectSubset<T, StrikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Strike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrikeFindFirstArgs} args - Arguments to find a Strike
     * @example
     * // Get one Strike
     * const strike = await prisma.strike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StrikeFindFirstArgs>(args?: SelectSubset<T, StrikeFindFirstArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Strike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrikeFindFirstOrThrowArgs} args - Arguments to find a Strike
     * @example
     * // Get one Strike
     * const strike = await prisma.strike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StrikeFindFirstOrThrowArgs>(args?: SelectSubset<T, StrikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Strikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Strikes
     * const strikes = await prisma.strike.findMany()
     * 
     * // Get first 10 Strikes
     * const strikes = await prisma.strike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strikeWithIdOnly = await prisma.strike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StrikeFindManyArgs>(args?: SelectSubset<T, StrikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Strike.
     * @param {StrikeCreateArgs} args - Arguments to create a Strike.
     * @example
     * // Create one Strike
     * const Strike = await prisma.strike.create({
     *   data: {
     *     // ... data to create a Strike
     *   }
     * })
     * 
     */
    create<T extends StrikeCreateArgs>(args: SelectSubset<T, StrikeCreateArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Strikes.
     * @param {StrikeCreateManyArgs} args - Arguments to create many Strikes.
     * @example
     * // Create many Strikes
     * const strike = await prisma.strike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StrikeCreateManyArgs>(args?: SelectSubset<T, StrikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Strikes and returns the data saved in the database.
     * @param {StrikeCreateManyAndReturnArgs} args - Arguments to create many Strikes.
     * @example
     * // Create many Strikes
     * const strike = await prisma.strike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Strikes and only return the `id`
     * const strikeWithIdOnly = await prisma.strike.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StrikeCreateManyAndReturnArgs>(args?: SelectSubset<T, StrikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Strike.
     * @param {StrikeDeleteArgs} args - Arguments to delete one Strike.
     * @example
     * // Delete one Strike
     * const Strike = await prisma.strike.delete({
     *   where: {
     *     // ... filter to delete one Strike
     *   }
     * })
     * 
     */
    delete<T extends StrikeDeleteArgs>(args: SelectSubset<T, StrikeDeleteArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Strike.
     * @param {StrikeUpdateArgs} args - Arguments to update one Strike.
     * @example
     * // Update one Strike
     * const strike = await prisma.strike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StrikeUpdateArgs>(args: SelectSubset<T, StrikeUpdateArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Strikes.
     * @param {StrikeDeleteManyArgs} args - Arguments to filter Strikes to delete.
     * @example
     * // Delete a few Strikes
     * const { count } = await prisma.strike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StrikeDeleteManyArgs>(args?: SelectSubset<T, StrikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Strikes
     * const strike = await prisma.strike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StrikeUpdateManyArgs>(args: SelectSubset<T, StrikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Strike.
     * @param {StrikeUpsertArgs} args - Arguments to update or create a Strike.
     * @example
     * // Update or create a Strike
     * const strike = await prisma.strike.upsert({
     *   create: {
     *     // ... data to create a Strike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Strike we want to update
     *   }
     * })
     */
    upsert<T extends StrikeUpsertArgs>(args: SelectSubset<T, StrikeUpsertArgs<ExtArgs>>): Prisma__StrikeClient<$Result.GetResult<Prisma.$StrikePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Strikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrikeCountArgs} args - Arguments to filter Strikes to count.
     * @example
     * // Count the number of Strikes
     * const count = await prisma.strike.count({
     *   where: {
     *     // ... the filter for the Strikes we want to count
     *   }
     * })
    **/
    count<T extends StrikeCountArgs>(
      args?: Subset<T, StrikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StrikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Strike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StrikeAggregateArgs>(args: Subset<T, StrikeAggregateArgs>): Prisma.PrismaPromise<GetStrikeAggregateType<T>>

    /**
     * Group by Strike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrikeGroupByArgs} args - Group by arguments.
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
      T extends StrikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StrikeGroupByArgs['orderBy'] }
        : { orderBy?: StrikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StrikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Strike model
   */
  readonly fields: StrikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Strike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StrikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    addedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Strike model
   */ 
  interface StrikeFieldRefs {
    readonly id: FieldRef<"Strike", 'String'>
    readonly userId: FieldRef<"Strike", 'String'>
    readonly reason: FieldRef<"Strike", 'StrikeReason'>
    readonly description: FieldRef<"Strike", 'String'>
    readonly addedById: FieldRef<"Strike", 'String'>
    readonly createdAt: FieldRef<"Strike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Strike findUnique
   */
  export type StrikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * Filter, which Strike to fetch.
     */
    where: StrikeWhereUniqueInput
  }

  /**
   * Strike findUniqueOrThrow
   */
  export type StrikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * Filter, which Strike to fetch.
     */
    where: StrikeWhereUniqueInput
  }

  /**
   * Strike findFirst
   */
  export type StrikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * Filter, which Strike to fetch.
     */
    where?: StrikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strikes to fetch.
     */
    orderBy?: StrikeOrderByWithRelationInput | StrikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strikes.
     */
    cursor?: StrikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strikes.
     */
    distinct?: StrikeScalarFieldEnum | StrikeScalarFieldEnum[]
  }

  /**
   * Strike findFirstOrThrow
   */
  export type StrikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * Filter, which Strike to fetch.
     */
    where?: StrikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strikes to fetch.
     */
    orderBy?: StrikeOrderByWithRelationInput | StrikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strikes.
     */
    cursor?: StrikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strikes.
     */
    distinct?: StrikeScalarFieldEnum | StrikeScalarFieldEnum[]
  }

  /**
   * Strike findMany
   */
  export type StrikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * Filter, which Strikes to fetch.
     */
    where?: StrikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strikes to fetch.
     */
    orderBy?: StrikeOrderByWithRelationInput | StrikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Strikes.
     */
    cursor?: StrikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strikes.
     */
    skip?: number
    distinct?: StrikeScalarFieldEnum | StrikeScalarFieldEnum[]
  }

  /**
   * Strike create
   */
  export type StrikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Strike.
     */
    data: XOR<StrikeCreateInput, StrikeUncheckedCreateInput>
  }

  /**
   * Strike createMany
   */
  export type StrikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Strikes.
     */
    data: StrikeCreateManyInput | StrikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Strike createManyAndReturn
   */
  export type StrikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Strikes.
     */
    data: StrikeCreateManyInput | StrikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Strike update
   */
  export type StrikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Strike.
     */
    data: XOR<StrikeUpdateInput, StrikeUncheckedUpdateInput>
    /**
     * Choose, which Strike to update.
     */
    where: StrikeWhereUniqueInput
  }

  /**
   * Strike updateMany
   */
  export type StrikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Strikes.
     */
    data: XOR<StrikeUpdateManyMutationInput, StrikeUncheckedUpdateManyInput>
    /**
     * Filter which Strikes to update
     */
    where?: StrikeWhereInput
  }

  /**
   * Strike upsert
   */
  export type StrikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Strike to update in case it exists.
     */
    where: StrikeWhereUniqueInput
    /**
     * In case the Strike found by the `where` argument doesn't exist, create a new Strike with this data.
     */
    create: XOR<StrikeCreateInput, StrikeUncheckedCreateInput>
    /**
     * In case the Strike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StrikeUpdateInput, StrikeUncheckedUpdateInput>
  }

  /**
   * Strike delete
   */
  export type StrikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
    /**
     * Filter which Strike to delete.
     */
    where: StrikeWhereUniqueInput
  }

  /**
   * Strike deleteMany
   */
  export type StrikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Strikes to delete
     */
    where?: StrikeWhereInput
  }

  /**
   * Strike without action
   */
  export type StrikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Strike
     */
    select?: StrikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrikeInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    isRead: number
    data: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead: boolean
    data: JsonValue | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      title: string
      message: string
      isRead: boolean
      data: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    emailVerified: 'emailVerified',
    phoneVerified: 'phoneVerified',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    purchaseCount: 'purchaseCount',
    strikeCount: 'strikeCount',
    isBanned: 'isBanned',
    bannedAt: 'bannedAt',
    bannedReason: 'bannedReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const OTPScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    target: 'target',
    code: 'code',
    type: 'type',
    verified: 'verified',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SellerApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    idCardUrl: 'idCardUrl',
    profilePhotoUrl: 'profilePhotoUrl',
    reviewedBy: 'reviewedBy',
    rejectionReason: 'rejectionReason',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SellerApplicationScalarFieldEnum = (typeof SellerApplicationScalarFieldEnum)[keyof typeof SellerApplicationScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    sellerId: 'sellerId',
    status: 'status',
    title: 'title',
    description: 'description',
    category: 'category',
    condition: 'condition',
    brand: 'brand',
    photos: 'photos',
    videoUrl: 'videoUrl',
    location: 'location',
    shippingCost: 'shippingCost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const AuctionScalarFieldEnum: {
    id: 'id',
    listingId: 'listingId',
    status: 'status',
    startingPrice: 'startingPrice',
    bidIncrement: 'bidIncrement',
    currentPrice: 'currentPrice',
    startTime: 'startTime',
    endTime: 'endTime',
    winnerId: 'winnerId',
    finalPrice: 'finalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuctionScalarFieldEnum = (typeof AuctionScalarFieldEnum)[keyof typeof AuctionScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    auctionId: 'auctionId',
    bidderId: 'bidderId',
    status: 'status',
    amount: 'amount',
    isAutoBid: 'isAutoBid',
    maxAmount: 'maxAmount',
    createdAt: 'createdAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    bidId: 'bidId',
    userId: 'userId',
    status: 'status',
    gateway: 'gateway',
    totalAmount: 'totalAmount',
    platformFee: 'platformFee',
    sellerAmount: 'sellerAmount',
    transactionId: 'transactionId',
    gatewayResponse: 'gatewayResponse',
    paidAt: 'paidAt',
    releasedAt: 'releasedAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const StrikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reason: 'reason',
    description: 'description',
    addedById: 'addedById',
    createdAt: 'createdAt'
  };

  export type StrikeScalarFieldEnum = (typeof StrikeScalarFieldEnum)[keyof typeof StrikeScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'SellerApplicationStatus'
   */
  export type EnumSellerApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SellerApplicationStatus'>
    


  /**
   * Reference to a field of type 'SellerApplicationStatus[]'
   */
  export type ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SellerApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


  /**
   * Reference to a field of type 'ProductCategory'
   */
  export type EnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory'>
    


  /**
   * Reference to a field of type 'ProductCategory[]'
   */
  export type ListEnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory[]'>
    


  /**
   * Reference to a field of type 'ProductCondition'
   */
  export type EnumProductConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCondition'>
    


  /**
   * Reference to a field of type 'ProductCondition[]'
   */
  export type ListEnumProductConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCondition[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'AuctionStatus'
   */
  export type EnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus'>
    


  /**
   * Reference to a field of type 'AuctionStatus[]'
   */
  export type ListEnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus[]'>
    


  /**
   * Reference to a field of type 'BidStatus'
   */
  export type EnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus'>
    


  /**
   * Reference to a field of type 'BidStatus[]'
   */
  export type ListEnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentGateway'
   */
  export type EnumPaymentGatewayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentGateway'>
    


  /**
   * Reference to a field of type 'PaymentGateway[]'
   */
  export type ListEnumPaymentGatewayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentGateway[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'StrikeReason'
   */
  export type EnumStrikeReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StrikeReason'>
    


  /**
   * Reference to a field of type 'StrikeReason[]'
   */
  export type ListEnumStrikeReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StrikeReason[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    purchaseCount?: IntFilter<"User"> | number
    strikeCount?: IntFilter<"User"> | number
    isBanned?: BoolFilter<"User"> | boolean
    bannedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    bannedReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    sellerApplication?: XOR<SellerApplicationNullableRelationFilter, SellerApplicationWhereInput> | null
    listings?: ListingListRelationFilter
    bids?: BidListRelationFilter
    payments?: PaymentListRelationFilter
    strikes?: StrikeListRelationFilter
    strikesGiven?: StrikeListRelationFilter
    notifications?: NotificationListRelationFilter
    otps?: OTPListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    purchaseCount?: SortOrder
    strikeCount?: SortOrder
    isBanned?: SortOrder
    bannedAt?: SortOrderInput | SortOrder
    bannedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sellerApplication?: SellerApplicationOrderByWithRelationInput
    listings?: ListingOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    strikes?: StrikeOrderByRelationAggregateInput
    strikesGiven?: StrikeOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    otps?: OTPOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    purchaseCount?: IntFilter<"User"> | number
    strikeCount?: IntFilter<"User"> | number
    isBanned?: BoolFilter<"User"> | boolean
    bannedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    bannedReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    sellerApplication?: XOR<SellerApplicationNullableRelationFilter, SellerApplicationWhereInput> | null
    listings?: ListingListRelationFilter
    bids?: BidListRelationFilter
    payments?: PaymentListRelationFilter
    strikes?: StrikeListRelationFilter
    strikesGiven?: StrikeListRelationFilter
    notifications?: NotificationListRelationFilter
    otps?: OTPListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    purchaseCount?: SortOrder
    strikeCount?: SortOrder
    isBanned?: SortOrder
    bannedAt?: SortOrderInput | SortOrder
    bannedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    purchaseCount?: IntWithAggregatesFilter<"User"> | number
    strikeCount?: IntWithAggregatesFilter<"User"> | number
    isBanned?: BoolWithAggregatesFilter<"User"> | boolean
    bannedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    bannedReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type OTPWhereInput = {
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    id?: StringFilter<"OTP"> | string
    userId?: StringNullableFilter<"OTP"> | string | null
    target?: StringFilter<"OTP"> | string
    code?: StringFilter<"OTP"> | string
    type?: StringFilter<"OTP"> | string
    verified?: BoolFilter<"OTP"> | boolean
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type OTPOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    target?: SortOrder
    code?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OTPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    userId?: StringNullableFilter<"OTP"> | string | null
    target?: StringFilter<"OTP"> | string
    code?: StringFilter<"OTP"> | string
    type?: StringFilter<"OTP"> | string
    verified?: BoolFilter<"OTP"> | boolean
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type OTPOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    target?: SortOrder
    code?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OTPCountOrderByAggregateInput
    _max?: OTPMaxOrderByAggregateInput
    _min?: OTPMinOrderByAggregateInput
  }

  export type OTPScalarWhereWithAggregatesInput = {
    AND?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    OR?: OTPScalarWhereWithAggregatesInput[]
    NOT?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTP"> | string
    userId?: StringNullableWithAggregatesFilter<"OTP"> | string | null
    target?: StringWithAggregatesFilter<"OTP"> | string
    code?: StringWithAggregatesFilter<"OTP"> | string
    type?: StringWithAggregatesFilter<"OTP"> | string
    verified?: BoolWithAggregatesFilter<"OTP"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type SellerApplicationWhereInput = {
    AND?: SellerApplicationWhereInput | SellerApplicationWhereInput[]
    OR?: SellerApplicationWhereInput[]
    NOT?: SellerApplicationWhereInput | SellerApplicationWhereInput[]
    id?: StringFilter<"SellerApplication"> | string
    userId?: StringFilter<"SellerApplication"> | string
    status?: EnumSellerApplicationStatusFilter<"SellerApplication"> | $Enums.SellerApplicationStatus
    idCardUrl?: StringFilter<"SellerApplication"> | string
    profilePhotoUrl?: StringFilter<"SellerApplication"> | string
    reviewedBy?: StringNullableFilter<"SellerApplication"> | string | null
    rejectionReason?: StringNullableFilter<"SellerApplication"> | string | null
    reviewedAt?: DateTimeNullableFilter<"SellerApplication"> | Date | string | null
    createdAt?: DateTimeFilter<"SellerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"SellerApplication"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SellerApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    idCardUrl?: SortOrder
    profilePhotoUrl?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SellerApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SellerApplicationWhereInput | SellerApplicationWhereInput[]
    OR?: SellerApplicationWhereInput[]
    NOT?: SellerApplicationWhereInput | SellerApplicationWhereInput[]
    status?: EnumSellerApplicationStatusFilter<"SellerApplication"> | $Enums.SellerApplicationStatus
    idCardUrl?: StringFilter<"SellerApplication"> | string
    profilePhotoUrl?: StringFilter<"SellerApplication"> | string
    reviewedBy?: StringNullableFilter<"SellerApplication"> | string | null
    rejectionReason?: StringNullableFilter<"SellerApplication"> | string | null
    reviewedAt?: DateTimeNullableFilter<"SellerApplication"> | Date | string | null
    createdAt?: DateTimeFilter<"SellerApplication"> | Date | string
    updatedAt?: DateTimeFilter<"SellerApplication"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SellerApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    idCardUrl?: SortOrder
    profilePhotoUrl?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SellerApplicationCountOrderByAggregateInput
    _max?: SellerApplicationMaxOrderByAggregateInput
    _min?: SellerApplicationMinOrderByAggregateInput
  }

  export type SellerApplicationScalarWhereWithAggregatesInput = {
    AND?: SellerApplicationScalarWhereWithAggregatesInput | SellerApplicationScalarWhereWithAggregatesInput[]
    OR?: SellerApplicationScalarWhereWithAggregatesInput[]
    NOT?: SellerApplicationScalarWhereWithAggregatesInput | SellerApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SellerApplication"> | string
    userId?: StringWithAggregatesFilter<"SellerApplication"> | string
    status?: EnumSellerApplicationStatusWithAggregatesFilter<"SellerApplication"> | $Enums.SellerApplicationStatus
    idCardUrl?: StringWithAggregatesFilter<"SellerApplication"> | string
    profilePhotoUrl?: StringWithAggregatesFilter<"SellerApplication"> | string
    reviewedBy?: StringNullableWithAggregatesFilter<"SellerApplication"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"SellerApplication"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"SellerApplication"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SellerApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SellerApplication"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    category?: EnumProductCategoryFilter<"Listing"> | $Enums.ProductCategory
    condition?: EnumProductConditionNullableFilter<"Listing"> | $Enums.ProductCondition | null
    brand?: StringNullableFilter<"Listing"> | string | null
    photos?: StringNullableListFilter<"Listing">
    videoUrl?: StringFilter<"Listing"> | string
    location?: StringFilter<"Listing"> | string
    shippingCost?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    seller?: XOR<UserRelationFilter, UserWhereInput>
    auction?: XOR<AuctionNullableRelationFilter, AuctionWhereInput> | null
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    condition?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    photos?: SortOrder
    videoUrl?: SortOrder
    location?: SortOrder
    shippingCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seller?: UserOrderByWithRelationInput
    auction?: AuctionOrderByWithRelationInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    sellerId?: StringFilter<"Listing"> | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    category?: EnumProductCategoryFilter<"Listing"> | $Enums.ProductCategory
    condition?: EnumProductConditionNullableFilter<"Listing"> | $Enums.ProductCondition | null
    brand?: StringNullableFilter<"Listing"> | string | null
    photos?: StringNullableListFilter<"Listing">
    videoUrl?: StringFilter<"Listing"> | string
    location?: StringFilter<"Listing"> | string
    shippingCost?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    seller?: XOR<UserRelationFilter, UserWhereInput>
    auction?: XOR<AuctionNullableRelationFilter, AuctionWhereInput> | null
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    condition?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    photos?: SortOrder
    videoUrl?: SortOrder
    location?: SortOrder
    shippingCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    sellerId?: StringWithAggregatesFilter<"Listing"> | string
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    title?: StringWithAggregatesFilter<"Listing"> | string
    description?: StringWithAggregatesFilter<"Listing"> | string
    category?: EnumProductCategoryWithAggregatesFilter<"Listing"> | $Enums.ProductCategory
    condition?: EnumProductConditionNullableWithAggregatesFilter<"Listing"> | $Enums.ProductCondition | null
    brand?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    photos?: StringNullableListFilter<"Listing">
    videoUrl?: StringWithAggregatesFilter<"Listing"> | string
    location?: StringWithAggregatesFilter<"Listing"> | string
    shippingCost?: DecimalWithAggregatesFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type AuctionWhereInput = {
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    id?: StringFilter<"Auction"> | string
    listingId?: StringFilter<"Auction"> | string
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFilter<"Auction"> | Date | string
    endTime?: DateTimeFilter<"Auction"> | Date | string
    winnerId?: StringNullableFilter<"Auction"> | string | null
    finalPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    listing?: XOR<ListingRelationFilter, ListingWhereInput>
    bids?: BidListRelationFilter
  }

  export type AuctionOrderByWithRelationInput = {
    id?: SortOrder
    listingId?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    bidIncrement?: SortOrder
    currentPrice?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    finalPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listing?: ListingOrderByWithRelationInput
    bids?: BidOrderByRelationAggregateInput
  }

  export type AuctionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listingId?: string
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    status?: EnumAuctionStatusFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFilter<"Auction"> | Date | string
    endTime?: DateTimeFilter<"Auction"> | Date | string
    winnerId?: StringNullableFilter<"Auction"> | string | null
    finalPrice?: DecimalNullableFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    updatedAt?: DateTimeFilter<"Auction"> | Date | string
    listing?: XOR<ListingRelationFilter, ListingWhereInput>
    bids?: BidListRelationFilter
  }, "id" | "listingId">

  export type AuctionOrderByWithAggregationInput = {
    id?: SortOrder
    listingId?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    bidIncrement?: SortOrder
    currentPrice?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    finalPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuctionCountOrderByAggregateInput
    _avg?: AuctionAvgOrderByAggregateInput
    _max?: AuctionMaxOrderByAggregateInput
    _min?: AuctionMinOrderByAggregateInput
    _sum?: AuctionSumOrderByAggregateInput
  }

  export type AuctionScalarWhereWithAggregatesInput = {
    AND?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    OR?: AuctionScalarWhereWithAggregatesInput[]
    NOT?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auction"> | string
    listingId?: StringWithAggregatesFilter<"Auction"> | string
    status?: EnumAuctionStatusWithAggregatesFilter<"Auction"> | $Enums.AuctionStatus
    startingPrice?: DecimalWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    winnerId?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    finalPrice?: DecimalNullableWithAggregatesFilter<"Auction"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    auctionId?: StringFilter<"Bid"> | string
    bidderId?: StringFilter<"Bid"> | string
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    amount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
    bidder?: XOR<UserRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    auction?: AuctionOrderByWithRelationInput
    bidder?: UserOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    auctionId?: StringFilter<"Bid"> | string
    bidderId?: StringFilter<"Bid"> | string
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    amount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    auction?: XOR<AuctionRelationFilter, AuctionWhereInput>
    bidder?: XOR<UserRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    auctionId?: StringWithAggregatesFilter<"Bid"> | string
    bidderId?: StringWithAggregatesFilter<"Bid"> | string
    status?: EnumBidStatusWithAggregatesFilter<"Bid"> | $Enums.BidStatus
    amount?: DecimalWithAggregatesFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolWithAggregatesFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableWithAggregatesFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    bidId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFilter<"Payment"> | $Enums.PaymentGateway
    totalAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    bid?: XOR<BidRelationFilter, BidWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    bidId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    totalAmount?: SortOrder
    platformFee?: SortOrder
    sellerAmount?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bid?: BidOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bidId?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFilter<"Payment"> | $Enums.PaymentGateway
    totalAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    gatewayResponse?: JsonNullableFilter<"Payment">
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    bid?: XOR<BidRelationFilter, BidWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "bidId" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    bidId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    totalAmount?: SortOrder
    platformFee?: SortOrder
    sellerAmount?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    bidId?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayWithAggregatesFilter<"Payment"> | $Enums.PaymentGateway
    totalAmount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableWithAggregatesFilter<"Payment">
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    releasedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type StrikeWhereInput = {
    AND?: StrikeWhereInput | StrikeWhereInput[]
    OR?: StrikeWhereInput[]
    NOT?: StrikeWhereInput | StrikeWhereInput[]
    id?: StringFilter<"Strike"> | string
    userId?: StringFilter<"Strike"> | string
    reason?: EnumStrikeReasonFilter<"Strike"> | $Enums.StrikeReason
    description?: StringNullableFilter<"Strike"> | string | null
    addedById?: StringFilter<"Strike"> | string
    createdAt?: DateTimeFilter<"Strike"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    addedBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type StrikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    description?: SortOrderInput | SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    addedBy?: UserOrderByWithRelationInput
  }

  export type StrikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StrikeWhereInput | StrikeWhereInput[]
    OR?: StrikeWhereInput[]
    NOT?: StrikeWhereInput | StrikeWhereInput[]
    userId?: StringFilter<"Strike"> | string
    reason?: EnumStrikeReasonFilter<"Strike"> | $Enums.StrikeReason
    description?: StringNullableFilter<"Strike"> | string | null
    addedById?: StringFilter<"Strike"> | string
    createdAt?: DateTimeFilter<"Strike"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    addedBy?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type StrikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    description?: SortOrderInput | SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    _count?: StrikeCountOrderByAggregateInput
    _max?: StrikeMaxOrderByAggregateInput
    _min?: StrikeMinOrderByAggregateInput
  }

  export type StrikeScalarWhereWithAggregatesInput = {
    AND?: StrikeScalarWhereWithAggregatesInput | StrikeScalarWhereWithAggregatesInput[]
    OR?: StrikeScalarWhereWithAggregatesInput[]
    NOT?: StrikeScalarWhereWithAggregatesInput | StrikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Strike"> | string
    userId?: StringWithAggregatesFilter<"Strike"> | string
    reason?: EnumStrikeReasonWithAggregatesFilter<"Strike"> | $Enums.StrikeReason
    description?: StringNullableWithAggregatesFilter<"Strike"> | string | null
    addedById?: StringWithAggregatesFilter<"Strike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Strike"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    data?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    data?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    data?: JsonNullableWithAggregatesFilter<"Notification">
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OTPCreateInput = {
    id?: string
    target: string
    code: string
    type: string
    verified?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutOtpsInput
  }

  export type OTPUncheckedCreateInput = {
    id?: string
    userId?: string | null
    target: string
    code: string
    type: string
    verified?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOtpsNestedInput
  }

  export type OTPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateManyInput = {
    id?: string
    userId?: string | null
    target: string
    code: string
    type: string
    verified?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    target?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SellerApplicationCreateInput = {
    id?: string
    status?: $Enums.SellerApplicationStatus
    idCardUrl: string
    profilePhotoUrl: string
    reviewedBy?: string | null
    rejectionReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSellerApplicationInput
  }

  export type SellerApplicationUncheckedCreateInput = {
    id?: string
    userId: string
    status?: $Enums.SellerApplicationStatus
    idCardUrl: string
    profilePhotoUrl: string
    reviewedBy?: string | null
    rejectionReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSellerApplicationStatusFieldUpdateOperationsInput | $Enums.SellerApplicationStatus
    idCardUrl?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSellerApplicationNestedInput
  }

  export type SellerApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSellerApplicationStatusFieldUpdateOperationsInput | $Enums.SellerApplicationStatus
    idCardUrl?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerApplicationCreateManyInput = {
    id?: string
    userId: string
    status?: $Enums.SellerApplicationStatus
    idCardUrl: string
    profilePhotoUrl: string
    reviewedBy?: string | null
    rejectionReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSellerApplicationStatusFieldUpdateOperationsInput | $Enums.SellerApplicationStatus
    idCardUrl?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSellerApplicationStatusFieldUpdateOperationsInput | $Enums.SellerApplicationStatus
    idCardUrl?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    id?: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: UserCreateNestedOneWithoutListingsInput
    auction?: AuctionCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    sellerId: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    auction?: AuctionUncheckedCreateNestedOneWithoutListingInput
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutListingsNestedInput
    auction?: AuctionUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUncheckedUpdateOneWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: string
    sellerId: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionCreateInput = {
    id?: string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    bidIncrement: Decimal | DecimalJsLike | number | string
    currentPrice: Decimal | DecimalJsLike | number | string
    startTime: Date | string
    endTime: Date | string
    winnerId?: string | null
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutAuctionInput
    bids?: BidCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateInput = {
    id?: string
    listingId: string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    bidIncrement: Decimal | DecimalJsLike | number | string
    currentPrice: Decimal | DecimalJsLike | number | string
    startTime: Date | string
    endTime: Date | string
    winnerId?: string | null
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutAuctionNestedInput
    bids?: BidUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionCreateManyInput = {
    id?: string
    listingId: string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    bidIncrement: Decimal | DecimalJsLike | number | string
    currentPrice: Decimal | DecimalJsLike | number | string
    startTime: Date | string
    endTime: Date | string
    winnerId?: string | null
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuctionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutBidsInput
    bidder: UserCreateNestedOneWithoutBidsInput
    payment?: PaymentCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    auctionId: string
    bidderId: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutBidsNestedInput
    bidder?: UserUpdateOneRequiredWithoutBidsNestedInput
    payment?: PaymentUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBidNestedInput
  }

  export type BidCreateManyInput = {
    id?: string
    auctionId: string
    bidderId: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    bidId: string
    userId: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    bidId: string
    userId: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrikeCreateInput = {
    id?: string
    reason: $Enums.StrikeReason
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStrikesInput
    addedBy: UserCreateNestedOneWithoutStrikesGivenInput
  }

  export type StrikeUncheckedCreateInput = {
    id?: string
    userId: string
    reason: $Enums.StrikeReason
    description?: string | null
    addedById: string
    createdAt?: Date | string
  }

  export type StrikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStrikesNestedInput
    addedBy?: UserUpdateOneRequiredWithoutStrikesGivenNestedInput
  }

  export type StrikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrikeCreateManyInput = {
    id?: string
    userId: string
    reason: $Enums.StrikeReason
    description?: string | null
    addedById: string
    createdAt?: Date | string
  }

  export type StrikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SellerApplicationNullableRelationFilter = {
    is?: SellerApplicationWhereInput | null
    isNot?: SellerApplicationWhereInput | null
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type StrikeListRelationFilter = {
    every?: StrikeWhereInput
    some?: StrikeWhereInput
    none?: StrikeWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type OTPListRelationFilter = {
    every?: OTPWhereInput
    some?: OTPWhereInput
    none?: OTPWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StrikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OTPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    purchaseCount?: SortOrder
    strikeCount?: SortOrder
    isBanned?: SortOrder
    bannedAt?: SortOrder
    bannedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    purchaseCount?: SortOrder
    strikeCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    purchaseCount?: SortOrder
    strikeCount?: SortOrder
    isBanned?: SortOrder
    bannedAt?: SortOrder
    bannedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    purchaseCount?: SortOrder
    strikeCount?: SortOrder
    isBanned?: SortOrder
    bannedAt?: SortOrder
    bannedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    purchaseCount?: SortOrder
    strikeCount?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OTPCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    target?: SortOrder
    code?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    target?: SortOrder
    code?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    target?: SortOrder
    code?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSellerApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SellerApplicationStatus | EnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSellerApplicationStatusFilter<$PrismaModel> | $Enums.SellerApplicationStatus
  }

  export type SellerApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    idCardUrl?: SortOrder
    profilePhotoUrl?: SortOrder
    reviewedBy?: SortOrder
    rejectionReason?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SellerApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    idCardUrl?: SortOrder
    profilePhotoUrl?: SortOrder
    reviewedBy?: SortOrder
    rejectionReason?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SellerApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    idCardUrl?: SortOrder
    profilePhotoUrl?: SortOrder
    reviewedBy?: SortOrder
    rejectionReason?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSellerApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SellerApplicationStatus | EnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSellerApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.SellerApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSellerApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumSellerApplicationStatusFilter<$PrismaModel>
  }

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type EnumProductCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryFilter<$PrismaModel> | $Enums.ProductCategory
  }

  export type EnumProductConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductConditionNullableFilter<$PrismaModel> | $Enums.ProductCondition | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AuctionNullableRelationFilter = {
    is?: AuctionWhereInput | null
    isNot?: AuctionWhereInput | null
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    brand?: SortOrder
    photos?: SortOrder
    videoUrl?: SortOrder
    location?: SortOrder
    shippingCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    shippingCost?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    brand?: SortOrder
    videoUrl?: SortOrder
    location?: SortOrder
    shippingCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    brand?: SortOrder
    videoUrl?: SortOrder
    location?: SortOrder
    shippingCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    shippingCost?: SortOrder
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type EnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProductCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>
  }

  export type EnumProductConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductCondition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductConditionNullableFilter<$PrismaModel>
    _max?: NestedEnumProductConditionNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ListingRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type AuctionCountOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    bidIncrement?: SortOrder
    currentPrice?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    winnerId?: SortOrder
    finalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionAvgOrderByAggregateInput = {
    startingPrice?: SortOrder
    bidIncrement?: SortOrder
    currentPrice?: SortOrder
    finalPrice?: SortOrder
  }

  export type AuctionMaxOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    bidIncrement?: SortOrder
    currentPrice?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    winnerId?: SortOrder
    finalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionMinOrderByAggregateInput = {
    id?: SortOrder
    listingId?: SortOrder
    status?: SortOrder
    startingPrice?: SortOrder
    bidIncrement?: SortOrder
    currentPrice?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    winnerId?: SortOrder
    finalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuctionSumOrderByAggregateInput = {
    startingPrice?: SortOrder
    bidIncrement?: SortOrder
    currentPrice?: SortOrder
    finalPrice?: SortOrder
  }

  export type EnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type AuctionRelationFilter = {
    is?: AuctionWhereInput
    isNot?: AuctionWhereInput
  }

  export type PaymentNullableRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    amount?: SortOrder
    maxAmount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    auctionId?: SortOrder
    bidderId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    isAutoBid?: SortOrder
    maxAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    amount?: SortOrder
    maxAmount?: SortOrder
  }

  export type EnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentGatewayFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayFilter<$PrismaModel> | $Enums.PaymentGateway
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BidRelationFilter = {
    is?: BidWhereInput
    isNot?: BidWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    bidId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    totalAmount?: SortOrder
    platformFee?: SortOrder
    sellerAmount?: SortOrder
    transactionId?: SortOrder
    gatewayResponse?: SortOrder
    paidAt?: SortOrder
    releasedAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    platformFee?: SortOrder
    sellerAmount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    bidId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    totalAmount?: SortOrder
    platformFee?: SortOrder
    sellerAmount?: SortOrder
    transactionId?: SortOrder
    paidAt?: SortOrder
    releasedAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    bidId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    totalAmount?: SortOrder
    platformFee?: SortOrder
    sellerAmount?: SortOrder
    transactionId?: SortOrder
    paidAt?: SortOrder
    releasedAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    platformFee?: SortOrder
    sellerAmount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentGatewayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel> | $Enums.PaymentGateway
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentGatewayFilter<$PrismaModel>
    _max?: NestedEnumPaymentGatewayFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumStrikeReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.StrikeReason | EnumStrikeReasonFieldRefInput<$PrismaModel>
    in?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumStrikeReasonFilter<$PrismaModel> | $Enums.StrikeReason
  }

  export type StrikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
  }

  export type StrikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
  }

  export type StrikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStrikeReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StrikeReason | EnumStrikeReasonFieldRefInput<$PrismaModel>
    in?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumStrikeReasonWithAggregatesFilter<$PrismaModel> | $Enums.StrikeReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStrikeReasonFilter<$PrismaModel>
    _max?: NestedEnumStrikeReasonFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SellerApplicationCreateNestedOneWithoutUserInput = {
    create?: XOR<SellerApplicationCreateWithoutUserInput, SellerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerApplicationCreateOrConnectWithoutUserInput
    connect?: SellerApplicationWhereUniqueInput
  }

  export type ListingCreateNestedManyWithoutSellerInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutBidderInput = {
    create?: XOR<BidCreateWithoutBidderInput, BidUncheckedCreateWithoutBidderInput> | BidCreateWithoutBidderInput[] | BidUncheckedCreateWithoutBidderInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBidderInput | BidCreateOrConnectWithoutBidderInput[]
    createMany?: BidCreateManyBidderInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StrikeCreateNestedManyWithoutUserInput = {
    create?: XOR<StrikeCreateWithoutUserInput, StrikeUncheckedCreateWithoutUserInput> | StrikeCreateWithoutUserInput[] | StrikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutUserInput | StrikeCreateOrConnectWithoutUserInput[]
    createMany?: StrikeCreateManyUserInputEnvelope
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
  }

  export type StrikeCreateNestedManyWithoutAddedByInput = {
    create?: XOR<StrikeCreateWithoutAddedByInput, StrikeUncheckedCreateWithoutAddedByInput> | StrikeCreateWithoutAddedByInput[] | StrikeUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutAddedByInput | StrikeCreateOrConnectWithoutAddedByInput[]
    createMany?: StrikeCreateManyAddedByInputEnvelope
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type OTPCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SellerApplicationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SellerApplicationCreateWithoutUserInput, SellerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerApplicationCreateOrConnectWithoutUserInput
    connect?: SellerApplicationWhereUniqueInput
  }

  export type ListingUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutBidderInput = {
    create?: XOR<BidCreateWithoutBidderInput, BidUncheckedCreateWithoutBidderInput> | BidCreateWithoutBidderInput[] | BidUncheckedCreateWithoutBidderInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBidderInput | BidCreateOrConnectWithoutBidderInput[]
    createMany?: BidCreateManyBidderInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StrikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StrikeCreateWithoutUserInput, StrikeUncheckedCreateWithoutUserInput> | StrikeCreateWithoutUserInput[] | StrikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutUserInput | StrikeCreateOrConnectWithoutUserInput[]
    createMany?: StrikeCreateManyUserInputEnvelope
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
  }

  export type StrikeUncheckedCreateNestedManyWithoutAddedByInput = {
    create?: XOR<StrikeCreateWithoutAddedByInput, StrikeUncheckedCreateWithoutAddedByInput> | StrikeCreateWithoutAddedByInput[] | StrikeUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutAddedByInput | StrikeCreateOrConnectWithoutAddedByInput[]
    createMany?: StrikeCreateManyAddedByInputEnvelope
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type OTPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
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

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SellerApplicationUpdateOneWithoutUserNestedInput = {
    create?: XOR<SellerApplicationCreateWithoutUserInput, SellerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerApplicationCreateOrConnectWithoutUserInput
    upsert?: SellerApplicationUpsertWithoutUserInput
    disconnect?: SellerApplicationWhereInput | boolean
    delete?: SellerApplicationWhereInput | boolean
    connect?: SellerApplicationWhereUniqueInput
    update?: XOR<XOR<SellerApplicationUpdateToOneWithWhereWithoutUserInput, SellerApplicationUpdateWithoutUserInput>, SellerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ListingUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutSellerInput | ListingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutSellerInput | ListingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutSellerInput | ListingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type BidUpdateManyWithoutBidderNestedInput = {
    create?: XOR<BidCreateWithoutBidderInput, BidUncheckedCreateWithoutBidderInput> | BidCreateWithoutBidderInput[] | BidUncheckedCreateWithoutBidderInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBidderInput | BidCreateOrConnectWithoutBidderInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutBidderInput | BidUpsertWithWhereUniqueWithoutBidderInput[]
    createMany?: BidCreateManyBidderInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutBidderInput | BidUpdateWithWhereUniqueWithoutBidderInput[]
    updateMany?: BidUpdateManyWithWhereWithoutBidderInput | BidUpdateManyWithWhereWithoutBidderInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type StrikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<StrikeCreateWithoutUserInput, StrikeUncheckedCreateWithoutUserInput> | StrikeCreateWithoutUserInput[] | StrikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutUserInput | StrikeCreateOrConnectWithoutUserInput[]
    upsert?: StrikeUpsertWithWhereUniqueWithoutUserInput | StrikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StrikeCreateManyUserInputEnvelope
    set?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    disconnect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    delete?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    update?: StrikeUpdateWithWhereUniqueWithoutUserInput | StrikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StrikeUpdateManyWithWhereWithoutUserInput | StrikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StrikeScalarWhereInput | StrikeScalarWhereInput[]
  }

  export type StrikeUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<StrikeCreateWithoutAddedByInput, StrikeUncheckedCreateWithoutAddedByInput> | StrikeCreateWithoutAddedByInput[] | StrikeUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutAddedByInput | StrikeCreateOrConnectWithoutAddedByInput[]
    upsert?: StrikeUpsertWithWhereUniqueWithoutAddedByInput | StrikeUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: StrikeCreateManyAddedByInputEnvelope
    set?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    disconnect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    delete?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    update?: StrikeUpdateWithWhereUniqueWithoutAddedByInput | StrikeUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: StrikeUpdateManyWithWhereWithoutAddedByInput | StrikeUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: StrikeScalarWhereInput | StrikeScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type OTPUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SellerApplicationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SellerApplicationCreateWithoutUserInput, SellerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: SellerApplicationCreateOrConnectWithoutUserInput
    upsert?: SellerApplicationUpsertWithoutUserInput
    disconnect?: SellerApplicationWhereInput | boolean
    delete?: SellerApplicationWhereInput | boolean
    connect?: SellerApplicationWhereUniqueInput
    update?: XOR<XOR<SellerApplicationUpdateToOneWithWhereWithoutUserInput, SellerApplicationUpdateWithoutUserInput>, SellerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ListingUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput> | ListingCreateWithoutSellerInput[] | ListingUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutSellerInput | ListingCreateOrConnectWithoutSellerInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutSellerInput | ListingUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: ListingCreateManySellerInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutSellerInput | ListingUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutSellerInput | ListingUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutBidderNestedInput = {
    create?: XOR<BidCreateWithoutBidderInput, BidUncheckedCreateWithoutBidderInput> | BidCreateWithoutBidderInput[] | BidUncheckedCreateWithoutBidderInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBidderInput | BidCreateOrConnectWithoutBidderInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutBidderInput | BidUpsertWithWhereUniqueWithoutBidderInput[]
    createMany?: BidCreateManyBidderInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutBidderInput | BidUpdateWithWhereUniqueWithoutBidderInput[]
    updateMany?: BidUpdateManyWithWhereWithoutBidderInput | BidUpdateManyWithWhereWithoutBidderInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type StrikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StrikeCreateWithoutUserInput, StrikeUncheckedCreateWithoutUserInput> | StrikeCreateWithoutUserInput[] | StrikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutUserInput | StrikeCreateOrConnectWithoutUserInput[]
    upsert?: StrikeUpsertWithWhereUniqueWithoutUserInput | StrikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StrikeCreateManyUserInputEnvelope
    set?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    disconnect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    delete?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    update?: StrikeUpdateWithWhereUniqueWithoutUserInput | StrikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StrikeUpdateManyWithWhereWithoutUserInput | StrikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StrikeScalarWhereInput | StrikeScalarWhereInput[]
  }

  export type StrikeUncheckedUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<StrikeCreateWithoutAddedByInput, StrikeUncheckedCreateWithoutAddedByInput> | StrikeCreateWithoutAddedByInput[] | StrikeUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: StrikeCreateOrConnectWithoutAddedByInput | StrikeCreateOrConnectWithoutAddedByInput[]
    upsert?: StrikeUpsertWithWhereUniqueWithoutAddedByInput | StrikeUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: StrikeCreateManyAddedByInputEnvelope
    set?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    disconnect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    delete?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    connect?: StrikeWhereUniqueInput | StrikeWhereUniqueInput[]
    update?: StrikeUpdateWithWhereUniqueWithoutAddedByInput | StrikeUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: StrikeUpdateManyWithWhereWithoutAddedByInput | StrikeUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: StrikeScalarWhereInput | StrikeScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type OTPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutOtpsInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutOtpsNestedInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    upsert?: UserUpsertWithoutOtpsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpsInput, UserUpdateWithoutOtpsInput>, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserCreateNestedOneWithoutSellerApplicationInput = {
    create?: XOR<UserCreateWithoutSellerApplicationInput, UserUncheckedCreateWithoutSellerApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerApplicationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSellerApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.SellerApplicationStatus
  }

  export type UserUpdateOneRequiredWithoutSellerApplicationNestedInput = {
    create?: XOR<UserCreateWithoutSellerApplicationInput, UserUncheckedCreateWithoutSellerApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerApplicationInput
    upsert?: UserUpsertWithoutSellerApplicationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSellerApplicationInput, UserUpdateWithoutSellerApplicationInput>, UserUncheckedUpdateWithoutSellerApplicationInput>
  }

  export type ListingCreatephotosInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type AuctionCreateNestedOneWithoutListingInput = {
    create?: XOR<AuctionCreateWithoutListingInput, AuctionUncheckedCreateWithoutListingInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutListingInput
    connect?: AuctionWhereUniqueInput
  }

  export type AuctionUncheckedCreateNestedOneWithoutListingInput = {
    create?: XOR<AuctionCreateWithoutListingInput, AuctionUncheckedCreateWithoutListingInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutListingInput
    connect?: AuctionWhereUniqueInput
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type EnumProductCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ProductCategory
  }

  export type NullableEnumProductConditionFieldUpdateOperationsInput = {
    set?: $Enums.ProductCondition | null
  }

  export type ListingUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type AuctionUpdateOneWithoutListingNestedInput = {
    create?: XOR<AuctionCreateWithoutListingInput, AuctionUncheckedCreateWithoutListingInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutListingInput
    upsert?: AuctionUpsertWithoutListingInput
    disconnect?: AuctionWhereInput | boolean
    delete?: AuctionWhereInput | boolean
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutListingInput, AuctionUpdateWithoutListingInput>, AuctionUncheckedUpdateWithoutListingInput>
  }

  export type AuctionUncheckedUpdateOneWithoutListingNestedInput = {
    create?: XOR<AuctionCreateWithoutListingInput, AuctionUncheckedCreateWithoutListingInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutListingInput
    upsert?: AuctionUpsertWithoutListingInput
    disconnect?: AuctionWhereInput | boolean
    delete?: AuctionWhereInput | boolean
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutListingInput, AuctionUpdateWithoutListingInput>, AuctionUncheckedUpdateWithoutListingInput>
  }

  export type ListingCreateNestedOneWithoutAuctionInput = {
    create?: XOR<ListingCreateWithoutAuctionInput, ListingUncheckedCreateWithoutAuctionInput>
    connectOrCreate?: ListingCreateOrConnectWithoutAuctionInput
    connect?: ListingWhereUniqueInput
  }

  export type BidCreateNestedManyWithoutAuctionInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutAuctionInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type EnumAuctionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AuctionStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ListingUpdateOneRequiredWithoutAuctionNestedInput = {
    create?: XOR<ListingCreateWithoutAuctionInput, ListingUncheckedCreateWithoutAuctionInput>
    connectOrCreate?: ListingCreateOrConnectWithoutAuctionInput
    upsert?: ListingUpsertWithoutAuctionInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutAuctionInput, ListingUpdateWithoutAuctionInput>, ListingUncheckedUpdateWithoutAuctionInput>
  }

  export type BidUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAuctionInput | BidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAuctionInput | BidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAuctionInput | BidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutAuctionNestedInput = {
    create?: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput> | BidCreateWithoutAuctionInput[] | BidUncheckedCreateWithoutAuctionInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAuctionInput | BidCreateOrConnectWithoutAuctionInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAuctionInput | BidUpsertWithWhereUniqueWithoutAuctionInput[]
    createMany?: BidCreateManyAuctionInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAuctionInput | BidUpdateWithWhereUniqueWithoutAuctionInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAuctionInput | BidUpdateManyWithWhereWithoutAuctionInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type AuctionCreateNestedOneWithoutBidsInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    connect?: AuctionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBidInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutBidInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumBidStatusFieldUpdateOperationsInput = {
    set?: $Enums.BidStatus
  }

  export type AuctionUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AuctionCreateOrConnectWithoutBidsInput
    upsert?: AuctionUpsertWithoutBidsInput
    connect?: AuctionWhereUniqueInput
    update?: XOR<XOR<AuctionUpdateToOneWithWhereWithoutBidsInput, AuctionUpdateWithoutBidsInput>, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    upsert?: UserUpsertWithoutBidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>, UserUncheckedUpdateWithoutBidsInput>
  }

  export type PaymentUpdateOneWithoutBidNestedInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    upsert?: PaymentUpsertWithoutBidInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBidInput, PaymentUpdateWithoutBidInput>, PaymentUncheckedUpdateWithoutBidInput>
  }

  export type PaymentUncheckedUpdateOneWithoutBidNestedInput = {
    create?: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBidInput
    upsert?: PaymentUpsertWithoutBidInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBidInput, PaymentUpdateWithoutBidInput>, PaymentUncheckedUpdateWithoutBidInput>
  }

  export type BidCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BidCreateOrConnectWithoutPaymentInput
    connect?: BidWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPaymentGatewayFieldUpdateOperationsInput = {
    set?: $Enums.PaymentGateway
  }

  export type BidUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BidCreateOrConnectWithoutPaymentInput
    upsert?: BidUpsertWithoutPaymentInput
    connect?: BidWhereUniqueInput
    update?: XOR<XOR<BidUpdateToOneWithWhereWithoutPaymentInput, BidUpdateWithoutPaymentInput>, BidUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutStrikesInput = {
    create?: XOR<UserCreateWithoutStrikesInput, UserUncheckedCreateWithoutStrikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStrikesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStrikesGivenInput = {
    create?: XOR<UserCreateWithoutStrikesGivenInput, UserUncheckedCreateWithoutStrikesGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutStrikesGivenInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStrikeReasonFieldUpdateOperationsInput = {
    set?: $Enums.StrikeReason
  }

  export type UserUpdateOneRequiredWithoutStrikesNestedInput = {
    create?: XOR<UserCreateWithoutStrikesInput, UserUncheckedCreateWithoutStrikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStrikesInput
    upsert?: UserUpsertWithoutStrikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStrikesInput, UserUpdateWithoutStrikesInput>, UserUncheckedUpdateWithoutStrikesInput>
  }

  export type UserUpdateOneRequiredWithoutStrikesGivenNestedInput = {
    create?: XOR<UserCreateWithoutStrikesGivenInput, UserUncheckedCreateWithoutStrikesGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutStrikesGivenInput
    upsert?: UserUpsertWithoutStrikesGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStrikesGivenInput, UserUpdateWithoutStrikesGivenInput>, UserUncheckedUpdateWithoutStrikesGivenInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumSellerApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SellerApplicationStatus | EnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSellerApplicationStatusFilter<$PrismaModel> | $Enums.SellerApplicationStatus
  }

  export type NestedEnumSellerApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SellerApplicationStatus | EnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SellerApplicationStatus[] | ListEnumSellerApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSellerApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.SellerApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSellerApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumSellerApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedEnumProductCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryFilter<$PrismaModel> | $Enums.ProductCategory
  }

  export type NestedEnumProductConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductConditionNullableFilter<$PrismaModel> | $Enums.ProductCondition | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProductCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>
  }

  export type NestedEnumProductConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductCondition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductConditionNullableFilter<$PrismaModel>
    _max?: NestedEnumProductConditionNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAuctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusFilter<$PrismaModel> | $Enums.AuctionStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuctionStatus | EnumAuctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuctionStatus[] | ListEnumAuctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAuctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AuctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuctionStatusFilter<$PrismaModel>
    _max?: NestedEnumAuctionStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type NestedEnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentGatewayFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayFilter<$PrismaModel> | $Enums.PaymentGateway
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel> | $Enums.PaymentGateway
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentGatewayFilter<$PrismaModel>
    _max?: NestedEnumPaymentGatewayFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStrikeReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.StrikeReason | EnumStrikeReasonFieldRefInput<$PrismaModel>
    in?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumStrikeReasonFilter<$PrismaModel> | $Enums.StrikeReason
  }

  export type NestedEnumStrikeReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StrikeReason | EnumStrikeReasonFieldRefInput<$PrismaModel>
    in?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StrikeReason[] | ListEnumStrikeReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumStrikeReasonWithAggregatesFilter<$PrismaModel> | $Enums.StrikeReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStrikeReasonFilter<$PrismaModel>
    _max?: NestedEnumStrikeReasonFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SellerApplicationCreateWithoutUserInput = {
    id?: string
    status?: $Enums.SellerApplicationStatus
    idCardUrl: string
    profilePhotoUrl: string
    reviewedBy?: string | null
    rejectionReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.SellerApplicationStatus
    idCardUrl: string
    profilePhotoUrl: string
    reviewedBy?: string | null
    rejectionReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SellerApplicationCreateOrConnectWithoutUserInput = {
    where: SellerApplicationWhereUniqueInput
    create: XOR<SellerApplicationCreateWithoutUserInput, SellerApplicationUncheckedCreateWithoutUserInput>
  }

  export type ListingCreateWithoutSellerInput = {
    id?: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    auction?: AuctionCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutSellerInput = {
    id?: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    auction?: AuctionUncheckedCreateNestedOneWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutSellerInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput>
  }

  export type ListingCreateManySellerInputEnvelope = {
    data: ListingCreateManySellerInput | ListingCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutBidderInput = {
    id?: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutBidsInput
    payment?: PaymentCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateWithoutBidderInput = {
    id?: string
    auctionId: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidCreateOrConnectWithoutBidderInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutBidderInput, BidUncheckedCreateWithoutBidderInput>
  }

  export type BidCreateManyBidderInputEnvelope = {
    data: BidCreateManyBidderInput | BidCreateManyBidderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    bidId: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StrikeCreateWithoutUserInput = {
    id?: string
    reason: $Enums.StrikeReason
    description?: string | null
    createdAt?: Date | string
    addedBy: UserCreateNestedOneWithoutStrikesGivenInput
  }

  export type StrikeUncheckedCreateWithoutUserInput = {
    id?: string
    reason: $Enums.StrikeReason
    description?: string | null
    addedById: string
    createdAt?: Date | string
  }

  export type StrikeCreateOrConnectWithoutUserInput = {
    where: StrikeWhereUniqueInput
    create: XOR<StrikeCreateWithoutUserInput, StrikeUncheckedCreateWithoutUserInput>
  }

  export type StrikeCreateManyUserInputEnvelope = {
    data: StrikeCreateManyUserInput | StrikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StrikeCreateWithoutAddedByInput = {
    id?: string
    reason: $Enums.StrikeReason
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStrikesInput
  }

  export type StrikeUncheckedCreateWithoutAddedByInput = {
    id?: string
    userId: string
    reason: $Enums.StrikeReason
    description?: string | null
    createdAt?: Date | string
  }

  export type StrikeCreateOrConnectWithoutAddedByInput = {
    where: StrikeWhereUniqueInput
    create: XOR<StrikeCreateWithoutAddedByInput, StrikeUncheckedCreateWithoutAddedByInput>
  }

  export type StrikeCreateManyAddedByInputEnvelope = {
    data: StrikeCreateManyAddedByInput | StrikeCreateManyAddedByInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OTPCreateWithoutUserInput = {
    id?: string
    target: string
    code: string
    type: string
    verified?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPUncheckedCreateWithoutUserInput = {
    id?: string
    target: string
    code: string
    type: string
    verified?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPCreateOrConnectWithoutUserInput = {
    where: OTPWhereUniqueInput
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPCreateManyUserInputEnvelope = {
    data: OTPCreateManyUserInput | OTPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SellerApplicationUpsertWithoutUserInput = {
    update: XOR<SellerApplicationUpdateWithoutUserInput, SellerApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<SellerApplicationCreateWithoutUserInput, SellerApplicationUncheckedCreateWithoutUserInput>
    where?: SellerApplicationWhereInput
  }

  export type SellerApplicationUpdateToOneWithWhereWithoutUserInput = {
    where?: SellerApplicationWhereInput
    data: XOR<SellerApplicationUpdateWithoutUserInput, SellerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type SellerApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSellerApplicationStatusFieldUpdateOperationsInput | $Enums.SellerApplicationStatus
    idCardUrl?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSellerApplicationStatusFieldUpdateOperationsInput | $Enums.SellerApplicationStatus
    idCardUrl?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: StringFieldUpdateOperationsInput | string
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpsertWithWhereUniqueWithoutSellerInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutSellerInput, ListingUncheckedUpdateWithoutSellerInput>
    create: XOR<ListingCreateWithoutSellerInput, ListingUncheckedCreateWithoutSellerInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutSellerInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutSellerInput, ListingUncheckedUpdateWithoutSellerInput>
  }

  export type ListingUpdateManyWithWhereWithoutSellerInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutSellerInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: StringFilter<"Listing"> | string
    sellerId?: StringFilter<"Listing"> | string
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    title?: StringFilter<"Listing"> | string
    description?: StringFilter<"Listing"> | string
    category?: EnumProductCategoryFilter<"Listing"> | $Enums.ProductCategory
    condition?: EnumProductConditionNullableFilter<"Listing"> | $Enums.ProductCondition | null
    brand?: StringNullableFilter<"Listing"> | string | null
    photos?: StringNullableListFilter<"Listing">
    videoUrl?: StringFilter<"Listing"> | string
    location?: StringFilter<"Listing"> | string
    shippingCost?: DecimalFilter<"Listing"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutBidderInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutBidderInput, BidUncheckedUpdateWithoutBidderInput>
    create: XOR<BidCreateWithoutBidderInput, BidUncheckedCreateWithoutBidderInput>
  }

  export type BidUpdateWithWhereUniqueWithoutBidderInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutBidderInput, BidUncheckedUpdateWithoutBidderInput>
  }

  export type BidUpdateManyWithWhereWithoutBidderInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutBidderInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    auctionId?: StringFilter<"Bid"> | string
    bidderId?: StringFilter<"Bid"> | string
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    amount?: DecimalFilter<"Bid"> | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFilter<"Bid"> | boolean
    maxAmount?: DecimalNullableFilter<"Bid"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    bidId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFilter<"Payment"> | $Enums.PaymentGateway
    totalAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type StrikeUpsertWithWhereUniqueWithoutUserInput = {
    where: StrikeWhereUniqueInput
    update: XOR<StrikeUpdateWithoutUserInput, StrikeUncheckedUpdateWithoutUserInput>
    create: XOR<StrikeCreateWithoutUserInput, StrikeUncheckedCreateWithoutUserInput>
  }

  export type StrikeUpdateWithWhereUniqueWithoutUserInput = {
    where: StrikeWhereUniqueInput
    data: XOR<StrikeUpdateWithoutUserInput, StrikeUncheckedUpdateWithoutUserInput>
  }

  export type StrikeUpdateManyWithWhereWithoutUserInput = {
    where: StrikeScalarWhereInput
    data: XOR<StrikeUpdateManyMutationInput, StrikeUncheckedUpdateManyWithoutUserInput>
  }

  export type StrikeScalarWhereInput = {
    AND?: StrikeScalarWhereInput | StrikeScalarWhereInput[]
    OR?: StrikeScalarWhereInput[]
    NOT?: StrikeScalarWhereInput | StrikeScalarWhereInput[]
    id?: StringFilter<"Strike"> | string
    userId?: StringFilter<"Strike"> | string
    reason?: EnumStrikeReasonFilter<"Strike"> | $Enums.StrikeReason
    description?: StringNullableFilter<"Strike"> | string | null
    addedById?: StringFilter<"Strike"> | string
    createdAt?: DateTimeFilter<"Strike"> | Date | string
  }

  export type StrikeUpsertWithWhereUniqueWithoutAddedByInput = {
    where: StrikeWhereUniqueInput
    update: XOR<StrikeUpdateWithoutAddedByInput, StrikeUncheckedUpdateWithoutAddedByInput>
    create: XOR<StrikeCreateWithoutAddedByInput, StrikeUncheckedCreateWithoutAddedByInput>
  }

  export type StrikeUpdateWithWhereUniqueWithoutAddedByInput = {
    where: StrikeWhereUniqueInput
    data: XOR<StrikeUpdateWithoutAddedByInput, StrikeUncheckedUpdateWithoutAddedByInput>
  }

  export type StrikeUpdateManyWithWhereWithoutAddedByInput = {
    where: StrikeScalarWhereInput
    data: XOR<StrikeUpdateManyMutationInput, StrikeUncheckedUpdateManyWithoutAddedByInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    data?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type OTPUpsertWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    update: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPUpdateWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    data: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
  }

  export type OTPUpdateManyWithWhereWithoutUserInput = {
    where: OTPScalarWhereInput
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyWithoutUserInput>
  }

  export type OTPScalarWhereInput = {
    AND?: OTPScalarWhereInput | OTPScalarWhereInput[]
    OR?: OTPScalarWhereInput[]
    NOT?: OTPScalarWhereInput | OTPScalarWhereInput[]
    id?: StringFilter<"OTP"> | string
    userId?: StringNullableFilter<"OTP"> | string | null
    target?: StringFilter<"OTP"> | string
    code?: StringFilter<"OTP"> | string
    type?: StringFilter<"OTP"> | string
    verified?: BoolFilter<"OTP"> | boolean
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    createdAt?: DateTimeFilter<"OTP"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
  }

  export type UserUpsertWithoutOtpsInput = {
    update: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSellerApplicationInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSellerApplicationInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSellerApplicationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSellerApplicationInput, UserUncheckedCreateWithoutSellerApplicationInput>
  }

  export type UserUpsertWithoutSellerApplicationInput = {
    update: XOR<UserUpdateWithoutSellerApplicationInput, UserUncheckedUpdateWithoutSellerApplicationInput>
    create: XOR<UserCreateWithoutSellerApplicationInput, UserUncheckedCreateWithoutSellerApplicationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSellerApplicationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSellerApplicationInput, UserUncheckedUpdateWithoutSellerApplicationInput>
  }

  export type UserUpdateWithoutSellerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSellerApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type AuctionCreateWithoutListingInput = {
    id?: string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    bidIncrement: Decimal | DecimalJsLike | number | string
    currentPrice: Decimal | DecimalJsLike | number | string
    startTime: Date | string
    endTime: Date | string
    winnerId?: string | null
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutListingInput = {
    id?: string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    bidIncrement: Decimal | DecimalJsLike | number | string
    currentPrice: Decimal | DecimalJsLike | number | string
    startTime: Date | string
    endTime: Date | string
    winnerId?: string | null
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAuctionInput
  }

  export type AuctionCreateOrConnectWithoutListingInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutListingInput, AuctionUncheckedCreateWithoutListingInput>
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuctionUpsertWithoutListingInput = {
    update: XOR<AuctionUpdateWithoutListingInput, AuctionUncheckedUpdateWithoutListingInput>
    create: XOR<AuctionCreateWithoutListingInput, AuctionUncheckedCreateWithoutListingInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutListingInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutListingInput, AuctionUncheckedUpdateWithoutListingInput>
  }

  export type AuctionUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAuctionNestedInput
  }

  export type ListingCreateWithoutAuctionInput = {
    id?: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingUncheckedCreateWithoutAuctionInput = {
    id?: string
    sellerId: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingCreateOrConnectWithoutAuctionInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutAuctionInput, ListingUncheckedCreateWithoutAuctionInput>
  }

  export type BidCreateWithoutAuctionInput = {
    id?: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    bidder: UserCreateNestedOneWithoutBidsInput
    payment?: PaymentCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateWithoutAuctionInput = {
    id?: string
    bidderId: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidCreateOrConnectWithoutAuctionInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput>
  }

  export type BidCreateManyAuctionInputEnvelope = {
    data: BidCreateManyAuctionInput | BidCreateManyAuctionInput[]
    skipDuplicates?: boolean
  }

  export type ListingUpsertWithoutAuctionInput = {
    update: XOR<ListingUpdateWithoutAuctionInput, ListingUncheckedUpdateWithoutAuctionInput>
    create: XOR<ListingCreateWithoutAuctionInput, ListingUncheckedCreateWithoutAuctionInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutAuctionInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutAuctionInput, ListingUncheckedUpdateWithoutAuctionInput>
  }

  export type ListingUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutAuctionInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutAuctionInput, BidUncheckedUpdateWithoutAuctionInput>
    create: XOR<BidCreateWithoutAuctionInput, BidUncheckedCreateWithoutAuctionInput>
  }

  export type BidUpdateWithWhereUniqueWithoutAuctionInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutAuctionInput, BidUncheckedUpdateWithoutAuctionInput>
  }

  export type BidUpdateManyWithWhereWithoutAuctionInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutAuctionInput>
  }

  export type AuctionCreateWithoutBidsInput = {
    id?: string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    bidIncrement: Decimal | DecimalJsLike | number | string
    currentPrice: Decimal | DecimalJsLike | number | string
    startTime: Date | string
    endTime: Date | string
    winnerId?: string | null
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listing: ListingCreateNestedOneWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutBidsInput = {
    id?: string
    listingId: string
    status?: $Enums.AuctionStatus
    startingPrice: Decimal | DecimalJsLike | number | string
    bidIncrement: Decimal | DecimalJsLike | number | string
    currentPrice: Decimal | DecimalJsLike | number | string
    startTime: Date | string
    endTime: Date | string
    winnerId?: string | null
    finalPrice?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuctionCreateOrConnectWithoutBidsInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
  }

  export type UserCreateWithoutBidsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBidsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
  }

  export type PaymentCreateWithoutBidInput = {
    id?: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutBidInput = {
    id?: string
    userId: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBidInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
  }

  export type AuctionUpsertWithoutBidsInput = {
    update: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
    create: XOR<AuctionCreateWithoutBidsInput, AuctionUncheckedCreateWithoutBidsInput>
    where?: AuctionWhereInput
  }

  export type AuctionUpdateToOneWithWhereWithoutBidsInput = {
    where?: AuctionWhereInput
    data: XOR<AuctionUpdateWithoutBidsInput, AuctionUncheckedUpdateWithoutBidsInput>
  }

  export type AuctionUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    status?: EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus
    startingPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bidIncrement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    finalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithoutBidInput = {
    update: XOR<PaymentUpdateWithoutBidInput, PaymentUncheckedUpdateWithoutBidInput>
    create: XOR<PaymentCreateWithoutBidInput, PaymentUncheckedCreateWithoutBidInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBidInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBidInput, PaymentUncheckedUpdateWithoutBidInput>
  }

  export type PaymentUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateWithoutPaymentInput = {
    id?: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    auction: AuctionCreateNestedOneWithoutBidsInput
    bidder: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutPaymentInput = {
    id?: string
    auctionId: string
    bidderId: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type BidCreateOrConnectWithoutPaymentInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type BidUpsertWithoutPaymentInput = {
    update: XOR<BidUpdateWithoutPaymentInput, BidUncheckedUpdateWithoutPaymentInput>
    create: XOR<BidCreateWithoutPaymentInput, BidUncheckedCreateWithoutPaymentInput>
    where?: BidWhereInput
  }

  export type BidUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BidWhereInput
    data: XOR<BidUpdateWithoutPaymentInput, BidUncheckedUpdateWithoutPaymentInput>
  }

  export type BidUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutBidsNestedInput
    bidder?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStrikesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStrikesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStrikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStrikesInput, UserUncheckedCreateWithoutStrikesInput>
  }

  export type UserCreateWithoutStrikesGivenInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStrikesGivenInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStrikesGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStrikesGivenInput, UserUncheckedCreateWithoutStrikesGivenInput>
  }

  export type UserUpsertWithoutStrikesInput = {
    update: XOR<UserUpdateWithoutStrikesInput, UserUncheckedUpdateWithoutStrikesInput>
    create: XOR<UserCreateWithoutStrikesInput, UserUncheckedCreateWithoutStrikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStrikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStrikesInput, UserUncheckedUpdateWithoutStrikesInput>
  }

  export type UserUpdateWithoutStrikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStrikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutStrikesGivenInput = {
    update: XOR<UserUpdateWithoutStrikesGivenInput, UserUncheckedUpdateWithoutStrikesGivenInput>
    create: XOR<UserCreateWithoutStrikesGivenInput, UserUncheckedCreateWithoutStrikesGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStrikesGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStrikesGivenInput, UserUncheckedUpdateWithoutStrikesGivenInput>
  }

  export type UserUpdateWithoutStrikesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStrikesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationCreateNestedOneWithoutUserInput
    listings?: ListingCreateNestedManyWithoutSellerInput
    bids?: BidCreateNestedManyWithoutBidderInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    strikes?: StrikeCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeCreateNestedManyWithoutAddedByInput
    otps?: OTPCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    password: string
    role?: $Enums.Role
    avatar?: string | null
    purchaseCount?: number
    strikeCount?: number
    isBanned?: boolean
    bannedAt?: Date | string | null
    bannedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sellerApplication?: SellerApplicationUncheckedCreateNestedOneWithoutUserInput
    listings?: ListingUncheckedCreateNestedManyWithoutSellerInput
    bids?: BidUncheckedCreateNestedManyWithoutBidderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    strikes?: StrikeUncheckedCreateNestedManyWithoutUserInput
    strikesGiven?: StrikeUncheckedCreateNestedManyWithoutAddedByInput
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUpdateOneWithoutUserNestedInput
    listings?: ListingUpdateManyWithoutSellerNestedInput
    bids?: BidUpdateManyWithoutBidderNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    strikes?: StrikeUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUpdateManyWithoutAddedByNestedInput
    otps?: OTPUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseCount?: IntFieldUpdateOperationsInput | number
    strikeCount?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    bannedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bannedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sellerApplication?: SellerApplicationUncheckedUpdateOneWithoutUserNestedInput
    listings?: ListingUncheckedUpdateManyWithoutSellerNestedInput
    bids?: BidUncheckedUpdateManyWithoutBidderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    strikes?: StrikeUncheckedUpdateManyWithoutUserNestedInput
    strikesGiven?: StrikeUncheckedUpdateManyWithoutAddedByNestedInput
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListingCreateManySellerInput = {
    id?: string
    status?: $Enums.ListingStatus
    title: string
    description: string
    category: $Enums.ProductCategory
    condition?: $Enums.ProductCondition | null
    brand?: string | null
    photos?: ListingCreatephotosInput | string[]
    videoUrl: string
    location: string
    shippingCost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateManyBidderInput = {
    id?: string
    auctionId: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    bidId: string
    status?: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    totalAmount: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    sellerAmount: Decimal | DecimalJsLike | number | string
    transactionId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    releasedAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StrikeCreateManyUserInput = {
    id?: string
    reason: $Enums.StrikeReason
    description?: string | null
    addedById: string
    createdAt?: Date | string
  }

  export type StrikeCreateManyAddedByInput = {
    id?: string
    userId: string
    reason: $Enums.StrikeReason
    description?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OTPCreateManyUserInput = {
    id?: string
    target: string
    code: string
    type: string
    verified?: boolean
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUncheckedUpdateOneWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    condition?: NullableEnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    videoUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutBidderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auction?: AuctionUpdateOneRequiredWithoutBidsNestedInput
    payment?: PaymentUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateWithoutBidderInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateManyWithoutBidderInput = {
    id?: StringFieldUpdateOperationsInput | string
    auctionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sellerAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutStrikesGivenNestedInput
  }

  export type StrikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrikeUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStrikesNestedInput
  }

  export type StrikeUncheckedUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrikeUncheckedUpdateManyWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: EnumStrikeReasonFieldUpdateOperationsInput | $Enums.StrikeReason
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyAuctionInput = {
    id?: string
    bidderId: string
    status?: $Enums.BidStatus
    amount: Decimal | DecimalJsLike | number | string
    isAutoBid?: boolean
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type BidUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidder?: UserUpdateOneRequiredWithoutBidsNestedInput
    payment?: PaymentUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateManyWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidderId?: StringFieldUpdateOperationsInput | string
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAutoBid?: BoolFieldUpdateOperationsInput | boolean
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuctionCountOutputTypeDefaultArgs instead
     */
    export type AuctionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuctionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OTPDefaultArgs instead
     */
    export type OTPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OTPDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationDefaultArgs instead
     */
    export type VerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SellerApplicationDefaultArgs instead
     */
    export type SellerApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SellerApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListingDefaultArgs instead
     */
    export type ListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuctionDefaultArgs instead
     */
    export type AuctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuctionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BidDefaultArgs instead
     */
    export type BidArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BidDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StrikeDefaultArgs instead
     */
    export type StrikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StrikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>

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