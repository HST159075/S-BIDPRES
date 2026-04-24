
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  expiresAt: 'expiresAt',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  userId: 'userId'
};

exports.Prisma.OTPScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  target: 'target',
  code: 'code',
  type: 'type',
  verified: 'verified',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.VerificationScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  value: 'value',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SellerApplicationScalarFieldEnum = {
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

exports.Prisma.ListingScalarFieldEnum = {
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

exports.Prisma.AuctionScalarFieldEnum = {
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

exports.Prisma.BidScalarFieldEnum = {
  id: 'id',
  auctionId: 'auctionId',
  bidderId: 'bidderId',
  status: 'status',
  amount: 'amount',
  isAutoBid: 'isAutoBid',
  maxAmount: 'maxAmount',
  createdAt: 'createdAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
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

exports.Prisma.StrikeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  reason: 'reason',
  description: 'description',
  addedById: 'addedById',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  message: 'message',
  isRead: 'isRead',
  data: 'data',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  buyer: 'buyer',
  seller: 'seller',
  admin: 'admin'
};

exports.SellerApplicationStatus = exports.$Enums.SellerApplicationStatus = {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

exports.ListingStatus = exports.$Enums.ListingStatus = {
  draft: 'draft',
  active: 'active',
  ended: 'ended',
  cancelled: 'cancelled'
};

exports.ProductCategory = exports.$Enums.ProductCategory = {
  electronics: 'electronics',
  fashion: 'fashion',
  home: 'home',
  vehicle: 'vehicle',
  sports: 'sports',
  books: 'books',
  other: 'other'
};

exports.ProductCondition = exports.$Enums.ProductCondition = {
  new: 'new',
  used: 'used',
  refurbished: 'refurbished'
};

exports.AuctionStatus = exports.$Enums.AuctionStatus = {
  scheduled: 'scheduled',
  live: 'live',
  ended: 'ended',
  cancelled: 'cancelled'
};

exports.BidStatus = exports.$Enums.BidStatus = {
  active: 'active',
  outbid: 'outbid',
  won: 'won',
  refunded: 'refunded'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  pending: 'pending',
  held: 'held',
  released: 'released',
  refunded: 'refunded',
  failed: 'failed'
};

exports.PaymentGateway = exports.$Enums.PaymentGateway = {
  sslcommerz: 'sslcommerz',
  bkash: 'bkash'
};

exports.StrikeReason = exports.$Enums.StrikeReason = {
  non_payment: 'non_payment',
  fraudulent_bid: 'fraudulent_bid',
  admin_manual: 'admin_manual'
};

exports.NotificationType = exports.$Enums.NotificationType = {
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

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
