import React, { useState } from 'react';
import {
  Button,
  CompressionBadge,
  UseCaseTag,
  ProductCard,
  ChatContainer,
  UserMessage,
  AssistantMessage,
  TypingIndicator,
  QuestionCard,
  RecommendationCard,
  ChatInput,
  TextInput,
  Select,
  SizeSelector,
  MeasurementInput,
  Checkbox,
  RadioGroup,
  DesktopHeader,
  MobileHeader,
  CartLineItem,
  CertificationBadge,
  StarRating,
  ReviewCard,
  Alert,
  OutOfStockNotice,
  EquivalentAlert,
  SizeConfirmPrompt,
  SuccessAlert,
  WarningAlert,
  ErrorAlert,
  EducationBlock,
  HowToWearBlock,
  CorrectFitBlock,
  HeroSection,
  colors,
  spacing,
  radius,
  shadows,
  typography,
} from './index';
import pageStyles from './DesignSystemPage.module.css';

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
function Section({ title, description, children }) {
  return (
    <section className={pageStyles.section}>
      <div className={pageStyles.sectionHeader}>
        <h2 className={pageStyles.sectionTitle}>{title}</h2>
        {description && <p className={pageStyles.sectionDescription}>{description}</p>}
      </div>
      <div className={pageStyles.sectionContent}>{children}</div>
    </section>
  );
}

function Group({ label, children, row = false }) {
  return (
    <div className={pageStyles.group}>
      {label && <div className={pageStyles.groupLabel}>{label}</div>}
      <div className={`${pageStyles.groupItems} ${row ? pageStyles.groupRow : ''}`}>
        {children}
      </div>
    </div>
  );
}

// ─── COLOR SWATCH ─────────────────────────────────────────────────────────────
function Swatch({ name, value, textDark = false }) {
  return (
    <div className={pageStyles.swatch}>
      <div className={pageStyles.swatchColor} style={{ background: value }} />
      <div className={pageStyles.swatchName}>{name}</div>
      <div className={pageStyles.swatchValue}>{value}</div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export function DesignSystemPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [checked, setChecked] = useState(true);
  const [radioVal, setRadioVal] = useState('female');
  const [aiSelected, setAiSelected] = useState(null);
  const [cartQty, setCartQty] = useState(2);

  return (
    <div className={pageStyles.page}>
      {/* Page header */}
      <div className={pageStyles.pageHeader}>
        <div className={pageStyles.pageHeaderInner}>
          <div className={pageStyles.dsLabel}>Дизайн-система</div>
          <h1 className={pageStyles.pageTitle}>Аніон Market</h1>
          <p className={pageStyles.pageSubtitle}>
            Повна візуальна бібліотека компонентів для компресійного трикотажу
          </p>
          <div className={pageStyles.pageMeta}>
            <span>v1.0</span>
            <span>·</span>
            <span>React + CSS Modules</span>
            <span>·</span>
            <span>Inter typeface</span>
          </div>
        </div>
      </div>

      <div className={pageStyles.pageBody}>

        {/* ── 0. HERO SECTION ── */}
        <Section title="0. Hero Section" description="Homepage entry point — headline, AI CTA, search, and category shortcuts.">
          <HeroSection />
        </Section>

        {/* ── 1. NAVIGATION ── */}
        <Section title="1. Navigation" description="Desktop sticky header and mobile header.">
          <Group label="Desktop Header (active: Каталог)">
            <div className={pageStyles.navPreview}>
              <DesktopHeader activeLink="Каталог" cartCount={3} />
            </div>
          </Group>
          <Group label="Mobile Header">
            <div className={pageStyles.navPreviewMobile}>
              <MobileHeader cartCount={2} />
            </div>
          </Group>
        </Section>

        {/* ── 2. COLOR TOKENS ── */}
        <Section title="2. Color Tokens" description="All brand, semantic, and medical accent colors.">
          <Group label="Brand">
            <div className={pageStyles.swatchRow}>
              <Swatch name="Primary" value={colors.primary} />
              <Swatch name="Primary Light" value={colors.primaryLight} />
              <Swatch name="Primary Muted" value={colors.primaryMuted} />
              <Swatch name="Secondary" value={colors.secondary} />
              <Swatch name="Secondary Light" value={colors.secondaryLight} />
              <Swatch name="Secondary Muted" value={colors.secondaryMuted} />
            </div>
          </Group>
          <Group label="Neutral Scale">
            <div className={pageStyles.swatchRow}>
              {[50,100,200,300,400,500,600,700,800,900].map(n => (
                <Swatch key={n} name={`Neutral ${n}`} value={colors[`neutral${n}`]} />
              ))}
            </div>
          </Group>
          <Group label="Semantic">
            <div className={pageStyles.swatchRow}>
              <Swatch name="Success" value={colors.success} />
              <Swatch name="Success Light" value={colors.successLight} />
              <Swatch name="Warning" value={colors.warning} />
              <Swatch name="Warning Light" value={colors.warningLight} />
              <Swatch name="Error" value={colors.error} />
              <Swatch name="Error Light" value={colors.errorLight} />
            </div>
          </Group>
          <Group label="Medical Accent">
            <div className={pageStyles.swatchRow}>
              <Swatch name="Medical" value={colors.medicalAccent} />
              <Swatch name="Medical Light" value={colors.medicalAccentLight} />
              <Swatch name="Medical Muted" value={colors.medicalAccentMuted} />
            </div>
          </Group>
          <Group label="Compression Classes">
            <div className={pageStyles.swatchRow}>
              {['I','II','III'].map(cls => (
                <Swatch key={cls} name={`Class ${cls}`} value={
                  cls === 'I' ? '#2E86C1' : cls === 'II' ? '#27AE60' : '#8E44AD'
                } />
              ))}
            </div>
          </Group>
        </Section>

        {/* ── 3. TYPOGRAPHY ── */}
        <Section title="3. Typography" description="Type scale using Inter — clean, legible, clinical-adjacent.">
          <div className={pageStyles.typeScale}>
            {[
              { label: 'H1 — 2.5rem / 700', cls: 'ds-h1', text: 'Компресійна підтримка для вашого здоров\'я' },
              { label: 'H2 — 2rem / 700', cls: 'ds-h2', text: 'Підберіть правильний клас' },
              { label: 'H3 — 1.5rem / 600', cls: 'ds-h3', text: 'Клас II — помірна компресія' },
              { label: 'H4 — 1.25rem / 600', cls: 'ds-h4', text: 'Розмір і посадка' },
              { label: 'H5 — 1.125rem / 600', cls: 'ds-h5', text: 'Sigvaris Traveno Travel' },
              { label: 'H6 — 1rem / 600', cls: 'ds-h6', text: 'Технічні характеристики' },
              { label: 'Body Large — 1.125rem', cls: 'ds-body-lg', text: 'Компресійний трикотаж допомагає покращити кровообіг, зменшити набряки та полегшити відчуття важкості в ногах.' },
              { label: 'Body — 1rem', cls: 'ds-body', text: 'Клас компресії визначає, скільки тиску (у міліметрах ртутного стовпа) чинить виріб на ногу. Що вищий клас — то сильніша підтримка.' },
              { label: 'Body Small — 0.875rem', cls: 'ds-body-sm', text: 'Перед першим використанням переконайтеся, що зняли мірки правильно: обхват кісточки і гомілки у сантиметрах.' },
              { label: 'Label — 0.875rem / 500', cls: 'ds-label', text: 'Compression Class' },
              { label: 'Caption — 0.75rem', cls: 'ds-caption', text: 'Мінімальне замовлення — 1 пара' },
              { label: 'Overline — 0.75rem / 600 uppercase', cls: 'ds-overline', text: 'Медичний виріб класу I' },
              { label: 'Medical/Technical — mono', cls: 'ds-medical', text: '23–32 mmHg · Клас II · Розмір M' },
            ].map((item) => (
              <div key={item.cls} className={pageStyles.typeRow}>
                <span className={pageStyles.typeLabel}>{item.label}</span>
                <span className={item.cls}>{item.text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 4. BUTTONS ── */}
        <Section title="4. Buttons" description="All variants × sizes × states.">
          {['primary','secondary','ghost','destructive'].map(variant => (
            <Group key={variant} label={`${variant.charAt(0).toUpperCase() + variant.slice(1)}`} row>
              <Button variant={variant} size="sm">Малий</Button>
              <Button variant={variant} size="md">Середній</Button>
              <Button variant={variant} size="lg">Великий</Button>
              <Button variant={variant} size="md" disabled>Disabled</Button>
            </Group>
          ))}
        </Section>

        {/* ── 5. COMPRESSION CLASS BADGES ── */}
        <Section title="5. Compression Class Badges" description="Each class must always include plain-language description and mmHg value together.">
          <Group label="Full (with plain-language label)">
            <CompressionBadge compressionClass="I" />
            <CompressionBadge compressionClass="II" />
            <CompressionBadge compressionClass="III" />
          </Group>
          <Group label="Compact (for cards and line items)" row>
            <CompressionBadge compressionClass="I" compact />
            <CompressionBadge compressionClass="II" compact />
            <CompressionBadge compressionClass="III" compact />
          </Group>
        </Section>

        {/* ── 6. USE CASE TAGS ── */}
        <Section title="6. Use Case Tags" description="Scannable at a glance. Always distinct from product attributes.">
          <Group label="Default state" row>
            {['medical','pregnancy','travel','work','fashion'].map(t => (
              <UseCaseTag key={t} type={t} />
            ))}
          </Group>
          <Group label="Active state" row>
            {['medical','pregnancy','travel','work','fashion'].map(t => (
              <UseCaseTag key={t} type={t} active />
            ))}
          </Group>
        </Section>

        {/* ── 7. PRODUCT CARDS ── */}
        <Section title="7. Product Cards" description="In stock, out of stock, and equivalent product states.">
          <div className={pageStyles.cardGrid}>
            <ProductCard
              name="Sigvaris Style Arabesque Панчохи"
              brand="Sigvaris"
              compressionClass="II"
              useCaseType="fashion"
              size="M"
              legHeight="До стегна"
              price="1 480"
              inStock
            />
            <ProductCard
              name="Juzo Dynamic Колготки для вагітних"
              brand="Juzo"
              compressionClass="I"
              useCaseType="pregnancy"
              size="S"
              legHeight="До стегна"
              price="980"
              inStock
            />
            <ProductCard
              name="Mediven Comfort Travel Шкарпетки"
              brand="Medi"
              compressionClass="II"
              useCaseType="travel"
              size="M"
              legHeight="До коліна"
              price="640"
              inStock={false}
              equivalentNotice={false}
            />
            <ProductCard
              name="Sigvaris Traveno Шкарпетки"
              brand="Sigvaris"
              compressionClass="II"
              useCaseType="travel"
              size="M"
              legHeight="До коліна"
              price="720"
              inStock={false}
              equivalentNotice
            />
          </div>
        </Section>

        {/* ── 8. AI ASSISTANT ── */}
        <Section title="8. AI Assistant UI" description="Warm, conversational — not a widget or a form.">
          <Group label="Chat — full conversation flow">
            <ChatContainer>
              <AssistantMessage
                text="Привіт! Я допоможу вам підібрати компресійний трикотаж. Це займе лише 3 хвилини."
                timestamp="10:02"
              />
              <AssistantMessage timestamp="10:02">
                <QuestionCard
                  question="Для чого вам потрібна компресія?"
                  options={[
                    { value: 'travel', icon: '✈', label: 'Перельоти й подорожі' },
                    { value: 'pregnancy', icon: '🤰', label: 'Вагітність' },
                    { value: 'medical', icon: '⚕', label: 'За призначенням лікаря' },
                    { value: 'work', icon: '💼', label: 'Довгий робочий день стоячи' },
                  ]}
                  selected={aiSelected}
                  onSelect={setAiSelected}
                />
              </AssistantMessage>
              {aiSelected && (
                <UserMessage text={
                  aiSelected === 'travel' ? 'Перельоти й подорожі' :
                  aiSelected === 'pregnancy' ? 'Вагітність' :
                  aiSelected === 'medical' ? 'За призначенням лікаря' : 'Довгий робочий день стоячи'
                } timestamp="10:03" />
              )}
              {aiSelected && (
                <AssistantMessage timestamp="10:03">
                  <RecommendationCard
                    product={{
                      name: 'Sigvaris Traveno Travel Шкарпетки',
                      compressionClass: 'Клас II · 23–32 mmHg',
                      size: 'Розмір M',
                      brand: 'Sigvaris',
                    }}
                    reason="Для подорожей ідеально підходить клас II — він ефективно протидіє застою крові при тривалому сидінні, але носиться комфортно навіть цілий день."
                  />
                </AssistantMessage>
              )}
              <TypingIndicator />
              <ChatInput onSend={() => {}} />
            </ChatContainer>
          </Group>
        </Section>

        {/* ── 9. FORM ELEMENTS ── */}
        <Section title="9. Form Elements" description="All input states: default, focus, error, disabled.">
          <div className={pageStyles.formGrid}>
            <TextInput
              label="Ім'я та прізвище"
              placeholder="Олена Коваленко"
            />
            <TextInput
              label="Email"
              placeholder="email@example.com"
              state="error"
              errorText="Введіть дійсну адресу електронної пошти"
            />
            <TextInput
              label="Населений пункт"
              placeholder="Київ"
              state="default"
              helpText="Для розрахунку вартості доставки"
            />
            <TextInput
              label="Поле (disabled)"
              placeholder="Не редагується"
              disabled
            />
            <Select
              label="Бренд"
              placeholder="Оберіть бренд"
              options={[
                { value: 'sigvaris', label: 'Sigvaris' },
                { value: 'juzo', label: 'Juzo' },
                { value: 'medi', label: 'Medi' },
                { value: 'belsana', label: 'Belsana' },
              ]}
            />
            <Select
              label="Клас компресії"
              options={[
                { value: '1', label: 'Клас I · 15–21 mmHg · Легка підтримка' },
                { value: '2', label: 'Клас II · 23–32 mmHg · Помірна підтримка' },
                { value: '3', label: 'Клас III · 34–46 mmHg · Сильна підтримка' },
              ]}
            />
          </div>
          <Group label="Size Selector">
            <SizeSelector
              selected={selectedSize}
              onChange={setSelectedSize}
              outOfStock={['XS', 'XXL']}
            />
          </Group>
          <Group label="Measurement Inputs" row>
            <MeasurementInput
              label="Обхват кісточки"
              placeholder="22"
              note="Виміряйте в найвужчому місці"
            />
            <MeasurementInput
              label="Обхват гомілки"
              placeholder="38"
              note="Виміряйте в найширшому місці"
            />
          </Group>
          <Group label="Checkbox & Radio">
            <Checkbox
              label="Я ознайомлений(а) з інструкцією з вимірювання"
              checked={checked}
              onChange={() => setChecked(c => !c)}
            />
            <Checkbox
              label="Підписатись на оновлення про знижки"
              checked={false}
              onChange={() => {}}
            />
            <Checkbox
              label="Disabled checkbox"
              checked={false}
              onChange={() => {}}
              disabled
            />
            <RadioGroup
              label="Стать"
              value={radioVal}
              onChange={setRadioVal}
              options={[
                { value: 'female', label: 'Жіночий' },
                { value: 'male', label: 'Чоловічий' },
              ]}
            />
          </Group>
        </Section>

        {/* ── 10. CART LINE ITEM ── */}
        <Section title="10. Cart Line Item" description="Compression class, size, and leg height as primary visible attributes.">
          <div className={pageStyles.cartPreview}>
            <CartLineItem
              name="Sigvaris Style Arabesque Панчохи"
              compressionClass="II"
              size="M"
              legHeight="До стегна"
              quantity={cartQty}
              price="1 480"
              onQuantityChange={setCartQty}
              onRemove={() => {}}
            />
            <CartLineItem
              name="Juzo Dynamic Колготки для вагітних"
              compressionClass="I"
              size="S"
              legHeight="До стегна"
              quantity={1}
              price="980"
              onQuantityChange={() => {}}
              onRemove={() => {}}
            />
            <CartLineItem
              name="Mediven Comfort Шкарпетки"
              compressionClass="II"
              size="L"
              legHeight="До коліна"
              quantity={3}
              price="640"
              onQuantityChange={() => {}}
              onRemove={() => {}}
            />
          </div>
        </Section>

        {/* ── 11. TRUST SIGNALS ── */}
        <Section title="11. Trust Signals" description="Domain-specific — not generic e-commerce badges.">
          <Group label="Certification Badges" row>
            <CertificationBadge text="CE Certified" subtext="Медичний виріб класу I" />
            <CertificationBadge text="ISO 13485" subtext="Стандарт якості медичних виробів" />
          </Group>
          <Group label="Star Rating">
            <StarRating rating={4.8} count={142} />
            <StarRating rating={3.5} count={28} />
            <StarRating rating={5.0} count={7} />
          </Group>
          <Group label="Review Cards">
            <div className={pageStyles.reviewGrid}>
              <ReviewCard
                authorName="Олена Гриценко"
                rating={5}
                useCaseType="pregnancy"
                reviewText="Носила весь третій триместр щодня. Ноги не набрякали навіть у спеку. Дуже комфортний матеріал, не тисне на живіт."
                date="14 травня 2025"
                verified
              />
              <ReviewCard
                authorName="Микола Петренко"
                rating={4}
                useCaseType="travel"
                reviewText="Літав Київ–Дубай–Бангкок. Ноги після 9 годин польоту — як після звичайного дня. Раніше набрякали сильно."
                date="2 червня 2025"
                verified
              />
              <ReviewCard
                authorName="Тетяна Марченко"
                rating={5}
                useCaseType="medical"
                reviewText="Лікар призначив клас II після операції на венах. Підійшли ідеально за розміром, надягати зручно навіть з лопаткою."
                date="30 квітня 2025"
                verified
              />
            </div>
          </Group>
        </Section>

        {/* ── 12. ALERTS AND NOTICES ── */}
        <Section title="12. Alerts & Notices" description="All contextual alert types for the compression hosiery flow.">
          <div className={pageStyles.alertList}>
            <OutOfStockNotice
              message="Mediven Comfort Travel у розмірі M наразі відсутній. Очікуємо поповнення за 5–7 днів."
            />
            <EquivalentAlert
              message="Знайдено рівнозначну заміну: Sigvaris Traveno · Клас II · 23–32 mmHg · Розмір M. Той самий клас і розмір, інший бренд."
              action="Переглянути аналог"
            />
            <SizeConfirmPrompt
              title="Підтвердіть розмір перед замовленням"
              message="Ваш розмір M підходить для обхвату кісточки 22–24 см і гомілки 36–40 см. Все вірно?"
              action="Підтверджую розмір"
            />
            <SuccessAlert
              title="Додано до кошика"
              message="Sigvaris Arabesque · Клас II · Розмір M · До стегна — 1 пара"
            />
            <WarningAlert
              message="Увага: компресійний трикотаж класу III рекомендується виключно за призначенням лікаря."
            />
            <ErrorAlert
              message="Не вдалося підтвердити замовлення. Перевірте дані доставки та спробуйте знову."
            />
          </div>
        </Section>

        {/* ── 13. EDUCATION BLOCKS ── */}
        <Section title="13. Education Blocks" description="Collapsible — confident buyers can skip, beginners get full guidance.">
          <div className={pageStyles.educationList}>
            <HowToWearBlock />
            <CorrectFitBlock />
            <EducationBlock
              title="Як обрати правильний клас компресії"
              collapsible
              steps={[
                {
                  title: 'Клас I · 15–21 mmHg · Легка підтримка',
                  text: 'Профілактика, подорожі, тривале стояння. Без призначення лікаря.',
                },
                {
                  title: 'Клас II · 23–32 mmHg · Помірна підтримка',
                  text: 'Варикоз, набряки під час вагітності, після операцій. Зазвичай за призначенням.',
                },
                {
                  title: 'Клас III · 34–46 mmHg · Сильна підтримка',
                  text: 'Лімфатичний набряк, важкий варикоз. Тільки за призначенням лікаря.',
                },
              ]}
            />
          </div>
        </Section>

        {/* ── 14. SPACING & RADIUS TOKENS ── */}
        <Section title="14. Spacing & Radius Tokens">
          <Group label="Spacing Scale (4px base unit)">
            <div className={pageStyles.spacingScale}>
              {Object.entries(spacing).map(([key, val]) => (
                <div key={key} className={pageStyles.spacingRow}>
                  <span className={pageStyles.spacingKey}>space-{key}</span>
                  <div className={pageStyles.spacingBar} style={{ width: val, background: 'var(--color-primary-muted)', border: '1px solid var(--color-primary-light)', height: '24px', borderRadius: '4px', minWidth: '4px' }} />
                  <span className={pageStyles.spacingVal}>{val}</span>
                </div>
              ))}
            </div>
          </Group>
          <Group label="Border Radius">
            <div className={pageStyles.radiusRow}>
              {[['sm','4px'],['md','8px'],['lg','12px'],['xl','16px'],['full','9999px']].map(([name, val]) => (
                <div key={name} className={pageStyles.radiusSwatch}>
                  <div className={pageStyles.radiusBox} style={{ borderRadius: val }} />
                  <div className={pageStyles.radiusLabel}>{name}</div>
                  <div className={pageStyles.radiusVal}>{val}</div>
                </div>
              ))}
            </div>
          </Group>
          <Group label="Shadows">
            <div className={pageStyles.shadowRow}>
              {[
                { name: 'Subtle', val: '0 1px 3px rgba(0,0,0,0.06)' },
                { name: 'Default', val: '0 4px 12px rgba(0,0,0,0.08)' },
                { name: 'Elevated', val: '0 8px 24px rgba(0,0,0,0.10)' },
              ].map(({ name, val }) => (
                <div key={name} className={pageStyles.shadowSwatch}>
                  <div className={pageStyles.shadowBox} style={{ boxShadow: val }} />
                  <div className={pageStyles.shadowLabel}>{name}</div>
                </div>
              ))}
            </div>
          </Group>
        </Section>

      </div>

      {/* Footer */}
      <footer className={pageStyles.footer}>
        <div className={pageStyles.footerInner}>
          <span>Аніон Market · Дизайн-система</span>
          <span>·</span>
          <span>Побудовано на React + CSS Modules</span>
          <span>·</span>
          <span>Шрифт: Inter</span>
        </div>
      </footer>
    </div>
  );
}
