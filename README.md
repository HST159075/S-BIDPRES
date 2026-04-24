# Auction Platform — Backend

Express + TypeScript + Prisma + PostgreSQL + Redis + Socket.io

## Folder Structure

```
src/
├── server.ts          # Entry point
├── app.ts             # Express app setup
├── routes/            # Route definitions only
├── controllers/       # Request/response handlers
├── services/          # Business logic
├── middleware/        # Auth, role, rate limit guards
├── validators/        # Zod input validation schemas
├── socket/            # Socket.io real-time bidding
├── jobs/              # Cron jobs (auction timer, notifications)
├── lib/               # prisma, redis, cloudinary, mailer, logger
├── auth/              # Better Auth config + roles
└── types/             # TypeScript type extensions
prisma/
├── schema.prisma      # Database models
└── seed.ts            # Demo data seeder
```

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
copy .env.example .env
```
Fill in all values in `.env`

### 3. Generate Prisma client
```bash
npx prisma generate
```

### 4. Run database migration
```bash
npx prisma migrate dev --name init
```

### 5. Seed demo data (optional)
```bash
npm run db:seed
```

### 6. Start development server
```bash
npm run dev
```

## Demo Credentials (after seeding)

| Role  | Email                | Password     |
|-------|----------------------|--------------|
| Admin | admin@auctionplatform.com | Admin@1234 |
| Buyer | buyer@demo.com       | Buyer@1234   |
| Seller| seller@demo.com      | Seller@1234  |

## API Base URL

```
http://localhost:5000/api/v1
```

## Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/register | Register new user |
| POST | /auth/send-otp | Send OTP to email/phone |
| POST | /auth/verify-otp | Verify OTP |
| POST | /auth/login | Login |
| GET  | /listings | Browse listings |
| POST | /listings | Create listing (seller) |
| GET  | /auctions | Live auctions |
| POST | /bids | Place bid |
| POST | /bids/auto-bid | Set auto-bid |
| POST | /payments/initiate | Start payment |
| POST | /seller/apply | Apply for seller |
| GET  | /admin/analytics | Platform stats (admin) |

## Socket.io Events

**Client → Server:**
- `join:auction` — join auction room
- `leave:auction` — leave auction room
- `place:bid` — place a bid
- `set:autobid` — configure auto-bid

**Server → Client:**
- `bid:new` — new bid placed
- `bid:outbid` — you were outbid
- `auction:ended` — auction finished
- `auction:countdown` — last 60 seconds timer
- `auction:live` — auction just started
