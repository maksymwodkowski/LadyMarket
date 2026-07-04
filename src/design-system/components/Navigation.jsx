import React, { useState } from 'react';
import styles from './Navigation.module.css';

const navLinks = [
  { label: 'Каталог', href: '#' },
  { label: 'Підбір розміру', href: '#' },
  { label: 'Для лікарів', href: '#' },
  { label: 'Блог', href: '#' },
];

export function DesktopHeader({ activeLink = 'Каталог', cartCount = 0 }) {
  return (
    <header className={styles.desktopHeader}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>А</span>
          <span className={styles.logoText}>Аніон</span>
        </a>

        {/* Nav links */}
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${activeLink === link.label ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className={styles.headerRight}>
          <button className={styles.iconBtn} aria-label="Пошук">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className={styles.iconBtn} aria-label="Акаунт">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className={styles.cartBtn} aria-label="Кошик">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export function MobileHeader({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.mobileHeader}>
        <div className={styles.headerInner}>
          <button className={styles.iconBtn} onClick={() => setOpen(true)} aria-label="Меню">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          <a href="#" className={styles.logo}>
            <span className={styles.logoMark}>А</span>
            <span className={styles.logoText}>Аніон</span>
          </a>

          <button className={styles.cartBtn} aria-label="Кошик">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </header>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </>
  );
}

export function MobileMenu({ onClose }) {
  return (
    <div className={styles.mobileOverlay}>
      <div className={styles.mobileMenuInner}>
        <div className={styles.mobileMenuTop}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoMark}>А</span>
            <span className={styles.logoText}>Аніон</span>
          </a>
          <button className={styles.iconBtn} onClick={onClose} aria-label="Закрити">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.mobileNavLink} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.mobileMenuFooter}>
          <a href="#" className={styles.mobileNavLink}>Акаунт</a>
          <a href="#" className={styles.mobileNavLink}>Допомога</a>
        </div>
      </div>
    </div>
  );
}
