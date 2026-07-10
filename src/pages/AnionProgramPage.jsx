import React, { useState } from 'react';
import {
  Search, ShoppingCart, Check, Truck, ShieldCheck,
  RefreshCw, MessageCircle, ChevronRight, Star,
  Layers, Baby, User, Ruler, Shirt, Footprints
} from 'lucide-react';
import styles from './AnionProgramPage.module.css';

const Icon = {
  star:         <Star size={14} fill="currentColor" strokeWidth={0} />,
  cart:         <ShoppingCart size={18} />,
  search:       <Search size={18} />,
  check:        <Check size={13} strokeWidth={2.5} />,
  truck:        <Truck size={20} strokeWidth={1.75} />,
  shield:       <ShieldCheck size={20} strokeWidth={1.75} />,
  refresh:      <RefreshCw size={20} strokeWidth={1.75} />,
  chat:         <MessageCircle size={20} strokeWidth={1.75} />,
  chevronRight: <ChevronRight size={16} />,
};

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ cartCount = 0 }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a href="#" className={styles.logo}>
          <div className={styles.logoMark}>А</div>
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
        <div className={styles.navActions}>
          <button className={styles.iconBtn} aria-label="Пошук">{Icon.search}</button>
          <button className={styles.cartBtn} aria-label="Кошик">
            {Icon.cart}
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── TRUST BAR ────────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: Icon.truck,   text: 'Безкоштовна доставка від 600 ₴' },
    { icon: Icon.shield,  text: 'Тільки сертифіковані вироби CE' },
    { icon: Icon.refresh, text: 'Повернення протягом 14 днів' },
    { icon: Icon.chat,    text: 'Відповідь протягом 2 годин' },
  ];
  return (
    <div className={styles.trustBar}>
      {items.map((item, i) => (
        <div key={i} className={styles.trustItem}>
          <span className={styles.trustIcon}>{item.icon}</span>
          <span className={styles.trustText}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [query, setQuery] = useState('');
  const tags = ['Вагітність', 'Подорожі', 'Медичне', 'Спорт', 'Офіс'];

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.heroEyebrow}>Компресійний трикотаж · Підібрано під вас</p>
        <h1 className={styles.heroHeadline}>
          Знайдіть виріб,<br />який реально підходить
        </h1>
        <p className={styles.heroSub}>
          Sigvaris, Juzo, Medi — сертифіковані вироби з точним підбором розміру та класу компресії.
        </p>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>{Icon.search}</span>
          <input
            className={styles.searchInput}
            placeholder="Пошук за призначенням, брендом, класом..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.heroTags}>
          {tags.map(tag => (
            <button key={tag} className={styles.heroTag}>{tag}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const categories = [
  { name: 'Панчохи',        count: '48 товарів',  image: 'https://images.unsplash.com/photo-1588117260148-b47818741c74?w=400&h=530&fit=crop&q=80' },
  { name: 'Колготки',       count: '32 товари',   image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=530&fit=crop&q=80' },
  { name: 'Гольфи',         count: '56 товарів',  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=530&fit=crop&q=80' },
  { name: 'Для вагітних',   count: '24 товари',   image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=530&fit=crop&q=80' },
  { name: 'Чоловічі',       count: '38 товарів',  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=530&fit=crop&q=80' },
  { name: 'Підбір розміру', count: 'AI-помічник', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=530&fit=crop&q=80' },
];

function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Категорії</h2>
        <a href="#" className={styles.seeAll}>Всі категорії {Icon.chevronRight}</a>
      </div>
      <div className={styles.categoryGrid}>
        {categories.map(cat => (
          <a key={cat.name} href="#" className={styles.categoryCard}>
            <div className={styles.categoryImgWrap}>
              <img src={cat.image} alt={cat.name} className={styles.categoryImg} />
            </div>
            <div className={styles.categoryOverlay}>
              <div className={styles.categoryName}>{cat.name}</div>
              <div className={styles.categoryCount}>{cat.count}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <div className={styles.productImagePlaceholder}>
          <span className={styles.productImageEmoji}>{product.emoji}</span>
        </div>
        {product.badge && (
          <span className={`${styles.productBadgeImg} ${product.badge === 'Новинка' ? styles.badgeNew : styles.badgeSale}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productMeta}>
          <span className={`${styles.compressionBadge} ${styles[`class${product.class}`]}`}>
            Клас {product.class}
          </span>
          <span className={styles.mmhg}>{product.mmhg} mmHg</span>
        </div>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productBrand}>{product.brand}</p>
        <div className={styles.productRating}>
          {[1,2,3,4,5].map(i => (
            <span key={i} className={i <= product.rating ? styles.starFilled : styles.starEmpty}>{Icon.star}</span>
          ))}
          <span className={styles.ratingCount}>({product.reviews})</span>
        </div>
        <div className={styles.productFooter}>
          <div className={styles.productPrice}>
            {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice} ₴</span>}
            <span className={styles.price}>{product.price} ₴</span>
          </div>
          <button
            className={`${styles.addBtn} ${added ? styles.addBtnDone : ''}`}
            onClick={() => setAdded(true)}
          >
            {added ? Icon.check : Icon.cart}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
const products = [
  { id: 1, name: 'Arabesque AT',       brand: 'Sigvaris',  class: 'II',  mmhg: '23–32', price: 1240, oldPrice: null,  rating: 5, reviews: 142, emoji: '🧦', badge: null },
  { id: 2, name: 'Comfort Travel',     brand: 'Mediven',   class: 'I',   mmhg: '15–21', price: 890,  oldPrice: 1050,  rating: 4, reviews: 87,  emoji: '✈️', badge: 'Знижка' },
  { id: 3, name: 'Soft & Sensitive',   brand: 'Sigvaris',  class: 'II',  mmhg: '23–32', price: 1380, oldPrice: null,  rating: 5, reviews: 63,  emoji: '🤰', badge: 'Новинка' },
  { id: 4, name: 'Active Dynamic',     brand: 'Juzo',      class: 'I',   mmhg: '15–21', price: 760,  oldPrice: null,  rating: 4, reviews: 34,  emoji: '🏃', badge: null },
  { id: 5, name: 'Venoflex Fast',      brand: 'Thuasne',   class: 'III', mmhg: '34–46', price: 1650, oldPrice: null,  rating: 5, reviews: 28,  emoji: '💊', badge: null },
  { id: 6, name: 'For Men Merino',     brand: 'Medi',      class: 'II',  mmhg: '23–32', price: 1120, oldPrice: 1280,  rating: 4, reviews: 51,  emoji: '👔', badge: 'Знижка' },
  { id: 7, name: 'Cotton Style',       brand: 'Sigvaris',  class: 'I',   mmhg: '15–21', price: 920,  oldPrice: null,  rating: 5, reviews: 109, emoji: '🧶', badge: null },
  { id: 8, name: 'Vitalio Charm',      brand: 'BSN',       class: 'II',  mmhg: '23–32', price: 1090, oldPrice: null,  rating: 4, reviews: 45,  emoji: '💎', badge: 'Новинка' },
];

function Products() {
  const [filter, setFilter] = useState('all');
  const filters = [
    { key: 'all',  label: 'Всі' },
    { key: 'I',    label: 'Клас I' },
    { key: 'II',   label: 'Клас II' },
    { key: 'III',  label: 'Клас III' },
  ];
  const filtered = filter === 'all' ? products : products.filter(p => p.class === filter);

  return (
    <section className={styles.products}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Популярні товари</h2>
        <a href="#" className={styles.seeAll}>Весь каталог {Icon.chevronRight}</a>
      </div>
      <div className={styles.filterRow}>
        {filters.map(f => (
          <button
            key={f.key}
            className={`${styles.filterBtn} ${filter === f.key ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className={styles.productGrid}>
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

// ─── AI BANNER ────────────────────────────────────────────────────────────────
function AIBanner() {
  return (
    <section className={styles.aiBanner}>
      <div className={styles.aiBannerInner}>
        <div className={styles.aiBannerText}>
          <p className={styles.aiBannerEyebrow}>AI-помічник</p>
          <h2 className={styles.aiBannerHeading}>Не знаєте який клас потрібен?</h2>
          <p className={styles.aiBannerSub}>
            Дайте відповідь на 3 запитання — і отримайте точну рекомендацію без медичного жаргону.
          </p>
          <a href="#" className={styles.aiBannerBtn}>Підібрати виріб</a>
        </div>
        <div className={styles.aiBannerVisual}>
          <div className={styles.chatBubble}>
            <p className={styles.chatMsg}>Для чого вам потрібна компресія?</p>
            <div className={styles.chatOptions}>
              <span className={styles.chatOption}>Призначив лікар</span>
              <span className={styles.chatOption}>Профілактика</span>
              <span className={styles.chatOption}>Вагітність</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
const reviews = [
  {
    name: 'Олена В.',
    rating: 5,
    text: 'Лікар призначив клас II після операції на венах. Підійшли ідеально за розміром, надягати зручно навіть з лопаткою.',
    product: 'Sigvaris Arabesque · Клас II',
    tag: 'Медичне',
  },
  {
    name: 'Максим К.',
    rating: 5,
    text: 'Беру для перельотів вже третю пару. Ноги не набрякають навіть після 10 годин у літаку. Розмір вийшов точно з калькулятора.',
    product: 'Mediven Comfort Travel · Клас I',
    tag: 'Подорожі',
  },
  {
    name: 'Наталія Р.',
    rating: 4,
    text: 'Цілий день на ногах у магазині — ввечері більше не болять ноги. Взяла клас I, підходить для профілактики без призначення.',
    product: 'Sigvaris Cotton · Клас I',
    tag: 'Офіс',
  },
];

function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Відгуки покупців</h2>
        <a href="#" className={styles.seeAll}>Всі відгуки {Icon.chevronRight}</a>
      </div>
      <div className={styles.reviewGrid}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={styles.reviewAvatar}>{r.name[0]}</div>
              <div>
                <div className={styles.reviewName}>{r.name}</div>
                <div className={styles.reviewStars}>
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={s <= r.rating ? styles.starFilled : styles.starEmpty}>{Icon.star}</span>
                  ))}
                </div>
              </div>
              <span className={styles.reviewTag}>{r.tag}</span>
            </div>
            <p className={styles.reviewText}>{r.text}</p>
            <p className={styles.reviewProduct}>{r.product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Чи потрібне призначення лікаря?', a: 'Для класу I — ні, без рецепту. Клас II та III рекомендується за призначенням.' },
  { q: 'Як визначити свій розмір?', a: 'Введіть обхват кісточки та гомілки в калькулятор — система видасть точний розмір.' },
  { q: 'Чи є повернення якщо не підійшло?', a: 'Так. Виріб не надягався — повернення або обмін протягом 14 днів.' },
  { q: 'Як довго служить компресійний виріб?', a: 'При правильному догляді — 6 місяців щоденного носіння. Рекомендуємо 2–3 пари.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.faq}>
      <h2 className={styles.sectionTitle}>Часті запитання</h2>
      <div className={styles.faqList}>
        {faqs.map((item, i) => (
          <div key={i} className={styles.faqItem}>
            <button className={styles.faqQ} onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.q}</span>
              <span className={`${styles.faqIcon} ${open === i ? styles.faqIconOpen : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </button>
            {open === i && <p className={styles.faqA}>{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { heading: 'Каталог',     links: ['Панчохи', 'Колготки', 'Гольфи', 'Шкарпетки', 'Для вагітних', 'Чоловічі'] },
    { heading: 'Допомога',    links: ['Підбір розміру', 'Як носити', 'Класи компресії', 'Повернення', 'Доставка'] },
    { heading: 'Компанія',    links: ['Про нас', 'Бренди', 'Контакти', 'Конфіденційність'] },
    { heading: 'Слідкуйте',   links: ['Instagram', 'Facebook', 'Telegram'] },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>А</div>
          <span className={styles.footerLogoWord}>аніон</span>
          <p className={styles.footerTagline}>Компресійний трикотаж з розумінням</p>
        </div>
        <div className={styles.footerGrid}>
          {cols.map(col => (
            <div key={col.heading} className={styles.footerCol}>
              <div className={styles.footerColHeading}>{col.heading}</div>
              {col.links.map(link => <a key={link} href="#" className={styles.footerLink}>{link}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Аніон Market</span>
        <span>Тільки сертифіковані вироби CE</span>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export function AnionProgramPage() {
  return (
    <div className={styles.page}>
      <Nav cartCount={2} />
      <TrustBar />
      <Hero />
      <Categories />
      <Products />
      <AIBanner />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}
