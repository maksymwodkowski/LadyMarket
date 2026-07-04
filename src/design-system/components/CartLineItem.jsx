import React from 'react';
import styles from './CartLineItem.module.css';

export function CartLineItem({
  name = 'Компресійні колготки',
  compressionClass = 'II',
  size = 'M',
  legHeight = 'До коліна',
  quantity = 1,
  price = '1 240',
  currency = '₴',
  onQuantityChange,
  onRemove,
}) {
  return (
    <div className={styles.item}>
      {/* Image placeholder */}
      <div className={styles.thumb}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
          <path d="M24 8C17.373 8 12 13.373 12 20C12 28 24 44 24 44C24 44 36 28 36 20C36 13.373 30.627 8 24 8Z" fill="var(--color-neutral-200)" />
          <circle cx="24" cy="20" r="5" fill="var(--color-neutral-300)" />
        </svg>
      </div>

      {/* Details */}
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.attributes}>
          <span className={styles.attrChip}>Клас {compressionClass}</span>
          <span className={styles.attrSep}>·</span>
          <span className={styles.attrChip}>Розмір {size}</span>
          <span className={styles.attrSep}>·</span>
          <span className={styles.attrChip}>{legHeight}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{currency}{price}</span>
          <div className={styles.qtyControl}>
            <button
              className={styles.qtyBtn}
              onClick={() => onQuantityChange && onQuantityChange(Math.max(1, quantity - 1))}
              aria-label="Зменшити кількість"
            >
              −
            </button>
            <span className={styles.qty}>{quantity}</span>
            <button
              className={styles.qtyBtn}
              onClick={() => onQuantityChange && onQuantityChange(quantity + 1)}
              aria-label="Збільшити кількість"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Remove */}
      <button className={styles.removeBtn} onClick={onRemove} aria-label="Видалити товар">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}
