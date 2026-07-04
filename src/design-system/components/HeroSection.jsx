import React, { useState } from 'react';
import { Button } from './Button';
import { UseCaseTag } from './UseCaseTag';
import styles from './HeroSection.module.css';

const categories = [
  { type: 'pregnancy', href: '#' },
  { type: 'travel', href: '#' },
  { type: 'fashion', href: '#' },
  { type: 'medical', href: '#' },
];

export function HeroSection({ onAIStart }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>Компресійний трикотаж для України</p>
          <h1 className={styles.heroHeadline}>
            Правильна підтримка —<br />
            <span className={styles.heroAccent}>тільки те, що вам потрібно</span>
          </h1>
          <p className={styles.heroSub}>
            Підберіть компресійні панчохи, шкарпетки або колготки за класом тиску,
            призначенням і розміром. Без плутанини — з поясненнями.
          </p>
        </div>

        {/* AI entry point */}
        <div className={styles.aiCta}>
          <Button variant="primary" size="lg" onClick={onAIStart}>
            Підібрати з AI-помічником
          </Button>
          <p className={styles.aiCtaNote}>3 запитання — і ви знаєте, що вибрати</p>
        </div>

        {/* Search */}
        <div className={styles.searchWrap}>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className={styles.searchInput}
              type="search"
              placeholder="Пошук за призначенням, брендом, класом..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        {/* Category shortcuts */}
        <div className={styles.categories}>
          <span className={styles.categoriesLabel}>Оберіть категорію:</span>
          <div className={styles.categoryTags}>
            {categories.map((cat) => (
              <UseCaseTag key={cat.type} type={cat.type} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
