interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const memoryStore = new Map<string, RateLimitRecord>();

/**
 * Lightweight in-memory rate limiter for Next.js App Router API handlers.
 * @param ip Client IP identifier
 * @param limit Max allowed requests within window
 * @param windowMs Time window in milliseconds (default 60 seconds)
 */
export function checkRateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 60 * 1000
): { success: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const record = memoryStore.get(ip);

  // Clean expired
  if (record && now > record.resetAt) {
    memoryStore.delete(ip);
  }

  const currentRecord = memoryStore.get(ip) || { count: 0, resetAt: now + windowMs };

  if (currentRecord.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: currentRecord.resetAt,
    };
  }

  currentRecord.count += 1;
  memoryStore.set(ip, currentRecord);

  return {
    success: true,
    remaining: limit - currentRecord.count,
    resetAt: currentRecord.resetAt,
  };
}
