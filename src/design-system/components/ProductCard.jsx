import React from 'react';
import { CompressionBadge } from './CompressionBadge';
import { UseCaseTag } from './UseCaseTag';
import { Button } from './Button';
import styles from './ProductCard.module.css';

export function ProductCard({
  name = 'Компресійні панчохи',
  brand = 'Sigvaris',
  compressionClass = 'II',
  useCaseType = 'medical',
  size = 'M',
  legHeight = 'До коліна',
  price = '1 240',
  currency = '₴',
  inStock = true,
  equivalentNotice = false,
  onAddToCart,
  imageAlt,
}) {
  return (
    <div className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      {/* Image area */}
      <div className={styles.imageWrap}>
        {!inStock && (
          <div className={styles.outOfStockOverlay}>
            <span>Немає в наявності</span>
          </div>
        )}
        <div className={styles.imagePlaceholder} aria-label={imageAlt || name}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 8C17.373 8 12 13.373 12 20C12 28 24 44 24 44C24 44 36 28 36 20C36 13.373 30.627 8 24 8Z" fill="var(--color-neutral-200)" />
            <circle cx="24" cy="20" r="5" fill="var(--color-neutral-300)" />
          </svg>
          <span className={styles.imagePlaceholderLabel}>{brand}</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.topMeta}>
          <span className={styles.brand}>{brand}</span>
          <span className={styles.size}>{size} · {legHeight}</span>
        </div>

        <h3 className={styles.name}>{name}</h3>

        <div className={styles.badges}>
          <CompressionBadge compressionClass={compressionClass} compact />
          <UseCaseTag type={useCaseType} />
        </div>

        {equivalentNotice && !inStock && (
          <div className={styles.equivalentNotice}>
            <span className={styles.equivalentIcon}>↔</span>
            <span>Той самий клас і розмір — інший бренд</span>
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.price}>
            {currency}{price}
          </span>
          <Button
            variant={inStock ? 'primary' : 'ghost'}
            size="sm"
            disabled={!inStock && !equivalentNotice}
            onClick={onAddToCart}
          >
            {inStock ? 'До кошика' : equivalentNotice ? 'Показати аналог' : 'Немає'}
          </Button>
        </div>
      </div>
    </div>
  );
}
