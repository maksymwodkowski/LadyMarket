// ─── DESIGN TOKENS ──────────────────────────────────────────────────────────
// Single source of truth. Never use raw values in components — import from here.
// Visual direction: Perplexity-inspired — cream background, dark forest teal,
// editorial serif display type, generous whitespace, calm and trustworthy.

// ─── COLORS ──────────────────────────────────────────────────────────────────

export const colors = {
  // Brand — dark forest teal (Perplexity-style deep ink)
  primary:       '#1B3A38',
  primaryLight:  '#3D5B58',
  primaryMuted:  '#D6E4E1',   // sage tint — used for highlighted cards

  // Secondary — muted blue-steel
  secondary:      '#4A7A8A',
  secondaryLight: '#A8CEDA',
  secondaryMuted: '#E6F2F5',

  // Neutral scale — warm-toned (cream-adjacent, not cool gray)
  neutral50:  '#F5F0E8',   // page background (cream)
  neutral100: '#EDE8DF',   // subtle cream
  neutral200: '#DDD8CE',   // borders, dividers
  neutral300: '#C8C2B6',
  neutral400: '#ADA89C',
  neutral500: '#8C8780',
  neutral600: '#6B7A78',   // muted text
  neutral700: '#3D5B58',   // secondary text
  neutral800: '#1B3A38',   // primary text = brand color
  neutral900: '#0F2422',

  // Semantic
  success:      '#1B3A38',
  successLight: '#D6E4E1',
  warning:      '#9A6F00',
  warningLight: '#FFF3D6',
  error:        '#A83228',
  errorLight:   '#FAECEB',

  // Medical accent — same steel family, slightly blue
  medicalAccent:      '#3A6B7A',
  medicalAccentLight: '#D6E8EE',
  medicalAccentMuted: '#EEF5F7',

  // Compression class colors — muted, warm versions
  compressionI: {
    bg: '#E6EFF5', border: '#8AAFC5', text: '#1A3D5C', dot: '#2E6A9A',
  },
  compressionII: {
    bg: '#D6E4E1', border: '#5D9C90', text: '#1B3A38', dot: '#2D7A6A',
  },
  compressionIII: {
    bg: '#EEE8F4', border: '#A88CC0', text: '#3A1F5A', dot: '#7A4FAD',
  },

  // Backgrounds
  backgroundMain:   '#F5F0E8',   // warm cream — page bg
  backgroundSubtle: '#EDE8DF',   // slightly deeper cream
  backgroundCard:   '#FFFFFF',   // pure white for cards that need contrast

  // Text
  textPrimary:   '#1B3A38',
  textSecondary: '#3D5B58',
  textMuted:     '#6B7A78',
  textOnDark:    '#F5F0E8',    // cream on dark, not harsh white
  textOnPrimary: '#F5F0E8',
};

// ─── COMPRESSION CLASS COLORS (flat export for CSS) ──────────────────────────
export const compressionColors = {
  classI:   colors.compressionI,
  classII:  colors.compressionII,
  classIII: colors.compressionIII,
};

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    display: "'DM Serif Display', Georgia, 'Times New Roman', serif",
    sans:    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono:    "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
  },

  // Display headings use the serif — editorial, calm authority
  h1: { fontFamily: 'display', fontSize: '3rem',     lineHeight: '1.1',  fontWeight: '400', letterSpacing: '-0.01em' },
  h2: { fontFamily: 'display', fontSize: '2.25rem',  lineHeight: '1.15', fontWeight: '400', letterSpacing: '-0.01em' },
  h3: { fontFamily: 'display', fontSize: '1.625rem', lineHeight: '1.2',  fontWeight: '400' },
  h4: { fontFamily: 'display', fontSize: '1.25rem',  lineHeight: '1.3',  fontWeight: '400' },
  h5: { fontFamily: 'sans',    fontSize: '1.0625rem',lineHeight: '1.4',  fontWeight: '600' },
  h6: { fontFamily: 'sans',    fontSize: '0.9375rem',lineHeight: '1.4',  fontWeight: '600' },

  bodyLarge: { fontSize: '1.125rem', lineHeight: '1.7',  fontWeight: '400' },
  body:      { fontSize: '1rem',     lineHeight: '1.65', fontWeight: '400' },
  bodySmall: { fontSize: '0.875rem', lineHeight: '1.6',  fontWeight: '400' },

  label:    { fontSize: '0.875rem',  lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.01em' },
  caption:  { fontSize: '0.75rem',   lineHeight: '1.4', fontWeight: '400', letterSpacing: '0.01em' },
  overline: { fontSize: '0.6875rem', lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' },
  medical:  { fontSize: '0.875rem',  lineHeight: '1.4', fontWeight: '500', fontFamily: 'mono', letterSpacing: '0.02em' },
};

// ─── SPACING ─────────────────────────────────────────────────────────────────
// Base: 4px

export const spacing = {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  7:  '28px',
  8:  '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
};

// ─── BORDER RADIUS ───────────────────────────────────────────────────────────

export const radius = {
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  full: '9999px',
};

// ─── SHADOWS ─────────────────────────────────────────────────────────────────
// Warmer, less blue-gray than typical — matches cream background

export const shadows = {
  subtle:   '0 1px 3px rgba(27,58,56,0.06), 0 1px 2px rgba(27,58,56,0.03)',
  default:  '0 4px 16px rgba(27,58,56,0.08), 0 2px 4px rgba(27,58,56,0.04)',
  elevated: '0 8px 32px rgba(27,58,56,0.10), 0 4px 8px rgba(27,58,56,0.05)',
  focus:    '0 0 0 3px rgba(27,58,56,0.2)',
  focusError: '0 0 0 3px rgba(168,50,40,0.18)',
};

// ─── TRANSITIONS ─────────────────────────────────────────────────────────────

export const transitions = {
  fast:    'all 0.1s ease',
  default: 'all 0.18s ease',
  slow:    'all 0.3s ease',
};

// ─── Z-INDEX ─────────────────────────────────────────────────────────────────

export const zIndex = {
  base:    1,
  raised:  10,
  overlay: 100,
  modal:   200,
  toast:   300,
};
