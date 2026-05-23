/**
 * Backend Constants
 */

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

// Campaign Status
export const CAMPAIGN_STATUS = {
  DRAFT: 'draft',
  SCHEDULED: 'scheduled',
  ACTIVE: 'active',
  PAUSED: 'paused',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  CREATOR: 'creator',
  MODERATOR: 'moderator',
  USER: 'user',
};

// Analytics Periods
export const ANALYTICS_PERIODS = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  QUARTER: 'quarter',
  YEAR: 'year',
  ALL_TIME: 'all_time',
};

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Invalid email address',
  INVALID_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
  USER_NOT_FOUND: 'User not found',
  USER_EXISTS: 'User already exists',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden access',
  INVALID_TOKEN: 'Invalid or expired token',
  SERVER_ERROR: 'Internal server error',
  CAMPAIGN_NOT_FOUND: 'Campaign not found',
  VALIDATION_ERROR: 'Validation error',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CREATED: 'Resource created successfully',
  UPDATED: 'Resource updated successfully',
  DELETED: 'Resource deleted successfully',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
};

// Limits
export const LIMITS = {
  MAX_CAMPAIGN_NAME_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 500,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  PAGE_SIZE_DEFAULT: 10,
  PAGE_SIZE_MAX: 100,
  RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: 100,
};

// Cache TTL (in seconds)
export const CACHE_TTL = {
  SHORT: 5 * 60, // 5 minutes
  MEDIUM: 30 * 60, // 30 minutes
  LONG: 24 * 60 * 60, // 24 hours
};

// Colors (Theme)
export const COLORS = {
  PRIMARY: '#0052FF',
  BACKGROUND: '#0F1726',
  SURFACE: '#1A1F2E',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#3B82F6',
};

// API Endpoints
export const API_ENDPOINTS = {
  HEALTH: '/api/health',
  USERS: '/api/users',
  CAMPAIGNS: '/api/campaigns',
  ANALYTICS: '/api/analytics',
};

// Pagination Defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

// Token Expiration
export const TOKEN_EXPIRY = {
  ACCESS_TOKEN: '7d',
  REFRESH_TOKEN: '30d',
};
