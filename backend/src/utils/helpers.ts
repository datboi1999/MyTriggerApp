/**
 * Utility functions for the TRIGGER backend
 */

/**
 * Format response with standard structure
 */
export function formatResponse<T>(
  success: boolean,
  data: T | null = null,
  message: string = '',
  meta: any = null
) {
  return {
    success,
    message,
    data,
    ...(meta && { meta }),
    timestamp: new Date().toISOString(),
  };
}

/**
 * Format error response
 */
export function formatError(message: string, errors: any[] = [], statusCode: number = 400) {
  return {
    success: false,
    message,
    errors,
    statusCode,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate password strength
 */
export function isStrongPassword(password: string): boolean {
  // Minimum 8 characters, at least one uppercase, one lowercase, one number, one special char
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

/**
 * Generate random string
 */
export function generateRandomString(length: number = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Paginate array
 */
export function paginate<T>(items: T[], page: number = 1, limit: number = 10) {
  const start = (page - 1) * limit;
  const end = start + limit;
  return {
    data: items.slice(start, end),
    pagination: {
      total: items.length,
      page,
      limit,
      pages: Math.ceil(items.length / limit),
    },
  };
}

/**
 * Calculate growth percentage
 */
export function calculateGrowthPercentage(current: number, previous: number): number {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format currency (NGN)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
}

/**
 * Sleep utility for delays
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
