import pkg from "@upstash/ratelimit";
const { Ratelimit } = pkg;
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();
// create a ratelimiter that allows 5 requests per 10 seconds
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(), // accessing environment variables
    limiter: Ratelimit.slidingWindow(10, "10 s")
});

export default rateLimit;