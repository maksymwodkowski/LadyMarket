import React, { useState } from 'react';
import styles from './AnionProgramPage.module.css';

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a href="#" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L16.8 9.2L24 9.2L18.4 13.8L20.6 21L14 17L7.4 21L9.6 13.8L4 9.2L11.2 9.2L14 2Z" fill="currentColor"/>
            <path d="M14 8L15.4 12H19.6L16.2 14.4L17.6 18.6L14 16L10.4 18.6L11.8 14.4L8.4 12H12.6L14 8Z" fill="var(--cream-bg)"/>
          </svg>
          <span className={styles.logoWord}>аніон</span>
        </a>

        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Каталог</a>
          <span className={styles.navDivider} />
          <a href="#" className={styles.navLink}>Підбір розміру</a>
          <span className={styles.navDivider} />
          <a href="#" className={styles.navLink}>Для лікарів</a>
          <span className={styles.navDivider} />
          <a href="#" className={styles.navLink}>Блог</a>
        </div>

        <a href="#apply" className={styles.ctaBtn}>Підібрати зараз</a>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroHeadline}>
          Програма підбору<br />компресійного трикотажу
        </h1>
        <p className={styles.heroSub}>
          Наш флагманський сервіс для точного підбору виробу відповідно<br className={styles.br} /> до ваших потреб та стилю життя.
        </p>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.heroImageInner}>
          {/* Warm vintage-toned photo placeholder */}
          <div className={styles.imagePlaceholder}>
            <div className={styles.imageGradientLeft} />
            <div className={styles.imageGradientRight} />
            <div className={styles.imageContent}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="24" r="10" fill="rgba(27,58,56,0.15)"/>
                <path d="M14 52c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="rgba(27,58,56,0.2)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <p className={styles.imagePlaceholderLabel}>Фото консультації</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BODY COPY ────────────────────────────────────────────────────────────────
function BodyCopy() {
  return (
    <section className={styles.bodyCopy}>
      <div className={styles.container}>
        <p className={styles.bodyCopyLead}>
          Аніон переосмислює підхід до компресійного трикотажу — роблячи медичні вироби зрозумілими, доступними та справді підібраними під вас.
        </p>
        <p className={styles.bodyCopyRegular}>
          Наша <strong>Програма підбору компресійного трикотажу</strong> допомагає визначити потрібний клас компресії, точний розмір та тип виробу — враховуючи ваш спосіб життя, стан здоров'я та рекомендації лікаря. Ви отримаєте не просто товар, а рішення, яке реально працює.
        </p>
      </div>
    </section>
  );
}

// ─── PROGRAM OVERVIEW ─────────────────────────────────────────────────────────
const overviewItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Консультація',
    body: 'AI-помічник або живий консультант ставить 3 цільові запитання та підбирає виріб, який підходить саме вам.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Підбір розміру',
    body: 'Введіть два виміри — обхват кісточки та гомілки. Система автоматично визначає розмір без помилок.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    title: 'Доставка по Україні',
    body: 'Нова Пошта або Укрпошта — доставляємо в будь-яке місто. Стандартна доставка безкоштовна від 600 ₴.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Гарантія якості',
    body: 'Тільки сертифіковані вироби CE класу I та вище. Sigvaris, Juzo, Medi — бренди зі світовою репутацією.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
      </svg>
    ),
    title: 'Повернення',
    body: 'Не підійшов розмір? Повернення або обмін протягом 14 днів — без зайвих запитань.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'Підтримка після покупки',
    body: 'Не знаєте, як надягати або доглядати? Надішліть питання — відповімо протягом 2 годин.',
  },
];

function ProgramOverview() {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewCard}>
        <h2 className={styles.sectionHeading}>Огляд програми</h2>
        <div className={styles.overviewGrid}>
          {overviewItems.map((item) => (
            <div key={item.title} className={styles.overviewItem}>
              <div className={styles.overviewIcon}>{item.icon}</div>
              <h3 className={styles.overviewItemTitle}>{item.title}</h3>
              <p className={styles.overviewItemBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHO WE'RE LOOKING FOR ────────────────────────────────────────────────────
const checklistItems = [
  { text: 'Особи, яким лікар призначив компресію, але важко розібратися з вибором.' },
  { text: 'Майбутні мами, які шукають безпечну підтримку протягом усієї вагітності.' },
  { text: 'Всі, хто довго стоїть або сидить — продавці, вчителі, офісні працівники.' },
  { text: 'Мандрівники, які знають: набряклі ноги після перельоту — не норма.' },
  { text: 'Спортсмени та активні люди, яким важливе відновлення після навантаження.' },
  { text: 'Люди, які цінують якість і хочуть зрозуміти, за що платять.' },
];

function WhoForSection() {
  return (
    <section className={styles.whoFor}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Для кого ця програма</h2>
        <p className={styles.sectionSubtitle}>
          Аніон підходить усім, хто хоче носити компресійний трикотаж правильно — з розумінням класу, розміру та мети.
          <br />Ми шукаємо:
        </p>
        <div className={styles.checklist}>
          {checklistItems.map((item, i) => (
            <div key={i} className={styles.checklistItem}>
              <span className={styles.checkmark}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <p className={styles.checklistText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FEATURE CAROUSEL ─────────────────────────────────────────────────────────
const carouselSlides = [
  {
    heading: 'Навчання через практику',
    body: 'Ми розробили програму так, щоб ви отримали максимум досвіду. Замість теоретичних інструкцій — конкретний вибір, приміряний до вашого тіла та способу життя. Ви дізнаєтеся, що купуєте, ще до замовлення.',
    bgColor: '#EDE8DF',
  },
  {
    heading: 'Прозора медична інформація',
    body: 'Кожен виріб описаний без медичного жаргону. Клас I — легка підтримка. Клас II — помірна. Клас III — сильна. Ми завжди показуємо значення в mmHg поруч із зрозумілим поясненням.',
    bgColor: '#EDE8DF',
  },
  {
    heading: 'Аналоги без компромісів',
    body: 'Якщо обраного виробу немає в наявності, ми знаходимо аналог з тим самим класом компресії та розміром. Ніколи не пропонуємо "схоже" — тільки точну відповідність.',
    bgColor: '#EDE8DF',
  },
];

function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const slide = carouselSlides[active];

  return (
    <section className={styles.carousel}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Чого очікувати</h2>
      </div>
      <div className={styles.carouselCard}>
        <div className={styles.carouselLeft}>
          <h3 className={styles.carouselHeading}>{slide.heading}</h3>
          <p className={styles.carouselBody}>{slide.body}</p>
          <div className={styles.carouselDots}>
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.carouselRight}>
          <div className={styles.carouselImage}>
            <div className={styles.carouselImageInner}>
              <div className={styles.carouselPlaceholder}>
                <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="24" r="10" fill="rgba(27,58,56,0.12)"/>
                  <path d="M14 54c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="rgba(27,58,56,0.15)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <button
              className={styles.arrowBtn}
              onClick={() => setActive((a) => (a + 1) % carouselSlides.length)}
              aria-label="Наступний"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Чи потрібне призначення лікаря для покупки?',
    a: 'Для виробів Класу I — ні, вони доступні без рецепту. Клас II та III рекомендується купувати за призначенням лікаря. Ми завжди вказуємо це для кожного товару в каталозі.',
  },
  {
    q: 'Як я дізнаюся свій розмір без консультанта?',
    a: 'Введіть обхват кісточки та гомілки в сантиметрах у наш калькулятор розміру — він видасть точний розмір за таблицею виробника. Якщо сумніваєтеся, наш AI-помічник допоможе за 3 запитання.',
  },
  {
    q: 'Чи є гарантія на повернення, якщо розмір не підійшов?',
    a: 'Так. Якщо виріб не надягався і зберігає товарний вигляд — повернення або обмін протягом 14 днів. Просто напишіть нам у чат.',
  },
  {
    q: 'Чи продаєте ви вироби для чоловіків?',
    a: 'Так — шкарпетки, гольфи та панчохи для чоловіків від Sigvaris, Medi та Juzo. Є як медичні, так і fashion-варіанти для подорожей і роботи.',
  },
  {
    q: 'Як довго служать компресійні вироби?',
    a: 'При правильному догляді — 6 місяців щоденного носіння. Рекомендуємо мати 2–3 пари для чергування. Ми надсилаємо нагадування про заміну.',
  },
  {
    q: 'Коли відкриється наступна хвиля замовлень?',
    a: 'Наш каталог оновлюється щотижня. Підпишіться на сповіщення про наявність конкретного товару — ми повідомимо щойно він з\'явиться.',
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Часті запитання</h2>
        <div className={styles.faqList}>
          {faqs.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={`${styles.faqIcon} ${open === i ? styles.faqIconOpen : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <p className={styles.faqAnswer}>{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── APPLY CTA ────────────────────────────────────────────────────────────────
function ApplyCTA() {
  return (
    <section className={styles.applyCta} id="apply">
      <div className={styles.container}>
        <h2 className={styles.applyHeading}>Готові підібрати<br />свій перший виріб?</h2>
        <p className={styles.applySub}>
          Пройдіть 3 запитання з AI-помічником — і отримайте точну рекомендацію без медичного жаргону.
        </p>
        <a href="#" className={styles.applyBtn}>Почати підбір</a>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const footerCols = [
  {
    heading: 'Компанія',
    links: ['Про нас', 'Бренди', 'Кар\'єра', 'Контакти', 'Конфіденційність', 'Умови використання'],
  },
  {
    heading: 'Каталог',
    links: ['Панчохи', 'Колготки', 'Гольфи', 'Шкарпетки', 'Для вагітних', 'Чоловічі'],
  },
  {
    heading: 'Допомога',
    links: ['Підбір розміру', 'Як носити', 'Класи компресії', 'Повернення', 'Доставка'],
  },
  {
    heading: 'Для лікарів',
    links: ['Довідка про вироби', 'Класи компресії', 'Сертифікати CE', 'Стандарти RAL-GZ 387'],
  },
  {
    heading: 'Слідкуйте',
    links: ['Instagram', 'Facebook', 'Telegram', 'YouTube'],
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerGrid}>
          {footerCols.map((col) => (
            <div key={col.heading} className={styles.footerCol}>
              <div className={styles.footerColHeading}>{col.heading}</div>
              {col.links.map((link) => (
                <a key={link} href="#" className={styles.footerLink}>{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <a href="#" className={styles.footerLogo}>
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <path d="M14 2L16.8 9.2L24 9.2L18.4 13.8L20.6 21L14 17L7.4 21L9.6 13.8L4 9.2L11.2 9.2L14 2Z" fill="currentColor"/>
          </svg>
        </a>
        <span className={styles.footerCopy}>© 2026 Аніон Market</span>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export function AnionProgramPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <Hero />
      <BodyCopy />
      <ProgramOverview />
      <WhoForSection />
      <FeatureCarousel />
      <ApplyCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
