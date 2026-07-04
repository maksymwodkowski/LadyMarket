// ─── DESIGN SYSTEM — SINGLE EXPORT POINT ─────────────────────────────────────
// Import anything from '@/design-system' or '../design-system'

// Tokens
export * from './tokens';

// Components
export { Button } from './components/Button';
export { CompressionBadge } from './components/CompressionBadge';
export { UseCaseTag } from './components/UseCaseTag';
export { ProductCard } from './components/ProductCard';

export {
  ChatContainer,
  UserMessage,
  AssistantMessage,
  TypingIndicator,
  QuestionCard,
  RecommendationCard,
  ChatInput,
} from './components/AIAssistant';

export {
  TextInput,
  Select,
  SizeSelector,
  MeasurementInput,
  Checkbox,
  RadioGroup,
} from './components/FormElements';

export {
  DesktopHeader,
  MobileHeader,
  MobileMenu,
} from './components/Navigation';

export { CartLineItem } from './components/CartLineItem';

export {
  CertificationBadge,
  StarRating,
  ReviewCard,
} from './components/TrustSignals';

export {
  Alert,
  OutOfStockNotice,
  EquivalentAlert,
  SizeConfirmPrompt,
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
} from './components/Alerts';

export {
  EducationBlock,
  HowToWearBlock,
  CorrectFitBlock,
} from './components/EducationBlock';

export { HeroSection } from './components/HeroSection';
