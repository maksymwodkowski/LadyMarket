import React from 'react';
import { UseCaseTag } from './UseCaseTag';
import styles from './TrustSignals.module.css';

// ─── CERTIFICATION BADGE ──────────────────────────────────────────────────────
export function CertificationBadge({ text = 'CE Certified', subtext = 'Медичний виріб класу I' }) {
  return (
    <div className={styles.certBadge}>
      <div className={styles.certIcon}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      </div>
      <div>
        <div className={styles.certText}>{text}</div>
        <div className={styles.certSubtext}>{subtext}</div>
      </div>
    </div>
  );
}

// ─── STAR RATING ──────────────────────────────────────────────────────────────
export function StarRating({ rating = 4.5, count, showCount = true }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(rating)) return 'full';
    if (i < rating) return 'half';
    return 'empty';
  });

  return (
    <div className={styles.starRow}>
      <div className={styles.stars}>
        {stars.map((type, i) => (
          <Star key={i} type={type} />
        ))}
      </div>
      <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
      {showCount && count && (
        <span className={styles.reviewCount}>({count} відгуків)</span>
      )}
    </div>
  );
}

function Star({ type }) {
  if (type === 'full') {
    return (
      <svg className={styles.star} viewBox="0 0 16 16" fill="var(--color-warning)">
        <path d="M8 1l1.85 3.75 4.15.6-3 2.93.7 4.12L8 10.35 4.3 12.4l.7-4.12-3-2.93 4.15-.6L8 1z"/>
      </svg>
    );
  }
  if (type === 'half') {
    return (
      <svg className={styles.star} viewBox="0 0 16 16">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="var(--color-warning)" />
            <stop offset="50%" stopColor="var(--color-neutral-300)" />
          </linearGradient>
        </defs>
        <path d="M8 1l1.85 3.75 4.15.6-3 2.93.7 4.12L8 10.35 4.3 12.4l.7-4.12-3-2.93 4.15-.6L8 1z" fill="url(#half)"/>
      </svg>
    );
  }
  return (
    <svg className={styles.star} viewBox="0 0 16 16" fill="var(--color-neutral-300)">
      <path d="M8 1l1.85 3.75 4.15.6-3 2.93.7 4.12L8 10.35 4.3 12.4l.7-4.12-3-2.93 4.15-.6L8 1z"/>
    </svg>
  );
}

// ─── REVIEW CARD ──────────────────────────────────────────────────────────────
export function ReviewCard({ authorName, rating, useCaseType, reviewText, date, verified = true }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewTop}>
        <div className={styles.reviewMeta}>
          <span className={styles.authorName}>{authorName}</span>
          {verified && (
            <span className={styles.verifiedBadge}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Підтверджена покупка
            </span>
          )}
        </div>
        <span className={styles.reviewDate}>{date}</span>
      </div>
      <StarRating rating={rating} showCount={false} />
      <p className={styles.reviewText}>{reviewText}</p>
      {useCaseType && (
        <div className={styles.reviewUseCase}>
          <UseCaseTag type={useCaseType} />
        </div>
      )}
    </div>
  );
}
