/**
 * TRIGGER App Theme Configuration
 * Color Palette:
 * - Deep Midnight Navy: Background
 * - Vibrant Blue (#0052FF): Primary Actions
 * - Dark Charcoal Grey: Surface/Cards
 */

export const COLORS = {
  // Primary Colors
  primary: '#0052FF', // Vibrant Blue
  primaryLight: '#4D7FFF',
  primaryDark: '#0038B8',

  // Background Colors
  background: '#0F1726', // Deep Midnight Navy
  backgroundLight: '#1A2433',
  backgroundLighter: '#252E3D',

  // Surface Colors
  surface: '#1A1F2E', // Dark Charcoal Grey
  surfaceLight: '#252E3D',
  surfaceHighlight: '#2D3748',

  // Neutral Colors
  text: '#FFFFFF',
  textSecondary: '#A0A8B8',
  textTertiary: '#6B7280',
  textDisabled: '#4B5563',

  // Utility Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Additional
  border: '#2D3748',
  divider: '#1F2937',
  shadow: 'rgba(0, 0, 0, 0.3)',
};

export const TYPOGRAPHY = {
  // Font Families
  fontFamilyRegular: 'System',
  fontFamilySemiBold: 'System',
  fontFamilyBold: 'System',

  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },

  // Font Weights
  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
};

export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
};

export const SHADOWS = {
  sm: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const theme = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadows: SHADOWS,
};

export default theme;
