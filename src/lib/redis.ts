import { Redis } from "ioredis";
import { logger } from "./logger";
export const redis = new Redis(
  process.env.REDIS_URL || "redis://localhost:6379",
);
redis.on("connect", () => logger.info("Redis connected"));
redis.on("error", (err) => logger.error({ err }, "Redis error"));
export const setOTP = (key: string, code: string, ttl = 300) =>
  redis.set(`otp:${key}`, code, "EX", ttl);
export const getOTP = (key: string) => redis.get(`otp:${key}`);
export const deleteOTP = (key: string) => redis.del(`otp:${key}`);
export const setAuctionPrice = (id: string, price: number) =>
  redis.set(`auction:price:${id}`, price.toString(), "EX", 86400);
export const getAuctionPrice = async (id: string) => {
  const v = await redis.get(`auction:price:${id}`);
  return v ? parseFloat(v) : null;
};
export const setAutoBid = (aId: string, bId: string, max: number) =>
  redis.hset(`autobid:${aId}`, bId, max.toString());
export const getAutoBids = (aId: string) => redis.hgetall(`autobid:${aId}`);
export const removeAutoBid = (aId: string, bId: string) =>
  redis.hdel(`autobid:${aId}`, bId);
